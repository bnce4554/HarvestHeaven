import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  imports: [FormsModule, FooterComponent, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = { nev_v_cegnev: '', jelszo: '', telefonszam: '', adoszam: '', felhasznalo_tipus: '' };  message: string = '';

  constructor(private auth: AuthService) {}
  login() {
    this.auth.login(this.user.nev_v_cegnev, this.user.jelszo).subscribe({
      next: () => {
        this.message = 'Sikeres bejelentkezés!';
      },

    });
  }
}
