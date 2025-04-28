import { ComponentFixture, TestBed } from '@angular/core/testing';
import {provideHttpClient } from '@angular/common/http';
import { CartComponent } from './cart.component';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent],
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

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
