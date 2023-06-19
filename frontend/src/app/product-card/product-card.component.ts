import { Component, Input } from '@angular/core';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent {

  @Input() product?: any;


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (response: any) => {
        this.product = response;
      },
      (error: any) => {
        console.error('Failed to fetch products', error);
      }
    );
  }
}