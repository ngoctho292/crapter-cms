import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeApiService, FakeProduct } from '../../services/fake-api.service';

@Component({
  selector: 'app-fake-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fake-api.component.html',
  styleUrl: './fake-api.component.css'
})
export default class FakeApiComponent implements OnInit {
  products: FakeProduct[] = [];
  loading = true;

  constructor(private fakeStore: FakeApiService) {}

  ngOnInit() {
    this.fakeStore.getProducts().subscribe(data => {
      this.products = data;
      this.loading = false;
    });
  }
}
