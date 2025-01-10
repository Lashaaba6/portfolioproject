import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ResgistrationComponent } from './resgistration/resgistration.component';
import { DetailsComponent } from './details/details.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { ErrorcompComponent } from './errorcomp/errorcomp.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'products', component:ProductsComponent},
  {path: 'registration', component:ResgistrationComponent},
  {path: 'details', component:DetailsComponent},
  {path: 'signupcomp', component:SignupComponent},
  {path: 'cart', component:CartComponent},
  { path: '**', component: ErrorcompComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
