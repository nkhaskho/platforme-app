import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericFunction } from 'src/app/models/tools/generic-function';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericFunctionService {

  API_URL = environment.API_URL + "/tools/gfunctions";

  constructor(private http: HttpClient) { }

  addGenFunction(gFunction: GenericFunction) {
    return this.http.post<GenericFunction>(`${this.API_URL}/`, gFunction);
  }

  getGenFunctionById(GenFunctionId: any) {
    return this.http.get<GenericFunction>(`${this.API_URL}/${GenFunctionId}/`);
  }

  updateGenFunction(gFunction: GenericFunction) {
    return this.http.put<GenericFunction>(`${this.API_URL}/${gFunction.id}/`, gFunction);
  }

  getAllGenFunctions() {
    return this.http.get<GenericFunction[]>(`${this.API_URL}/`);
  }

  deleteGenFunction(gFunctionId: any) {
    return this.http.delete(`${this.API_URL}/${gFunctionId}/`);
  }

}
