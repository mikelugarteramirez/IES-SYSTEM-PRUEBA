import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { SystemService } from './services/system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IES-SYSTEMS';
  loading = false;
  constructor(private systemService: SystemService) {
    this.systemService.loading.subscribe(value => {
      this.loading = value;
    })
  }
}
