import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoherencyReportsListComponent } from './components/coherency-reports-list/coherency-reports-list.component';
import { CoherencyReportDetailsComponent } from './components/coherency-report-details/coherency-report-details.component';
import { AddCoherencyReportComponent } from './components/add-coherency-report/add-coherency-report.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'coherency-reports', component: CoherencyReportsListComponent },
  { path: 'coherency-reports/:id', component: CoherencyReportDetailsComponent },
  { path: 'add', component: AddCoherencyReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
