import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card'; 
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [MatCardModule, HeaderComponent, FooterComponent, HeaderComponent]
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToShop() {
    this.router.navigate(['/shop']);
  }
}
