import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FeltoltesComponent } from './feltoltes/feltoltes.component';
import { FelhasznaloComponent } from './felhasznalo/felhasznalo.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent},
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'felhasznalo', component: FelhasznaloComponent},
  { path: 'feltoltes', component: FeltoltesComponent},
  { path: 'header', component: HeaderComponent },
  { path: '**', redirectTo: '' },
];

