import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = false;

  num1:string="";
  num2:string="";

  isActive:boolean=false;

  selectedState:string="";

  constructor(private router:Router) {

   }


   navigateToAttributet(){
    this.router.navigate(['attribute-dir']);
   }

  cityArray:string[]=["Pune","Mumbai","Delhi","Chennai","Kolkata"];


  studentList:any[]=[
    {studentId:1,name:"Rahul",age:25,city:"Pune", isActive:true},
    {studentId:2,name:"Sachin",age:30,city:"Mumbai",isActive:false},
    {studentId:3,name:"Shraddha",age:22,city:"Pune",isActive:true}
  ]


  showDiv1() {
    this.isDiv1Visible = true;
  }
  hideDiv1() {
    this.isDiv1Visible = false;
  }

  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;
  }

}
