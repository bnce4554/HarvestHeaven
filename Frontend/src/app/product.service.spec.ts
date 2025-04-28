import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { of } from 'rxjs';
import { ProductService } from './product.service';
import {provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
     TestBed.configureTestingModule({
      imports: [ProductService],
      providers: [
        provideHttpClient(),
        AuthService,
        {
          provide: ActivatedRoute,
          useValue:{params:of({})}
        }

      ]

    })
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
