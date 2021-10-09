import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservations/reservation';
import { UserService } from 'src/app/services/employees/user.service';
import { HardwareService } from 'src/app/services/tools/hardware.service';
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
  hardwares: Record<string,string> = {};

  constructor(private userService: UserService,
              private hardwareService: HardwareService) { }

  async ngOnInit() {
    console.log(this.reservation);
    await this.userService.getAllUsers().subscribe(
      users => {
        console.log(users)
        users.forEach(user => this.users[user.id]=user.username)
      }
    );
    await this.hardwareService.getAllHardwares().subscribe(
      hws => {
        hws.forEach(hw => this.hardwares[hw.id.toString()]=hw.designation)
      }
    )
  }

}
