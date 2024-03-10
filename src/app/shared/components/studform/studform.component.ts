import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-studform',
  templateUrl: './studform.component.html',
  styleUrls: ['./studform.component.scss']
})
export class StudformComponent implements OnInit {
  stdForm !: FormGroup;
  constructor( private _uuidserivce:UuidService, private _studentSerive : StudentService) {
  
   }

  ngOnInit(): void {
    this.cretstdfrom()
  }

cretstdfrom(){
this.stdForm = new FormGroup({
  fname : new FormControl(null,[Validators.required]),
  lname : new FormControl(null,[Validators.required]),
  email : new FormControl(null,[Validators.required]),
  contact : new FormControl(null,[Validators.required]),

})
}
onsumit(){
  if(this.stdForm.valid){
    console.log(this.stdForm.value);
    let obj = {...this.stdForm.value,id:this._uuidserivce.geUuid()}
    this._studentSerive.addstd(obj)
    this.stdForm.reset()
  }
}


}
