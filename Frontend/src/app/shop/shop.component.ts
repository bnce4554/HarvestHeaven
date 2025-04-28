import { Component, Injectable, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Termek } from '../models/termek.model';
import { HttpdataService } from '../httpdata.service';
import { NgFor } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { CartService } from '../cart.service';


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  imports:[ NgFor, MatCardModule, MatButtonModule, MatToolbarModule, CommonModule, FooterComponent, HeaderComponent]
})

export class ShopComponent implements OnInit {
  termekek: Termek[] = [];

  constructor(private httpService: HttpdataService, private cartService: CartService) {}

  ngOnInit(): void {
    this.loadtermek();
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

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.name} hozzáadva a kosárhoz!`);
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
