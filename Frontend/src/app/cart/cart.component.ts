import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [FooterComponent, HeaderComponent, NgFor, CommonModule]
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
    return this.kosarTartalom.reduce((total, item) => total + item.price * item.quantity, 0);
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
}