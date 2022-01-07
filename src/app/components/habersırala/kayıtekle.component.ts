import { Router, ActivatedRoute } from '@angular/router';
import { FbServisService } from './../../services/fbServis.service';
import { Haber } from './../../models/urun';
import { DataService } from './../../services/data.service';
import { Kayit } from './../../models/kayit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kayıtekle',
  templateUrl: './kayıtekle.component.html',
  styleUrls: ['./kayıtekle.component.scss']
})
export class KayıtekleComponent implements OnInit { kayitlar: Kayit[];
  ara: string = "";
  sira: string = "adsoyad";
  sayfa: number = 1;
  limit: number = 10;
  secHaber:Haber=new Haber();
  Haberler:any;
  uid: string;
  key: string;
  constructor(public FbServis: FbServisService,
    public router:Router,
    public route: ActivatedRoute,
    public servis:DataService
  ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.route.params.subscribe(p => {
      this.key = p.key;
      this.HaberListeleme();
    });
    this.KayitSayfala();
  }
  
  HaberListeleme() {
    this.FbServis.HaberListelemeByuid(this.uid).snapshotChanges().subscribe(data => {
      this.Haberler = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.Haberler.push(y as Haber);
      });
    });
  }

  KayitSayfala() {
    this.servis.KayitSayfala(this.sayfa, this.limit).subscribe((d: Kayit[]) => {
      this.kayitlar = d;
    });
  }

  OncekiSayfa() {
    this.sayfa -= 1;
    this.KayitSayfala();
  }
  SonrakiSayfa() {
    this.sayfa += 1;
    this.KayitSayfala();
  }
  LimitBelirle(d: number) {
    this.limit = d;
    this.KayitSayfala();
  }
  Ara(d: string) {
    this.ara = d;
    this.HaberListeleme();
  }
  Sirala(s: string) {
    this.sira = s;
    this.HaberListeleme();
  }
  OturumuKapat(){
    this.FbServis.OturumKapat().then(()=>{
      localStorage.removeItem("user");
      this.router.navigate(['/giris']); 
    })
  }
}



