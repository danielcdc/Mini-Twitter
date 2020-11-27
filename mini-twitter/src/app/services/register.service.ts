import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUpDto } from '../dto/signup.dto';
import { SignUpResponse } from '../models/signup-response.interface';


const SIGNUP_URL = 'https://www.minitwitter.com:3001/apiv1/auth/signup';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {}

  signUp(SignUpDto: SignUpDto): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(
      SIGNUP_URL,
      SignUpDto,
      httpOptions
    );
  }

}
