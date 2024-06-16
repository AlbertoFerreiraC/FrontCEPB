// data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, forkJoin } from 'rxjs';
import { catchError,  mergeMap, map  } from 'rxjs/operators';

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

  getTutorAlumno(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tutores/alumnos/`).pipe(
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
 guardarRelacionAlumnoTutor(data: any): Observable<any> {
    const url = `${this.apiUrl}/tutores/alumnos/`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(url, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

// Método para crear una inscripción en el backend
crearInscripcion(data: any): Observable<any> {
  const url = `${this.apiUrl}/create/`; // Asegúrate de que coincida con tu URL en Django
  return this.http.post<any>(url, data).pipe(
    catchError((error: any) => {
      throw error;  // Propaga el error hacia arriba
    })
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
      // Error del lado del cliente
      console.error('Error del lado del cliente:', error.error.message);
    } else {
      // Error del lado del servidor
      console.error(
        `Error del lado del servidor ${error.status}, ` +
        `mensaje: ${JSON.stringify(error.error)}`
      );
    }
    return throwError('Ocurrió un error. Por favor, intenta nuevamente.');
  }
}
