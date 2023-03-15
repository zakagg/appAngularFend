
import {Component, OnInit} from '@angular/core'
import { Iproduct } from './product';
import { ProductService } from './product.service';
import { Subscription } from "rxjs";
@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:["./product-list.component.css"]

})
export class ProductListComponent implements OnInit{
  constructor(private productService:ProductService ){
    
  }
    pageTitle :string ="Product List!"
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    errorMessage='';
    sub!: Subscription;
    private _listFilter:string='';
    products: Iproduct[]=[];
    filterProduct:Iproduct[]=[];
    get listFilter():string{
      return this._listFilter;
    }
    set listFilter(value:string){
      this._listFilter=value;
      console.log(this._listFilter)
      this.filterProduct=this.performFilter(value);
    }

    
    
      toggleImage(): void{
        this.showImage=!this.showImage;
      }
      
      performFilter(filterBy:string):Iproduct[]{
        filterBy= filterBy.toLowerCase();
        return this.products.filter((product:Iproduct)=>
        product.productName.toLowerCase().includes(filterBy));
        
      }
      ngOnInit(): void {
        this.sub = this.productService.getProducts().subscribe({
          next: products => {
            this.products = products;
            this.filterProduct = this.products;
          },
          error: err => this.errorMessage = err
        });
        this.filterProduct=this.products;
        console.log(this.products)  
      }
      OnratingClicked (message:string):void{
        console.log("i am in OnratingClicked")
        this.pageTitle="product List: "+ message;
      }
}