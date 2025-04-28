import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { Observable } from 'rxjs';
import { Termek} from './models/termek.model';
import { Rendelesek } from './models/rendelesek.model';
import { Hirdetes } from './models/hirdetes.model';

@Injectable({
  providedIn: 'root'
})
export class HttpdataService {
  constructor(private http: HttpClient) { }

  getfelhasznalo(): Observable<User[]>
  {
    return this.http.get<User[]>("http://127.0.0.1:8000/api/felhasznalok");
  }

  gettermek(): Observable<Termek[]>
  {
    return this.http.get<Termek[]>("http://127.0.0.1:8000/api/termekek");
  }
  gethirdetes(): Observable<Hirdetes[]>
  {
    return this.http.get<Hirdetes[]>("http://127.0.0.1:8000/api/hirdetesek");
  }
  getrendelesek(): Observable<Rendelesek[]>
  {
    return this.http.get<Rendelesek[]>("http://127.0.0.1:8000/api/rendelesek");
  }

}