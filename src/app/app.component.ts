import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Contenedor } from './models/contenedor';
import { Etiqueta } from './models/etiqueta';
import { Qr } from './models/qr';
import { CdkDragEnter, CdkDragEnd, CdkDrag, CdkDragMove } from '@angular/cdk/drag-drop';
import { EventEmitter } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  contenedor: Contenedor = new Contenedor()
  // etiquetas: Etiqueta[] = []
  etic_uno = new Etiqueta();
  etic_dos = new Etiqueta();
  etic_tres = new Etiqueta();
  etic_cuatro = new Etiqueta();
  etic_cinco = new Etiqueta();
  edicion: boolean = true
  @ViewChild('uno', { static: true }) uno: ElementRef<CdkDrag>;
  @ViewChild('dos', { static: true }) dos: ElementRef;
  @ViewChild('tres', { static: true }) tres: ElementRef;
  @ViewChild('cuatro', { static: true }) cuatro: ElementRef;
  @ViewChild('cinco', { static: true }) cinco: ElementRef;
  @ViewChild('tarjeta', { static: true }) tarjeta: ElementRef;
  unoo = {}
  moviendo: boolean = true;
  valores: number[] = [
    9, 10, 11, 12, 13, 14, 15, 16, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27
  ]
  fuentes: string[] = [
    'Monaco', 'Georgia', 'Times', 'serif'
  ]
  selectedEtiqueta = new Etiqueta()
  qr: Qr = new Qr()
  constructor(private rendered: Renderer2) {
  }
  ngOnInit() {

  }
  // funciona para saber en que posicion estan los Drag y guardarla
  seMovio(e: CdkDragEnd, tipo: string) {
    switch (tipo) {
      case 'uno':
        this.etic_uno = { ...this.etic_uno, posx: e.source.getFreeDragPosition().x, posy: e.source.getFreeDragPosition().y }
        break;
      case 'dos':
        this.etic_dos = { ...this.etic_dos, posx: e.source.getFreeDragPosition().x, posy: e.source.getFreeDragPosition().y }
        break;
      case 'tres':
        this.etic_tres = { ...this.etic_tres, posx: e.source.getFreeDragPosition().x, posy: e.source.getFreeDragPosition().y }
        break;
      case 'cuatro':
        this.etic_cuatro = { ...this.etic_cuatro, posx: e.source.getFreeDragPosition().x, posy: e.source.getFreeDragPosition().y }
        break;
      case 'cinco':
        this.etic_cinco = { ...this.etic_cinco, posx: e.source.getFreeDragPosition().x, posy: e.source.getFreeDragPosition().y }
        break;
      case 'qr':
        this.contenedor = { ...this.contenedor, qrx: e.source.getFreeDragPosition().x, qry: e.source.getFreeDragPosition().y }
        break;
      default:
        break;
    }
    // console.log(e, tipo)
  }
  async activarPdf() {
    await html2canvas(this.tarjeta.nativeElement).then(async canvas => {
      // Few necessary setting options
      var imgWidth = 108;
      var pageHeight = 48;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = await canvas.toDataURL('image/png')
      let pdf = await new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      await pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, pageHeight)
      await pdf.save('MYPdf.pdf'); // Generated PDF
    });
  }
  getStyles(etiqueta: Etiqueta) {
    return {
      'font-style': etiqueta.cursiva ? 'italic' : 'none',
      'font-weight': etiqueta.negrita ? 'bold' : 'none',
      'font-decoration': etiqueta.cursiva ? 'underline' : 'none',
      'font-size': etiqueta.tamano + 'px',
      'font-family': etiqueta.fuente,
      'box-shadow': !this.edicion ? 'none' : '0 1px 1px 1px #ccc'
    }
  }
  activarEtiqueta(tipo: string) {
    switch (tipo) {
      case 'uno':
        this.selectedEtiqueta = Object.assign(this.etic_uno, {})
        break;
      case 'dos':
        this.selectedEtiqueta = Object.assign(this.etic_dos, {})
        break;
      case 'tres':
        this.selectedEtiqueta = Object.assign(this.etic_tres, {})
        break;
      case 'cuatro':
        this.selectedEtiqueta = Object.assign(this.etic_cuatro, {})
        break;
      case 'cinco':
        this.selectedEtiqueta = Object.assign(this.etic_cinco, {})
        break;
      default:
        break;
    }
  }

}
