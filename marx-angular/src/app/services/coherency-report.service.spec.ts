import { TestBed } from '@angular/core/testing';

import { CoherencyReportService } from './coherency-report.service';

describe('CoherencyReportService', () => {
  let service: CoherencyReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoherencyReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
