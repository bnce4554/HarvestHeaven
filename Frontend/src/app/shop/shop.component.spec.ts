import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';
import { ShopComponent } from './shop.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import {provideHttpClient } from '@angular/common/http';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopComponent],
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

    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
