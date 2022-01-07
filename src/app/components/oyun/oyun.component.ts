import { Component, OnInit } from '@angular/core';
declare let alertify:any;

@Component({
  selector: 'app-oyun',
  templateUrl: './oyun.component.html',
  styleUrls: ['./oyun.component.scss']
})
export class OyunComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
 addTocard(product){
  alertify.success("HABER BEĞENİLDİ: " +product.name )
}
 
 title="OYUN"
 products:any[]=[ 
  {id:1 ,name : "NVIDIA'nın DLSS'i Artık Linux Oyunlarını da Destekliyor",time:"29.11.2021",categoryId:1,description:"Bundan sonra DLSS, DirectX oyunları için de çalışacak. Yeni sürümle birlikte artık daha fazla oyunu sistem üzerinden oynamak mümkün olacak.", imageUrl:"https://www.webtekno.com/images/editor/default/0003/36/7f8ac542c8881b332e60d5a7e308295c7fa502c6.jpeg" },
 {id:2 ,name : "Battlefield 2042, serinin en kötü puanı alan oyunu oldu!", time:"29.11.2021",categoryId:2,description:"Açık beta sürecinde oldukça olumlu notlara sahip olan Battlefield 2042, inceleme notları oturdukça serinin en kötü oyunu oldu.", imageUrl:"https://i0.wp.com/shiftdelete.net/wp-content/uploads/2021/11/battlefield-2042-portal-modundan-yeni-goruntuler-geldi.jpg?w=1280&ssl=1" },
 {id:4 ,name : "Metaverse teknolojisi, oyun dünyası için ne anlama geliyor?", time:"29.11.2021",categoryId:2,description:"Facebook'un (yeni adıyla Meta) ana odağı haline gelen Metaverse teknolojisi, oyun dünyası için ne anlama geliyor? İşte detaylar...", imageUrl:"https://i0.wp.com/shiftdelete.net/wp-content/uploads/2021/11/metaverse-teknolojisi-oyun-dunyasi-icin-ne-anlama-geliyor-m.jpg?w=1280&ssl=1" },
 
 ]
 

}
