import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateCompensation } from '../model/create-compensation';

@Injectable({
  providedIn: 'root'
})
export class CompensationService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8080/USHCAM';
  }

  createCompensation(){
    return this.httpClient.get<CreateCompensation>(this.url+"/createCompReq", {
      observe: "response"
    })
  }
  
}
