import { Component, OnInit } from '@angular/core';
import { product } from './product';

import { title } from 'process';
import { Haber } from './../../models/urun';
declare let alertify:any;


@Component({
  selector: 'app-blokchain',
  templateUrl: './blokchain.component.html',
  styleUrls: ['./blokchain.component.scss']
})
export class BlokchainComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
    
  }

 addTocard(product){
  alertify.success("HABER BEĞENİLDİ: " +product.name )
 }
  
  title="BLOKCHAİN"
  products:any[]=[ 
   {id:1 ,name : "The Matrix 4 vizyona NFT serisi ile girecek!",time:"29.11.2021",categoryId:1,description:"The Matrix 4 ile yeni NFT'ler piyasaya çıkacak. Warner Bros., Nifty ile anlaşarak tam 100 bin adetlik bir koleksiyon çıkaracak..", imageUrl:"https://i2.wp.com/shiftdelete.net/wp-content/uploads/2021/11/the-matrix-4-vizyona-nft-serisi-ile-girecek.jpg?w=1280&ssl=1" },
  {id:2 ,name : "Kripto para ile ödeme yapmaya izin veren şirketler", time:"29.11.2021",categoryId:2,description:"Kripto paralar son dönemde itibar kazanırken kripto para ile ödeme kabul eden şirketler de artıyor. Bunlardan bazılarını listeledik.", imageUrl:"https://i1.wp.com/shiftdelete.net/wp-content/uploads/2021/09/kripto-para-ile-odeme-yapmaya-izin-veren-sirketler-s.jpg?w=1280&ssl=1" },
  {id:4 ,name : "Artık Visa Geçen Her Yerde Litecoin ile Ödeme Yapmak Mümkün: Üstelik Komisyon da Yok", time:"29.11.2021",categoryId:2,description:"Popüler kripto para birimlerinden Litecoin (LTC), artık Visa'nın kabul edildiği bütün işletmelerde Litecoin Kart ile ödeme yapılabileceğini açıkladı. Yapılan duyuruya göre Litecoin Kart, ödeme yapılan miktarı gerçek zamanlı olarak Amerikan dolarına dönüştürecek.", imageUrl:"https://www.webtekno.com/images/editor/default/0003/34/fbd306d465da1864e99f7ff88936155ba39715c5.jpeg" },
 
  ]
  
}



