import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalInputComponent } from 'src/app/shared-components/components/modal-input/modal-input.component';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class AuthWelcomePageComponent implements OnInit {
  constructor(private authService: AuthService, public dialog: MatDialog) { }

  name: string = '';
  firstText: string = ' Bienvenido a mi portal.';
  secondText: string = 'Nos podrías indicar tu nombre';
  thrithText: string = 'El nombre ingresado es';
  buttonText: string = 'Escribe tu nombre.';

  ngOnInit() {
    this.authService.getUserName.subscribe((value) => {
      this.name = value;
    })
  }

  captureName() {
    const dialogRef = this.dialog.open(ModalInputComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      this.authService.setUserName(result);
    });
  }


}
