import { Component, OnInit } from '@angular/core';
import { Software } from 'src/app/models/tools/software';
import { SoftwareService } from 'src/app/services/tools/software.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-softwares',
  templateUrl: './softwares.component.html',
  styleUrls: ['./softwares.component.scss']
})
export class SoftwaresComponent implements OnInit {

  softwares: Software[] = []
  newSoftware: Software = new Software();
  selectedSoftware: Software = new Software();
  status = environment.EQUIPMENT_STATUS;
  types = environment.EQUIPMENTS_TYPES;
  softwareIndex: number = 0;
  loggedUserRole: string = "TEAM_MEMBER";

  constructor(private softwareService: SoftwareService) { }

  async ngOnInit() {
    await this.softwareService.getAllSoftwares().subscribe(
      httpResponse => this.softwares = httpResponse,
      httpError => console.log(httpError)
    );
    this.newSoftware.type = "SW";
    let todayDate = new Date();
    this.newSoftware.buy_date = todayDate.toISOString().split("T")[0];
    this.loggedUserRole = localStorage.getItem("role") || "TEAM_MEMBER";
  }


  addSoftware() {
    console.log(this.newSoftware);
    this.softwareService.addSoftware(this.newSoftware).subscribe(
      httpResponse => {
        this.softwares.push(httpResponse);
        document.getElementById("cancel-add-software")?.click();
      },
      httpError => {
        console.log(httpError)
      }
    )
  }

  selectSoftware(index: number) {
    this.softwareIndex = index;
    this.selectedSoftware = this.softwares[index];
  }

  deleteSoftware() {
    this.softwareService.deleteSoftware(this.softwares[this.softwareIndex].id).subscribe(
      httpResponse => {
        this.softwares.splice(this.softwareIndex, 1);
        document.getElementById("cancel-delete-software")?.click();
      },
      httpError => {
        console.log(httpError)
      }
    ) 
  }

}
