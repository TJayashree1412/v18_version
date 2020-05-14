import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { CreateCompensation } from '../model/create-compensation';
import { CompensationDTO } from '../CompensationDTO';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompensationService {

  private url: string;
  response: any;
  private errorStatus: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8080/USHCAM';
  }
 

  createCompensation(): Observable <HttpResponse<CompensationDTO>> {
    return this.httpClient.get<CompensationDTO>(this.url+"/createCompReq", {
      observe: "response"
    })
  }

  getCompensationList(): Observable<HttpResponse<CompensationDTO>> {
    return this.httpClient.get<CompensationDTO>(this.url + '', {
      observe: 'response'})
      .pipe(catchError(this.handleError));
  }
  

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occured :', error.error.message);
    } else {
      this.errorStatus = `${error.status}`;
    }
    return throwError(this.errorStatus);
  }
}
