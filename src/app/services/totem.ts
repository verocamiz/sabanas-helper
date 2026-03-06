// src/app/services/totem.service.ts
import { Injectable } from '@angular/core';

export type Estado =
  | "fuego"
  | "agua"
  | "tierra"
  | "aire"
  | "fuegomaldito"
  | "aguamaldita"
  | "tierramaldita"
  | "airemaldito";

@Injectable({
  providedIn: 'root'
})
export class TotemService {

  // Estados por fase
  estadosFase2: Estado[] = [
    "fuego",
    "agua",
    "tierra",
    "aire"
  ];

  estadosFase3: Estado[] = [
    "fuego","fuegomaldito",
    "agua","aguamaldita",
    "tierra","tierramaldita",
    "aire","airemaldito"
  ];

  // Debilidades
  debilidades: Record<string, Estado> = {
    fuego: "agua",
    fuegomaldito: "agua",
    agua: "fuego",
    aguamaldita: "fuego",
    tierra: "aire",
    tierramaldita: "aire",
    aire: "tierra",
    airemaldito: "tierra"
  };

  // Rotar estado según pasos
  rotarEstado(estados: Estado[], estadoActual: Estado, pasos: number): Estado {
    const idx = estados.indexOf(estadoActual);
    return estados[(idx + pasos + estados.length) % estados.length];
  }

  // Calcular posicionamientos
  calcular(estados: Estado[], estadoPanda: Estado, posPanda: number) {
    const numPosicionamientos = 6 - posPanda;
    const resultados: any[] = [];

    for (let i = 1; i <= numPosicionamientos; i++) {
      const estadoEnemigo = this.rotarEstado(estados, estadoPanda, i);
      const estadoNecesario = this.debilidades[estadoEnemigo];
      const totemIdeal = this.rotarEstado(estados, estadoNecesario, -i);

      resultados.push({
        aliado: posPanda + i,
        estadoEnemigo,
        estadoNecesario,
        totemIdeal
      });
    }

    const estadoBoss = this.rotarEstado(estados, estadoPanda, numPosicionamientos + 1);

    return { resultados, estadoBoss };
  }
}
