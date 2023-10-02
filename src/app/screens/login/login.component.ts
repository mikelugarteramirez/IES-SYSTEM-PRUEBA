import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalInfoComponent } from 'src/app/shared-components/components/modal-info/modal-info.component';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, public dialog: MatDialog, private router: Router, private systemService: SystemService) {
  }

  form = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  })

  login(formValue: any) {
    this.systemService.setLoading(true);
    this.authService.login(formValue.username, formValue.password)
    .subscribe({
      next: (value) => {
        this.authService.setSession(value);
        this.router.navigateByUrl('/session');
        this.systemService.setLoading(false);
      },
      error: () => {
        this.systemService.setLoading(false);
        this.openMessage();
      }
    })
  }

  openMessage() {
    const dialogRef = this.dialog.open(ModalInfoComponent, {
      data: {
        message: 'Extiste un error en el servicio de autenticación, ¿desea tener una sesíon de invitado?',
        title: 'Error de autenticación',
        status: 'error',
        buttonSubmitText: 'Sesión de invitado',
        buttonCancelText: 'No'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.authService.createOfflineSession();
      this.router.navigateByUrl('/session');
    });
  }
}
