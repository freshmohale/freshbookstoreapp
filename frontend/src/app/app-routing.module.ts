import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [

{path: 'home', component:HomeComponent},
{path: 'register', component:RegisterComponent},
{path: 'cart', component:CartComponent},
{path: 'products/:id', component:ProductsComponent},
{path: 'navbar', component:NavbarComponent},
{path: 'login', component:LoginComponent},
{path: 'profile', component:ProfileComponent},
{ path: '', redirectTo: 'home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

