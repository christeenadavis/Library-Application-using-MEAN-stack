import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={ username:'',
  password:''
  }
 constructor (private fb:FormBuilder,private authservice:AuthService,
  private router :Router,private userservice:UsersService){}

  loginForm =this.fb.group({
    username: ['',Validators.required],
    password: ['',[Validators.required,Validators.minLength(6)]]
  })


  ngOnInit(): void {
  }

   
  // }
  loginUser () {
    // let uname=this.loginForm.value.username;
    // let password=this.loginForm.value.password;
    //   this.authservice.loginUser(this.loginForm)
    //    .subscribe(
    //   (res:any): void => {
    //     localStorage.setItem('token',res.token);
        this.router.navigate(['/book'])
    //   }
    // ) 
  }

      
  }

 
