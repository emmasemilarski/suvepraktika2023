import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { Observable } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book$!: Observable<Book>;


  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.book$ = this.route.params
      .pipe(map(params => params['id']))
      .pipe(switchMap(id => this.bookService.getBook(id)))
  }

  deleteBook(book: Book): void {
    if (confirm("Do you want to delete this book?")) {
      this.bookService.deleteBook(book.id).subscribe()
      this.router.navigate(['/books'])
    }
  }

  checkoutBook(book: Book): void {
    if (book.status == "AVAILABLE") {
    }
  }

  updateBook(book: Book): void {
    this.bookService.updateBook(book.id).subscribe((data : any) => {
      console.log(data)
    })
  }

}
