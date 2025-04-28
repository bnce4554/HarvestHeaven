import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';


import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';




import {provideHttpClient } from '@angular/common/http';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
      

      providers: [
        provideHttpClient(),
        AuthService,
        {
          provide: ActivatedRoute,
          useValue:{params:of({})}
        }

      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
