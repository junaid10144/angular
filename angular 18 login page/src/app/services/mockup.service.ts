import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockupService {

  constructor(
    private http: HttpClient
  ) { }

  getCompanies(): Observable<any[]> {
    return this.http.get<any[]>('mockup/companies.json');
  }
}
