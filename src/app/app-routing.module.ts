import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { NewOrdersComponent } from './pages/new-orders/new-orders.component';
import { NewCustomersComponent } from './pages/new-customers/new-customers.component';
import { EditCustomersComponent } from './pages/edit-customers/edit-customers.component';
import { EditUserResolver } from './pages/edit-customers/edit-customers.resolver';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'customers', component: CustomersComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'newcustomers', component: NewCustomersComponent},
  { path: 'neworders', component: NewOrdersComponent},
  { path: 'details/:id', component: EditCustomersComponent, resolve: {data : EditUserResolver } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) { }
}
