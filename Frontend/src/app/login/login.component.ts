import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  imports: [FormsModule, FooterComponent, HeaderComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = {nev: '', jelszo: '', telefonszam: '', adoszam: '', felhasznaloTipus: '' };  message: string = '';

  constructor(private auth: AuthService) {}
  login() {
    this.auth.login(this.user).subscribe({
      next: () => {
        alert('Sikeres bejelentkezés!');
      },
    });
  }
  logout() {
    this.auth.logout();
    alert('Kijelentkezés sikeres!');
  }
  
}
