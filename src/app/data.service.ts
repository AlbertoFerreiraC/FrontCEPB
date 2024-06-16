// data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:8000'; // Ajusta según tu configuración

  constructor(private http: HttpClient) {}

  // Método para obtener la lista de alumnos desde el backend
  getAlumnos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/alumnos/`).pipe(
      catchError(this.handleError)
    );
  }

  // Método para obtener la lista de tutores desde el backend
  getTutores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tutores/`).pipe(
      catchError(this.handleError)
    );
  }

  // Método para guardar un nuevo alumno en el backend
  guardarAlumno(alumno: any): Observable<any> {
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

  // Método para guardar un nuevo tutor en el backend
  guardarTutor(tutor: any): Observable<any> {
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

  // Método para guardar la relación Alumno-Tutor en el backend
  guardarRelacionAlumnoTutor(alumnoId: number, tutorId: number): Observable<any> {
    const url = `${this.apiUrl}/tutores/tutoralumno/`; // URL según tu configuración
    const body = { alumno: alumnoId, tutor: tutorId };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(url, body, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

   // Método para obtener la lista de tutores desde el backend
   getRelacionesTutorAlumno(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tutores/tutoralumno/`).pipe(
      catchError(this.handleError)
    );
  }

  getInscripciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/inscripciones/create/`).pipe(
      catchError(this.handleError)
    );
  }

  // Método de manejo de errores genérico
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
