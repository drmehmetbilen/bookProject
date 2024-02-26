import { Component } from '@angular/core';
import { IBook } from './iBook';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {

  activeWindow = "bookList"; //addbook, wishlist

  title = 'Kitap Listesi';

  bookList: IBook[] = [

    {title:"Marslı",author:"Andy Weir",price:35,pageSize:400,isRead:false},
    {title:"Pupets",author:"J Kohel",price:40,pageSize:500,isRead:false},
    
  ];



  
 


}
