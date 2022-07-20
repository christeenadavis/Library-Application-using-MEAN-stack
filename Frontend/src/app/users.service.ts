import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  item={
    firstName: '',
    lastName: '',
    userName: '',
    password: ''
  }


  constructor(private http:HttpClient) { }

  getuser(uname:any){
    alert("inside userservice");
    console.log(uname);
   return this.http.get("http://localhost:3000/getuser")
    
  }

  newUser(item:any)
  {   
    alert("inside userservice");
    console.log(item);
    return this.http.post("http://localhost:3000/insertuser",{"user":item})
    .subscribe(data =>{console.log(data)})
  }
}
