import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Alumno } from './models/alumno.model';
import { Tutor } from './models/tutor.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getAlumnos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/alumnos/`).pipe(
      catchError(this.handleError)
    );
  }

  getTutores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tutores/`).pipe(
      catchError(this.handleError)
    );
  }

  guardarAlumno(alumno: Alumno): Observable<any> {
    const url = `${this.apiUrl}/alumnos/`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(url, alumno, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  guardarTutor(tutor: Tutor): Observable<any> {
    const url = `${this.apiUrl}/tutores/`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(url, tutor, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Error del lado del cliente:', error.error.message);
    } else {
      console.error(
        `Error del lado del servidor ${error.status}, ` +
        `mensaje: ${error.error}`
      );
    }
    return throwError('Ocurrió un error. Por favor, intenta nuevamente.');
  }
}
