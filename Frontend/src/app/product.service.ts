import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Termek } from './models/termek.model';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000/api/termekek';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Termek[]> {
    return this.http.get<Termek[]>(this.apiUrl);
  }
}
