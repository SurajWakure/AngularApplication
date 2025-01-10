import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-switch',
  imports: [FormsModule],
  templateUrl: './for-switch.component.html',
  styleUrl: './for-switch.component.css'
})
export class ForSwitchComponent {
  cityArray:string[]=["Pune","Mumbai","Delhi","Chennai","Kolkata"];

dayNumber:string='';
  studentList:any[]=[
    {studentId:1,name:"Rahul",age:25,city:"Pune", isActive:true},
    {studentId:2,name:"Sachin",age:30,city:"Mumbai",isActive:false},
    {studentId:3,name:"Shraddha",age:22,city:"Pune",isActive:true}
  ]
}
