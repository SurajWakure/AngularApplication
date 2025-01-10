import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {
  departmentObj:any=
    {
      "departmentId": 0,
      "departmentName": "",
      "departmentLogo": ""
    };

    http=inject(HttpClient);

    onSave(){
      debugger;
      this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.departmentObj).subscribe((result:any)=>{
        if(result.result){
          alert("Department Added Successfully");
        }
        else{
          alert(result.message);
        }
      })
    }
  
}
