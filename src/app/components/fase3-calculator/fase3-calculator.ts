import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TotemService, Estado } from '../../services/totem';
import { FormatFase3Pipe } from '../../pipes/format-maldito-pipe';

@Component({
  selector: 'app-fase3-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule,FormatFase3Pipe],
  templateUrl: './fase3-calculator.html'
})
export class Fase3CalculatorComponent {
  estadoPanda: Estado = "fuego";
  posPanda = 3;

  resultados: any[] = [];
  estadoBoss?: Estado;

  constructor(private totemService: TotemService) {}

  get estados() {
    return this.totemService.estadosFase3;
  }

  calcular() {
    const r = this.totemService.calcular(this.estados, this.estadoPanda, this.posPanda);
    this.resultados = r.resultados;
    this.estadoBoss = r.estadoBoss;
  }

  getEstilo(elemento: string) {
  const mapa: any = {
    'fuego':  { icon: 'fas fa-fire',     css: 'text-orange-600', bg: 'bg-orange-50',  border: 'border-orange-500' },
    'agua':   { icon: 'fas fa-tint',     css: 'text-blue-600',   bg: 'bg-blue-50',    border: 'border-blue-500' },
    'tierra': { icon: 'fas fa-leaf',     css: 'text-green-700',  bg: 'bg-green-50',   border: 'border-green-600' },
    'aire':   { icon: 'fas fa-wind',     css: 'text-sky-400',    bg: 'bg-sky-50',     border: 'border-sky-300' },
    'fuegomaldito':  { icon: 'fas fa-fire',     css: 'text-orange-600', bg: 'bg-orange-50',  border: 'border-orange-500' },
    'aguamaldita':   { icon: 'fas fa-tint',     css: 'text-blue-600',   bg: 'bg-blue-50',    border: 'border-blue-500' },
    'tierramaldita': { icon: 'fas fa-leaf',     css: 'text-green-700',  bg: 'bg-green-50',   border: 'border-green-600' },
    'airemaldito':   { icon: 'fas fa-wind',     css: 'text-sky-400',    bg: 'bg-sky-50',     border: 'border-sky-300' }
  };
  // Valor por defecto por si el elemento no coincide
  return mapa[elemento] || { icon: 'fas fa-question-circle', css: 'text-gray-500', bg: 'bg-gray-100', border: 'border-gray-300' };
}

}
