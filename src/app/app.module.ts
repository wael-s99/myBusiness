import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NewCustomersComponent } from './pages/new-customers/new-customers.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { NewOrdersComponent } from './pages/new-orders/new-orders.component';
import { HomeComponent } from './pages/home/home.component';
import { AvatarLinkComponent } from './pages/avatar-link/avatar-link.component';
import { EditCustomersComponent } from './pages/edit-customers/edit-customers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    NewCustomersComponent,
    CustomersComponent,
    OrdersComponent,
    NewOrdersComponent,
    HomeComponent,
    AvatarLinkComponent,
    EditCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
// tslint:disable-next-line:indent
 	AngularFirestoreModule,
BrowserAnimationsModule,
FormsModule,
ReactiveFormsModule,
MatDialogModule,
MatIconModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
