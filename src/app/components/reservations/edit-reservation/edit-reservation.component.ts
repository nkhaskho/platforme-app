import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/models/reservations/reservation';
import { EquipmentType } from 'src/app/models/tools/equipment-type';
import { ReservationService } from 'src/app/services/reservations/reservation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.scss']
})
export class EditReservationComponent implements OnInit {

  status :string[] = [];
  types: EquipmentType[] = [];
  reservation: Reservation = new Reservation();
  messages = {
    error: "",
    message: ""
  }

  constructor(private activatedRoute: ActivatedRoute,
              private reservationService: ReservationService) { }

  async ngOnInit() {
    let reservationId = parseInt(this.activatedRoute.snapshot.params["id"]);
    await this.reservationService.getReservationById(reservationId).subscribe(
      httpResponse => {
        console.log(httpResponse);
        this.reservation = httpResponse
        this.reservation.start_date = this.reservation.start_date.slice(0,16)
        this.reservation.end_date = this.reservation.end_date.slice(0,16)
      },
      httpError => console.log(httpError)
    );
    console.log(this.reservation)
    this.status = environment.RESERVATIONS_STATUS;
    this.types = environment.EQUIPMENTS_TYPES;
  }

  saveChange() {
    this.reservationService.updateReservation(this.reservation).subscribe(
      response => this.messages = {error: "", message: "Reservation updated successfully"},
      error => {
        this.messages = {error: "Error while updating reservation", message: ""}
        console.log(error)
      }
    )
  }

}
