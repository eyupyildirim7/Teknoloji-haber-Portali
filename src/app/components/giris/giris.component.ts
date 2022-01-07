import { Sonuc } from './../../models/sonuc';
import { Uye } from './../../models/uye';

import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FbServisService } from './../../services/fbServis.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.scss']
})
export class GirisComponent implements OnInit {

  sonuc:Sonuc=new Sonuc();
  constructor(
    public FbServis:FbServisService,
    public router:Router
    
    ) {
   
   }

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
    })
  }
  

}
