import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api_url = "http://localhost:8000/api/firebase";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  getCustomToken(uid) {
    return this.http.get(`${api_url}/token/${uid}`)
  }
}
