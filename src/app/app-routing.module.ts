import { UyesilComponent } from './components/uyesil/uyesil.component';
import { YoneticiComponent } from './components/yonetici/yonetici.component';

import { RegisterComponent } from './components/register/register.component';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { CategoryComponent } from './components/category/category.component';
import { GirisComponent } from './components/giris/giris.component';
import { SosyalmedyaComponent } from './components/sosyalmedya/sosyalmedya.component';
import { OyunComponent } from './components/oyun/oyun.component';
import { MobilComponent } from './components/mobil/mobil.component';
import { BlokchainComponent } from './components/blokchain/blokchain.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YazılımComponent } from './components/yazılım/yazılım.component';
import { KayıtekleComponent } from './components/habersırala/kayıtekle.component';
import {AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectlogin=()=>redirectUnauthorizedTo(['giris']);

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:"blokchain", component:BlokchainComponent},
  {path:"mobil", component:MobilComponent},
  {path:"oyun", component:OyunComponent},
  {path:"sosyalmedya", component:SosyalmedyaComponent},
  {path:"category", component:CategoryComponent},
  {path:"yazilim", component:YazılımComponent}, 
  {path:"register", component:RegisterComponent},
  {path:"yonetici", component:YoneticiComponent}, 
  {path:"giris", component:GirisComponent},
  {path:"kayıtsırala", component:KayıtekleComponent},
  {path:"kayitlar", component:KayitlarComponent,canActivate:[AngularFireAuthGuard],data:{AuthGuardPipe:redirectlogin}},
  {path:"uyesil", component:UyesilComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
