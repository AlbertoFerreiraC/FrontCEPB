import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service'; // Asegúrate de importar tu servicio DataService

@Component({
  selector: 'app-ficha-inscripcion',
  templateUrl: './ficha-inscripcion.component.html',
  styleUrls: ['./ficha-inscripcion.component.css']
})
export class FichaInscripcionComponent implements OnInit {
  inscripcionesSeleccionadas: any[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['inscripciones']) {
        const inscripciones = JSON.parse(params['inscripciones']);
        this.inscripcionesSeleccionadas = inscripciones.map(inscripcion => ({
          alumno: inscripcion.alumno,
          apellido: inscripcion.apellido,
          cedula: inscripcion.cedula,
          tutor: inscripcion.tutor,
          fecha_inscripcion: inscripcion.fecha_inscripcion,
          nivel: inscripcion.nivel,
          grado: inscripcion.grado,
          arancel: inscripcion.arancel,
          cuota: inscripcion.cuota,
          turno: inscripcion.turno,
          matricula: inscripcion.matricula
        }));
      }
    });
  }

  generarPagarePDF(id: number) {
    this.dataService.generarPagarePDF(id).subscribe(
      (pdfBlob: Blob) => {
        this.descargarPDF(pdfBlob, `pagare_${id}.pdf`);
      },
      (error) => {
        console.error('Error al generar PDF de pagare:', error);
        // Manejo de errores: podrías mostrar un mensaje al usuario si lo deseas
      }
    );
  }

  generarFichaInscripcionPDF(id: number) {
    this.dataService.generarFichaInscripcionPDF(id).subscribe(
      (pdfBlob: Blob) => {
        this.descargarPDF(pdfBlob, `ficha_${id}.pdf`);
      },
      (error) => {
        console.error('Error al generar PDF de ficha de inscripción:', error);
        // Manejo de errores: podrías mostrar un mensaje al usuario si lo deseas
      }
    );
  }

  generarContratoPDF(id: number) {
    this.dataService.generarContratoPDF(id).subscribe(
      (pdfBlob: Blob) => {
        this.descargarPDF(pdfBlob, `contrato_${id}.pdf`);
      },
      (error) => {
        console.error('Error al generar PDF de contrato:', error);
        // Manejo de errores: podrías mostrar un mensaje al usuario si lo deseas
      }
    );
  }

  descargarPDF(pdfBlob: Blob, nombreArchivo: string) {
    const url = window.URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    a.href = url;
    a.download = nombreArchivo;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
