import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs'
import { SystemService } from './system.service';

@Injectable({providedIn: 'root'})

export class CatalogosService {
    constructor(private http: HttpClient, private systemService: SystemService) {
        this.systemService.setLoading(true);
        this.getCatalogos().subscribe({
            next: value => {
                console.log(value);
                this.systemService.setLoading(false);
            }, error: err => {
                this.catalogos.next([
                    12, 13, 14
                ]);
                this.systemService.setLoading(false);
            }
        })
    }

    private catalogos: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

    get catalogoObserver(): Observable<number[]> {
        return this.catalogos;
    }

    getCatalogos() {
        return this.http.post('http://201.131.20.125/BienesRaicesApi/api/services/app/Catalogo/EstadoCivil', {})
    }
    
}