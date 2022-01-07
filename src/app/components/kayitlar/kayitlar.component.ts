import { Haber } from './../../models/urun';
import { Router, ActivatedRoute } from '@angular/router';
import { FbServisService } from './../../services/fbServis.service';
import { Sonuc } from './../../models/sonuc';
import { Kayit } from './../../models/kayit';
import { Component, OnInit } from '@angular/core';
import{map} from 'rxjs/operators'

@Component({
  selector: 'app-kayitlar',
  templateUrl: './kayitlar.component.html',
  styleUrls: ['./kayitlar.component.css']
})
export class KayitlarComponent implements OnInit {
  Kayitlar:any;
  secKayit:Kayit=new Kayit();
  secHaber:Haber=new Haber();
  Haberler:any;
  sonuc:Sonuc=new Sonuc();
  uid: string;
  key: string;
  constructor(
    public FbServis: FbServisService,
    public router:Router,
    public route: ActivatedRoute


  ) { }

  ngOnInit() {
    this.HaberListeleme();
  
    /*this.kayitListele();*/
    this.secHaber.key = null;
  }
  HaberListeleme(){
    this.FbServis.HaberListeleme().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.Haberler = data;
    });

  }


  HaberDuzenle(Haberim:Haber){
    Object.assign(this.secHaber, Haberim );
  }


  HaberSil(hbsil:Haber){
    this.FbServis.HaberSil(hbsil.key).then(()=>{
      this.sonuc.islem=true;
      this.sonuc.mesaj="HABER SİLİNDİ";
    });

  }

  kaydet(){
    /*var user = JSON.parse(localStorage.getItem("user"));
    var tarih=new Date();
    this.secKayit.duzTarihi=tarih.getTime().toString();
     this.secKayit.uid=user.uid;  
    if (this.secKayit.key==null){
      this.secKayit.kayTarihi=tarih.getTime().toString();
      this.FbServis.KayitEkle(this.secKayit).then(()=>{
        this.sonuc.islem=true;
        this.sonuc.mesaj="KAYIT EKLENDİ";
      });
    }
    else{
      
      this.FbServis.KayitDuzenle(this.secKayit).then(()=>{
        this.sonuc.islem=true;
        this.sonuc.mesaj="KAYIT DÜZENLENDİ";
      });
  }*/
  var user = JSON.parse(localStorage.getItem("user"));
  this.secHaber.uid = user.uid;
  var tarih = new Date();
  this.secHaber.kayTarihi = tarih.getTime().toString();
  this.secHaber.duzTarihi = tarih.getTime().toString();
  this.FbServis.HaberEkle (this.secHaber).then(d => {
    this.router.navigate(['/ilanim']);
  });




}
  Vazgec(){
    this.secHaber=new Haber();
    this.secHaber.key=null;
  }
  OturumuKapat(){
    this.FbServis.OturumKapat().then(()=>{
      localStorage.removeItem("user");
      this.router.navigate(['/giris']); 
    })
  }
}
