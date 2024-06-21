import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiUrl: string = 'http://localhost:8000/producto/';

  constructor(private _http: HttpClient) {}

  public getAllProducts(): Observable<any> {
    return this._http.get<any>(this.apiUrl);
  }

  public getProductById(productId: any): Observable<any> {
    return this._http.get<any>(this.apiUrl + productId);
  }

  public updateProduct(productId: any, data: any): Observable<any> {
    return this._http.put<any>(this.apiUrl + productId, data);
  }

  public saveProduct(data: any): Observable<any> {
    return this._http.post<any>(this.apiUrl, data);
  }

  public deleteProduct(value: any): Observable<any> {
    return this._http.delete<any>(this.apiUrl + value.id_producto);
  }
}
