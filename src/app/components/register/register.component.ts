import { Uye } from './../../models/uye';
import { Sonuc } from './../../models/sonuc';
import { Router } from '@angular/router';
import { FbServisService } from './../../services/fbServis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  sonuc:Sonuc=new Sonuc();
  secUye:Uye=new Uye();

  constructor( 
    public FbServis:FbServisService,
    public router:Router) { }
   
    
  

  ngOnInit() {
  }
  girisyap(mail: string, parola: string){
    this.FbServis.OturumAc(mail, parola).then(d => {
      if (d.user) {
        localStorage.setItem("user", JSON.stringify(d.user));
        this.router.navigate(['/kayitlar']);
      }
    }, err => {
      this.sonuc.islem=false;
      this.sonuc.mesaj = "E-Posta Adresi veya Parola Geçersizdir!";
    });
  }

  OturumuKapat(){
    this.FbServis.OturumKapat().then(()=>{
      localStorage.removeItem("user");
      this.router.navigate(['/giris']); 
    })}
    KayitYap(){
      this.FbServis.Uyeol(this.secUye).then(d=>{
        d.user.updateProfile({
          displayName:this.secUye.adsoyad
        }).then();
        this.secUye.uid=d.user.uid;
        this.UyeEkle();
      },err=>{
        this.sonuc.islem=false;
        this.sonuc.mesaj = "Hata Oluştu Tekrar Deneyiniz!";
     } );
    }
    UyeEkle() {
      this.FbServis.UyeEkle(this.secUye).then(d=>{
        this.router.navigate(['/']);
      })

    }


}
