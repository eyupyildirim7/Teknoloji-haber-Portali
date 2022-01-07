import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() {
    
   }title ="Kategori Listesi "
   categories: category [] = [
     {id:1 , name:"BLOKCHAİN"},
     {id:2 , name:"sosyal medya"},
     {id:3 , name:"Yazılım"},
     {id:4 , name:"Mobil"},
     {id:5 , name:"Oyun"}
   ]

  ngOnInit() {
  }

}
