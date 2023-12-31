import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllDownloaderService {
  private baseUrl = "http://localhost:8080/json/downloader/all?videoUrl=";

  constructor(private http: HttpClient) { }
  
  getVideoData(videoUrl: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(`${this.baseUrl}${videoUrl}`, { headers });
  }
}
