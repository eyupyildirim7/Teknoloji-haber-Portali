import { Component, OnInit } from '@angular/core';
declare let alertify:any;
@Component({
  selector: 'app-sosyalmedya',
  templateUrl: './sosyalmedya.component.html',
  styleUrls: ['./sosyalmedya.component.scss']
})
export class SosyalmedyaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
 addTocard(product){
  alertify.success("HABER BEĞENİLDİ: " +product.name )
}
 
 title="SOSYALMEDYA"
 products:any[]=[ 
 
 {id:1 ,name : "Twitter'ın Kurucusu ve CEO'su Jack Dorsey İstifa Etti: Yerine Gelecek İsim Belli Oldu",time:"29.11.2021",categoryId:1,description:"2006 yılında kurulan sosyal medya devi Twitter'ın CEO'su Jack Dorsey hakkında şok bir iddia ortaya atılmıştı. İddialar henüz yeni yankılanırken beklenen oldu, Dorsey istifa etti.", imageUrl:"https://cdn.webtekno.com/media/cache/content_detail_v2/article/117891/1638204764.jpg" },
 {id:1 ,name : "Rusya, Türkiye’nin izini takip ediyor: Sosyal Medya Yasası geliyor!",time:"29.11.2021",categoryId:1,description:"Türkiye’de Ekim 2020‘de yürürlüğe giren Sosyal Medya Yasası ile birlikte yurtdışı merkezli şirketlere ülkemizde temsilcilik atama zorunluluğu getirilmişti. Bu düzenlemeleri kabul etmeyen kuruluşlar ise milyonlarca liralık cezayı ödemek zorunda kaldı. Şimdiyse benzer bir hamle Rusya tarafından geldiRusya Federal Bilgi Teknolojileri ve Kitle İletişim Denetleme Kurumu Roskomnadzor içerisinde Google ve Apple’ın da bulunduğu 13 yurtdışı merkezli bilişim şirketine ülkede temsilcilik açmaları için yıl sonuna kadar süre verdi.", imageUrl:"https://i2.wp.com/shiftdelete.net/wp-content/uploads/2021/11/rusya-turkiyenin-izini-takip-ediyor-sosyal-medya-yasasi-geliyor001.jpg?w=1280&ssl=1" },
 {id:1 ,name : "Discord ve Spotify çöktü mü? İşte son durum",time:"29.11.2021",categoryId:1,description:"Google’ın internet siteleri ve mobil uygulamalar için barındırma hizmeti sunduğu Google Cloud, binlerce servis tarafından tercih ediliyor. Bu servisten hizmet alan uygulamalar arasında Spotify ve Netflix gibi büyük şirketler mevcut. Ancak Google Cloud’da mevcut olduğu açıklanan sorun nedeniyle dijital platformlarda genel bir sorunla karşılaşıyoruz.", imageUrl:"https://i1.wp.com/shiftdelete.net/wp-content/uploads/2021/11/discord-ve-spotify-coktu-mu-platformlara-erisilemiyor-m.jpg?w=1280&ssl=1" },

 ]
 

}
