import { Component, Input, OnInit } from '@angular/core';
import { GenericFunction } from 'src/app/models/tools/generic-function';

@Component({
  selector: 'app-generic-function',
  templateUrl: './generic-function.component.html',
  styleUrls: ['./generic-function.component.scss']
})
export class GenericFunctionComponent implements OnInit {

  @Input()
  genFunction: GenericFunction = new GenericFunction();

  constructor() { }

  ngOnInit(): void {
  }

}
