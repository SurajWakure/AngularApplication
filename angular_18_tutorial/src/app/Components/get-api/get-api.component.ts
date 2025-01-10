import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

userList:any[]=[];
newUserList:any[]=[];
  constructor(private http:HttpClient ) { 
    
  }
  getAllUser(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      debugger;
      this.userList=res;
    })
  }
  getAllCustomer(){
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((result:any)=>{
      debugger;
      this.newUserList=result.data;
    },error=>{
      debugger;
    })
  }

}
