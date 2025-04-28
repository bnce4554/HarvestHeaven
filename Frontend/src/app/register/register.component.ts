import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, NgModel } from '@angular/forms';
import { User } from '../models/user.model';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-register',
  imports: [FormsModule, FooterComponent, HeaderComponent,MatButtonToggle,MatButtonToggleGroup],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user:User = {nev:'',adoszam:'',telefonszam:'',jelszo:'',felhasznaloTipus:''}
  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/login']);
      },

    });
  }
}
