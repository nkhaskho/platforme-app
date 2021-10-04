import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from 'src/app/models/reservations/reservation';
import { EquipmentType } from 'src/app/models/tools/equipment-type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getReservationById(reservationId: number) {
    return this.http.get<Reservation>(`${this.API_URL}/reservations/${reservationId}`);
  }

  updateReservation(reservation: Reservation) {
    return this.http.put<Reservation>(`${this.API_URL}/reservations/${reservation.id}/`, reservation);
  }

  getAllReservations() {
    return this.http.get<Reservation[]>(`${this.API_URL}/reservations`);
  }

}
