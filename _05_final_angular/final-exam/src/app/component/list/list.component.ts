import {Component, OnInit} from '@angular/core';
import {Book} from "../../model/Book";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: Book[] = [];
  book: Book = {};
  page: number = 1;
  totalRecords: number = 0;
  searchText: any;
  searchId: any;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.bookService.getAllBooks().subscribe(data => {
      this.books = data;
      this.totalRecords = this.books.length;
    })
  }

  deleteBook(item: Book) {
    this.book = item;
  }

  delete() {
    this.bookService.deleteBook(this.book.id).subscribe(() => {
      this.book = {};
      document.getElementById('modelId').click();
      this.ngOnInit();
    });
  }

  pageChanged(even: number) {
    this.page = even;
  }
}

console.log('vòng lặp bị lỗi mà không biết nguyên do, kiểm tra lại vòng lặp một lần nữa ch')
