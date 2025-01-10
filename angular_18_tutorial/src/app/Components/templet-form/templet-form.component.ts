import { state } from '@angular/animations';
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templet-form',
  imports: [FormsModule,JsonPipe],
  templateUrl: './templet-form.component.html',
  styleUrl: './templet-form.component.css'
})
export class TempletFormComponent {
studentObj:any={
  firstName:'',
  lastName:'',
  userName:'',
  city:'',
  state:'',
  zipCode:'',
  isAcceptTerms:false
};
formSubmit:any;

onclick(){
  debugger;
this.formSubmit=this.studentObj;
}
resetForm(){
  this.studentObj={
    firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zipCode:'',
    isAcceptTerms:false
  };
}
}
