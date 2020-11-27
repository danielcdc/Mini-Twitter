import { Injectable } from '@angular/core';
import { LoginDto } from '../dto/login.dto';
import { LoginResponse } from '../models/login-response.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const LOGIN_URL = 'https://www.minitwitter.com:3001/apiv1/auth/login';
<<<<<<< HEAD
let token = localStorage.getItem('token')

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + token
=======

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
>>>>>>> c1bc0cdfe98ba4794c65cb6af83115c47908eed8
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
<<<<<<< HEAD
  // ¿Qué significa en la firma del método ":Observable<LoginResponse>"
=======

>>>>>>> c1bc0cdfe98ba4794c65cb6af83115c47908eed8
  login(loginDto: LoginDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      LOGIN_URL,
      loginDto,
      httpOptions
    );
  }
}