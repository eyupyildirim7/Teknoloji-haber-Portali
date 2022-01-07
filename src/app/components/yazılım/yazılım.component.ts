import { Component, OnInit } from '@angular/core';
declare let alertify:any;

@Component({
  selector: 'app-yazılım',
  templateUrl: './yazılım.component.html',
  styleUrls: ['./yazılım.component.scss']
})
export class YazılımComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
 addTocard(product){
  alertify.success("HABER BEĞENİLDİ: " +product.name )
}
 
 title="YAZILIM"
 products:any[]=[ 
 {id:2 ,name : "AMD, Radeon Serisindeki 18'i Yüksek Önem Düzeyinde Olan Güvenlik Açıklarını Giderdiğini Açıkladı", time:"29.11.2021",categoryId:2,description:"Kısa bir süre önce güvenlik açığı uzmanlarınca saptanan ve 18’i yüksek önem arz eden Radeon güvenlik açığı sorunu çözüldü. Görünen o ki bu sürücü güncellemeleri, artan FPS ve yazılım geliştirmelerinden çok daha fazlasını sunuyor.", imageUrl:"https://www.webtekno.com/images/editor/default/0003/34/991a5b5048a051ecfcd7f2bead1c74208f32af98.jpeg" },
 {id:3,name : "FIFA’dan 2022 Dünya Kupası için yapay zeka desteği!", time:"29.11.2021",categoryId:2,description:"Yapay zeka sistemleri artık hayatımızın her alanında kaçınılmaz bir şekilde karşımıza çıkıyor. Sebebiyse aslında oldukça basit. Tamamen mantık çerçevesinde objektif kararlar alabiliyor. Fakat bu dönüşüm süreci beklediğimizden biraz daha hızlı ilerliyor olabilir. Öyle ki artık FIFA bile duruma dahil oluyor.", imageUrl:"https://i2.wp.com/shiftdelete.net/wp-content/uploads/2021/11/fifa-yeni-yapay-zeka-sistemiyle-ofsayt-tartismalarini-sonlandiracak1.webp?w=1280&ssl=1" },
 {id:4 ,name : "Kritik hataları düzelten Windows 10 güncellemesi yayınlandı", time:"29.11.2021",categoryId:2,description:"Yazı tipi kaldırıldıktan sonra yaşanan çökme dahil çoğu sorunu düzelten yeni Windows 10 güncellemesi erişime açıldı.", imageUrl:"https://i2.wp.com/shiftdelete.net/wp-content/uploads/2021/11/windows-10-build-19044-139-insiders-icin-yayinlandi.jpg?w=1280&ssl=1" },
 ]
 

}
