import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ASDFAHUf8708asdfQRWTqt@B'   // ASDFAHUf8708asdfQRWTqt@B it random token, take later
      })
    }

    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a", httpOptions)
    .pipe(catchError(
      (err) => {
      console.log(">> Error: ", err);
      return throwError("Error: ")
    })) ;
  }

}
