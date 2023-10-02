import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'shared-navbar',
    templateUrl: 'navbar.component.html'
})

export class NavBarComponent {
    constructor(private authService: AuthService) { }

    logout() {
        this.authService.logout();
    }

}