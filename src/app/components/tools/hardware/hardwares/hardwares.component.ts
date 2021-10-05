import { Component, OnInit } from '@angular/core';
import { Hardware } from 'src/app/models/tools/hardware';
import { HardwareService } from 'src/app/services/tools/hardware.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hardwares',
  templateUrl: './hardwares.component.html',
  styleUrls: ['./hardwares.component.scss']
})
export class HardwaresComponent implements OnInit {

  hardwares: Hardware[] = []
  newHardware: Hardware = new Hardware();
  status = environment.EQUIPMENT_STATUS;
  types = environment.EQUIPMENTS_TYPES;

  constructor(private hardwareService: HardwareService) { }

  async ngOnInit() {
    await this.hardwareService.getAllHardwares().subscribe(
      httpResponse => this.hardwares = httpResponse,
      httpError => console.log(httpError)
    );
    this.newHardware.type = "HW";
  }

  addHardware() {
    // TODO: 
  }

  deleteHardware() {
    // TODO: 
  }

}
