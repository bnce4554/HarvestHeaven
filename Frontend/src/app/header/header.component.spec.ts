import { ComponentFixture, TestBed } from '@angular/core/testing';


import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';




import {provideHttpClient } from '@angular/common/http';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
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

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
