import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsecaseComponent } from './usecase/usecase.component';
import { ReportsComponent } from './reports/reports.component';
import{HealthComponent} from './health/health.component'
import {ManfacturingComponent} from './manfacturing/manfacturing.component'
import {TextileComponent} from './textile/textile.component'
import {EnergyComponent} from './energy/energy.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { IndustriesComponent } from './industries/industries.component';
import { InventoryReportComponent } from './inventory-report/inventory-report.component';
import { InventoryMapComponent } from './inventory-map/inventory-map.component';
import { WarehouseOverviewComponent } from './warehouse-overview/warehouse-overview.component';
import { StockTrackingComponent } from './stock-tracking/stock-tracking.component';

const routes: Routes = [
    {path:'login',component:LoginComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    {path:'industries',component:IndustriesComponent},
    {path: 'health', component:HealthComponent},
   {path: 'manufacturing', component:ManfacturingComponent},
   {path: 'textile', component:TextileComponent},
   {path: 'energy', component:EnergyComponent},
   {path: 'usecase', component : UsecaseComponent},
  {path: 'reports', component :ReportsComponent,outlet:'reports'},
  {path:'dashboard', component:DashboardComponent},
  {path:'inventory',component:InventoryReportComponent},
  {path:'inventormap', component:InventoryMapComponent},
  {path:'warehouseoverview', component:WarehouseOverviewComponent},
  {path:'stocktracking', component:StockTrackingComponent}
  
  // {path: '', component : HomeComponent, pathMatch : 'full'},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
