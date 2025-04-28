import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigacioComponent } from './navigacio.component';

describe('NavigacioComponent', () => {
  let component: NavigacioComponent;
  let fixture: ComponentFixture<NavigacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigacioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
