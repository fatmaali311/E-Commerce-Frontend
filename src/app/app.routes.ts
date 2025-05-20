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
import { HomeComponent } from './pages/home/home/home.component';
import { AboutComponent } from './pages/about/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { FeaturedProductsComponent } from './pages/component/featured-products/featured-products.component';
import { CategoriesComponent } from './pages/component/categories/categories.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import path from 'path';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { NotValidCredentialsComponent } from './core/pages/not-valid-credentials/not-valid-credentials.component';

export const routes: Routes = [
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: '', component: DashcontentComponent },
      { path: 'users', component: ManageUserComponent },
      { path: 'sellers', component: ManageSellersComponent },
      { path: 'products', component: ManageProductsComponent },
      { path: 'categories', component: ManageCategoryComponent },
      { path: 'setting/profile', component: ProfileComponent },
      { path: 'invalid-credentials', component: NotValidCredentialsComponent },
      { path: '**', component: PageNotFoundComponent },
    ],
  },

  {
    path: 'seller/dashboard',
    component: SellerDashboardComponent,
    children: [
      { path: '', component: DashcontentComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'setting/profile', component: ProfileComponent },
      { path: 'invalid-credentials', component: NotValidCredentialsComponent },
    ],
  },
  { path: 'home', component: LandingPageComponent },
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: AllProductsComponent },
  { path: 'products/details/:id', component: ProductDetailsComponent },
  { path: 'products/featured', component: FeaturedProductsComponent },
  { path: 'categories', component: CategoriesComponent },
  {
    path: 'categories/:categoryId/products',
    component: AllProductsComponent,
  },
  { path: 'setting/profile', component: ProfileComponent },
  {
    path: 'login',
    loadComponent: () =>
      import('./core/pages/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./core/pages/register/register.component').then(
        (c) => c.RegisterComponent
      ),
  },
  { path: '**', component: PageNotFoundComponent },

  // {path:'setting/profile',component:ProfileComponent},
  //  {path:'home',component:HomeComponent},
  //  {path:'about',component:AboutComponent},
  //  {path:'contact',component:ContactComponent},
  //  {path:'products',component:AllProductsComponent},
  //  {path:'products/details/:id',component:ProductDetailsComponent},
  //   {path:'products/featured',component:FeaturedProductsComponent},
  //   {path:'categories',component:CategoriesComponent},
  //    { path: 'categories/:categoryId/products',component:AllProductsComponent},
];
