// src/app/pages/fase2/fase2-calculator.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { TotemService, Estado } from '../../services/totem';

@Component({
  selector: 'app-fase2-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule,TitleCasePipe],
  templateUrl: './fase2-calculator.html'
})
export class Fase2CalculatorComponent {
  estadoPanda: Estado = "fuego";
  posPanda = 3;

  resultados: any[] = [];
  estadoBoss?: Estado;

  constructor(private totemService: TotemService) {}

  get estados() {
    return this.totemService.estadosFase2;
  }

  calcular() {
    const r = this.totemService.calcular(this.estados, this.estadoPanda, this.posPanda);
    this.resultados = r.resultados;
    this.estadoBoss = r.estadoBoss;
  }

  // Define el mapeo de estilos e iconos (Ajustado a Font Awesome v5)
getEstilo(elemento: string) {
  const mapa: any = {
    'fuego':  { icon: 'fas fa-fire',     css: 'text-orange-600', bg: 'bg-orange-50',  border: 'border-orange-500' },
    'agua':   { icon: 'fas fa-tint',     css: 'text-blue-600',   bg: 'bg-blue-50',    border: 'border-blue-500' },
    'tierra': { icon: 'fas fa-leaf',     css: 'text-green-700',  bg: 'bg-green-50',   border: 'border-green-600' },
    'aire':   { icon: 'fas fa-wind',     css: 'text-sky-400',    bg: 'bg-sky-50',     border: 'border-sky-300' }
  };
  // Valor por defecto por si el elemento no coincide
  return mapa[elemento] || { icon: 'fas fa-question-circle', css: 'text-gray-500', bg: 'bg-gray-100', border: 'border-gray-300' };
}
}
