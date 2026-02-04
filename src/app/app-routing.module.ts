import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { authGuard } from './auth.guard';
import { ProductsDetailsComponent } from './products-details/products-details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[authGuard] ,component:HomeComponent},
  {path:'about',canActivate:[authGuard] ,component:AboutComponent},
  {path:'cart',canActivate:[authGuard] ,component:CartComponent},
  {path:'categories',canActivate:[authGuard] ,component:CategoriesComponent},
  {path:'brands',canActivate:[authGuard] ,component:BrandsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'products',canActivate:[authGuard] ,component:ProductsComponent},
  {path:'productsDetails/:id',canActivate:[authGuard] ,component:ProductsDetailsComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
