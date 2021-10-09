import { Component, Input, OnInit } from '@angular/core';
import { Hardware } from 'src/app/models/tools/hardware';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.scss']
})
export class HardwareComponent implements OnInit {

  @Input()
  hardware: Hardware = new Hardware();

  constructor() { }

  ngOnInit(): void {
  }

}
