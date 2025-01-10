import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
public productid!:any;
public singleproduct!:any;

constructor(private route:ActivatedRoute, private service: HttpService){
this.route.queryParams.subscribe(id => {
  this.productid = id;
});
this.service.getsingleproduct(this.productid.id).subscribe(item => {
    this.singleproduct =item;
})
}
}
