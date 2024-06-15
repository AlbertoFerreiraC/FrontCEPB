// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Alumno } from './models/alumno.model'; // Importa el modelo de Alumno

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }
  
  getAlumnos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/alumnos/`).pipe(
      catchError(this.handleError)
    );
  }

  // Método para obtener la lista de tutores
  getTutores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tutores/`).pipe(
      catchError(this.handleError)
    );
  }

  // Método para guardar un alumno en la API
  guardarAlumno(alumno: Alumno): Observable<any> {
    const url = `${this.apiUrl}/alumnos/`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Realiza el post con los datos del alumno convertidos a JSON
    return this.http.post<any>(url, JSON.stringify(alumno), httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  // Método para guardar datos genéricos en la API (ejemplo: para otros tipos de datos)
  guardarDatos(datos: any): Observable<any> {
    const url = `${this.apiUrl}/guardar-datos`; // Reemplaza con tu endpoint correcto
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(url, JSON.stringify(datos), httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  // Manejo de errores común para los métodos HTTP
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('Ocurrió un error:', error.error.message);
    } else {
      // El backend devolvió un código de error
      console.error(
        `Código de error ${error.status}, ` +
        `mensaje: ${error.error}`);
    }
    // Devuelve un observable con un mensaje de error
    return throwError('Error en la solicitud. Por favor, intenta nuevamente más tarde.');
  }
}
