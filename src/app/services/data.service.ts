import { Kaynak } from './../models/kaynak';
import { Kayit } from './../models/kayit';
import { Ders } from './../models/ders';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grup } from '../models/grup';
import { Haber } from '../models/urun';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public apiUrl = "http://localhost:3000/";
  constructor(
    public http: HttpClient
  ) { }
  KayitListele() {
    return this.http.get(this.apiUrl + "kayit");
  }
  KayitById(id: number) {
    return this.http.get(this.apiUrl + "kayit/" + id);
  }
  KayitEkle(kayit: Kayit) {
    return this.http.post(this.apiUrl + "kayit", kayit);
  }
  KayitDuzenle(kayit: Kayit) {
    return this.http.put(this.apiUrl + "kayit/" + kayit.id, kayit);
  }
  KayitSil(id: number) {
    return this.http.delete(this.apiUrl + "kayit/" + id);
  }

  /* Grup Tablosu Servisleri  Başlangıç */
  GrupListele() {
    return this.http.get(this.apiUrl + "grup");
  }
  GrupById(id: number) {
    return this.http.get(this.apiUrl + "grup/" + id);
  }
  GrupEkle(g: Grup) {
    return this.http.post(this.apiUrl + "grup", g);
  }
  GrupDuzenle(g: Grup) {
    return this.http.put(this.apiUrl + "grup/" + g.id, g);
  }
  GrupSil(id: number) {
    return this.http.delete(this.apiUrl + "grup/" + id);
  }

  /* Grup Tablosu Servisleri  Bitiş */



  /* Ders Tablosu Servisleri  Bitiş */
  kategoriliste() {
    return this.http.get(this.apiUrl + "Kategori");
  }
  Hekle(hsec:Haber) {
    return this.http.post(this.apiUrl + "Urunler",hsec);
  }
  UruntDuzenle(securun: Haber) {
    throw new Error('Method not implemented.');
  }
  UrunListele() {
    throw new Error('Method not implemented.');
  }
  UrunSil(id: number) {
    throw new Error('Method not implemented.');
  }

  OturumKontrol() {
    var token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  }
  YetkiKontrol(yetkiler) {
    var sonuc: Boolean = false;
    var uyeYetkileri: string[] = JSON.parse(localStorage.getItem("uyeYetkileri"));
    if (uyeYetkileri) {
      yetkiler.forEach(element => {
        if (uyeYetkileri.indexOf(element) > -1) {
          sonuc = true;
          return false;
        }
      });
    }
    return sonuc;

  }

  KayitAraSirala(ara: string, sira: string) {
    return this.http.get(this.apiUrl + "kayit?q=" + ara + "&_sort=" + sira);
  }

  KayitSayfala(p: number, lim: number) {
    return this.http.get(this.apiUrl + "kayit?_page=" + p + "&_limit=" + lim);
  }
  UyeLogin(k: string, p: string) {
    return this.http.get(this.apiUrl + "uye?kadi=" + k + "&parola=" + p);
  }
  ParolaUret(s: number) {
    var st = "qwertyuiopasdfghjklzxcvbnm0123456789";
    var p = "";
    for (let i = 0; i < s; i++) {
      var r = Math.floor(Math.random() * st.length);
      p += st.charAt(r);
    }

    return p;
  }
  
  KaynakListele() {
    return this.http.get(this.apiUrl + "kaynak");
  }
  KaynakById(id: number) {
    return this.http.get(this.apiUrl + "kaynak/" + id);
  }
  KaynakEkle(k: Kaynak) {
    return this.http.post(this.apiUrl + "kaynak", k);
  }
  KaynakDuzenle(k: Kaynak) {
    return this.http.put(this.apiUrl + "kaynak/" + k.id, k);
  }
  KaynakSil(id: number) {
    return this.http.delete(this.apiUrl + "kaynak/" + id);
  }
}
