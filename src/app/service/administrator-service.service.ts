import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IBMIContact } from 'src/app/IBMIContact';
import { Observable } from 'rxjs';
import { ParameterBean } from '../parameter-bean';

@Injectable({
  providedIn: 'root'
})
export class AdministratorServiceService {
  private actionUrl: string;
  response: any;
  constructor(private http: HttpClient) {
    this.actionUrl = 'http://localhost:8080/USHCAM';
  }
  getIBMIContactsList(): Observable <HttpResponse<IBMIContact[]>> {
    return this.http.get<IBMIContact[]>(
      this.actionUrl + '/admin/IBMIContacts/viewIBMIContact/', { observe: 'response' });
  }

  editIBMIContact(IBMIid): Observable <HttpResponse<IBMIContact>> {
    return this.http.get<IBMIContact>(
      this.actionUrl + '/admin/IBMIContacts/viewIBMIContact/' + IBMIid, { observe: 'response' });
  }

  getCountryMap(): Observable <HttpResponse<ParameterBean[]>> {
    return this.http.get<ParameterBean[]>(
      this.actionUrl + '/admin/IBMIContacts/viewIBMIContact/countryMap', { observe: 'response' });
  }
}
