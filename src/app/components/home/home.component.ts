import { product } from './product';

import { title } from 'process';
import { Haber } from './../../models/urun';
import { Component, OnInit } from '@angular/core';
declare let alertify:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

constructor() { }
 title="HABERLER"
 products:any[]=[ 
  {id:1 ,name : "NVIDIA'nın DLSS'i Artık Linux Oyunlarını da Destekliyor",time:"29.11.2021",categoryId:1,description:"Bundan sonra DLSS, DirectX oyunları için de çalışacak. Yeni sürümle birlikte artık daha fazla oyunu sistem üzerinden oynamak mümkün olacak.", imageUrl:"https://www.webtekno.com/images/editor/default/0003/36/7f8ac542c8881b332e60d5a7e308295c7fa502c6.jpeg" },
 {id:2 ,name : "AMD, Radeon Serisindeki 18'i Yüksek Önem Düzeyinde Olan Güvenlik Açıklarını Giderdiğini Açıkladı", time:"29.11.2021",categoryId:2,description:"Kısa bir süre önce güvenlik açığı uzmanlarınca saptanan ve 18’i yüksek önem arz eden Radeon güvenlik açığı sorunu çözüldü. Görünen o ki bu sürücü güncellemeleri, artan FPS ve yazılım geliştirmelerinden çok daha fazlasını sunuyor.", imageUrl:"https://www.webtekno.com/images/editor/default/0003/34/991a5b5048a051ecfcd7f2bead1c74208f32af98.jpeg" },
 {id:4 ,name : "Artık Visa Geçen Her Yerde Litecoin ile Ödeme Yapmak Mümkün: Üstelik Komisyon da Yok", time:"29.11.2021",categoryId:2,description:"Popüler kripto para birimlerinden Litecoin (LTC), artık Visa'nın kabul edildiği bütün işletmelerde Litecoin Kart ile ödeme yapılabileceğini açıkladı. Yapılan duyuruya göre Litecoin Kart, ödeme yapılan miktarı gerçek zamanlı olarak Amerikan dolarına dönüştürecek.", imageUrl:"https://www.webtekno.com/images/editor/default/0003/34/fbd306d465da1864e99f7ff88936155ba39715c5.jpeg" },
 {id:3,name : "FIFA’dan 2022 Dünya Kupası için yapay zeka desteği!", time:"29.11.2021",categoryId:2,description:"Yapay zeka sistemleri artık hayatımızın her alanında kaçınılmaz bir şekilde karşımıza çıkıyor. Sebebiyse aslında oldukça basit. Tamamen mantık çerçevesinde objektif kararlar alabiliyor. Fakat bu dönüşüm süreci beklediğimizden biraz daha hızlı ilerliyor olabilir. Öyle ki artık FIFA bile duruma dahil oluyor.", imageUrl:"https://i2.wp.com/shiftdelete.net/wp-content/uploads/2021/11/fifa-yeni-yapay-zeka-sistemiyle-ofsayt-tartismalarini-sonlandiracak1.webp?w=1280&ssl=1" },
 {id:1 ,name : "Twitter'ın Kurucusu ve CEO'su Jack Dorsey İstifa Etti: Yerine Gelecek İsim Belli Oldu",time:"29.11.2021",categoryId:1,description:"2006 yılında kurulan sosyal medya devi Twitter'ın CEO'su Jack Dorsey hakkında şok bir iddia ortaya atılmıştı. İddialar henüz yeni yankılanırken beklenen oldu, Dorsey istifa etti.", imageUrl:"https://cdn.webtekno.com/media/cache/content_detail_v2/article/117891/1638204764.jpg" },
 {id:2 ,name : "Battlefield 2042, serinin en kötü puanı alan oyunu oldu!", time:"29.11.2021",categoryId:2,description:"Açık beta sürecinde oldukça olumlu notlara sahip olan Battlefield 2042, inceleme notları oturdukça serinin en kötü oyunu oldu.", imageUrl:"https://i0.wp.com/shiftdelete.net/wp-content/uploads/2021/11/battlefield-2042-portal-modundan-yeni-goruntuler-geldi.jpg?w=1280&ssl=1" },
 {id:4 ,name : "Kritik hataları düzelten Windows 10 güncellemesi yayınlandı", time:"29.11.2021",categoryId:2,description:"Yazı tipi kaldırıldıktan sonra yaşanan çökme dahil çoğu sorunu düzelten yeni Windows 10 güncellemesi erişime açıldı.", imageUrl:"https://i2.wp.com/shiftdelete.net/wp-content/uploads/2021/11/windows-10-build-19044-139-insiders-icin-yayinlandi.jpg?w=1280&ssl=1" },
 {id:4 ,name : "Metaverse teknolojisi, oyun dünyası için ne anlama geliyor?", time:"29.11.2021",categoryId:2,description:"Facebook'un (yeni adıyla Meta) ana odağı haline gelen Metaverse teknolojisi, oyun dünyası için ne anlama geliyor? İşte detaylar...", imageUrl:"https://i0.wp.com/shiftdelete.net/wp-content/uploads/2021/11/metaverse-teknolojisi-oyun-dunyasi-icin-ne-anlama-geliyor-m.jpg?w=1280&ssl=1" },
 {id:3,name : "Galaxy Z Flip3 5G, 2021’in en iyi 100 buluşundan biri seçildi!", time:"29.11.2021",categoryId:2,description:"Dünyanın en büyük akıllı telefon üreticisi Samsung, ürün ailesini genişletmeye devam ediyor. Geleneksel cihazların yanı sıra yeni teknolojiler de geliştiren şirket, kısa süre önce Galaxy Z Flip3 5G ve Z Fold3 5G ile karşımıza çıktı. Bunlardan özellikle Flip3, yeni nesil tasarımıyla dikkatleri üzerine çekti.", imageUrl:"https://i2.wp.com/shiftdelete.net/wp-content/uploads/2021/11/galaxy-z-flip3-5g-2021in-en-iyi-100-bulusundan-biri-secildi.jpeg?w=1280&ssl=1" },

 ]
 

  ngOnInit() {
    
  }
 addTocard(product){
  alertify.success("HABER BEĞENİLDİ: " +product.name )
 }
}
