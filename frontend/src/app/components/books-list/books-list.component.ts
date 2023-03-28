import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';
import { Page } from '../../models/page';
import { Book } from '../../models/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books$!: Observable<Page<Book>>;

  constructor(
    private bookService: BookService,
  ) {
  }

  ngOnInit(): Observable<Page<Book>> {
    this.books$ = this.bookService.getBooks({});
    return this.books$;
  }

  // Search bar was done with this tutorial: https://www.youtube.com/watch?v=vraUdaw5oes
  searchText: string = "";

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }

}
