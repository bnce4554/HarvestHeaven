import { Component, Injectable, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Termek } from '../models/termek.model';
import { HttpdataService } from '../httpdata.service';
import { NgFor } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { CartService } from '../cart.service';
import { User } from '../models/user.model';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  imports:[NgFor,MatButtonToggleGroup,MatButtonToggle, MatCardModule, MatButtonModule, MatToolbarModule, CommonModule, FooterComponent, HeaderComponent, FormsModule]
})

 export class ShopComponent{
  termekek: Termek[] = [];
  felhasznalo: User[] = [];
  szurtTermek: Termek[] = [];
  kivalasztottKategoria:string = "Minden termék";
  keresesTermek: Termek[] = [];
  rendezesTermek: Termek[] = [];
  kategoria: Termek[] = [];

  constructor(private httpService: HttpdataService, private cartService: CartService) {}


  ngOnInit(): void {
    this.httpService.gettermek().subscribe(data => {
      this.termekek = data;
      console.log(data);
    });
  }
  

  loadtermek(): void {
    this.httpService.gettermek().subscribe(
      (data: Termek[]) => {
        this.termekek = data;
      },
      (error) => {
        console.error("Hiba történt a termékek betöltésekor:", error);
      }
    );
  }
  addToCart(product: Termek): void {
    //this.cartService.addToCart(product);
    this.cartService.addToCart(product)
    alert(`${product.termek_nev} hozzáadva a kosárhoz!`);
  } 
  termekSzures(): void {
    this.szurtTermek=[];
    for (let i = 0; i < this.termekek.length; i++) {
      if (this.kivalasztottKategoria == this.termekek[i].kategoria) {
        this.szurtTermek.push(this.termekek[i]);
      }
      
    }
  }
}

 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ]
})

export class ShopModule {}
