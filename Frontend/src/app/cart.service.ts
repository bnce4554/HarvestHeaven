import { Injectable } from '@angular/core';
import { Termek } from './models/termek.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'shopping_cart';

  constructor() {}
 /* stored:Termek[] = [];
  storeItem(itemToStore:Termek):any{
    this.stored.push(itemToStore)
  }
  getCart(){
    return this.stored;
  }
  clearCart(){
    this.stored = [];
  }*/
  getCart(): any[] {
    const cart = localStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : [];
  }

  updateCart(cartItems: any[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
  }

  addToCart(product: any): void {
    const cart = this.getCart();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    this.updateCart(cart);
  }

  clearCart(): void {
    localStorage.removeItem(this.cartKey);
  }
}