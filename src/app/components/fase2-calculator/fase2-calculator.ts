// src/app/pages/fase2/fase2-calculator.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TotemService, Estado } from '../../services/totem';

@Component({
  selector: 'app-fase2-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
}
