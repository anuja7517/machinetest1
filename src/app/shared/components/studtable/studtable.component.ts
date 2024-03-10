import { Component, OnInit } from '@angular/core';
import { Istd } from '../../model/inters';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-studtable',
  templateUrl: './studtable.component.html',
  styleUrls: ['./studtable.component.scss']
})
export class StudtableComponent implements OnInit {
  stdArr: Array<Istd> = [];


  constructor( private _studeService : StudentService) { }

  ngOnInit(): void {

    this.stdArr = this._studeService.fetchstd()
  }

}
