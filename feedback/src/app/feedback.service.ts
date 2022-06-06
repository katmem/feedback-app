import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from './models/feedback.model';

const baseUrl = 'http://127.0.0.1:8000';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  // Service to send HTTP requests using HttpClient

  constructor(private http: HttpClient) { }

  addFeedback(data: any): Observable<any> {
    return this.http.post(baseUrl+'/add-feedback/', data);
  }

  listFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(baseUrl+'/feedbacks/');
  }
  
}
