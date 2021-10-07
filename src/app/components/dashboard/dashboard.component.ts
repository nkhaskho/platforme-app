import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservations/reservation';
import { Document } from 'src/app/models/tools/document';
import { GenericFunction } from 'src/app/models/tools/generic-function';
import { UserService } from 'src/app/services/employees/user.service';
import { ReservationService } from 'src/app/services/reservations/reservation.service';
import { DocumentService } from 'src/app/services/tools/document.service';
import { GenericFunctionService } from 'src/app/services/tools/generic-function.service';
import { HardwareService } from 'src/app/services/tools/hardware.service';
import { SoftwareService } from 'src/app/services/tools/software.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loggedUser = localStorage.getItem("user");
  loggedUserId = parseInt(localStorage.getItem("userId") || "0");
  myReservations: Reservation[] = []
  hardwares: Record<string,string> = {}
  userDocuments: Document[] = [];
  userFunctions: GenericFunction[] = [];

  constructor(private reservationService: ReservationService,
              private hardwareService: HardwareService,
              private gFunctionService: GenericFunctionService,
              private documentService: DocumentService,) { }

  async ngOnInit() {
    this.loggedUser = localStorage.getItem("userId");
    console.log(this.loggedUser);
    // get reservations by author
    await this.reservationService.getReservationsByAuthor(this.loggedUser).subscribe(
      response => {
        this.myReservations = response
      }
    );
    // get all hardwares
    await this.hardwareService.getAllHardwares().subscribe(
      response => {
        response.forEach(hw => this.hardwares[hw.id.toString()]=hw.designation)
      }
    )
    // get contributions by author
    await this.documentService.getDocumentByAuthor(localStorage.getItem("userId")).subscribe(
      docs => this.userDocuments = docs
    )
    
  }

}
