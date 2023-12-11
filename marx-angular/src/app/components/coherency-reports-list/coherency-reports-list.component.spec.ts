import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoherencyReportsListComponent } from './coherency-reports-list.component';

describe('CoherencyReportsListComponent', () => {
  let component: CoherencyReportsListComponent;
  let fixture: ComponentFixture<CoherencyReportsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoherencyReportsListComponent]
    });
    fixture = TestBed.createComponent(CoherencyReportsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
