import { Component } from '@angular/core';

@Component({
  selector: 'app-resgistration',
  templateUrl: './resgistration.component.html',
  styleUrl: './resgistration.component.css'
})
export class ResgistrationComponent {
public email!:string;
public password!:string;
public keepsignin:boolean = false;
onsavebtn(){
  console.log(this.email,this.password,this.keepsignin)
}
}
