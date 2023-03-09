
import {Component} from '@angular/core'
import { Iproduct } from './product';
@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:["./product-list.component.css"]

})
export class ProductListComponent{
    pageTitle :string ="Product List!"
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    listeFilter:string='cart'
    products: Iproduct[]=[
        {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2021",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "assets/images/leaf_rake.png"
        },
        
        {
          "productId": 8,
          "productName": "Saw",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2021",
          "description": "15-inch steel blade hand saw",
          "price": 11.55,
          "starRating": 3.7,
          "imageUrl": "assets/images/saw.png"
        },
        {
          "productId": 10,
          "productName": "Video Game Controller",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2020",
          "description": "Standard two-button video game controller",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "assets/images/xbox-controller.png"
        }
      ];
      toggleImage(): void{
        this.showImage=!this.showImage;
      }
}