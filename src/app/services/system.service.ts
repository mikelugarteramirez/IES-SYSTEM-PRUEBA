import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SystemService {
    constructor() { }

    public loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

    setLoading(status: boolean) {
        this.loading.next(status);
    }

    
}