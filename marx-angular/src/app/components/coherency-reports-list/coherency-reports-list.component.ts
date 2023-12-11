import { Component, OnInit } from '@angular/core';
import { CoherencyReport } from 'src/app/models/coherency-report.model';
import { CoherencyReportService } from 'src/app/services/coherency-report.service';

@Component({
  selector: 'app-coherency-reports-list',
  templateUrl: './coherency-reports-list.component.html',
  styleUrls: ['./coherency-reports-list.component.css']
})
export class CoherencyReportsListComponent implements OnInit {

  coherencyReports?: CoherencyReport[];
  currentCoherencyReport: CoherencyReport = {};
  currentIndex = -1;
  description = '';

  constructor(private coherencyReportService: CoherencyReportService) { }

  ngOnInit(): void {
    this.retrieveCoherencyReports();
  }

  retrieveCoherencyReports(): void {
    this.coherencyReportService.getAllCoherencyReports()
      .subscribe({
        next: (data) => {
          this.coherencyReports = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveCoherencyReports();
    this.currentCoherencyReport = {};
    this.currentIndex = -1;
  }

  setActiveCoherencyReport(coherencyReport: CoherencyReport, index: number): void {
    this.currentCoherencyReport = coherencyReport;
    this.currentIndex = index;
  }

  deleteAllCoherencyReports(): void {
    this.coherencyReportService.deleteAllCoherencyReports()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  //TODO: implement fuzzy-search
  fuzzySearchDescription(): void {
    console.log("placeholder");
  }

//   searchDescription(): void {
//     this.currentCoherencyReport = {};
//     this.currentIndex = -1;
//
//     this.coherencyReportService.findByDescription(this.description)
//       .subscribe({
//         next: (data) => {
//           this.coherencyReports = data;
//           console.log(data);
//         },
//         error: (e) => console.error(e)
//       });
//   }
}
