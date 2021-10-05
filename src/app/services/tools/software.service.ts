import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Software } from 'src/app/models/tools/software';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {

  API_URL = environment.API_URL+"/tools/softwares";

  constructor(private http: HttpClient) { }

  addSoftware(software: Software) {
    return this.http.post<Software>(`${this.API_URL}/`, software);
  }

  getSoftwareById(id: number) {
    let httpHeader = new HttpHeaders().set("Authorization", `bearer ${localStorage.getItem("access")}`)
    return this.http.get<Software>(`${this.API_URL}/${id}`, {headers: httpHeader});
  }

  getAllSoftwares() {
    return this.http.get<Software[]>(`${this.API_URL}`);
  }

  deleteSoftware(id: any) {
    return this.http.delete<Software>(`${this.API_URL}/${id}`);
  }

}
