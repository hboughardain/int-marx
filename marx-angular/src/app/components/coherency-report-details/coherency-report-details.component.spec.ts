import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoherencyReportDetailsComponent } from './coherency-report-details.component';

describe('CoherencyReportDetailsComponent', () => {
  let component: CoherencyReportDetailsComponent;
  let fixture: ComponentFixture<CoherencyReportDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoherencyReportDetailsComponent]
    });
    fixture = TestBed.createComponent(CoherencyReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
