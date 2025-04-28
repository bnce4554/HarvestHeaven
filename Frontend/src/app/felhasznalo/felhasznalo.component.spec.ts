import { ComponentFixture, TestBed } from '@angular/core/testing';
import {provideHttpClient } from '@angular/common/http';
import { FelhasznaloComponent } from './felhasznalo.component';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('FelhasznaloComponent', () => {
  let component: FelhasznaloComponent;
  let fixture: ComponentFixture<FelhasznaloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FelhasznaloComponent],
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

    fixture = TestBed.createComponent(FelhasznaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
