import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

//Http Options
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: '*/*',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  services = './../../../assets/JSON/service.json'; // for  JSON

  constructor(private http: HttpClient) { }
  getServices(): Observable<any> {
    return this.http.get<any>(this.services, httpOptions).pipe(catchError(this.handleError)); //Observable
  }


  //Error handling for API Calls
  handleError(error: {
    error: { message: string };
    status: any;
    message: any;
  }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //Get Client side error
      errorMessage = error.error.message;
    } else {
      //Get Server side error
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(error.status);
  }
}
