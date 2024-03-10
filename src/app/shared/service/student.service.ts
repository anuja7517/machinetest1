import { Injectable } from '@angular/core';
import { Istd } from '../model/inters';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 
 stdArry :Array <Istd> =[
  {
    fname : "anuja",
    lname : "bhosle",
    email :"bhosleanuja50@gmail.com",
    contact : 7894561230

  }
 ]
 constructor() { }

  
fetchstd(){
      return this.stdArry
}

addstd (stdobj :Istd){
  this.stdArry.push(stdobj)
}

}




