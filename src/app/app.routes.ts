import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
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
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin/dashboard',component:DashcontentComponent},
  {path:'admin/users',component:ManageUserComponent},
  {path:'admin/sellers',component:ManageSellersComponent},
  {path:'admin/products',component:ManageProductsComponent},
  {path:'admin/category',component:ManageCategoryComponent},
  {path:'seller/dashboard',component:SellerDashboardComponent},
  {path:'seller/products',component:ProductsComponent},
  {path:'setting/profile',component:ProfileComponent},
  {path: 'landing',component: LandingPageComponent},
  {path: '**',component: LandingPageComponent},
  {path:'setting/logout',component:LogoutComponent},
  {path:'about',component:AboutComponent}
];
