import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productDB } from 'src/app/shared/tables/product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public product_list = []

  constructor(
    private route: Router
  ) {
    this.product_list = productDB.product;
  }

  ngOnInit() {}

 viewProduct(title){
   this.route.navigate(["/products/physical/product-detail",title])
 }
    

}
