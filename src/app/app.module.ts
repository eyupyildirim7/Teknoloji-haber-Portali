import { UyesilComponent } from './components/uyesil/uyesil.component';
import { YoneticiComponent } from './components/yonetici/yonetici.component';
import { RegisterComponent } from './components/register/register.component';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { environment } from './../environments/environment';

import { CategoryComponent } from './components/category/category.component';
import { AuthGuard } from './services/auth.guard';
import { DataService } from './services/data.service';
import { GirisComponent } from './components/giris/giris.component';
import { SosyalmedyaComponent } from './components/sosyalmedya/sosyalmedya.component';
import { OyunComponent } from './components/oyun/oyun.component';
import { MobilComponent } from './components/mobil/mobil.component';
import { BlokchainComponent } from './components/blokchain/blokchain.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { YazılımComponent } from './components/yazılım/yazılım.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KayıtekleComponent } from './components/habersırala/kayıtekle.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    BlokchainComponent,
    YazılımComponent,
    MobilComponent,
    OyunComponent,
    SosyalmedyaComponent,
    GirisComponent,
    CategoryComponent,
    KayıtekleComponent,
    KayitlarComponent,
    RegisterComponent,
    YoneticiComponent,
    UyesilComponent, 
    
    
    

], 

   imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
 
  ],
  providers: [DataService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
