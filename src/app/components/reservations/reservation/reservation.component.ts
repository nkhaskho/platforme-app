import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservations/reservation';
import { UserService } from 'src/app/services/employees/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  @Input() reservation: Reservation = new Reservation();
  states: Record<string, any> = {
    "PROJECT_MANAGER": "Project manager",
    "TEAM_LEADER": "Team leader",
    "TEAM_MEMBER": "Team member"
  }
  reservationStates = environment.RESERVATIONS_STATUS;
  users: Record<string,string> = {};

  constructor(private userService: UserService) { }

  async ngOnInit() {
    console.log(this.reservation);
    await this.userService.getAllUsers().subscribe(
      users => {
        console.log(users)
        users.forEach(user => this.users[user.id]=user.username)
      }
    );
  }

}
