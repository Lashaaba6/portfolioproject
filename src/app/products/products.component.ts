import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  

public allproducts!:any;

public keyword!:any;
public minprice!:any;
public maxprice!:any;
  router: any;

constructor(public service:HttpService){
  this.service.getallproducts().subscribe((data:any) => {
    this.allproducts = data.products
    console.log(this.allproducts)
  })
}


filter(){
  this.service.getfilteredproducts(this.keyword,this.minprice,this.maxprice).subscribe((data:any) =>{
    this.allproducts = data.products
  })
}


hoverIn(event: any) {
  event.target.style.transform = 'scale(1.05)';
}

hoverOut(event: any) {
  event.target.style.transform = 'scale(1)';
}

}
