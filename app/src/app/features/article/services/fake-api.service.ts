import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environment';
import { Observable } from 'rxjs';

export interface FakeProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

@Injectable({ providedIn: 'root' })
export class FakeApiService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<FakeProduct[]> {
    return this.http.get<FakeProduct[]>(`/products`);
  }
}
