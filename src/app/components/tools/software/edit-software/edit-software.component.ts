import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Software } from 'src/app/models/tools/software';
import { SoftwareService } from 'src/app/services/tools/software.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-software',
  templateUrl: './edit-software.component.html',
  styleUrls: ['./edit-software.component.scss']
})
export class EditSoftwareComponent implements OnInit {

  software: Software = new Software();
  status = environment.EQUIPMENT_STATUS;
  types = environment.EQUIPMENTS_TYPES;
  messages = {
    message: "",
    error: ""
  }

  constructor(private activatedRoute: ActivatedRoute ,private softwareService: SoftwareService) { }

  async ngOnInit() {
    let softwareId = this.activatedRoute.snapshot.params["id"]
    await this.softwareService.getSoftwareById(softwareId).subscribe(
      data => this.software = data
    )
  }

  saveChange() {}

}
