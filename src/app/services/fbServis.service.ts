import { Haber } from './../models/urun';
import { Uye } from './../models/uye';

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Kayit } from '../models/kayit';
import {AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class FbServisService { 
   private dbKayit = '/Kayitlar';
   private dbUye='/Uyeler';
   private dbhaber='/Haberler';
   kayitRef: AngularFireList<Kayit> = null;
   uyeRef: AngularFireList<Uye> = null;
   haberref:AngularFireList<Haber>=null;

  constructor(
  public db: AngularFireDatabase,
  public afAuth:AngularFireAuth

) 
{
  this.kayitRef = db.list(this.dbKayit);
  this.uyeRef = db.list(this.dbUye);
  this.haberref=db.list(this.dbhaber);

}

KayitListele(){
  return this.kayitRef;
}
Kayiteklee(kayit:Kayit){
  return this.kayitRef.push(kayit);
}
Kayitduzenlee(kayit:Kayit){
  return this.kayitRef.update(kayit.key, kayit);
}
Kayitsill(key:string){
  return this.kayitRef.remove(key);
}
OturumAc(mail:string,parola:string){
return this.afAuth.signInWithEmailAndPassword(mail,parola);
}
OturumKapat(){
return this.afAuth.signOut();
}
OturumKontrol(){
  if(localStorage.getItem("user"))
  {
    return true;
  } else{return false;}
}
UyeEkle(uye:Uye){
return this.uyeRef.push(uye);
}
Uyeol(uye:Uye){
  return this.afAuth.createUserWithEmailAndPassword(uye.mail,uye.parola);
}
UyeListele(){
  return this.uyeRef;
}
UyeSil(key:string){
  return this.uyeRef.remove(key );
}
UyeOlma(uye: Uye) { 
  return this.afAuth.user;
}
KayitListelemeByuid(uid: string){
  return this.db.list("/Kayitlar", q => q.orderByChild("uid").equalTo(uid));
}
KayitByKey(key: string) {
  return this.db.object("/Kayitlar/" + key);
}
KayitListeleme(){
  return this.kayitRef;
}
KayitEkle(Kayit:Kayit){
  return this.kayitRef.push(Kayit);
}
KayitDuzenle(Kayit:Kayit){
  return this.kayitRef.update(Kayit.key, Kayit);
}
KayitSil(key:string){
  return this.kayitRef.remove(key);
}
/**------------------------------------------------------ */
/**------------------------------------------------------ */
/**------------------------------------------------------ */
/**------------------------------------------------------ *//**------------------------------------------------------ */
/**----------------------Haber Ekleme silme  ve düzenleme işlemleri-------------------------------- */
HaberListeleme(){
  return this.haberref;
}
HaberEkle(HB:Haber){
  return this.haberref.push(HB);
}
HaberDuzenle(HB:Haber){
  return this.haberref.update(HB.key, HB);
}
HaberSil(key:string){
  return this.haberref.remove(key);
}
HaberListelemeByuid(uid: string){
  return this.db.list("/Haberler", q => q.orderByChild("uid").equalTo(uid));
}
}
