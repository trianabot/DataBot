import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsecaseComponent } from './usecase/usecase.component';
import { ReportsComponent } from './reports/reports.component';
import { HealthComponent } from './health/health.component';
import { ManfacturingComponent } from './manfacturing/manfacturing.component';
import { TextileComponent } from './textile/textile.component';
import { EnergyComponent } from './energy/energy.component';
import { VehicledataComponent } from './vehicledata/vehicledata.component';
import { IndustriesComponent } from './industries/industries.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import * as $ from 'jquery';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { InventoryReportComponent } from './inventory-report/inventory-report.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartModule,HIGHCHARTS_MODULES  } from 'angular-highcharts';
import * as drilldown from 'highcharts/modules/drilldown.src.js';
import * as treemap from 'highcharts/modules/treemap.src.js';
import { HttpClientModule } from '@angular/common/http';
import { InventoryMapComponent } from './inventory-map/inventory-map.component';
import { WarehouseOverviewComponent } from './warehouse-overview/warehouse-overview.component';
import { StockTrackingComponent } from './stock-tracking/stock-tracking.component';
import { RouteService } from './service/route.service';
import { HttpModule } from '@angular/http';
import { DriverOverviewComponent } from './driver-overview/driver-overview.component';



@NgModule({
  declarations: [
    AppComponent,
    
    UsecaseComponent,
    ReportsComponent,
    HealthComponent,
    ManfacturingComponent,
    TextileComponent,
    EnergyComponent,
    VehicledataComponent,
    IndustriesComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    InventoryReportComponent,
    InventoryMapComponent,
    WarehouseOverviewComponent,
    StockTrackingComponent,
    DriverOverviewComponent,
    
   
    ],
  imports: [
    BrowserModule,ChartModule,HttpClientModule,HttpModule,
    AppRoutingModule,NgbModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule, 
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
      maxPercent: 960
    })
  ],
  providers: [RouteService,{provide: HIGHCHARTS_MODULES,
    useFactory: () => [ drilldown, treemap]}],
  bootstrap: [AppComponent]
})
export class AppModule { }
