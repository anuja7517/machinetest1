import { Component, Input, OnInit } from '@angular/core';
import { Istudent } from '../../model/inters';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss']
})
export class StdtableComponent implements OnInit {
@Input () astdArr ! : Istudent[]
  constructor() { }

  ngOnInit(): void {
  }

}
