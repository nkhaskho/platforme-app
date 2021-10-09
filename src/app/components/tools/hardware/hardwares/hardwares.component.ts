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
  selectedHardware: Hardware = new Hardware();
  status = environment.EQUIPMENT_STATUS;
  selectedHardwareIndex: number = 0;
  types = environment.EQUIPMENTS_TYPES;
  loggedUserRole: string = "";

  constructor(private hardwareService: HardwareService) { }

  async ngOnInit() {
    await this.hardwareService.getAllHardwares().subscribe(
      httpResponse => this.hardwares = httpResponse,
      httpError => console.log(httpError)
    );
    this.newHardware.type = "HW";
    this.loggedUserRole = localStorage.getItem("role") || "TEAM_MEMBER";
  }

  selectHardware(index: number): void {
    this.selectedHardwareIndex = index;
    this.selectedHardware = this.hardwares[index];
  }

  addHardware() {
    this.hardwareService.addHardware(this.newHardware).subscribe(
      response => {
        this.hardwares.push(response)
        this.newHardware = new Hardware();
        document.getElementById("cancel-add-hardware")?.click();
      },
      error => {
        console.log(error)
      }
    )
  }

  deleteHardware() {
    this.hardwareService.deleteHardwareById(this.selectedHardware.id).subscribe(
      response => {
        this.hardwares.splice(this.selectedHardwareIndex, 1);
        document.getElementById("cancel-delete-hardware")?.click();
      },
      error => {
        console.log(error)
      }
    ) 
  }

}
