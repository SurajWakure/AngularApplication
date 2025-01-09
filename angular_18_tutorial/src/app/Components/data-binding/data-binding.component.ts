import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  //string
  //nnuber
  //bool
  //date
  coursename:string="Angular 8";
  inputType="radio";
  rollNumber:number=10;
  isIndian:boolean=true;
  myClassName:string="bg-primary";
  
  currentDate:Date=new Date();

firstName=signal("Chetan Jogi");

  constructor() 
  {

   }

changeCoursename(){
  this.coursename="REactt js";
  this.firstName.set("Suraj Wakure");
}
   showAlert(message:string){
      alert(message);
   }

   
}
