import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { min } from 'rxjs';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  studentForm:FormGroup=new FormGroup({

    firstName:new FormControl('tell me your name',[Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
    lastName:new FormControl(''),
    userName:new FormControl('',[Validators.email]),
    city:new FormControl('set user name'),
    state:new FormControl(''),
    zipCode:new FormControl(''),
    isAcceptance:new FormControl('')


  });

  formValue:any;


  onSave(){
    this.formValue=this.studentForm.value;
  }
}
