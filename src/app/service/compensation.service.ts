import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { CreateCompensation } from '../model/create-compensation';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CompensationDTO } from '../CompensationDTO';

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
 
  getEmployeeDetails(createComp:any) {
    return this.httpClient.post(this.url+"/getEmployeeDetails",createComp, {
      observe: "response"
    })
    .pipe(catchError(this.handleError));
  }

  createCompensation(): Observable <HttpResponse<CompensationDTO>> {
    return this.httpClient.get<CompensationDTO>(this.url+"/createCompReq", {
      observe: "response"
    })
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
