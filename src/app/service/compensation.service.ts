import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { CreateCompensation } from '../model/create-compensation';
import { CompensationDTO } from '../CompensationDTO';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CompensationDetailsDTO } from '../CompensationDetailsDTO';
import { HCAMDBUser } from '../HCAMDBUser';

@Injectable({
  providedIn: 'root'
})
export class CompensationService {

  private url: string;
  response: any;
  private errorStatus: string;
  responseList: any;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8080/USHCAM';
  }

  getEmployeeDetails(createComp: any) {
    return this.httpClient.post(this.url +'/getEmployeeDetails', createComp, {
      observe: 'response'
    })
    .pipe(catchError(this.handleError));
  }

  createCompensation(): Observable <HttpResponse<CompensationDTO>> {
    return this.httpClient.get<CompensationDTO>(this.url +'/createCompReq', {
      observe: 'response'
    });
  }

  getCompensationList(pemUser: HCAMDBUser) { //: Observable <HttpResponse<CompensationDetailsDTO[]>> {
    // const params = new HttpParams().set('cnumID', pemUser.cnumID).set('notesId',pemUser.notesId).set('blueGroupName',pemUser.blueGroupName[0],pemUser.blueGroupName[1]);
    // return this.httpClient.get<CompensationDetailsDTO[]>(this.url + '/compList',  {observe: 'response'})
    //   .pipe(catchError(this.handleError));
    return this.httpClient.post(this.url + '/compList', pemUser, {observe: 'response'})
      .pipe(catchError(this.handleError));

    // return this.responseList;
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
