import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  [x: string]: any;
  

  constructor(public http:HttpClient) { }

  public allproducts:string = 'https://api.everrest.educata.dev/shop/products/all?page_index=1&page_size=50'
 

  getallproducts(){
    return this.http.get(this.allproducts)
  }

  getfilteredproducts(keyword:any,minprice:any,maxprice:any){
    return this.http.get(`https://api.everrest.educata.dev/shop/products/search?page_index=1&page_size=50&keywords=${keyword}&price_min=${minprice}&price_max=${maxprice}`)
  }

  getsingleproduct(id:any){
   return this.http.get(`https://api.everrest.educata.dev/shop/products/id/${id}`)
  }









}
