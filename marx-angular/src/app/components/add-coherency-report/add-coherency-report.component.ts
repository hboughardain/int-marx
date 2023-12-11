import { Component, OnInit } from '@angular/core';
import { CoherencyReport } from 'src/app/models/coherency-report.model';
import { CoherencyReportService } from 'src/app/services/coherency-report.service';

@Component({
  selector: 'app-add-coherency-report',
  templateUrl: './add-coherency-report.component.html',
  styleUrls: ['./add-coherency-report.component.css']
})
export class AddCoherencyReportComponent implements OnInit {

  coherencyReport: CoherencyReport = {
    serZone: '',
    type: '',
    tag: '',
    description: '',
    comment: ''
  };
  submitted = false;

  constructor(private coherencyReportService: CoherencyReportService) { }

  ngOnInit(): void {
  }

  saveCoherencyReport(): void {
    const data = {
      serZone: this.coherencyReport.serZone,
      type: this.coherencyReport.type,
      tag: this.coherencyReport.tag,
      description: this.coherencyReport.description,
      comment: this.coherencyReport.comment
    };

    this.coherencyReportService.createCoherencyReport(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newCoherencyReport(): void {
    this.submitted = false;
    this.coherencyReport = {
      serZone: '',
      type: '',
      tag: '',
      description: '',
      comment: ''
    };
  }

}
