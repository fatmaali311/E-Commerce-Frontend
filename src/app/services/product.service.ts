import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _httpClient = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:3000/api/seller/products';
  private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjExNTJmNmU0OGE4NTFmODQzNDI3OCIsImlhdCI6MTc0NzQ0MzQ2OSwiZXhwIjoxNzQ3NDUwNjY5fQ.jc_LL04QTCUb74vGtZBIF8I2nzFMJ9ILeJV_7BBAziE";

  private headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
    accept: 'application/json'
  });

getProducts(): Observable<Product[]> {
  return this._httpClient.get<any>(this.apiUrl, { headers: this.headers }).pipe(
    map(response => {
      if (!response) throw new Error('Empty response from server');
      if (!response.success) throw new Error(response.message || 'Request failed');
      return response.data || [];
    }),
    catchError(error => {
      console.error('API Error:', error);
      throw new Error('Failed to fetch products. Please try again.');
    })
  );
}

 getProductById(id: string): Observable<Product> {
  return this._httpClient.get<{success: boolean, data: Product}>(`${this.apiUrl}/${id}`, {
    headers: this.headers
  }).pipe(
    map(response => response.data)
  );
}


}

