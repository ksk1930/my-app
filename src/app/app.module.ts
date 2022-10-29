import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { PackagePipe } from './package.pipe';
import { CarsComponent } from './cars/cars.component';
import { StarsComponent } from './stars/stars.component';
import { GpayComponent } from './gpay/gpay.component';
import { BankComponent } from './bank/bank.component';
import {HttpClientModule } from '@angular/common/http';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { MailsComponent } from './mails/mails.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    InterpolationComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    EventRegistrationComponent,
    PipesComponent,
    PricePipe,
    EmployeeRegistrationComponent,
    PackagePipe,
    CarsComponent,
    StarsComponent,
    GpayComponent,
    BankComponent,
    VehiclesComponent,
    MailsComponent,
    BankDetailsComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
