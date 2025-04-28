import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-felhasznalo',
  imports: [FormsModule, FooterComponent, HeaderComponent],
  templateUrl: './felhasznalo.component.html',
  styleUrl: './felhasznalo.component.css'
})
export class FelhasznaloComponent {

  constructor(protected auth: AuthService) {}

}
