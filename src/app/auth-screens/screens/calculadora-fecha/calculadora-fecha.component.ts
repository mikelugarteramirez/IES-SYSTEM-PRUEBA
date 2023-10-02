import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'auth-calculadora-fecha',
    templateUrl: 'calculadora-fecha.component.html'
})

export class AuthCalculadoraFechaComponent {
    constructor() { }

    unidades = [
        'año',
        'mes',
        'dia'
    ];

    datePicker = new FormControl(null);
    unidad = new FormControl(null);
    cantidad = new FormControl(null);

    fechaCalculada: Date = new Date;

    change(value: any) {
        if(this.datePicker.value && this.unidad.value && this.cantidad.value) {
            this.fechaCalculada = new Date(this.datePicker.value);
            if(this.unidad.value === 'año') this.fechaCalculada.setFullYear(this.fechaCalculada.getFullYear() + this.cantidad.value);
            if(this.unidad.value === 'mes') this.fechaCalculada.setMonth(this.fechaCalculada.getMonth() + this.cantidad.value);
            if(this.unidad.value === 'dia') this.fechaCalculada.setHours(this.fechaCalculada.getHours() + (this.cantidad.value * 24));
        }
    }
}