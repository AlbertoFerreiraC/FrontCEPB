import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {
  datos: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.datos = JSON.parse(params['datos']);
    });
  }

  generarPDF() {
    const doc = new jsPDF();
    
  
    // Agregar título y subtítulo con estilos
    doc.setFontSize(18);
    doc.setTextColor(40);
    doc.text('Ficha de Inscripción', 10, 20);
  
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(`Nombre: ${this.datos.nombre}`, 10, 40);
    doc.text(`Apellido: ${this.datos.apellido}`, 10, 50);
    doc.text(`Fecha de Nacimiento: ${this.datos.fechaNacimiento}`, 10, 60);
    doc.text(`Dirección: ${this.datos.direccion}`, 10, 70);
    doc.text(`Teléfono: ${this.datos.telefono}`, 10, 80);
    doc.text(`Correo: ${this.datos.correo}`, 10, 90);
    doc.text(`Fecha de Inscripción: ${this.datos.fechaInscripcion}`, 10, 100);
  
    if (this.datos.tutor) {
      doc.text('Información del Tutor', 10, 120);
      doc.text(`Nombre del Tutor: ${this.datos.tutor.nombre}`, 10, 130);
      doc.text(`Apellido del Tutor: ${this.datos.tutor.apellido}`, 10, 140);
      doc.text(`Teléfono del Tutor: ${this.datos.tutor.telefono}`, 10, 150);
      doc.text(`Correo del Tutor: ${this.datos.tutor.correo}`, 10, 160);
      doc.text(`Dirección del Tutor: ${this.datos.tutor.direccion}`, 10, 170);
      doc.text(`Relación del Tutor: ${this.datos.tutor.relacion}`, 10, 180);
    }
  
    // Usar autoTable para formatear la información del tutor en una tabla
    if (this.datos.tutor) {
      autoTable(doc, {
        startY: 190,
        head: [[' ', 'Datos']],
        body: [
          ['Nombre del Tutor', this.datos.tutor.nombre],
          ['Apellido del Tutor', this.datos.tutor.apellido],
          ['Teléfono del Tutor', this.datos.tutor.telefono],
          ['Correo del Tutor', this.datos.tutor.correo],
          ['Dirección del Tutor', this.datos.tutor.direccion],
          ['Relación del Tutor', this.datos.tutor.relacion]
        ],
      });
    }
  
    // Guardar el PDF
    doc.save('ficha-inscripcion.pdf');
  }
}