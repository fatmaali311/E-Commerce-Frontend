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
import { HomeComponent } from './pages/home/home/home.component';
import { AboutComponent } from './pages/about/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { FeaturedProductsComponent } from './pages/component/featured-products/featured-products.component';
import { CategoriesComponent } from './pages/component/categories/categories.component';

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
  {path:'setting/logout',component:LogoutComponent},
   {path:'home',component:HomeComponent},
   {path:'about',component:AboutComponent},
   {path:'contact',component:ContactComponent},
   {path:'products',component:AllProductsComponent},
   {path:'products/details/:id',component:ProductDetailsComponent},
    {path:'products/featured',component:FeaturedProductsComponent},
    {path:'categories',component:CategoriesComponent},
     { path: 'categories/:categoryId/products',component:AllProductsComponent},
];
