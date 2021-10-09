import { Component, Input, OnInit } from '@angular/core';
import { Software } from 'src/app/models/tools/software';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent implements OnInit {

  @Input()
  software: Software = new Software();

  constructor() { }

  ngOnInit(): void {
    console.log(this.software)
  }

}
