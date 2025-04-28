import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, NgModel } from '@angular/forms';
import { Termek } from '../models/termek.model';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { HttpdataService } from '../httpdata.service';

@Component({
  selector: 'app-feltoltes',
  imports: [FormsModule, FooterComponent, HeaderComponent,MatButtonToggle,MatButtonToggleGroup],
  templateUrl: './feltoltes.component.html',
  styleUrl: './feltoltes.component.css'
})
export class FeltoltesComponent {
    termekek:Termek = {termek_nev:'',ar:0,kategoria:'',szarmazasi_orszag:'',minoseg:'',kep:''}
    constructor(private httpService: HttpdataService, private authService: AuthService, private router: Router) {}

  feltolt(){
    this.httpService.feltolt(this.termekek).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/shop']);
      },

    });
  }

}
