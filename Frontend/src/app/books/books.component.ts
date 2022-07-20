import { Component } from '@angular/core';
import { BookService } from '../book.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  pageTitle: string = 'Book List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  books=[{
    bookName :'',
    bookAuthor:'',
    description:'',
    imageUrl:''}]
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private router:Router,private bookService: BookService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  }
 
  editBook(books:any)
  {
    console.log("inside editbook");
    localStorage.setItem("editBookId",books._id.toString());
    this.router.navigate(['update']);

  }
  deleteBook(book:any)
  {
    this.bookService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(p => p !== book);
      })
  

  }

  // constructor() { }

  // ngOnInit(): void {
  // }

}
