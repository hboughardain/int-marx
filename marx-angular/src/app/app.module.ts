import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCoherencyReportComponent } from './components/add-coherency-report/add-coherency-report.component';
import { CoherencyReportDetailsComponent } from './components/coherency-report-details/coherency-report-details.component';
import { CoherencyReportsListComponent } from './components/coherency-reports-list/coherency-reports-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCoherencyReportComponent,
    CoherencyReportDetailsComponent,
    CoherencyReportsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
