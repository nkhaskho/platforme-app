import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hardware } from 'src/app/models/tools/hardware';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  API_URL = environment.API_URL+"/tools/hardwares";

  constructor(private http: HttpClient) { }

  addHardware(hardware: Hardware) {
    return this.http.post<Hardware>(`${this.API_URL}/`, hardware);
  }

  getHardwareById(id: any) {
    return this.http.get<Hardware>(`${this.API_URL}/${id}/`);
  }

  deleteHardwareById(id: any) {
    return this.http.delete(`${this.API_URL}/${id}/`);
  }

  getAllHardwares() {
    return this.http.get<Hardware[]>(`${this.API_URL}`);
  }

  updateHardware(hardware: Hardware) {
    return this.http.put<Hardware>(`${this.API_URL}/${hardware.id}/`, hardware);
  }

}
