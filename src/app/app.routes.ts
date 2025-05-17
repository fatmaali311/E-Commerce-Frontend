import { Routes } from '@angular/router';
import { LoginComponent } from './core/pages/login/login.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { AdminDashboardComponent } from './dashboard/admin/admin-dashboard/admin-dashboard.component';
import { ManageUserComponent } from './dashboard/admin/manage-user/manage-user.component';
import { ManageSellersComponent } from './dashboard/admin/manage-sellers/manage-sellers.component';
import { ManageProductsComponent } from './dashboard/admin/manage-products/manage-products.component';
import { ManageCategoryComponent } from './dashboard/admin/manage-category/manage-category.component';
import { DashcontentComponent } from './dashboard/admin/dashcontent/dashcontent.component';
import { SellerDashboardComponent } from './dashboard/seller/seller-dashboard/seller-dashboard.component';
import { ProductsComponent } from './dashboard/seller/products/products.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { HomeComponent } from './feature/pages/home/home.component';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin/dashboard',component:DashcontentComponent, canActivate: [authGuard]},
  {path:'admin/users',component:ManageUserComponent, canActivate: [authGuard]},
  {path:'admin/sellers',component:ManageSellersComponent, canActivate: [authGuard]},
  {path:'admin/products',component:ManageProductsComponent, canActivate: [authGuard]},
  {path:'admin/category',component:ManageCategoryComponent, canActivate: [authGuard]},
  {path:'seller/dashboard',component:SellerDashboardComponent, canActivate: [authGuard]},
  {path:'seller/products',component:ProductsComponent, canActivate: [authGuard]},
  {path:'setting/profile',component:ProfileComponent, canActivate: [authGuard]},
  {path:'setting/logout',component:LogoutComponent, canActivate: [authGuard]},
  {path:'', component:HomeComponent, canActivate: [authGuard]}
];
