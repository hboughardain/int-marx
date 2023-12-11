import { Component, Input, OnInit } from '@angular/core';
import { CoherencyReportService } from 'src/app/services/coherency-report.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CoherencyReport } from 'src/app/models/coherency-report.model';

@Component({
  selector: 'app-coherency-report-details',
  templateUrl: './coherency-report-details.component.html',
  styleUrls: ['./coherency-report-details.component.css']
})
export class CoherencyReportDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentCoherencyReport: CoherencyReport = {
      serZone: '',
      type: '',
      tag: '',
      description: '',
      comment: ''
    };

  message = '';

  constructor(
    private coherencyReportService: CoherencyReportService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCoherencyReportById(this.route.snapshot.params["id"]);
    }
  }

  getCoherencyReportById(id: number): void {
    this.coherencyReportService.getCoherencyReportById(id)
      .subscribe({
        next: (data) => {
          this.currentCoherencyReport = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateCoherencyReport(): void {
    this.message = '';

    this.coherencyReportService.updateCoherencyReport(this.currentCoherencyReport.id!, this.currentCoherencyReport)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteCoherencyReport(): void {
    this.coherencyReportService.deleteCoherencyReport(this.currentCoherencyReport.id!)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/coherencyReports']);
        },
        error: (e) => console.error(e)
      });
  }
}
