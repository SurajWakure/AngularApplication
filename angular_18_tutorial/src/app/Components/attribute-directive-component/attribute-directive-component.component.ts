import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive-component',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attribute-directive-component.component.html',
  styleUrl: './attribute-directive-component.component.css'
})
export class AttributeDirectiveComponentComponent {
 
  div1BgColor:string='bg-primary';

  isDiv2Active : boolean = false;

  num1:string="";
  num2:string="";

  isActive:boolean=false;



  studentList:any[]=[
    {studentId:1,totalMarks:23,gender:'male',name:"Rahul",age:25,city:"Pune", isActive:true},
    {studentId:2,totalMarks:55,gender:'male',name:"Sachin",age:30,city:"Mumbai",isActive:false},
    {studentId:3,totalMarks:24,gender:'male',name:"Shraddha",age:22,city:"Pune",isActive:true}
  ]

  customStyle:any={
    'color':'white',
    'background-color':'red',
    'width':'200px',
    'height':'200px',
    'border-radius':'50%'
}

  addRedClass(){
    this.div1BgColor="bg-danger"
  }
  addBlueClass(){
    this.div1BgColor="bg-primary"
  }
  toggleDiv2Class(){
    this.isDiv2Active=!this.isDiv2Active;
  }


}
