import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
     bookItem ={
      bookName :'',
      bookAuthor:'',
      description :'',
      imageUrl :''
     }
    
  constructor(private router :Router,private bookservice:BookService) { }

  ngOnInit(): void {
    let BookId = localStorage.getItem("editBookId");
    console.log('editBookId');
    console.log(BookId);
    this.bookservice.getBook(BookId).subscribe((data)=>{
    this.bookItem=JSON.parse(JSON.stringify(data));
  })
  }
  editBook()
  {    
    this.bookservice.editBook(this.bookItem);   
    alert("Success");
    this.router.navigate(['book']);
  }
}





 
//   constructor(private router:Router,private productService:ProductService) { }

//   ngOnInit(): void {
//     let productId = localStorage.getItem("editProductId");
//     this.productService.getProduct(productId).subscribe((data)=>{
//       this.productItem=JSON.parse(JSON.stringify(data));
//   })
//   }
//   editProduct()
//   {    
//     this.productService.editProduct(this.productItem);   
//     alert("Success");
//     this.router.navigate(['products']);
//   }

// }
