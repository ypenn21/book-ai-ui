import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface AnalysisResponse {
  // Adjust the interface to match the actual response structure
  [keyword: string]: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  apiUrl = 'localhost:8080/analysis';

  constructor(private http: HttpClient) {}

  analyzeBook(bookData: any): Observable<AnalysisResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<AnalysisResponse>(this.apiUrl, bookData, { headers });
  }
}
