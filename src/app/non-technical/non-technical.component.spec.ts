import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NONTECHNICALComponent } from './non-technical.component';

describe('NONTECHNICALComponent', () => {
  let component: NONTECHNICALComponent;
  let fixture: ComponentFixture<NONTECHNICALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NONTECHNICALComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NONTECHNICALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
