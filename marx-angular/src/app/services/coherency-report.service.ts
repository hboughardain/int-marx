import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoherencyReport } from '../models/coherency-report.model';

const baseUrl = 'http://localhost:8080/api/coherencyReports';

@Injectable({
  providedIn: 'root'
})
export class CoherencyReportService {

  constructor(private http: HttpClient) { }

  getAllCoherencyReports(): Observable<CoherencyReport[]> {
      return this.http.get<CoherencyReport[]>(baseUrl);
  }

  getCoherencyReportById(id: number): Observable<CoherencyReport> {
      return this.http.get(`${baseUrl}/${id}`);
  }

  createCoherencyReport(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
  }

  //TODO: createCoherencyReportsFromFile

  updateCoherencyReport(id: number, data: any): Observable<any> {
      return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteCoherencyReport(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllCoherencyReports(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
