import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  prdList:IProduct[];
  orderTotalPrice:number=0;
  constructor(){
    this.prdList=[
      {id:100, name:'Lenovo', price:30, quantity:1, imgUrl:'https://i0.wp.com/www.in-stat.com/wp-content/uploads/2020/04/lenovo-logo-design.png?resize=768%2C576&ssl=1', categoryId:1},
      {id:200, name:'MacBook', price:30, quantity:0, imgUrl:'https://i0.wp.com/www.in-stat.com/wp-content/uploads/2020/04/lenovo-logo-design.png?resize=768%2C576&ssl=1', categoryId:1},
      {id:300, name:'Lenovo', price:30, quantity:2, imgUrl:'https://i0.wp.com/www.in-stat.com/wp-content/uploads/2020/04/lenovo-logo-design.png?resize=768%2C576&ssl=1', categoryId:1},
      {id:400, name:'Samsung', price:10, quantity:3, imgUrl:'https://i0.wp.com/www.in-stat.com/wp-content/uploads/2020/04/lenovo-logo-design.png?resize=768%2C576&ssl=1', categoryId:2},
      {id:500, name:'IPad', price:40, quantity:6, imgUrl:'https://i0.wp.com/www.in-stat.com/wp-content/uploads/2020/04/lenovo-logo-design.png?resize=768%2C576&ssl=1', categoryId:3},
      {id:600, name:'Samsung Tab', price:30, quantity:4, imgUrl:'https://i0.wp.com/www.in-stat.com/wp-content/uploads/2020/04/lenovo-logo-design.png?resize=768%2C576&ssl=1', categoryId:3},
    ];
  }

  buy(prdprice:number,count:any){
    let itemsCount:number;
    // itemsCount=count as number;
    // itemsCount=Number(count);
    itemsCount=+count;

    this.orderTotalPrice+=prdprice*count;
  }


}
