import { Component, Input, LOCALE_ID } from '@angular/core';
import { Istudent } from './shared/model/inters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'machinetest1';
 @Input() AstdArr! : Istudent

  studentsArr : Array<Istudent> = [
    {
    fname : "anuja",
    lname : "bhosle",
    email: "bhosleanuja50@gmail.com",
    contact  : 1234567895
  }]
  stdDate (stdobj : Istudent) {
 // console.log(stdobj);
  this.studentsArr.push(stdobj)
  
}
}




