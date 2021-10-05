import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hardware } from 'src/app/models/tools/hardware';
import { HardwareService } from 'src/app/services/tools/hardware.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-hardware',
  templateUrl: './edit-hardware.component.html',
  styleUrls: ['./edit-hardware.component.scss']
})
export class EditHardwareComponent implements OnInit {

  hardware: Hardware = new Hardware();
  status = environment.EQUIPMENT_STATUS;
  types = environment.EQUIPMENTS_TYPES;
  messages = {
    message: "",
    error: ""
  }

  constructor(private activatedRoute: ActivatedRoute ,private hardwareService: HardwareService) { }

  async ngOnInit() {
    let hardwareId = this.activatedRoute.snapshot.params["id"]
    await this.hardwareService.getHardwareById(hardwareId).subscribe(
      data => this.hardware = data
    )
  }

  saveChange() {}

}
