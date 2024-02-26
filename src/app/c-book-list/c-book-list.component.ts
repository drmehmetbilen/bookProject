import { Component, Input } from '@angular/core';
import { IBook } from '../iBook';

@Component({
  selector: 'cBookList',
  templateUrl: './c-book-list.component.html',
  styleUrl: './c-book-list.component.css'
})
export class CBookListComponent {

 @Input() bookList!: IBook[];

 toogle(bookToRead:IBook)
 {
   bookToRead.isRead = !bookToRead.isRead;
 }

}
