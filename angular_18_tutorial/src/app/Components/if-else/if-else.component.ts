import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {
  divOneVisible:boolean = true;

  isWorningDivVisible:boolean=false;

num1:string="";
num2:string="";

selectedState:string="";


  hideDiv1(){
    this.divOneVisible = false;
  }
  showDiv1(){
    this.divOneVisible = true;
  }
  toggleDiv2(){
    this.isWorningDivVisible = !this.isWorningDivVisible
  }
  

}
