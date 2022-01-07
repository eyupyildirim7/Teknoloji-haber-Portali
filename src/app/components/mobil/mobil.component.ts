import { Component, OnInit } from '@angular/core';
declare let alertify:any;

@Component({
  selector: 'app-mobil',
  templateUrl: './mobil.component.html',
  styleUrls: ['./mobil.component.scss']
})
export class MobilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
 addTocard(product){
  alertify.success("HABER BEĞENİLDİ: " +product.name )
}
 
 title="MOBİL"
 products:any[]=[ 
  {id:3,name : "Galaxy Z Flip3 5G, 2021’in en iyi 100 buluşundan biri seçildi!", time:"29.11.2021",categoryId:2,description:"Dünyanın en büyük akıllı telefon üreticisi Samsung, ürün ailesini genişletmeye devam ediyor. Geleneksel cihazların yanı sıra yeni teknolojiler de geliştiren şirket, kısa süre önce Galaxy Z Flip3 5G ve Z Fold3 5G ile karşımıza çıktı. Bunlardan özellikle Flip3, yeni nesil tasarımıyla dikkatleri üzerine çekti.", imageUrl:"https://i2.wp.com/shiftdelete.net/wp-content/uploads/2021/11/galaxy-z-flip3-5g-2021in-en-iyi-100-bulusundan-biri-secildi.jpeg?w=1280&ssl=1" },
  {id:3,name : "Akıllı telefon pazarının yeni lideri Apple oldu!", time:"29.11.2021",categoryId:2,description:"Amerika Birleşik Devletleri merkezli Apple, akıllı telefon pazarı gelirinin büyük bir kesimini elinde tutuyor. Ürettiği iPhone akıllı telefonlar, ABD’den Çin’e kadar birçok ülkede piyasanın en üst sırasında yer alıyor. Samsung, Huawei, Xiaomi gibi Asya merkezli rakiplerine karşın şirket, birçok ülkede lider konumda.", imageUrl:"https://i2.wp.com/shiftdelete.net/wp-content/uploads/2021/11/apple-en-buyuk-akilli-telefon-sirketi-konumunda1.jpg?w=1280&ssl=1" },
  {id:3,name : "Snapdragon 8 Gen 1 alacak cihazlar sızdırıldı!", time:"29.11.2021",categoryId:2,description:"Söylentiye göre, yeni işlemciyi alacak telefon markası ZTE olacak. Şirketin yakın gelecekte çıkarması planlanan oyun telefonları, NX679J model numaralı Nubia Red Magic 7 ve NX709J model numaralı Red Magic 7 Pro‘ya Qualcomm’un yeni amiral gemisi çipinin güç vermesi bekleniyor.", imageUrl:"https://i1.wp.com/shiftdelete.net/wp-content/uploads/2021/11/snapdragon-8-gen-1-alacak-cihazlar-sizdirildi.jpg?w=1280&ssl=1" }]
 
}
