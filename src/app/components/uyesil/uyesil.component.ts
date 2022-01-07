import { Uye } from './../../models/uye';
import { Sonuc } from './../../models/sonuc';
import { FbServisService } from './../../services/fbServis.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-uyesil',
  templateUrl: './uyesil.component.html',
  styleUrls: ['./uyesil.component.scss']
})
export class UyesilComponent implements OnInit {

  uyeler:any;
  secuyem: Uye=new Uye();
  sonuc:Sonuc=new Sonuc();
  constructor(
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
    this.UyeListele();
  }
  UyeListele(){
    this.fbServis.UyeListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.uyeler = data;
    });
  }
  Sil(U: Uye) {
    this.fbServis.UyeOlma(U).forEach(d => {
    this.fbServis.UyeSil(U.key).then(d => {
      this.sonuc.islem = true;
      this.sonuc.mesaj = "Kayıt Silindi";
    }, err => {
      this.sonuc.islem = false;
      this.sonuc.mesaj = "Hata Oluştu";
    });
    })}
    
  Vazgec() {
  }
  OturumuKapat() {
    this.fbServis.OturumKapat().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['/yonetici']);
    });
  }
}
