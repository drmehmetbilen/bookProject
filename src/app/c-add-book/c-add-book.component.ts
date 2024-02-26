import { Component, Input } from '@angular/core';
import { IBook } from '../iBook';

@Component({
  selector: 'cAddBook',
  templateUrl: './c-add-book.component.html',
  styleUrl: './c-add-book.component.css'
})
export class CAddBookComponent {

  @Input() bookList!:IBook[];

  addBook(title:string, author:string, price:string,pageSize:string)
  {

    let newBook:IBook = {
      title:title,
      author:author,
      price:parseInt(price),
      pageSize:parseInt(pageSize),
      isRead:false
    }

    this.bookList.push(newBook);

  }


}
