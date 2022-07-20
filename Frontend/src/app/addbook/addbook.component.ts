import { Component, OnInit } from '@angular/core';
import { IBook } from '../bookmodel';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private bookservice:BookService,private router :Router) { }
   bookItem={
      bookName :'',
      bookAuthor:'',
      description:'',
      imageUrl:''
   }
    ngOnInit() {}
   
  
    AddBook()
  {    
    this.bookservice.newBook(this.bookItem);
    console.log(this.bookItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/book']);
  }
 
}





