import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservations/reservation';
import { ReservationService } from 'src/app/services/reservations/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getAllReservations().subscribe(
      data => this.reservations = data
    )
  }

}
