import { Injectable, afterNextRender, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth } from '../../interfaces/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(){
    afterNextRender(()=>{
      this.userInfo.next(localStorage.getItem('token'))
    })
  }

  _httpClient=inject(HttpClient);
 _Router=inject(Router)
  userInfo: BehaviorSubject<any|null>=new BehaviorSubject<string|null>('')
  register(info:Auth): Observable<any> {
    return this._httpClient.post('http://localhost:3000/api/auth/signup', info);
  };
  login(info:any): Observable<any>{
    return this._httpClient.post('http://localhost:3000/api/auth/login', info);
  }
  saveUser(){
    this.userInfo.next(localStorage.getItem('token'))
  }
  getRole():Observable<any>{
    return this._httpClient.get('http://localhost:3000/api/auth/role')
  }
   logOut(){
   localStorage.removeItem('token')
    window.location.href = '/login';
  }


}

