import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  generalUrl = 'http://localhost:8080/api'

  constructor(private httpClient: HttpClient) {}
  
  getStatus():Observable<any>{
    return this.httpClient.get('http://localhost:8080/api/availableParking');
  }

  createVehicle(body:any):Observable<any>{
    return this.httpClient.post('http://localhost:8080/vehicle', body);
  }
}
