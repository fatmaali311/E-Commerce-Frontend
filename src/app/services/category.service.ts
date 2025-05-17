import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

   private _httpClient = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:3000/api/admin/categories';
  private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjExNTJmNmU0OGE4NTFmODQzNDI3OCIsImlhdCI6MTc0NzQ0MzQ2OSwiZXhwIjoxNzQ3NDUwNjY5fQ.jc_LL04QTCUb74vGtZBIF8I2nzFMJ9ILeJV_7BBAziE";

   private headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
    accept: 'application/json'
  });





  getAllCategories(): Observable<Category> {
    return this. _httpClient.get<Category>(this.apiUrl, { headers: this.headers });
  }

  getCategoryById(id: string): Observable<{ success: boolean; data: Category }> {
    return this. _httpClient.get<{ success: boolean; data: Category }>(`${this.apiUrl}/${id}`, { headers: this.headers });
  }

  createCategory(categoryData: FormData): Observable<any> {
    return this. _httpClient.post(this.apiUrl, categoryData, { headers: this.headers });
  }

  updateCategory(id: string, categoryData: any): Observable<any> {
    return this. _httpClient.put(`${this.apiUrl}/${id}`, categoryData, { headers: this.headers });
  }

  deleteCategory(id: string): Observable<any> {
    return this. _httpClient.delete(`${this.apiUrl}/${id}`, { headers: this.headers });
  }
}
