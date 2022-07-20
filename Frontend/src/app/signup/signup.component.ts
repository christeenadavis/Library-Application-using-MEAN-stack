import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userservice:UsersService,private router :Router) { }
  
  userItem={
    firstName: '',
    lastName: '',
    userName: '',
    password: ''
 }
  ngOnInit(): void {}

  addUser()
  {    
    console.log(this.userItem);
    alert("registering ....");
    this.userservice.newUser(this.userItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['login']);
  }

}


/*import { Component } from '@angular/core';
	
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactiveformproject';
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!!');
  }
}*/