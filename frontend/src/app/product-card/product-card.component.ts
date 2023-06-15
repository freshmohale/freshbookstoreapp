import { Component, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../../../backend/models/Product'


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent {

  @Input() product?: Product;


  constructor(private productService: ProductService) { }

}
