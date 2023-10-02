import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionInfo } from '../models/session.interface';

@Injectable({providedIn: 'root'})

export class AuthService {

    constructor(private http: HttpClient, private route: Router) { }

    private userName: BehaviorSubject<string> = new BehaviorSubject('');

    private session: BehaviorSubject<SessionInfo|null> = new BehaviorSubject<SessionInfo|null>(null);

    public login(username: string, password: string){
        return this.http.post<SessionInfo>('https://desa.ies-webcontent.com.mx/login', {username, password})
        
    }

    public setSession(userSession: SessionInfo|null): void {
        localStorage.setItem('session', JSON.stringify(userSession));
        this.session.next(userSession)
    }

    public createOfflineSession(): void {
        let userSession = {user: 'OFFLINE', password: 'OFFLINE'};
        localStorage.setItem('session', JSON.stringify(userSession));
        this.session.next(userSession);
    }

    public get getSession(): Observable<SessionInfo|null> {
        return this.session;
    }

    public get getUserName(): Observable<string> {
        return this.userName;
    }

    public setUserName(username: string) {
        this.userName.next(username);
    }

    public get validateSession() {
        let session = localStorage.getItem('session');
        let sessionParse = session ? JSON.parse(session) : null;
        if(sessionParse !== null) {
            if(!!!this.session.value) {
                this.setSession(sessionParse);
            }
            return true;
        }else {
            return false;
        }
    }

    public logout() {
        this.session.next(null);
        localStorage.removeItem('session');
        this.route.navigateByUrl('');
    }
    
}

