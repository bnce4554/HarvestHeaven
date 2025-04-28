import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [FooterComponent, HeaderComponent, NgFor, CommonModule, RouterLink, FormsModule]
})
export class CartComponent implements OnInit {
  kosarTartalom: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.kosarBetoltes();
  }

  kosarBetoltes(): void {
    this.kosarTartalom = this.cartService.getCart();
  }

  darabszamCsokken(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.eltavolitas(item);
    }
  }

  darabszamNo(item: any): void {
    item.quantity++;
  }

  eltavolitas(item: any): void {
    this.kosarTartalom = this.kosarTartalom.filter(cartItem => cartItem !== item);
    this.cartService.updateCart(this.kosarTartalom);
  }

  osszesen(): number {
    return this.kosarTartalom.reduce((total, item) => total + item.ar * item.quantity, 0);
  }
  
  clearCart(): void {
    localStorage.removeItem('cart');
  }

  fizetes(): void {
    if (this.kosarTartalom.length > 0) {
      alert('Fizetés sikeres! 💳');
      this.cartService.clearCart();
      this.kosarBetoltes();
    } else {
      alert('A kosarad üres! 🛒');
    }
  }
  sikeres(): void {
    this.cartService.addToCart(this.kosarTartalom)
    alert(`${this.kosarTartalom} hozzáadva a kosárhoz!`);
  } 
}