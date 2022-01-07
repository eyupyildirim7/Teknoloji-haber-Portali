import { FbServisService } from './../../services/fbServis.service';
import { Router } from '@angular/router';
import { Sonuc } from './../../models/sonuc';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yonetici',
  templateUrl: './yonetici.component.html',
  styleUrls: ['./yonetici.component.css']
})
export class YoneticiComponent implements OnInit {

  sonuc:Sonuc=new Sonuc();
  constructor(
    public FbServis:FbServisService,
    public router:Router
  ) { }

  ngOnInit() {
  }
  girisyap(mail: string, parola: string){
    this.FbServis.OturumAc(mail, parola).then(d => {
      if (d.user) {
        localStorage.setItem("user", JSON.stringify(d.user));
        this.router.navigate(['/uyesil']);
      }
    }, err => {
      this.sonuc.islem=false;
      this.sonuc.mesaj = "E-Posta Adresi veya Parola Geçersizdir!";
    });
  }

  OturumuKapat(){
    this.FbServis.OturumKapat().then(()=>{
      localStorage.removeItem("user");
      this.router.navigate(['/yonetici']); 
    })
  }
}
