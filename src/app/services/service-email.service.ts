import { Injectable } from '@angular/core';
import { Email } from '../class/email';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceEmailService {
  constructor(private http: HttpClient) {}

  EnviarEmail(email: Email) {
    return this.http.post(`http://localhost:5000/enviarEmail/`, email, {
      responseType: 'text',
    });
  }
}
