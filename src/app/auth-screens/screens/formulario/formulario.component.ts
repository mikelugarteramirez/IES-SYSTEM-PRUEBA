import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { lastSpaceValidator } from 'src/app/validators/last-space.validator';
import { ThemePalette } from '@angular/material/core';

@Component({
    selector: 'auth-formulario',
    templateUrl: 'formulario.component.html',
    styleUrls: ['formulario.component.css']
})

export class AuthFormularioComponent {
    constructor(private catService: CatalogosService) {
        this.catService.catalogoObserver.subscribe(value => {
            this.estadoCivilOptions = value;
        })
    }

    color: ThemePalette = "warn";

    printData: any = '';

    estadoCivilOptions: number[] = [];

    form = new FormGroup({
        nombres: new FormControl(null, [Validators.required, lastSpaceValidator()]),
        apellidos: new FormControl(null, [Validators.required, lastSpaceValidator()]),
        fumas: new FormControl<null | boolean>(null, [Validators.required]),
        actualmentePracticasLectura: new FormControl<null | boolean>(null, [Validators.required]),
        estadoCivil: new FormControl(null),
        librosLeidosUltimosTresMeses: new FormArray([
            new FormControl({value: null, disabled: true}, [])
        ])
    });

    get librosLeidosFormArray() {
        return this.form.controls.librosLeidosUltimosTresMeses;
    }
    
    get actualmentePracticasLecturaControl() {
        return this.form.controls.actualmentePracticasLectura;
    }

    get validatorsFormArrayLibrosLeidos() {
        if(this.actualmentePracticasLecturaControl.value) {
            return [Validators.required];
        } else {
            return [];
        }
    }

    agregarLibroLeido() {
        this.librosLeidosFormArray.push(
            new FormControl({value: null, disabled: !this.actualmentePracticasLecturaControl.value}, this.validatorsFormArrayLibrosLeidos)
        );
    }

    eliminarLibroLeido(index: number) {
        this.librosLeidosFormArray.removeAt(index);
    }

    actualmentePracticasLecturaEventChange() {
        console.log(this.actualmentePracticasLecturaControl.value);
        this.librosLeidosFormArray.controls.forEach(control => {
            console.log(this.validatorsFormArrayLibrosLeidos);
            if(this.actualmentePracticasLecturaControl.value) {
                control.enable();
                control.addValidators(this.validatorsFormArrayLibrosLeidos);
            }else {
                control.disable();
                control.clearValidators();
            }
        })
    }

    enviarInfo() {
        this.printData = this.form.value;
    }
}