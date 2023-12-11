import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoherencyReportComponent } from './add-coherency-report.component';

describe('AddCoherencyReportComponent', () => {
  let component: AddCoherencyReportComponent;
  let fixture: ComponentFixture<AddCoherencyReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCoherencyReportComponent]
    });
    fixture = TestBed.createComponent(AddCoherencyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
