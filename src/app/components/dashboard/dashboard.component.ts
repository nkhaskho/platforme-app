import { Component, OnInit } from '@angular/core';
import { LoggedUser } from 'src/app/models/auth/logged-user';
import { Reservation } from 'src/app/models/reservations/reservation';
import { Document } from 'src/app/models/tools/document';
import { GenericFunction } from 'src/app/models/tools/generic-function';
import { AuthService } from 'src/app/services/auth/auth.service';
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

  loggedUser: LoggedUser = new LoggedUser();
  myReservations: Reservation[] = [];
  genFunctions: GenericFunction[] = [];
  hardwares: Record<string,string> = {}
  userDocuments: Document[] = [];
  userFunctions: GenericFunction[] = [];

  constructor(private reservationService: ReservationService,
              private hardwareService: HardwareService,
              private gFunctionService: GenericFunctionService,
              private documentService: DocumentService,
              private authService: AuthService) { }

  async ngOnInit() {
    // get reservations by author
    this.loggedUser = await this.authService.getLoggedUser();
    console.log("loggedUser: ", this.loggedUser)
    await this.reservationService.getReservationsByAuthor(this.loggedUser.id).subscribe(
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
    await this.documentService.getDocumentByAuthor(this.loggedUser.id).subscribe(
      docs => this.userDocuments = docs,
      error => {console.log(error)}
    )
    // get functions by author
    await this.gFunctionService.getGenFunctionsByAuthor(this.loggedUser.id).subscribe(
      response => this.userFunctions = response,
      error => {console.log(error)}
    );
    console.log(this.userDocuments)
    console.log(this.userFunctions)
    
  }

}
