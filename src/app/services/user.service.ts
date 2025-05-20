import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _httpClient=inject(HttpClient);

    private apiUrl = 'http://127.0.0.1:3000/api/admin/users';
     private token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjExNTJmNmU0OGE4NTFmODQzNDI3OCIsImlhdCI6MTc0NzI0MDQxNSwiZXhwIjoxNzQ3MjQ3NjE1fQ.3pA-1pFHTsdqZOwpgQCfqQ_edbZjb-yLuZC4IPNV7Tw"

  getUsers(): Observable<User[]> {
    return this._httpClient.get<User[]>(this.apiUrl);
  }

  getUserById(id: string): Observable<User> {
    return this._httpClient.get<User>(`${this.apiUrl}/${id}`);
  }
  updateUser(id: string, user: User): Observable<User> {
    return this._httpClient.patch<User>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: string): Observable<void> {
    return this._httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

}
