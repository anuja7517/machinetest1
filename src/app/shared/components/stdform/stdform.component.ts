import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istudent } from '../../model/inters';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss']
})
export class StdformComponent implements OnInit {
  @ViewChild("fname") fname ! : ElementRef;
@ViewChild("lname") lname ! : ElementRef;
@ViewChild("email") email ! : ElementRef;
@ViewChild("contact") contact ! : ElementRef;

@Output() astdData : EventEmitter<Istudent> = new EventEmitter<Istudent>()

  constructor() { }
  ngOnInit(): void {
  }

  onstudentad(){
let obj : Istudent ={ 
   fname  : this.fname.nativeElement.value,
    lname : this.lname.nativeElement.value,
    email : this.email.nativeElement.value,
    contact : this.contact.nativeElement.value
}
if(!Object.values(obj).includes("")){
  console.log(obj);
this.astdData.emit(obj)
}


  }
}


