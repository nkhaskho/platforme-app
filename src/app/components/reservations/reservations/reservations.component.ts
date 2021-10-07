import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservations/reservation';
import { Hardware } from 'src/app/models/tools/hardware';
import { Software } from 'src/app/models/tools/software';
import { UserService } from 'src/app/services/employees/user.service';
import { ReservationService } from 'src/app/services/reservations/reservation.service';
import { HardwareService } from 'src/app/services/tools/hardware.service';
import { SoftwareService } from 'src/app/services/tools/software.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  status = environment.RESERVATIONS_STATUS;
  types = environment.EQUIPMENTS_TYPES;
  reservations: Reservation[] = [];
  reservation: Reservation = new Reservation();
  reservationIndex: number = 0;
  newReservation: Reservation = new Reservation();
  hardwares: Hardware[] = [];
  softwares: Software[] = [];
  users: Record<string, string> = {};

  constructor(private reservationService: ReservationService,
              private softwareService: SoftwareService,
              private hardwareService: HardwareService,
              private userService: UserService) { }

  async ngOnInit() {
    await this.reservationService.getAllReservations().subscribe(
      data => this.reservations = data
    );
    this.initNewReservation();
    await this.softwareService.getAllSoftwares().subscribe(
      data => this.softwares = data
    );
    await this.hardwareService.getAllHardwares().subscribe(
      data => this.hardwares = data
    );
    await this.userService.getAllUsers().subscribe(
      users => {
        console.log(users)
        users.forEach(user => this.users[user.id]=user.username)
      }
    );
    console.log(this.users);
  }

  selectReservation(index: number) {
    this.reservation = this.reservations[index];
    this.reservationIndex = index;
  }

  initNewReservation() {
    this.newReservation = new Reservation();
    this.newReservation.user = parseInt(localStorage.getItem("userId") || "1");
    this.newReservation.equipment_type = "HW";
    this.newReservation.status = "IN_PROGRESS"
  }

  addNewReservation() {
    console.log(this.newReservation);
    this.reservationService.addReservation(this.newReservation).subscribe(
      data => {
        this.reservations.push(data);
        document.getElementById("cancel-add-reservation")?.click();
        this.initNewReservation();
      },
      error => console.log(error)
    )
  }

  deleteReservation() {
    this.reservationService.deleteReservationById(this.reservation.id).subscribe(
      response => {
        this.reservations.splice(this.reservationIndex, 1);
        document.getElementById("cancel-delete-reservation")?.click();
      },
      error => {
        console.log(error);
        
      }
    )
  }

}
