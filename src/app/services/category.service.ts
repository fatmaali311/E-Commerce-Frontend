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






  getAllCategories(): Observable<Category> {
    return this. _httpClient.get<Category>(this.apiUrl);
  }

  getCategoryById(id: string): Observable<{ success: boolean; data: Category }> {
    return this. _httpClient.get<{ success: boolean; data: Category }>(`${this.apiUrl}/${id}`);
  }

  createCategory(categoryData: FormData): Observable<any> {
    return this. _httpClient.post(this.apiUrl, categoryData);
  }

  updateCategory(id: string, categoryData: any): Observable<any> {
    return this. _httpClient.put(`${this.apiUrl}/${id}`, categoryData)
  }

  deleteCategory(id: string): Observable<any> {
    return this. _httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
