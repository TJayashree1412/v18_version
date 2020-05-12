import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { CreateCompensation } from '../model/create-compensation';
import { Observable } from 'rxjs';
import { CompensationDTO } from '../CompensationDTO';

@Injectable({
  providedIn: 'root'
})
export class CompensationService {

  private url: string;
  response: any;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8080/USHCAM';
  }
 

  createCompensation(): Observable <HttpResponse<CompensationDTO>> {
    return this.httpClient.get<CompensationDTO>(this.url+"/createCompReq", {
      observe: "response"
    })
  }

  
  
}
