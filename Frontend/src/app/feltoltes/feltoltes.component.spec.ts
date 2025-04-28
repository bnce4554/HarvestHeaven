import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';




import {provideHttpClient } from '@angular/common/http';

import { FeltoltesComponent } from './feltoltes.component';

describe('FeltoltesComponent', () => {
  let component: FeltoltesComponent;
  let fixture: ComponentFixture<FeltoltesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeltoltesComponent],
      

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

    fixture = TestBed.createComponent(FeltoltesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
