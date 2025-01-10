import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../Pipes/na.pipe';

@Component({
  selector: 'app-pipe-component',
  imports: [NaPipe,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,JsonPipe,AsyncPipe],
  templateUrl: './pipe-component.component.html',
  styleUrl: './pipe-component.component.css'
})
export class PipeComponentComponent {
firstName:string='Angular';

str:string='this is your first lecture';

currentDate:Date=new Date();

currnetTime:Observable<Date>=new Observable<Date>();


student : any = {
  name: 'John',
  city: 'New York',
  empId: 1,
  state: ''
};


constructor(){
 
    this.currnetTime= interval(1000).pipe(map(()=>new Date()));
  
}
}