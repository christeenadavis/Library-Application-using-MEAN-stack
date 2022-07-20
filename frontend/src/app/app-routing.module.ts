import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddbookComponent } from './addbook/addbook.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [ 
//  { path: '',
//   redirectTo: '/home',
//   pathMatch: 'full'
// },
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'book',component:BooksComponent, children :[
  {path:'addbook',component:AddbookComponent},
  {path:'logout',component:HomeComponent}]},
  
  {path:'home',component:HomeComponent},
  {path:'update',component:UpdatebookComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
