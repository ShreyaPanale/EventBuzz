import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHNICALComponent } from './technical.component';

describe('TECHNICALComponent', () => {
  let component: TECHNICALComponent;
  let fixture: ComponentFixture<TECHNICALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHNICALComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHNICALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
