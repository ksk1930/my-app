import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { GpayComponent } from './gpay/gpay.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { StarsComponent } from './stars/stars.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
  {path:'interpolation',component:InterpolationComponent},
  {path:'event-binding',component:EventBindingComponent},
  {path:'two-way-binding',component:TwoWayBindingComponent},
  {path:'calculator',component:CalculatorComponent},
  {path: 'rectangle', component:RectangleComponent},
  {path: 'event-registration', component:EventRegistrationComponent},
  {path: 'pipes', component:PipesComponent},
  {path: 'employee-registration', component:EmployeeRegistrationComponent},
  {path: 'cars', component:CarsComponent},
  {path: 'stars', component:StarsComponent},
  {path: 'gpay', component:GpayComponent},
  {path: 'bank', component:BankComponent},
  {path: 'vehicles', component:VehiclesComponent},
  {path: 'bank-details/:id', component:BankDetailsComponent},
  {path: 'create-account', component:CreateAccountComponent},
  {path: 'create-user', component:CreateUserComponent}
]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
