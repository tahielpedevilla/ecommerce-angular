import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OffersComponent } from './offers/offers.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    UserComponent,
    CategoriesComponent,
    CartComponent,
    NotificationsComponent,
    PagenotfoundComponent,
    OffersComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    DashboardRoutingModule,
    ProductsComponent
  ]
})
export class DashboardModule { }
