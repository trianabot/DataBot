(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usecase_usecase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usecase/usecase.component */ "./src/app/usecase/usecase.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _health_health_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./health/health.component */ "./src/app/health/health.component.ts");
/* harmony import */ var _manfacturing_manfacturing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manfacturing/manfacturing.component */ "./src/app/manfacturing/manfacturing.component.ts");
/* harmony import */ var _textile_textile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./textile/textile.component */ "./src/app/textile/textile.component.ts");
/* harmony import */ var _energy_energy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./energy/energy.component */ "./src/app/energy/energy.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _industries_industries_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./industries/industries.component */ "./src/app/industries/industries.component.ts");
/* harmony import */ var _inventory_report_inventory_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inventory-report/inventory-report.component */ "./src/app/inventory-report/inventory-report.component.ts");
/* harmony import */ var _inventory_map_inventory_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inventory-map/inventory-map.component */ "./src/app/inventory-map/inventory-map.component.ts");
/* harmony import */ var _warehouse_overview_warehouse_overview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./warehouse-overview/warehouse-overview.component */ "./src/app/warehouse-overview/warehouse-overview.component.ts");
/* harmony import */ var _stock_tracking_stock_tracking_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stock-tracking/stock-tracking.component */ "./src/app/stock-tracking/stock-tracking.component.ts");
/* harmony import */ var _driver_overview_driver_overview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./driver-overview/driver-overview.component */ "./src/app/driver-overview/driver-overview.component.ts");
/* harmony import */ var _vehiclelive_metric_vehiclelive_metric_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vehiclelive-metric/vehiclelive-metric.component */ "./src/app/vehiclelive-metric/vehiclelive-metric.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _super_admin_add_tenant_add_tenant_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./super-admin/add-tenant/add-tenant.component */ "./src/app/super-admin/add-tenant/add-tenant.component.ts");
/* harmony import */ var _super_admin_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./super-admin/add-user/add-user.component */ "./src/app/super-admin/add-user/add-user.component.ts");
/* harmony import */ var _super_admin_add_device_add_device_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./super-admin/add-device/add-device.component */ "./src/app/super-admin/add-device/add-device.component.ts");
/* harmony import */ var _customer_feedback_analysis_customer_feedback_analysis_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./customer-feedback-analysis/customer-feedback-analysis.component */ "./src/app/customer-feedback-analysis/customer-feedback-analysis.component.ts");
/* harmony import */ var _politics_usecase_poltical_statics_poltical_statics_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./politics-usecase/poltical-statics/poltical-statics.component */ "./src/app/politics-usecase/poltical-statics/poltical-statics.component.ts");
/* harmony import */ var _politics_usecase_state_overview_state_overview_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./politics-usecase/state-overview/state-overview.component */ "./src/app/politics-usecase/state-overview/state-overview.component.ts");
/* harmony import */ var _politics_usecase_boothincharge_level_boothincharge_level_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./politics-usecase/boothincharge-level/boothincharge-level.component */ "./src/app/politics-usecase/boothincharge-level/boothincharge-level.component.ts");
/* harmony import */ var _politics_usecase_forecast_trend_analysis_forecast_trend_analysis_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./politics-usecase/forecast-trend-analysis/forecast-trend-analysis.component */ "./src/app/politics-usecase/forecast-trend-analysis/forecast-trend-analysis.component.ts");
/* harmony import */ var _hrms_usecase_hrms_usecase1_hrms_usecase1_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./hrms-usecase/hrms-usecase1/hrms-usecase1.component */ "./src/app/hrms-usecase/hrms-usecase1/hrms-usecase1.component.ts");
/* harmony import */ var _hrms_usecase_hrms_usecase2_hrms_usecase2_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./hrms-usecase/hrms-usecase2/hrms-usecase2.component */ "./src/app/hrms-usecase/hrms-usecase2/hrms-usecase2.component.ts");
/* harmony import */ var _hrms_usecase_hrms_usecase3_hrms_usecase3_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./hrms-usecase/hrms-usecase3/hrms-usecase3.component */ "./src/app/hrms-usecase/hrms-usecase3/hrms-usecase3.component.ts");
/* harmony import */ var _healthcare_usecase_health_care_analytics_health_care_analytics_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./healthcare-usecase/health-care-analytics/health-care-analytics.component */ "./src/app/healthcare-usecase/health-care-analytics/health-care-analytics.component.ts");
/* harmony import */ var _finance_usecase_expense_analytics_expense_analytics_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./finance-usecase/expense-analytics/expense-analytics.component */ "./src/app/finance-usecase/expense-analytics/expense-analytics.component.ts");
/* harmony import */ var _manufacturing_usecase_project_managment_project_managment_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./manufacturing-usecase/project-managment/project-managment.component */ "./src/app/manufacturing-usecase/project-managment/project-managment.component.ts");
/* harmony import */ var _dataingestion_dataingestion_dataingestion_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dataingestion/dataingestion/dataingestion.component */ "./src/app/dataingestion/dataingestion/dataingestion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'industries', component: _industries_industries_component__WEBPACK_IMPORTED_MODULE_10__["IndustriesComponent"] },
    { path: 'health', component: _health_health_component__WEBPACK_IMPORTED_MODULE_4__["HealthComponent"] },
    { path: 'manufacturing', component: _manfacturing_manfacturing_component__WEBPACK_IMPORTED_MODULE_5__["ManfacturingComponent"] },
    { path: 'textile', component: _textile_textile_component__WEBPACK_IMPORTED_MODULE_6__["TextileComponent"] },
    { path: 'energy', component: _energy_energy_component__WEBPACK_IMPORTED_MODULE_7__["EnergyComponent"] },
    { path: 'usecase', component: _usecase_usecase_component__WEBPACK_IMPORTED_MODULE_2__["UsecaseComponent"] },
    { path: 'reports', component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"], outlet: 'reports' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"] },
    { path: 'inventory', component: _inventory_report_inventory_report_component__WEBPACK_IMPORTED_MODULE_11__["InventoryReportComponent"] },
    { path: 'inventormap', component: _inventory_map_inventory_map_component__WEBPACK_IMPORTED_MODULE_12__["InventoryMapComponent"] },
    { path: 'warehouseoverview', component: _warehouse_overview_warehouse_overview_component__WEBPACK_IMPORTED_MODULE_13__["WarehouseOverviewComponent"] },
    { path: 'stocktracking', component: _stock_tracking_stock_tracking_component__WEBPACK_IMPORTED_MODULE_14__["StockTrackingComponent"] },
    { path: 'driver-overview', component: _driver_overview_driver_overview_component__WEBPACK_IMPORTED_MODULE_15__["DriverOverviewComponent"] },
    { path: 'driver-overview/:id', component: _driver_overview_driver_overview_component__WEBPACK_IMPORTED_MODULE_15__["DriverOverviewComponent"] },
    { path: 'vehicle-metric', component: _vehiclelive_metric_vehiclelive_metric_component__WEBPACK_IMPORTED_MODULE_16__["VehicleliveMetricComponent"] },
    { path: 'sign-up', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"] },
    { path: 'add-tenant', component: _super_admin_add_tenant_add_tenant_component__WEBPACK_IMPORTED_MODULE_18__["AddTenantComponent"] },
    { path: 'add-user', component: _super_admin_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_19__["AddUserComponent"] },
    { path: 'add-device', component: _super_admin_add_device_add_device_component__WEBPACK_IMPORTED_MODULE_20__["AddDeviceComponent"] },
    { path: 'customer-feedback', component: _customer_feedback_analysis_customer_feedback_analysis_component__WEBPACK_IMPORTED_MODULE_21__["CustomerFeedbackAnalysisComponent"] },
    { path: 'poltical-statics', component: _politics_usecase_poltical_statics_poltical_statics_component__WEBPACK_IMPORTED_MODULE_22__["PolticalStaticsComponent"] },
    { path: 'state-overview', component: _politics_usecase_state_overview_state_overview_component__WEBPACK_IMPORTED_MODULE_23__["StateOverviewComponent"] },
    { path: 'booth-incharge', component: _politics_usecase_boothincharge_level_boothincharge_level_component__WEBPACK_IMPORTED_MODULE_24__["BoothinchargeLevelComponent"] },
    { path: 'forecast-analysis', component: _politics_usecase_forecast_trend_analysis_forecast_trend_analysis_component__WEBPACK_IMPORTED_MODULE_25__["ForecastTrendAnalysisComponent"] },
    { path: 'hrms-usecase-1', component: _hrms_usecase_hrms_usecase1_hrms_usecase1_component__WEBPACK_IMPORTED_MODULE_26__["HrmsUsecase1Component"] },
    { path: 'hrms-usecase-2', component: _hrms_usecase_hrms_usecase2_hrms_usecase2_component__WEBPACK_IMPORTED_MODULE_27__["HrmsUsecase2Component"] },
    { path: 'hrms-usecase-3', component: _hrms_usecase_hrms_usecase3_hrms_usecase3_component__WEBPACK_IMPORTED_MODULE_28__["HrmsUsecase3Component"] },
    { path: 'healthcare-analytics', component: _healthcare_usecase_health_care_analytics_health_care_analytics_component__WEBPACK_IMPORTED_MODULE_29__["HealthCareAnalyticsComponent"] },
    { path: 'finance-expense', component: _finance_usecase_expense_analytics_expense_analytics_component__WEBPACK_IMPORTED_MODULE_30__["ExpenseAnalyticsComponent"] },
    { path: 'project-managment', component: _manufacturing_usecase_project_managment_project_managment_component__WEBPACK_IMPORTED_MODULE_31__["ProjectManagmentComponent"] },
    { path: 'data-ingestion', component: _dataingestion_dataingestion_dataingestion_component__WEBPACK_IMPORTED_MODULE_32__["DataingestionComponent"] }
    // {path: '', component : HomeComponent, pathMatch : 'full'},  
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<!-- <app-dashboard></app-dashboard>-->\r\n\r\n<!-- <app-login></app-login> -->\r\n<!-- \r\n<app-home></app-home>\r\n <app-industries></app-industries> -->\r\n\r\n <!-- <app-login></app-login>  -->\r\n <router-outlet></router-outlet>\r\n \r\n  \r\n <!-- <app-dashboard></app-dashboard> -->\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'DataBot';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _usecase_usecase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usecase/usecase.component */ "./src/app/usecase/usecase.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _health_health_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./health/health.component */ "./src/app/health/health.component.ts");
/* harmony import */ var _manfacturing_manfacturing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manfacturing/manfacturing.component */ "./src/app/manfacturing/manfacturing.component.ts");
/* harmony import */ var _textile_textile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./textile/textile.component */ "./src/app/textile/textile.component.ts");
/* harmony import */ var _energy_energy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./energy/energy.component */ "./src/app/energy/energy.component.ts");
/* harmony import */ var _vehicledata_vehicledata_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vehicledata/vehicledata.component */ "./src/app/vehicledata/vehicledata.component.ts");
/* harmony import */ var _industries_industries_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./industries/industries.component */ "./src/app/industries/industries.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _inventory_report_inventory_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./inventory-report/inventory-report.component */ "./src/app/inventory-report/inventory-report.component.ts");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/index.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var highcharts_modules_drilldown_src_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! highcharts/modules/drilldown.src.js */ "./node_modules/highcharts/modules/drilldown.src.js");
/* harmony import */ var highcharts_modules_drilldown_src_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_drilldown_src_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var highcharts_modules_treemap_src_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! highcharts/modules/treemap.src.js */ "./node_modules/highcharts/modules/treemap.src.js");
/* harmony import */ var highcharts_modules_treemap_src_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_treemap_src_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _inventory_map_inventory_map_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./inventory-map/inventory-map.component */ "./src/app/inventory-map/inventory-map.component.ts");
/* harmony import */ var _warehouse_overview_warehouse_overview_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./warehouse-overview/warehouse-overview.component */ "./src/app/warehouse-overview/warehouse-overview.component.ts");
/* harmony import */ var _stock_tracking_stock_tracking_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./stock-tracking/stock-tracking.component */ "./src/app/stock-tracking/stock-tracking.component.ts");
/* harmony import */ var _service_route_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./service/route.service */ "./src/app/service/route.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _driver_overview_driver_overview_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./driver-overview/driver-overview.component */ "./src/app/driver-overview/driver-overview.component.ts");
/* harmony import */ var _vehiclelive_metric_vehiclelive_metric_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./vehiclelive-metric/vehiclelive-metric.component */ "./src/app/vehiclelive-metric/vehiclelive-metric.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _super_admin_add_tenant_add_tenant_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./super-admin/add-tenant/add-tenant.component */ "./src/app/super-admin/add-tenant/add-tenant.component.ts");
/* harmony import */ var _super_admin_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./super-admin/add-user/add-user.component */ "./src/app/super-admin/add-user/add-user.component.ts");
/* harmony import */ var _super_admin_add_device_add_device_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./super-admin/add-device/add-device.component */ "./src/app/super-admin/add-device/add-device.component.ts");
/* harmony import */ var highcharts_modules_heatmap_src__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! highcharts/modules/heatmap.src */ "./node_modules/highcharts/modules/heatmap.src.js");
/* harmony import */ var highcharts_modules_heatmap_src__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_heatmap_src__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! highcharts/highcharts-more.src */ "./node_modules/highcharts/highcharts-more.src.js");
/* harmony import */ var highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var highcharts_modules_solid_gauge_src__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! highcharts/modules/solid-gauge.src */ "./node_modules/highcharts/modules/solid-gauge.src.js");
/* harmony import */ var highcharts_modules_solid_gauge_src__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_solid_gauge_src__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _customer_feedback_analysis_customer_feedback_analysis_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./customer-feedback-analysis/customer-feedback-analysis.component */ "./src/app/customer-feedback-analysis/customer-feedback-analysis.component.ts");
/* harmony import */ var highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! highcharts/modules/stock.src */ "./node_modules/highcharts/modules/stock.src.js");
/* harmony import */ var highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var angular2_datetimepicker__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! angular2-datetimepicker */ "./node_modules/angular2-datetimepicker/index.js");
/* harmony import */ var _politics_usecase_poltical_statics_poltical_statics_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./politics-usecase/poltical-statics/poltical-statics.component */ "./src/app/politics-usecase/poltical-statics/poltical-statics.component.ts");
/* harmony import */ var _politics_usecase_state_overview_state_overview_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./politics-usecase/state-overview/state-overview.component */ "./src/app/politics-usecase/state-overview/state-overview.component.ts");
/* harmony import */ var _politics_usecase_boothincharge_level_boothincharge_level_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./politics-usecase/boothincharge-level/boothincharge-level.component */ "./src/app/politics-usecase/boothincharge-level/boothincharge-level.component.ts");
/* harmony import */ var _politics_usecase_forecast_trend_analysis_forecast_trend_analysis_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./politics-usecase/forecast-trend-analysis/forecast-trend-analysis.component */ "./src/app/politics-usecase/forecast-trend-analysis/forecast-trend-analysis.component.ts");
/* harmony import */ var _core_databot_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./core/databot.service */ "./src/app/core/databot.service.ts");
/* harmony import */ var _hrms_usecase_hrms_usecase3_hrms_usecase3_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./hrms-usecase/hrms-usecase3/hrms-usecase3.component */ "./src/app/hrms-usecase/hrms-usecase3/hrms-usecase3.component.ts");
/* harmony import */ var _hrms_usecase_hrms_usecase2_hrms_usecase2_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./hrms-usecase/hrms-usecase2/hrms-usecase2.component */ "./src/app/hrms-usecase/hrms-usecase2/hrms-usecase2.component.ts");
/* harmony import */ var _hrms_usecase_hrms_usecase1_hrms_usecase1_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./hrms-usecase/hrms-usecase1/hrms-usecase1.component */ "./src/app/hrms-usecase/hrms-usecase1/hrms-usecase1.component.ts");
/* harmony import */ var _healthcare_usecase_health_care_analytics_health_care_analytics_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./healthcare-usecase/health-care-analytics/health-care-analytics.component */ "./src/app/healthcare-usecase/health-care-analytics/health-care-analytics.component.ts");
/* harmony import */ var _finance_usecase_expense_analytics_expense_analytics_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./finance-usecase/expense-analytics/expense-analytics.component */ "./src/app/finance-usecase/expense-analytics/expense-analytics.component.ts");
/* harmony import */ var _manufacturing_usecase_project_managment_project_managment_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./manufacturing-usecase/project-managment/project-managment.component */ "./src/app/manufacturing-usecase/project-managment/project-managment.component.ts");
/* harmony import */ var _dataingestion_dataingestion_dataingestion_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./dataingestion/dataingestion/dataingestion.component */ "./src/app/dataingestion/dataingestion/dataingestion.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _usecase_usecase_component__WEBPACK_IMPORTED_MODULE_4__["UsecaseComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_5__["ReportsComponent"],
                _health_health_component__WEBPACK_IMPORTED_MODULE_6__["HealthComponent"],
                _manfacturing_manfacturing_component__WEBPACK_IMPORTED_MODULE_7__["ManfacturingComponent"],
                _textile_textile_component__WEBPACK_IMPORTED_MODULE_8__["TextileComponent"],
                _energy_energy_component__WEBPACK_IMPORTED_MODULE_9__["EnergyComponent"],
                _vehicledata_vehicledata_component__WEBPACK_IMPORTED_MODULE_10__["VehicledataComponent"],
                _industries_industries_component__WEBPACK_IMPORTED_MODULE_11__["IndustriesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                _inventory_report_inventory_report_component__WEBPACK_IMPORTED_MODULE_18__["InventoryReportComponent"],
                _inventory_map_inventory_map_component__WEBPACK_IMPORTED_MODULE_24__["InventoryMapComponent"],
                _warehouse_overview_warehouse_overview_component__WEBPACK_IMPORTED_MODULE_25__["WarehouseOverviewComponent"],
                _stock_tracking_stock_tracking_component__WEBPACK_IMPORTED_MODULE_26__["StockTrackingComponent"],
                _driver_overview_driver_overview_component__WEBPACK_IMPORTED_MODULE_29__["DriverOverviewComponent"],
                _vehiclelive_metric_vehiclelive_metric_component__WEBPACK_IMPORTED_MODULE_30__["VehicleliveMetricComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_31__["SignUpComponent"],
                _super_admin_add_tenant_add_tenant_component__WEBPACK_IMPORTED_MODULE_32__["AddTenantComponent"],
                _super_admin_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_33__["AddUserComponent"],
                _super_admin_add_device_add_device_component__WEBPACK_IMPORTED_MODULE_34__["AddDeviceComponent"],
                _customer_feedback_analysis_customer_feedback_analysis_component__WEBPACK_IMPORTED_MODULE_38__["CustomerFeedbackAnalysisComponent"],
                _politics_usecase_poltical_statics_poltical_statics_component__WEBPACK_IMPORTED_MODULE_41__["PolticalStaticsComponent"],
                _politics_usecase_state_overview_state_overview_component__WEBPACK_IMPORTED_MODULE_42__["StateOverviewComponent"],
                _politics_usecase_boothincharge_level_boothincharge_level_component__WEBPACK_IMPORTED_MODULE_43__["BoothinchargeLevelComponent"],
                _politics_usecase_forecast_trend_analysis_forecast_trend_analysis_component__WEBPACK_IMPORTED_MODULE_44__["ForecastTrendAnalysisComponent"],
                _hrms_usecase_hrms_usecase3_hrms_usecase3_component__WEBPACK_IMPORTED_MODULE_46__["HrmsUsecase3Component"],
                _hrms_usecase_hrms_usecase2_hrms_usecase2_component__WEBPACK_IMPORTED_MODULE_47__["HrmsUsecase2Component"],
                _hrms_usecase_hrms_usecase1_hrms_usecase1_component__WEBPACK_IMPORTED_MODULE_48__["HrmsUsecase1Component"],
                _healthcare_usecase_health_care_analytics_health_care_analytics_component__WEBPACK_IMPORTED_MODULE_49__["HealthCareAnalyticsComponent"],
                _finance_usecase_expense_analytics_expense_analytics_component__WEBPACK_IMPORTED_MODULE_50__["ExpenseAnalyticsComponent"],
                _manufacturing_usecase_project_managment_project_managment_component__WEBPACK_IMPORTED_MODULE_51__["ProjectManagmentComponent"],
                _dataingestion_dataingestion_dataingestion_component__WEBPACK_IMPORTED_MODULE_52__["DataingestionComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_20__["ChartModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_28__["HttpModule"], angular2_datetimepicker__WEBPACK_IMPORTED_MODULE_40__["AngularDateTimePickerModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_53__["FileUploadModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_54__["NgxPaginationModule"], ng5_slider__WEBPACK_IMPORTED_MODULE_55__["Ng5SliderModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_56__["NgxSpinnerModule"],
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_19__["NgCircleProgressModule"].forRoot({
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
            providers: [_service_route_service__WEBPACK_IMPORTED_MODULE_27__["RouteService"], _core_databot_service__WEBPACK_IMPORTED_MODULE_45__["DatabotService"], { provide: angular_highcharts__WEBPACK_IMPORTED_MODULE_20__["HIGHCHARTS_MODULES"],
                    useFactory: function () { return [highcharts_modules_drilldown_src_js__WEBPACK_IMPORTED_MODULE_21__, highcharts_modules_treemap_src_js__WEBPACK_IMPORTED_MODULE_22__, highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_36__, highcharts_modules_heatmap_src__WEBPACK_IMPORTED_MODULE_35__, highcharts_modules_solid_gauge_src__WEBPACK_IMPORTED_MODULE_37__, highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_39__]; } }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/databot.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/databot.service.ts ***!
  \*****************************************/
/*! exports provided: DatabotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabotService", function() { return DatabotService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatabotService = /** @class */ (function () {
    function DatabotService(http) {
        this.http = http;
        this.apiendpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoint;
    }
    DatabotService.prototype.loadHrdashboard1 = function () {
        return this.http.get('../../assets/data/HR_Dashboard1.json');
    };
    DatabotService.prototype.loadHrHiringDashboard = function () {
        return this.http.get('../../assets/data/Hiring_pipelines (2).json');
    };
    DatabotService.prototype.loadHiringOnboarding = function () {
        return this.http.get('../../assets/data/Onbording_Status.json');
    };
    DatabotService.prototype.loadAttritionData = function () {
        return this.http.get('../../assets/data/Attrition_List.json');
    };
    DatabotService.prototype.loadEthnicityData = function () {
        return this.http.get('../../assets/data/ethnicity.json');
    };
    DatabotService.prototype.loadPoliticsData = function () {
        return this.http.get('../../assets/data/politics.json');
    };
    DatabotService.prototype.loadPoliticsTrendDistrict = function () {
        return this.http.get('../../assets/data/Dist_final.json');
    };
    DatabotService.prototype.loadPoliticsTrendAssembly = function () {
        return this.http.get('../../assets/data/Constituency_Final.json');
    };
    DatabotService.prototype.loadPoliticsTrendBooth = function () {
        return this.http.get('../../assets/data/booth_json_final.json');
    };
    DatabotService.prototype.loadUseCase = function () {
        return this.http.get('../../assets/data/usecase.json');
    };
    DatabotService.prototype.clientRegistration = function (clientdata) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        var options = {
            headers: httpHeaders
        };
        return this.http.post(this.apiendpoint + '/user/registertenant', JSON.stringify(clientdata), options);
    };
    DatabotService.prototype.userRegistration = function (userdata) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        var options = {
            headers: httpHeaders
        };
        return this.http.post(this.apiendpoint + '/user/registeruser', JSON.stringify(userdata), options);
    };
    DatabotService.prototype.userLogin = function (loginData) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        var options = {
            headers: httpHeaders
        };
        return this.http.post(this.apiendpoint + '/user/login', JSON.stringify(loginData), options);
    };
    DatabotService.prototype.getUserDetails = function (userData) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        var options = {
            headers: httpHeaders
        };
        return this.http.post(this.apiendpoint + '/user/getuserdata', JSON.stringify(userData), options);
    };
    DatabotService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DatabotService);
    return DatabotService;
}());



/***/ }),

/***/ "./src/app/customer-feedback-analysis/customer-feedback-analysis.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/customer-feedback-analysis/customer-feedback-analysis.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-wrapper{\r\n    width: 100%;\r\n   height: 25px;\r\n   padding: 0px 30px;\r\n   border: 0px;\r\n   /* border-bottom: 1px solid grey; */\r\n   border-radius: 2px;\r\n   padding-bottom: 0px;\r\n   }\r\n   .card_wrapper-drivers{\r\n    /* width: 18rem; */\r\n    background-color: #FFFFFF;\r\n    border-top: 2px solid #5871b2;\r\n    padding-left: 24px;\r\n    padding-bottom: 22px;\r\n}\r\n   .customer_wrapper-drivers{\r\n    /* width: 18rem; */\r\n    background-color: #FFFFFF;\r\n  \r\n}\r\n   .fs-40{\r\n    font-size: 40px;\r\n    color: #939292\r\n    \r\n}\r\n   .fs-17{\r\n    font-size: 17px;\r\n    color: #939292\r\n}\r\n   .fs-18{\r\n    font-size: 18px\r\n}\r\n   .icon-color{\r\n    color:#ff7675;\r\n    font-size: 18px\r\n}\r\n   .default-icon-color{\r\n    color: #ccc\r\n}\r\n   .btnActive\r\n{\r\n background-color:#452950 \r\n}\r\n   /*Padding*/\r\n   .pd-lr{\r\n    padding-left: 2px;\r\n    padding-right: 2px\r\n}\r\n   .pd-lr-driver-details{\r\n    padding-left: 2px;\r\n    padding-right: 0px;\r\n    /* background-color: #FFFFFF; */\r\n    /* height: 296px; */\r\n}\r\n   /*Padding*/\r\n   .form-group {\r\n    margin-bottom: 6px;\r\n}\r\n   .listgroup-wrapper{\r\n    padding: 8px 12px;\r\n     background-color: #fff;\r\n    border: 1px solid white;\r\n    list-style: none;\r\n    border: 1px solid white;\r\n    \r\n}\r\n   .list-back-ground-color-1{\r\n    background-color: #EFEFEF\r\n}\r\n   .list-back-ground-color-2{\r\n    background-color:#C0d6d3\r\n}\r\n   .list-back-ground-color-3{\r\n    background-color:#E0EAE9\r\n\r\n}\r\n   input[type=\"text\"]\r\n{\r\n    border: 0;\r\n    border-bottom: 1px solid #96DBD6;;\r\n    outline: 0;\r\n    width: 100%;\r\n    background:none;\r\n    /* line-height: 39px; */\r\n    \r\n}\r\n   .list-group {\r\n    margin-bottom: 0px;\r\n    cursor: pointer;\r\n}\r\n   .li-drivers{\r\npadding: 7px 12px;\r\nbackground-color: #fff;\r\n list-style: none;\r\n   \r\n}\r\n   .border-bottom{\r\n    border-bottom: 2px solid #96DBD6\r\n}\r\n   .back-color{\r\n    background-color: #FFFFFF\r\n}\r\n   p-0px{\r\n    padding: 0px;\r\n}\r\n   .padding-details{\r\n    padding-top:20px;\r\n    text-align: center;\r\n}\r\n   .list-group-item {\r\n  border:none;\r\n}\r\n   .rating-span{\r\nfont-size: 16px;\r\n}\r\n   .lowRateddrivericon{\r\n    color:red;\r\n    font-size: 18px\r\n}\r\n   .div-customer-reviews{\r\n    background-color:#273048;\r\n    color: white;\r\n    padding-bottom: 5px;\r\n    /* text-align: center; */\r\n    font-size: 18px;\r\n\r\n}\r\n   .customer-review-name{\r\n    padding-left: 20px;\r\n    font-size:18px;\r\n    border: 1px solid #FFFFFF\r\n}\r\n   .customer-review-consigment{\r\n    text-align: center;\r\n    font-size:18px;\r\n    border: 1px solid #FFFFFF\r\n}\r\n   .driver-details-card-header{\r\n    background-color:#273048;\r\n    color: white;\r\n    padding-bottom: 5px;\r\n    font-size: 18px;\r\n}\r\n   .driver-details-card-body{\r\n    background-color: #FFFFFF; height: 265px\r\n}\r\n   .box-icon{\r\n    width: 7%;\r\n    float: left;\r\n    margin-left: 21px;\r\n}\r\n   /* .active,li:hover {\r\n    background-color: #666;\r\n    color: white;\r\n  } */"

/***/ }),

/***/ "./src/app/customer-feedback-analysis/customer-feedback-analysis.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/customer-feedback-analysis/customer-feedback-analysis.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n  <div class=\"col-md-12\" style=\"padding: 0px\">\r\n    <div class=\"col-md-9\">\r\n      <div class=\"row\" style=\"margin-top: 4px;\">\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <select id=\"region\" name=\"region\" [(ngModel)]=\"regiondefaultname\" class=\"form-control dropdown-wrapper\" (change)=\"changeRegion($event)\">\r\n                <option>Region</option>\r\n                <option *ngFor=\"let regions of region\" [selected]=\"regiondefaultname == regions\">{{regions}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <select id=\"state\" name=\"state\" [(ngModel)]=\"statedefaultname\" class=\"form-control dropdown-wrapper\" (change)=\"changeState($event)\">\r\n                <option>State</option>\r\n              <option *ngFor=\"let states of state\" [selected]=\"statedefaultname == states\" >{{states}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      \r\n      </div>\r\n\r\n      <!-- Rating Count -->\r\n      <div class=\"row\">\r\n        <div class=\"col-md-7 pd-lr\">\r\n          <div class=\"col-md-4 pd-lr\">\r\n            <div class=\"card \">\r\n              <div class=\"card-body card_wrapper-drivers\">\r\n                <span class=\"fs-40\">35%</span><br>\r\n                <span class=\"fs-17\">{{fivestartratingcount}}</span><br>\r\n                <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                  aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                  class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\"\r\n                  aria-hidden=\"true\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 pd-lr\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body card_wrapper-drivers\">\r\n                <span class=\"fs-40\">35%</span><br>\r\n                <span class=\"fs-17\">{{fourstartratingcount}}</span><br>\r\n                <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                  aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                  class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\"\r\n                  aria-hidden=\"true\"></i>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-md-4 pd-lr\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body card_wrapper-drivers\">\r\n                <span class=\"fs-40\">35%</span><br>\r\n                <span class=\"fs-17\">{{threestartratingcount}}</span><br>\r\n                <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                  aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                  class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\"\r\n                  aria-hidden=\"true\"></i>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-5 pd-lr\">\r\n          <div class=\"col-md-6 pd-lr\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body card_wrapper-drivers\">\r\n                 <span class=\"fs-40\">35%</span><br>\r\n                    <span class=\"fs-17\">{{twostartratingcount}} nos</span><br>\r\n                \r\n                 <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                  aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                  class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\"\r\n                  aria-hidden=\"true\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 pd-lr\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body card_wrapper-drivers\">\r\n                <span class=\"fs-40\">35%</span><br>\r\n                <span class=\"fs-17\">{{onestartratingcount}} nos</span><br>\r\n                <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star default-icon-color\"\r\n                  aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                  class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\"\r\n                  aria-hidden=\"true\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n         <!-- Rating Count -->\r\n\r\n<!-- Reviews Screen -->\r\n      <div class=\"row\" style=\"margin-top: 7px;\">\r\n        <div class=\"col-md-4\" style=\"padding: 0px;height:296px;overflow:overlay\">\r\n          <div class=\"card customer_wrapper-drivers\">\r\n            <div class=\"card-header Customer div-customer-reviews\">\r\n                <img src =\"../../assets/iconss/customer-review.png\" class=\"box-icon\">\r\n              <span style=\"padding-left: 11px;\">Customer Reviews</span>\r\n            </div>\r\n            <div>\r\n             <div class=\"col-md-7\" style=\"padding: 0px\">\r\n                <div class=\"customer-review-name\">Name</div>\r\n                <ul class=\"list-group\" *ngFor =\"let items of customerinfo; let i=index\">\r\n                  <li class=\"listgroup-wrapper list-back-ground-color-2\" (click) =\"listClick(i,items.customername)\" [ngStyle]=\"{'background-color': selectedItem == i ? '#ff7675' : ''}\">{{items.customername}}</li>\r\n                 </ul>\r\n              </div>\r\n              <div class=\"col-md-5\" style=\"padding: 0px;\">\r\n                  <div class=\"customer-review-consigment\">Consignment</div>\r\n                  <ul class=\"list-group\" *ngFor =\"let items of customerinfo\">\r\n               <li class=\"listgroup-wrapper list-back-ground-color-2\">{{items.consigmentno}}</li>\r\n                 </ul>\r\n              </div>\r\n             </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-md-4 pd-lr-driver-details\">\r\n          <div class=\"card col-md-12 pd-lr\">\r\n            <div class=\"card-header driver-details-card-header\">\r\n                <img src =\"../../assets/iconss/driver-details.png\" class=\"box-icon\">\r\n              <span style=\"padding-left: 11px;\"> Driver Details</span> \r\n            </div>\r\n            <div class=\"card-body driver-details-card-body\">\r\n             <div class=\"row padding-details\">\r\n                <div class=\"col-md-4 \" text-wrap style=\"text-align: left;padding-left: 29px\">\r\n                    Name<span style=\"float: right\">:</span>\r\n                  </div>\r\n                  <div class=\"col-md-8\" style=\"text-align:center;padding: 0px;font-size: 16px;\">\r\n                    {{drivername}}\r\n                  </div>\r\n              </div>\r\n                <div class=\"row padding-details\">\r\n                    <div class=\"col-md-4\" text-wrap style=\"text-align: left;padding-left: 29px\">\r\n                        Drive Performance<span style=\"float: right\">:</span>\r\n                      </div>\r\n                      <div class=\"col-md-4\" style=\"font-size: 25px;text-align:center;padding: 0px;\">\r\n                        96%\r\n                      </div>\r\n                      <div class=\"col-md-4\" style=\"text-align:center\" text-wrap>\r\n                        {{companyterm}} Year with us,&nbsp;&nbsp;&nbsp; {{totalexp}} year Exp\r\n                      </div>\r\n                </div>\r\n                <div class=\"row padding-details\">\r\n                    <div class=\"col-md-4\" text-wrap style=\"text-align: left;padding-left: 29px\">\r\n                        Average feedback Rating<span style=\"float: right\">:</span>\r\n                      </div>\r\n                      <div class=\"col-md-4\" style=\"font-size: 25px;text-align:center;padding: 0px;\">\r\n                        {{avgfeedback}}\r\n                      </div>\r\n                      <div class=\"col-md-4\" style=\"padding: 0px; text-align:center\">\r\n                        {{noofreviews}} <br>Reviews\r\n                      </div>\r\n                </div>\r\n                <div class=\"row padding-details\">\r\n                    <div class=\"col-md-4\" text-wrap style=\"text-align: left;padding-left: 29px\">\r\n                        Time Stamp of delivery<span style=\"float: right\">:</span>\r\n                      </div>\r\n                      <div class=\"col-md-4\" style=\"text-align:center;padding: 0px;\">\r\n                        02/Jan/19<br>\r\n                        19:35:50\r\n                      </div>\r\n                      <div class=\"col-md-4\" style=\"text-align:center;\">\r\n                        On time Delivery\r\n                      </div>\r\n                </div>\r\n               \r\n             \r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <!--Feedback-->\r\n        <div class=\"col-md-4\" style=\"padding-left: 2px;padding-right: 3px\">\r\n          <div class=\"col-md-12\" style=\"padding:0px;background-color: #FFFFFF;height: 296px;\">\r\n            <div class=\"card back-color\">\r\n              <div class=\"card-header\" style=\"background-color:#273048;color: white;padding-bottom:5px;font-size: 18px;\">\r\n                  <img src =\"../../assets/iconss/feedback.png\" class=\"box-icon\">\r\n                <span style=\"padding-left: 11px;\">Feedback</span> \r\n              </div>\r\n              <div class=\"card-body\">\r\n                <div class=\"col-md-6\" style=\"padding-right: 2px;padding-left: 2px;font-size: 18px;padding-left: 24px\">\r\n                  <span>{{date}}</span>\r\n                </div>\r\n                <div class=\"col-md-6\" style=\"padding: 0px;font-size: 12px;text-align: center;margin-top: 4px\">\r\n                  <div *ngIf =\"driverperformance == 5\">\r\n                      <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                    aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                    class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\"\r\n                    aria-hidden=\"true\"></i>\r\n                  </div>\r\n                  <div *ngIf =\"driverperformance == 4\">\r\n                      <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                    aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                    class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\"\r\n                    aria-hidden=\"true\"></i>\r\n                  </div>\r\n                  <div *ngIf =\"driverperformance == 3\">\r\n                      <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                    aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                    class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\"\r\n                    aria-hidden=\"true\"></i>\r\n                  </div>\r\n                  <div *ngIf =\"driverperformance == 2\">\r\n                      <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                    aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                    class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\"\r\n                    aria-hidden=\"true\"></i>\r\n                  </div>\r\n                  <div *ngIf =\"driverperformance == 1\">\r\n                      <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star default-icon-color\"\r\n                    aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                    class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\"\r\n                    aria-hidden=\"true\"></i>\r\n                  </div>\r\n                \r\n           </div>\r\n           <div style=\"padding-top:10px;\" class=\"col-md-12\">\r\n            <textarea style=\"width:100%;height:88px;\">\r\n                  {{feedback}}\r\n            </textarea> \r\n             </div>\r\n             <div class=\"col-md-12\" style=\"text-align: center;font-size: 15px\">\r\n              <span>Driver Total Rating : {{drivername}}</span>\r\n             </div>\r\n             <div class=\"col-md-8\">\r\n                <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\"\r\n                aria-hidden=\"true\"></i>\r\n                </div>\r\n             <div class=\"col-md-4\">\r\n                <span class=\"rating-span\">\r\n                    {{driverpreviousratingfive}}\r\n                </span>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\"\r\n                aria-hidden=\"true\"></i>\r\n                </div>\r\n             <div class=\"col-md-4\">\r\n                <span class=\"rating-span\">\r\n                    {{driverpreviousratingfour}}\r\n                </span>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                  aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color default-icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                  class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\"\r\n                  aria-hidden=\"true\"></i>\r\n                </div>\r\n             <div class=\"col-md-4\">\r\n                <span class=\"rating-span\">\r\n                    {{driverpreviousratingthree}}\r\n                </span>\r\n            </div>\r\n          \r\n             <div class=\"col-md-8\">\r\n                <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\"\r\n                aria-hidden=\"true\"></i>\r\n                \r\n               </div>\r\n           <div class=\"col-md-4\">\r\n              <span class=\"rating-span\">\r\n                  {{driverpreviousratingtwo}}\r\n              </span>\r\n          </div>\r\n          <div class=\"col-md-8\">\r\n              <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star default-icon-color\"\r\n              aria-hidden=\"true default-icon-color\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n              class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\"\r\n              aria-hidden=\"true\"></i>\r\n              \r\n             </div>\r\n         <div class=\"col-md-4\">\r\n            <span class=\"rating-span\">\r\n                {{driverpreviousratingone}}\r\n            </span>\r\n        </div>\r\n       </div>\r\n\r\n             \r\n            </div>\r\n          </div>  \r\n          <!---->\r\n       </div>\r\n           <!--Feedback-->\r\n\r\n      </div>\r\n\r\n<!-- Reviews Screen -->\r\n\r\n      <!--Fleet Rating-->\r\n      <div class=\"row\" style=\"margin-top: 8px;\">\r\n          <div class=\"card card_wrapper-chart\">\r\n              <div class=\"card-body\" style=\"background-color: #ffffff\">\r\n                <div style=\"padding-top: 15px\">\r\n                    <img src =\"../../assets/iconss/fleet-rating.png\" width=\"2%\" class=\"mt-14\" style=\"margin-left: 33px;\">\r\n                    <!-- <h5 class=\"card-title fs-19\">Driver Daily Performance</h5> -->\r\n                    <span class=\"fs-25\" style=\"padding-left: 14px;margin-left:5px;font-size: 18px\">Fleet Rating</span>\r\n                </div>\r\n                <div [chart]=\"scrollchart\" style=\"height: 300px;\"></div>\r\n                \r\n    <!-- <h5 style=\"float: left\">Driver Daily Performance</h5> --> </div>\r\n            </div>\r\n\r\n      \r\n      </div>\r\n       <!--Fleet Rating-->\r\n </div>\r\n<!-- col-md-9 close -->\r\n\r\n    <div class=\"col-md-3\" style=\"margin-top: 32px;padding-left: 2px;padding-right: 2px\">\r\n      <div class=\"card col-md-12\" style=\"padding: 0px;height:400px;;overflow:overlay;background-color: #fff\">\r\n        <div class=\"card-header\" style=\"background-color:#273048;color: white;padding-bottom: 5px;text-align: center;font-size: 18px;\">\r\n          Top Rated Drivers\r\n        </div> \r\n       \r\n        <div class=\"card-body\">\r\n            <ul style=\"list-style: none;margin-bottom: 0px;background-color: #EFEFEF\">\r\n                <li>\r\n                   <span  style=\"font-size: 17px;\">Name</span>  <span style=\"float: right;padding-right:63px;font-size: 17px\">Rating</span>\r\n                  </li>\r\n            </ul>\r\n            <ul class=\"list-group\" *ngFor =\"let driverinfo of toprateddriveinfo\">\r\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                  {{driverinfo.drivername}}\r\n                  <span style=\"float:right;padding-right: 22px;\">\r\n                      <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                  aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                  class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\"\r\n                  aria-hidden=\"true\"></i>\r\n                  </span>\r\n                  <!-- <span style=\"float:right;padding-right: 22px;\" *ngIf =\"driverinfo.rating == '4'\">\r\n                    <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star\"\r\n                aria-hidden=\"true\"></i>\r\n                </span> -->\r\n                </li>\r\n              </ul>             \r\n </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"card col-md-12\" style=\"padding: 0px;margin-top: 8px;height:380px;overflow: overlay;background-color: #fff\">\r\n        <div class=\"card-header\" style=\"background-color:#273048;color: white;padding-bottom: 5px;text-align: center;font-size: 18px;\">\r\n          Low Rated Drivers\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ul style=\"list-style: none;margin-bottom: 0px;background-color: #EFEFEF\">\r\n                <li>\r\n                   <span  style=\"font-size: 17px;\">Name</span>  <span style=\"float:right;padding-right:63px; font-size: 17px\">Rating</span>\r\n                  </li>\r\n            </ul>\r\n            <ul class=\"list-group\" *ngFor =\"let lowrateddriverinfos of lowrateddriverinfo\">\r\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                  {{lowrateddriverinfos.drivername}}\r\n                  <span style=\"float:right;padding-right:31px\" *ngIf =\"lowrateddriverinfos.rating =='1'\">\r\n                    <i class=\"fa fa-star lowRateddrivericon\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star default-icon-color\"\r\n                aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\"\r\n                aria-hidden=\"true\"></i>\r\n                </span>\r\n                <span style=\"float:right;padding-right:31px\" *ngIf =\"lowrateddriverinfos.rating =='2'\" >\r\n                    <i class=\"fa fa-star lowRateddrivericon\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star lowRateddrivericon\"\r\n                aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\"\r\n                aria-hidden=\"true\"></i>\r\n                </span>\r\n                <span style=\"float:right;padding-right:31px\" *ngIf =\"lowrateddriverinfos.rating =='3'\">\r\n                  <i class=\"fa fa-star lowRateddrivericon\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star lowRateddrivericon\"\r\n              aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star lowRateddrivericon\" aria-hidden=\"true\">&nbsp;</i><i\r\n              class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\"\r\n              aria-hidden=\"true\"></i>\r\n              </span>\r\n\r\n                </li>\r\n               </ul>\r\n              </div>\r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/customer-feedback-analysis/customer-feedback-analysis.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/customer-feedback-analysis/customer-feedback-analysis.component.ts ***!
  \************************************************************************************/
/*! exports provided: CustomerFeedbackAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFeedbackAnalysisComponent", function() { return CustomerFeedbackAnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerFeedbackAnalysisComponent = /** @class */ (function () {
    function CustomerFeedbackAnalysisComponent(http) {
        this.http = http;
        this.region = [];
        this.state = [];
        this.customerinfo = [];
        this.toprateddriveinfo = [];
        this.lowrateddriverinfo = [];
        this.fivestartratingcount = 0;
        this.fourstartratingcount = 0;
        this.threestartratingcount = 0;
        this.twostartratingcount = 0;
        this.onestartratingcount = 0;
        this.fivestarrating = [];
        this.fourstarrating = [];
        this.threestarrating = [];
        this.twostartrating = [];
        this.onestartrating = [];
        this.dates = [];
    }
    CustomerFeedbackAnalysisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.regiondefaultname = "West", this.statedefaultname = "Washington";
        this.http.get('../../assets/data/customer-feedback.json').subscribe(function (data) {
            _this.jsondata = data;
            var index;
            for (index in _this.jsondata) {
                if (_this.region.indexOf(_this.jsondata[index].Region) < 0) {
                    _this.region.push(_this.jsondata[index].Region);
                }
            }
            _this.loadDefaultRegion(_this.regiondefaultname, _this.jsondata);
        });
    };
    CustomerFeedbackAnalysisComponent.prototype.loadDefaultRegion = function (regiondefaultname, jsondata) {
        this.state = [];
        var index;
        for (index in jsondata) {
            if (jsondata[index].Region === regiondefaultname) {
                if (this.state.indexOf(jsondata[index].State) < 0) {
                    this.state.push(jsondata[index].State);
                }
                this.rating = this.jsondata[index]['Avg Review Rating'];
                if (this.rating == "5") {
                    this.toprateddriveinfo.push({ "drivername": this.jsondata[index]['Driver Name'], "rating": this.jsondata[index]['Avg Review Rating'] });
                }
                else if (this.rating == "3" || this.rating == "2" || this.rating == "1") {
                    this.lowrateddriverinfo.push({ "drivername": this.jsondata[index]['Driver Name'], "rating": this.jsondata[index]['Avg Review Rating'] });
                }
            }
        }
        this.loadDefaultData(this.regiondefaultname, this.jsondata, this.statedefaultname);
    };
    CustomerFeedbackAnalysisComponent.prototype.loadDefaultData = function (regiondefaultname, jsondata, statedefaultname) {
        this.customerinfo = [];
        var index;
        for (index in jsondata) {
            if (this.jsondata[index].Region === regiondefaultname && this.jsondata[index].State === statedefaultname) {
                this.customerinfo.push({ "customername": jsondata[index]['Customer Name'], "consigmentno": jsondata[index].Consignment });
            }
            this.fivestartratingcount += jsondata[index]['5 Star'];
            this.fourstartratingcount += jsondata[index]['4 Star'];
            this.threestartratingcount += jsondata[index]['3 Star'];
            this.twostartratingcount += jsondata[index]['2 Star'];
            this.onestartratingcount += jsondata[index]['1 Star'];
            this.fivestarrating.push(jsondata[index]['5 Star']);
            this.fourstarrating.push(jsondata[index]['4 Star']);
            this.threestarrating.push(jsondata[index]['3 Star']);
            this.twostartrating.push(jsondata[index]['2 Star']);
            this.onestartrating.push(jsondata[index]['1 Star']);
            this.dates.push(jsondata[index].Date);
        }
        this.fleetRatingChart(this.fivestarrating, this.dates, this.fourstarrating, this.threestarrating, this.twostartrating, this.onestartrating);
    };
    CustomerFeedbackAnalysisComponent.prototype.changeRegion = function (region) {
        this.regionname = this.regiondefaultname = region.currentTarget.value;
        this.toprateddriveinfo = [];
        this.lowrateddriverinfo = [];
        this.state = [];
        var index;
        for (index in this.jsondata) {
            if (this.jsondata[index].Region === this.regionname) {
                if (this.state.indexOf(this.jsondata[index].State) < 0) {
                    this.state.push(this.jsondata[index].State);
                }
                this.rating = this.jsondata[index]['Avg Review Rating'];
                if (this.rating == "5") {
                    this.toprateddriveinfo.push({ "drivername": this.jsondata[index]['Driver Name'], "rating": this.jsondata[index]['Avg Review Rating'] });
                }
                else if (this.rating == "1" || this.rating == "2" || this.rating == "3") {
                    this.lowrateddriverinfo.push({ "drivername": this.jsondata[index]['Driver Name'], "rating": this.jsondata[index]['Avg Review Rating'] });
                }
            }
        }
    };
    CustomerFeedbackAnalysisComponent.prototype.changeState = function (state) {
        this.statename = this.statedefaultname = state.currentTarget.value;
        // this.loadReviewJson(this.regionname,this.statename)
        this.customerinfo = [];
        var index;
        for (index in this.jsondata) {
            if (this.jsondata[index].Region === this.regiondefaultname && this.jsondata[index].State === this.statename) {
                this.customerinfo.push({ "customername": this.jsondata[index]['Customer Name'], "consigmentno": this.jsondata[index].Consignment });
            }
            this.fivestartratingcount += this.jsondata[index]['5 Star'];
            this.fourstartratingcount += this.jsondata[index]['4 Star'];
            this.threestartratingcount += this.jsondata[index]['3 Star'];
            this.twostartratingcount += this.jsondata[index]['2 Star'];
            this.onestartratingcount += this.jsondata[index]['1 Star'];
            this.fivestarrating.push(this.jsondata[index]['5 Star']);
            this.fourstarrating.push(this.jsondata[index]['4 Star']);
            this.threestarrating.push(this.jsondata[index]['3 Star']);
            this.twostartrating.push(this.jsondata[index]['2 Star']);
            this.onestartrating.push(this.jsondata[index]['1 Star']);
            this.dates.push(this.jsondata[index].Date);
        }
        this.fleetRatingChart(this.fivestarrating, this.dates, this.fourstarrating, this.threestarrating, this.twostartrating, this.onestartrating);
    };
    CustomerFeedbackAnalysisComponent.prototype.listClick = function (id, item) {
        this.customername = item;
        this.selectedItem = id;
        var index;
        for (index in this.jsondata) {
            if (this.jsondata[index]['Customer Name'] === this.customername) {
                this.drivername = this.jsondata[index]['Driver Name'];
                this.companyterm = this.jsondata[index]['Company Term'];
                this.totalexp = this.jsondata[index]['Total Experience'];
                this.date = this.jsondata[index]['Date'];
                this.feedback = this.jsondata[index]['feedback'];
                this.noofreviews = this.jsondata[index]['No of Reviews'];
                this.driverperformance = this.jsondata[index]['Rating'];
                this.avgfeedback = this.jsondata[index]['Avg Review Rating'];
            }
        }
        this.driverRating(this.drivername);
    };
    CustomerFeedbackAnalysisComponent.prototype.driverRating = function (drivername) {
        var index;
        for (index in this.jsondata) {
            if (this.jsondata[index]['Driver Name'] === drivername) {
                // this.driverpreviousrating = this.jsondata[index]['Rating']
                this.driverpreviousratingone = this.jsondata[index]['1 Star'];
                this.driverpreviousratingtwo = this.jsondata[index]['2 Star'];
                this.driverpreviousratingthree = this.jsondata[index]['3 Star'];
                this.driverpreviousratingfour = this.jsondata[index]['4 Star'];
                this.driverpreviousratingfive = this.jsondata[index]['5 Star'];
            }
        }
    };
    CustomerFeedbackAnalysisComponent.prototype.fleetRatingChart = function (fivestarrating, dates, fourstarrating, threestarrating, twostartrating, onestartrating) {
        this.options = {
            chart: {
                type: 'column'
            },
            title: {
                text: '',
            },
            xAxis: {
                categories: dates,
                min: 0,
                max: 10,
                scrollbar: {
                    enabled: true
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'gray'
                    }
                },
                gridLineColor: 'transparent',
                labels: {
                    enabled: false
                },
            },
            credits: {
                enabled: false
            },
            legend: {
                align: 'right',
                x: 0,
                verticalAlign: 'top',
                y: 0,
                floating: true,
                backgroundColor: 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: 'black'
                    }
                }
            },
            series: [{
                    name: '5 Star',
                    data: fivestarrating,
                    color: '#FF5534'
                }, {
                    name: '4 Star',
                    data: fourstarrating,
                    color: '#FBD41F'
                }, {
                    name: '3 Star',
                    data: threestarrating,
                    color: '#88c053'
                }, {
                    name: '2 Star',
                    data: twostartrating,
                    color: '#D570AC'
                }, {
                    name: '1 Star',
                    data: onestartrating,
                    color: '#47CEAD',
                }]
        };
        this.scrollchart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"](this.options);
    };
    CustomerFeedbackAnalysisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-feedback-analysis',
            template: __webpack_require__(/*! ./customer-feedback-analysis.component.html */ "./src/app/customer-feedback-analysis/customer-feedback-analysis.component.html"),
            styles: [__webpack_require__(/*! ./customer-feedback-analysis.component.css */ "./src/app/customer-feedback-analysis/customer-feedback-analysis.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CustomerFeedbackAnalysisComponent);
    return CustomerFeedbackAnalysisComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.textborder{\r\n    border-bottom: 2px solid #9A9B9B\r\n}\r\n\r\n.card_wrapper{\r\n    /* width: 18rem; */\r\n    height: 11rem;\r\n    background-color: #FFFFFF;\r\n    border-bottom: 2px solid #5871b2\r\n}\r\n\r\n.card_wrapper-chart{\r\n    /* width: 18rem; */\r\n    height: 10rem;\r\n    background-color: #FFFFFF;\r\n    border-bottom: 2px solid #50c4bb;\r\n}\r\n\r\n.card_wrapper-drivers{\r\n    /* width: 18rem; */\r\n    height: 11rem;\r\n    background-color: #FFFFFF;\r\n    /* border-top: 2px solid #50c4bb; */\r\n    padding-left: 24px;\r\n}\r\n\r\n.fs-29{\r\n    font-size: 29px\r\n}\r\n\r\n.fs-15{\r\n    font-size: 14px\r\n}\r\n\r\n.fs-23{\r\n    font-size: 23px;\r\n}\r\n\r\n.fs-25{\r\n    font-size: 25px;\r\n}\r\n\r\n.fs-19{\r\n    font-size: 19px\r\n}\r\n\r\n.padding-top-12{\r\n    padding-top:6px\r\n}\r\n\r\n.padding-0{\r\n    padding: 0px\r\n}\r\n\r\n.padding-right-0{\r\n    padding-right: 0px;\r\n\r\n}\r\n\r\n.pt-0\r\n{\r\n    padding-top: 0px\r\n}\r\n\r\n.padding-left-10{\r\npadding-left: 10px\r\n}\r\n\r\n.padding-left-8{\r\n    padding-left: 8px\r\n    }\r\n\r\n.attendance-icon{\r\n    width :38%\r\n}\r\n\r\n.fleet-icon{\r\n    width :38%;\r\n    margin-left: 5px\r\n}\r\n\r\n.pt-12{\r\n    padding-top: 6px\r\n}\r\n\r\n.pt-45{\r\n    padding-top: 45px\r\n}\r\n\r\n.pr-0{\r\n    padding-right: 0px\r\n}\r\n\r\n.fs-40{\r\n    font-size: 40px;\r\n    color: #939292\r\n    \r\n}\r\n\r\n.fs-17{\r\n    font-size: 17px;\r\n    color: #939292\r\n}\r\n\r\n.fs-26{\r\n    font-size: 26px;\r\n}\r\n\r\n.mt-14{\r\n    margin-top: -14px\r\n}\r\n\r\n.txt-wrapper{\r\n   \r\n        background-color: #559290;\r\n        height: 4rem;\r\n        font-size: 16px;\r\n        padding-top: 8px;\r\n        padding-left: 12px;\r\n        color: aliceblue;\r\n \r\n}\r\n\r\n.icon-color{\r\n    color:#ff7675\r\n}\r\n\r\n.cardheader-wrapper{\r\n    background-color: #538F8D;\r\n    /* height: 20px; */\r\n    height: 37px;\r\n    font-size: 17px;\r\n    color: white;\r\n    padding-top: 9px;\r\n    padding-left: 9px;\r\n    padding-bottom: 11px;\r\n}\r\n\r\n.ulleftdiv-wrapper{\r\n   position: absolute;\r\n    top: 41%; \r\n    padding-left: 23px;\r\n    list-style-type: none\"\r\n    p\r\n}\r\n\r\n.ulrighttdiv-wrapper{\r\n    position: absolute;\r\n    left: 49%;\r\n    top: 41%; list-style-type: none\"\r\n }\r\n\r\n.lirghtdiv-wrapper{\r\n  color: white;\r\n  font-size: 17px;\r\n}\r\n\r\n.btn-primary {\r\n    \r\n    border-color: none;\r\n}\r\n\r\n.image-wrapper{\r\n    width:\"100%\";\r\n    opacity: 0.2;\r\n}\r\n\r\nhr { \r\n    display: block;\r\n    margin-top: 0.5em;\r\n    margin-bottom: 0.5em;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border-style: inset;\r\n    border-width: 1px;\r\n  }\r\n\r\n.speeding-icon-wrapper{\r\n      \r\n    width: 15%;\r\n    float: right;\r\n    padding-top: -9px;\r\n    margin-top: -4px;\r\n    /* margin-left: 10px; */\r\n    margin-right: 16px;\r\n  }\r\n\r\n.rashbreaking-icon-wrapper{\r\n      \r\n    width: 11%;\r\n    float: right;\r\n    padding-top: -9px;\r\n    margin-top: -4px;\r\n    /* margin-left: 10px; */\r\n    margin-right: 16px;\r\n  }\r\n\r\n.idletime-icon-wrapper{\r\n      \r\n    width: 11%;\r\n    float: right;\r\n    padding-top: -9px;\r\n    margin-top: -4px;\r\n    /* margin-left: 10px; */\r\n    margin-right: 16px;\r\n  }\r\n\r\n.btnpanel{\r\n    /* float: right; */\r\n    background-color: #fe2626;\r\n    width: 40%;\r\n    border-radius: 7px;\r\n    margin-top: -1px;\r\n  }\r\n\r\n.background-image{\r\n    width:100%;\r\n    height: 170px;\r\n    \r\n  }\r\n\r\n.chart-height{\r\n      height: 300px;\r\n  }\r\n\r\n.driver-performace-div{\r\n   padding-top: 8px;\r\n   height:300px; \r\n   padding-top: 7px\r\n  }\r\n\r\n.secrightdiv{\r\n padding-top: 10px;\r\n padding-left: 0px;\r\n padding-right:3px;\r\n  }\r\n\r\n.event-button{\r\n color:white;\r\n background-color:#374466;\r\n position: absolute;\r\n left:49%;top:22%;\r\n border-color:none;width:46%;\r\n border: none;\r\n  }\r\n\r\n.rightsectionbox{\r\n    padding: 0px;padding-top: 2px;\r\n}\r\n\r\n.bg-color{\r\n   background-color: #3d4e7b\r\n}\r\n\r\n.iconback-color{\r\n    color:#ccc\r\n}\r\n\r\n.back-ground-header{\r\n    background-color: #374466\r\n}\r\n\r\n.today-text{\r\n    font-size: 21px;\r\n    position: absolute;\r\n    top: 22%;\r\n    left: 16%;\r\n    color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n  <div class=\"col-md-10 padding-0\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"col-md-6\">\r\n          <span class=\"fs-26 textborder\">Attendance</span>\r\n          </div>\r\n        <div class=\"col-md-6\">\r\n          <span class=\"fs-26 textborder\">Fleet Availability</span>\r\n       </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12\">\r\n        <div class=\"col-md-6 padding-0\">\r\n          <div class=\" card card_wrapper\">\r\n            <div class=\"col-md-3\">\r\n              <div class=\"card-body\">\r\n                <img src =\"../../assets/iconss/Attendence.png\" class=\"attendance-icon\"><br>\r\n                <div>\r\n                  <span class=\"padding-left-8\">Total</span><br>\r\n                  <span class=\"padding-left-8\">1000</span>\r\n                </div>\r\n\r\n\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"card-body padding-top-12\">\r\n                <span class=\"fs-29\">934</span><br>\r\n                <span class=\"fs-15\">88%</span><br>\r\n                 <hr>\r\n                <span class=\"fs-15\">Present</span>\r\n\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"card-body pt-12\">\r\n                 <span class=\"fs-29\">94</span><br>\r\n                <span class=\"fs-15\">9%</span><br>\r\n               <hr>\r\n                <span class=\"fs-15\">Planned leave</span>\r\n\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"card-body pt-12\">\r\n                <span class=\"fs-29\">32</span><br>\r\n                <span class=\"fs-15\">3%</span><br>\r\n                 <hr>\r\n                <span class=\"fs-15\">Unplanned leave</span>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        \r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-6 padding-left-10 pr-0\">\r\n\r\n          <div class=\"card card_wrapper\">\r\n            <div class=\"col-md-3\">\r\n              <div class=\"card-body\">\r\n                  <img src =\"../../assets/iconss/Fleet.png\" class=\"fleet-icon\"><br>\r\n                  <div>\r\n                    <span style=\"padding-left: 12px;\">Total</span><br>\r\n                    <span style=\"padding-left: 12px;\">1000</span>\r\n                  </div>\r\n                 </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"card-body padding-top-12\">\r\n                <span class=\"fs-29\">930</span><br>\r\n                <span class=\"fs-15\">88%</span><br>\r\n               \r\n                <hr>\r\n                <span class=\"fs-15\">On Field</span>\r\n\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"card-body padding-top-12\">\r\n                <span class=\"fs-29\">80</span><br>\r\n                <span class=\"fs-15\">9%</span><br>\r\n                <hr>\r\n                <span class=\"fs-15\">Standby</span>\r\n\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"card-body padding-top-12\">\r\n                <span class=\"fs-29\">30</span><br>\r\n                <span class=\"fs-15\">3%</span><br>\r\n                <hr>\r\n                <span class=\"fs-15\">Maintenance</span>\r\n             \r\n              </div>\r\n\r\n\r\n            </div>\r\n           \r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    <div class=\"col-md-12 driver-performace-div\">\r\n        <div class=\"card card_wrapper-chart\">\r\n          <div class=\"card-body\" style=\"background-color: #ffffff\">\r\n            <div>\r\n                <img src =\"../../assets/iconss/performance_icon.png\" width=\"2%\" class=\"mt-14\" style=\"margin-left: 33px;\">\r\n                <!-- <h5 class=\"card-title fs-19\">Driver Daily Performance</h5> -->\r\n                <span class=\"fs-25\" style=\"padding-left: 14px;margin-left: 24px\">Driver Daily Performance</span>\r\n            </div>\r\n              <div [chart]=\"driverperformancechart\">   \r\n            </div>\r\n            \r\n        \r\n             <!-- <h5 style=\"float: left\">Driver Daily Performance</h5> -->\r\n            </div>\r\n        </div>\r\n      </div> \r\n\r\n      <div class=\"col-md-12\" style=\"margin-top: 50px;\">\r\n        <div class=\"col-md-12\">\r\n            <img src =\"../../assets/iconss/Rating.png\" width=\"2%\" class=\"mt-14\">\r\n         <span class=\"fs-25\" style=\"padding-left: 14px\">Drivers by rating</span>\r\n       </div>\r\n        <div>\r\n          <div class=\"col-md-3 padding-0\">\r\n            <div class=\"card-body card_wrapper-drivers\" [ngStyle]=\"{'background-color':driverRating == '5' ? '#5871b2' : '' }\">\r\n                <span class=\"fs-40\">229 <span class=\"fs-17\"></span></span><br>\r\n              <span class=\"fs-17\">22.9%</span><br>\r\n                <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\"\r\n                aria-hidden=\"true\"></i>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 padding-right-0 padding-left-10\">\r\n            <div class=\"card-body card_wrapper-drivers\" [ngStyle]=\"{'background-color':driverRating == '4' ? '#5871b2' : '' }\">\r\n               <span class=\"fs-40\">262 <span class=\"fs-17\"></span></span><br>\r\n              <span class=\"fs-17\">26.2%</span><br>\r\n                <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star iconback-color\"\r\n                aria-hidden=\"true\"></i>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-md-3 padding-right-0 padding-left-10\">\r\n            <div class=\"card-body card_wrapper-drivers\" [ngStyle]=\"{'background-color':driverRating == '3' ? '#5871b2' : '' }\">\r\n             <span class=\"fs-40\">254 <span class=\"fs-17\"></span></span><br>\r\n             <span class=\"fs-17\">25.4%</span><br>\r\n              <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                class=\"fa fa-star iconback-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star iconback-color\"\r\n                aria-hidden=\"true\"></i>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-md-3 padding-right-0 padding-left-10\">\r\n            <div class=\"card-body card_wrapper-drivers\" [ngStyle]=\"{'background-color':driverRating == '2' ? '#5871b2' : '' }\">\r\n              <span class=\"fs-40\">255 <span class=\"fs-17\"></span></span><br>\r\n              <span class=\"fs-17\">25.5%</span><br>\r\n              <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star iconback-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                class=\"fa fa-star iconback-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star iconback-color\"\r\n                aria-hidden=\"true\"></i>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"col-md-2 secrightdiv\">\r\n      <div class=\"col-md-12 padding-0\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header cardheader-wrapper back-ground-header\">Over Speeding\r\n              <img src ='../../assets/iconss/speed.png' class=\"speeding-icon-wrapper\">\r\n          </div>\r\n          <div class=\"card-body bg-color\">\r\n              <span class=\"today-text\">Today</span>\r\n            <img src=\"../../assets/images/Speeding_Truck_Image.jpg\" class=\"background-image\" style=\"opacity: 0.1;\">\r\n            <button type=\"button\" class=\"btn btn-primary event-button\" ><span>{{todayevent | number:'1.0-0'}}&nbsp;&nbsp;</span>Events</button>\r\n            <!-- <span>20 </span> -->\r\n            <div style=\"float:left\">\r\n              <ul class=\"ulleftdiv-wrapper\" style=\"list-style-type: none\">\r\n                <li class=\"lirghtdiv-wrapper\">Last Day:</li>\r\n                <li class=\"lirghtdiv-wrapper\">This Week</li>\r\n                <li class=\"lirghtdiv-wrapper\">Last Month Avg:</li>\r\n                <li class=\"lirghtdiv-wrapper\">Threshold:</li>\r\n              </ul>\r\n            </div>\r\n            <div style=\"float:right\">\r\n              <ul class=\"ulrighttdiv-wrapper\" style=\"list-style-type: none\">\r\n                <li class=\"lirghtdiv-wrapper\">{{lastdayevent | number:'1.0-0'}}</li>\r\n                <li class=\"lirghtdiv-wrapper\">{{thisweekevent | number:'1.0-0'}}</li>\r\n                <li class=\"lirghtdiv-wrapper\">{{lastmonthavgevent | number:'1.0-0'}}</li>\r\n                <li class=\"lirghtdiv-wrapper\">{{threshold | number:'1.0-0'}}</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 rightsectionbox\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header cardheader-wrapper back-ground-header\">Harsh Braking\r\n              <img src ='../../assets/iconss/Rash.png' class=\"rashbreaking-icon-wrapper\">\r\n          </div>\r\n          <div class=\"card-body bg-color\">\r\n              <span class=\"today-text\">Today</span>\r\n            <img src=\"../../assets/images/Speeding_Truck_Image.jpg\" class=\"background-image\"  style=\"opacity: 0.1;\">\r\n            <button type=\"button\" class=\"btn btn-primary event-button\"><span>{{todayevent | number:'1.0-0'}}&nbsp;&nbsp;</span>Events</button>\r\n            <!-- <span>20 </span> -->\r\n            <div style=\"float:left\">\r\n              <ul class=\"ulleftdiv-wrapper\" style=\"list-style-type: none\">\r\n                <li class=\"lirghtdiv-wrapper\">Last Day:</li>\r\n                <li class=\"lirghtdiv-wrapper\">This Week</li>\r\n                <li class=\"lirghtdiv-wrapper\">Last Month Avg:</li>\r\n                <li class=\"lirghtdiv-wrapper\">Threshold:</li>\r\n              </ul>\r\n            </div>\r\n            <div style=\"float:right\">\r\n              <ul class=\"ulrighttdiv-wrapper\" style=\"list-style-type: none\">\r\n                <li class=\"lirghtdiv-wrapper\">{{lastdayevent | number:'1.0-0'}}</li>\r\n                <li class=\"lirghtdiv-wrapper\">{{thisweekevent | number:'1.0-0'}}</li>\r\n                <li class=\"lirghtdiv-wrapper\">{{lastmonthavgevent | number:'1.0-0'}}</li>\r\n                <li class=\"lirghtdiv-wrapper\">{{threshold}}</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12 rightsectionbox\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header cardheader-wrapper back-ground-header\">Idle Time\r\n          <img src ='../../assets/iconss/Idle.png' class=\"idletime-icon-wrapper\">\r\n          </div>\r\n          <div class=\"card-body bg-color\">\r\n              <span class=\"today-text\">Today</span>\r\n            <img src=\"../../assets/images/Speeding_Truck_Image.jpg\" class=\"background-image\"  style=\"opacity: 0.1;\">\r\n         <button type=\"button\" class=\"btn btn-primary event-button\"><span>{{todayevent| number:'1.0-0'}}&nbsp;&nbsp;</span>Events</button>\r\n            <!-- <span>20 </span> -->\r\n            <div style=\"float:left\">\r\n              <ul class=\"ulleftdiv-wrapper\" style=\"list-style-type: none\">\r\n                <li class=\"lirghtdiv-wrapper\">Last Day:</li>\r\n                <li class=\"lirghtdiv-wrapper\">This Week</li>\r\n                <li class=\"lirghtdiv-wrapper\">Last Month Avg:</li>\r\n                <li class=\"lirghtdiv-wrapper\">Threshold:</li>\r\n              </ul>\r\n            </div>\r\n            <div style=\"float:right\">\r\n              <ul class=\"ulrighttdiv-wrapper\" style=\"list-style-type: none\">\r\n                <li class=\"lirghtdiv-wrapper\">{{lastdayevent | number:'1.0-0'}}</li>\r\n                <li class=\"lirghtdiv-wrapper\">{{thisweekevent | number:'1.0-0'}}</li>\r\n                <li class=\"lirghtdiv-wrapper\">{{lastmonthavgevent | number:'1.0-0'}}</li>\r\n                <li class=\"lirghtdiv-wrapper\">{{threshold}}</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, router) {
        this.http = http;
        this.router = router;
        this.jsondata = [];
        this.categoryone = [];
        this.categorytwo = [];
        this.categorythree = [];
        this.categoryfour = [];
        this.categoryfive = [];
        this.categorysix = [];
        this.categoryseven = [];
        this.categoryeight = [];
        this.fiveratingdriver = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('../../assets/data/driver.json').subscribe(function (data) {
            _this.jsondata = data;
            console.log(_this.jsondata);
            for (var i = 0; i < _this.jsondata.length; i++) {
                if (_this.jsondata[i].Category == "91-100") {
                    _this.categoryone.push({ name: _this.jsondata[i].Name, y: _this.jsondata[i].Peroformance });
                }
                else if (_this.jsondata[i].Category == "81-90") {
                    _this.categorytwo.push({ name: _this.jsondata[i].Name, y: _this.jsondata[i].Peroformance });
                }
                else if (_this.jsondata[i].Category == "71-80") {
                    _this.categorythree.push({ name: _this.jsondata[i].Name, y: _this.jsondata[i].Peroformance });
                }
                else if (_this.jsondata[i].Category == "61-70") {
                    _this.categoryfour.push({ name: _this.jsondata[i].Name, y: _this.jsondata[i].Peroformance });
                }
                else if (_this.jsondata[i].Category == "51-60") {
                    _this.categoryfive.push({ name: _this.jsondata[i].Name, y: _this.jsondata[i].Peroformance });
                }
                else if (_this.jsondata[i].Category == "41-50") {
                    _this.categorysix.push({ name: _this.jsondata[i].Name, y: _this.jsondata[i].Peroformance });
                }
                else if (_this.jsondata[i].Category == "31-40") {
                    _this.categoryseven.push({ name: _this.jsondata[i].Name, y: _this.jsondata[i].Peroformance });
                }
                else if (_this.jsondata[i].Category == "21-30") {
                    _this.categoryeight.push({ name: _this.jsondata[i].Name, y: _this.jsondata[i].Peroformance });
                }
            }
            _this.driverPerformanceChart(_this.categoryone, _this.categorytwo, _this.categorythree, _this.categoryfour, _this.categoryfive, _this.categorysix, _this.categoryseven, _this.categoryeight);
        });
        this.getDriverEvents();
    };
    DashboardComponent.prototype.driverPerformanceChart = function (categoryone, categorytwo, categorythree, categoryfour, categoryfive, categorysix, categoryseven, categoryeight) {
        var UNDEFINED;
        var previousPoint = null;
        var $this = this;
        this.options = {
            chart: {
                type: 'column',
                height: 300,
                events: {
                    drillup: function (e) {
                        $this.getDriverEvents();
                    },
                    drilldown: function (e) {
                        $this.getCategoryEvents(e.seriesOptions.name, e.seriesOptions.data.length);
                    }
                }
            },
            // title: {
            //   text: 'Driver Daily Performance'
            // },
            xAxis: {
                type: 'category',
                min: 0,
                max: 7,
                scrollbar: {
                    enabled: true
                },
                color: "#FFFFFF"
            },
            title: {
                text: ''
            },
            yAxis: {
                title: { text: '' },
                gridLineColor: 'transparent',
                labels: {
                    enabled: false
                },
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}'
                    },
                    point: {
                        events: {
                            click: function () {
                                if (this.x != UNDEFINED) {
                                    $this.getDriver(this.name);
                                    console.log(this);
                                    //   $this.router.navigate(['./driver-overview']);
                                    for (var i = 0; i < this.series.data.length; i++) {
                                        this.series.data[i].update({ color: '#5871b2' }, true, false);
                                    }
                                    this.update({ color: '#1c2337' }, true, false);
                                    //   $this.router.navigate(['./driver-overview']);
                                }
                            },
                        }
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },
            "series": [
                {
                    "name": "Driver",
                    "data": [
                        {
                            "name": "91-100",
                            "y": 18,
                            "drilldown": "91-100",
                            color: "#5871b2"
                        },
                        {
                            "name": "81-90",
                            "y": 187,
                            "drilldown": "81-90",
                            color: "#5871b2"
                        },
                        {
                            "name": "71-80",
                            "y": 158,
                            "drilldown": "71-80",
                            color: "#5871b2"
                        },
                        {
                            "name": "61-70",
                            "y": 243,
                            "drilldown": "61-70",
                            color: "#5871b2"
                        },
                        {
                            "name": "51-60",
                            "y": 218,
                            "drilldown": "51-60",
                            color: "#5871b2"
                        },
                        {
                            "name": "41-50",
                            "y": 126,
                            "drilldown": "41-50",
                            color: "#5871b2"
                        },
                        {
                            "name": "31-40",
                            "y": 47,
                            "drilldown": "31-40",
                            color: "#5871b2"
                        },
                        {
                            "name": "21-30",
                            "y": 3,
                            "drilldown": "21-30",
                            color: "#5871b2"
                        },
                    ]
                }
            ],
            "drilldown": {
                "series": [
                    {
                        "name": "91-100",
                        "id": "91-100",
                        "data": categoryone,
                        color: "#5871b2",
                    },
                    {
                        "name": "81-90",
                        "id": "81-90",
                        "data": categorytwo,
                        color: "#5871b2"
                    },
                    {
                        "name": "71-80",
                        "id": "71-80",
                        "data": categorythree,
                        color: "#5871b2"
                    },
                    {
                        "name": "61-70",
                        "id": "61-70",
                        "data": categoryfour,
                        color: "#5871b2"
                    },
                    {
                        "name": "51-60",
                        "id": "51-60",
                        "data": categoryfive,
                        color: "#5871b2"
                    },
                    {
                        "name": "41-50",
                        "id": "41-50",
                        "data": categorysix,
                        color: "#5871b2"
                    },
                    {
                        "name": "31-40",
                        "id": "31-40",
                        "data": categoryseven,
                        color: "#5871b2"
                    },
                    {
                        "name": "21-30",
                        "id": "21-30",
                        "data": categoryeight,
                        color: "#5871b2"
                    },
                ]
            }
        };
        this.driverperformancechart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"](this.options);
    };
    DashboardComponent.prototype.getDriverEvents = function () {
        var _this = this;
        this.http.get('../../assets/data/driverevent.json').subscribe(function (data) {
            _this.driverevent = data;
            _this.drivertotalevents = _this.driverevent[0];
            _this.lastdayevent = _this.drivertotalevents['Last Day'] / 1000;
            _this.thisweekevent = _this.drivertotalevents['This Week'] / 1000;
            _this.lastmonthavgevent = _this.drivertotalevents['Last Month Average'] / 1000;
            _this.threshold = _this.drivertotalevents['Threshold'];
            _this.todayevent = _this.drivertotalevents['Today'] / 1000;
        });
    };
    DashboardComponent.prototype.getCategoryEvents = function (category, avg) {
        var index;
        this.lastdayevent = 0;
        this.thisweekevent = 0;
        this.lastmonthavgevent = 0;
        this.thisweekevent = 0;
        this.todayevent = 0;
        for (index in this.driverevent) {
            if (this.driverevent[index].Category == category) {
                this.lastdayevent += this.driverevent[index]['Last Day'] / avg;
                this.thisweekevent += this.driverevent[index]['This Week'] / avg;
                this.lastmonthavgevent += this.driverevent[index]['Last Month Average'] / avg;
                this.threshold = this.driverevent[index]['Threshold'];
                this.todayevent += this.driverevent[index]['Today'] / avg;
            }
        }
    };
    DashboardComponent.prototype.getDriver = function (driverName) {
        this.getDriverCount(driverName);
        var index;
        for (index in this.driverevent) {
            if (this.driverevent[index].Name === driverName) {
                this.lastdayevent = this.driverevent[index]['Last Day'];
                this.thisweekevent = this.driverevent[index]['This Week'];
                this.lastmonthavgevent = this.driverevent[index]['Last Month Average'];
                this.threshold = this.driverevent[index]['Threshold'];
                this.todayevent = this.driverevent[index]['Today'];
            }
        }
    };
    DashboardComponent.prototype.getDriverCount = function (driverName) {
        var _this = this;
        var index;
        // this.driverName = driverName
        this.http.get('../../assets/data/driverinfo.json').subscribe(function (data) {
            _this.driverRating = data;
            for (index in _this.driverRating) {
                if (_this.driverRating[index].Name == driverName) {
                    _this.driverRating = _this.driverRating[index].Rating;
                }
            }
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dataingestion/dataingestion/dataingestion.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/dataingestion/dataingestion/dataingestion.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-section{\r\n    height: 56px;\r\n    line-height: 52px;\r\n    color: beige;\r\n    font-size: 24px;\r\n    padding-left: 20px;\r\n    padding-top: 2px;\r\n    margin-top: 2px;\r\n    text-align: center;\r\n    background-color: #1C2377;\r\n    color: white;\r\n}\r\n\r\ntable {\r\n  display: block;\r\n  overflow-x: auto;\r\n  white-space: nowrap;\r\n}\r\n\r\n.card{\r\n  background-color: white;\r\n  box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n  color:black;\r\n  margin: 20px;\r\n  padding: 10px;\r\n}\r\n\r\n.uploadList{\r\n  padding: 10px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dataingestion/dataingestion/dataingestion.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dataingestion/dataingestion/dataingestion.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row header-section\">\r\n      <span>Data Ingestion Platform</span>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n      \r\n      <div class=\"col-md-12\">\r\n          <div class=\"row card\">\r\n              <div class=\"col-sm-10\">\r\n                  <h4>Upload Section</h4>\r\n                  <div id=\"fileSelector\">\r\n                      <input type=\"file\" name=\"fileUplaod\" id=\"fileUpload\" accept=\".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"\r\n                      multiple ng2FileSelect [uploader]=\"uploader\">\r\n                  </div>\r\n                  <div>\r\n                      <div class=\"row uploadList\" *ngFor=\"let item of uploader.queue\">\r\n                          <div class=\"col-sm-4\">{{item.file.name}}</div>\r\n                          <div class=\"col-sm-4\">\r\n                              <div class=\"progress\">\r\n                                  <div class=\"progress-bar bg-success\"\r\n                                  [ngStyle]=\"{'width':item.progress+'%'}\"></div>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-sm-4\">\r\n                                  <button type=\"button\" class=\"btn btn-dark\" (click)=\"item.upload()\">Upload</button>\r\n                                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">Cancel</button>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"row\" *ngIf=\"uploader?.queue?.length > 0\">\r\n                          <button type=\"button\" class=\"btn btn-primary\" (click)=\"uploader.uploadAll()\">Upload All</button>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\" style=\"margin-top: 30px;\">\r\n                  <select id=\"region\" name=\"region\" placeholder=\"Region\" class=\"form-control dropdown-wrapper\" (change)=\"changeValue($event)\">\r\n                    <option>Select Api</option>\r\n                    <option *ngFor=\"let item of apiArray\">{{item}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"row card\">\r\n            <h4>Data</h4>\r\n            <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\" *ngFor=\"let header of tableHeaders\">{{header}}</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let row of tableData | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                  <td *ngFor=\"let col of tableHeaders\">{{row[col]}}</td>\r\n                </tr>\r\n              </tbody>\r\n              <pagination-controls (pageChange)=\"p = $event\" *ngIf=\"tableHeaders.length>0\"></pagination-controls>\r\n            </table>\r\n          </div>\r\n      </div>\r\n      <!--Drop Down-->\r\n     \r\n      <!--Drop Down-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dataingestion/dataingestion/dataingestion.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dataingestion/dataingestion/dataingestion.component.ts ***!
  \************************************************************************/
/*! exports provided: DataingestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataingestionComponent", function() { return DataingestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = 'http://localhost:4000/file/upload';
var DataingestionComponent = /** @class */ (function () {
    function DataingestionComponent(http) {
        var _this = this;
        this.http = http;
        this.apiArray = [];
        this.tableHeaders = [];
        this.tableData = [];
        this.p = 1;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: URL });
        this.attachmentList = [];
        this.filesToUpload = [];
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log(typeof JSON.parse(response));
            var obj = JSON.parse(response);
            _this.apiArray.push(obj.apiurl);
            //  console.log(this.apiArray);
        };
    }
    // download(index) {
    //   const filename = this.attachmentList[index].uploadname;
    //   this._fileService.downloadFile(filename)
    //     .subscribe(
    //       data => console.log(data),
    //       error => console.error(error)
    //     );
    // }
    DataingestionComponent.prototype.ngOnInit = function () {
    };
    DataingestionComponent.prototype.changeValue = function (api) {
        var _this = this;
        this.tableHeaders = [];
        var apivalue = api.currentTarget.value;
        console.log(apivalue + "" + typeof apivalue);
        this.http.get(apivalue).subscribe(function (data) {
            console.log(data);
            _this.tableData = data;
            var responseData = data[0];
            for (var key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    _this.tableHeaders.push(key);
                    console.log(_this.tableHeaders);
                }
            }
        });
    };
    DataingestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dataingestion',
            template: __webpack_require__(/*! ./dataingestion.component.html */ "./src/app/dataingestion/dataingestion/dataingestion.component.html"),
            styles: [__webpack_require__(/*! ./dataingestion.component.css */ "./src/app/dataingestion/dataingestion/dataingestion.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataingestionComponent);
    return DataingestionComponent;
}());



/***/ }),

/***/ "./src/app/driver-overview/driver-overview.component.css":
/*!***************************************************************!*\
  !*** ./src/app/driver-overview/driver-overview.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\r\n    background:none;\r\n  }\r\n\r\n  .dropdown-wrapper{\r\n   width: 100%;\r\n  height: 25px;\r\n  padding: 0px 30px;\r\n  border: 0px;\r\n  /* border-bottom: 1px solid grey; */\r\n  border-radius: 2px;\r\n  }\r\n\r\n  .txt-color{\r\n    color: white\r\n  }\r\n\r\n  .btnpanel{\r\n      /* float: right; */\r\n      background-color: #fe2626;\r\n      width: 100%;\r\n      border-radius: 7px;\r\n      margin-top: -1px;\r\n    }\r\n\r\n  .form-control {\r\n     height: 30px;\r\n     \r\n  }\r\n\r\n  .txtcolor{\r\n    color: white\r\n    \r\n    }\r\n\r\n  .form-group {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n  .nav-tabs {\r\n     border-bottom: none\r\n}\r\n\r\n  .activeclass{\r\n  background-color: #f9f9f9!important;\r\n  color:#CFCFCF\r\n  /* border-bottom: 3px solid palevioletred; */\r\n\r\n\r\n}\r\n\r\n  .btnclass{\r\n  background-color: #3d4e7b;\r\n  width: 15%;\r\n  /* border-radius: 9px; */\r\n border:none\r\n\r\n}\r\n\r\n  .pl-27{\r\n  padding-left:18px\r\n}\r\n\r\n  .pl-3{\r\n  padding-left: 3px\r\n}\r\n\r\n  .pr-0{\r\n  padding-right: 0px;\r\n}\r\n\r\n  .ml-2{\r\n  margin-left: 2px\r\n}\r\n\r\n  .avatar {\r\n  vertical-align: middle;\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 50%;\r\n  margin-top: 46px;\r\n  margin-left: 31px;\r\n}\r\n\r\n  /* img {\r\n  border-radius: 50%;\r\n} */\r\n\r\n  .header-txt{\r\n  font-size: 16px; \r\n  padding-left:19px\r\n    /* color: wheat; */\r\n}\r\n\r\n  /*Padding*/\r\n\r\n  pt-5{\r\n  padding-top: 5px\r\n}\r\n\r\n  .fs-16{\r\n  font-size: 16px\r\n}\r\n\r\n  .img-text{\r\nfont-size:17px;padding-left:45px;\r\n}\r\n\r\n  td{\r\n  border: 1px solid;\r\n\r\n}\r\n\r\n  .cardactiveclass{\r\n  background-color:#273048;\r\n \r\n\r\n}\r\n\r\n  /**/\r\n"

/***/ }),

/***/ "./src/app/driver-overview/driver-overview.component.html":
/*!****************************************************************!*\
  !*** ./src/app/driver-overview/driver-overview.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row pt-5\" style=\"padding-top: 12px;\">\r\n        <div class=\"col-md-6\">\r\n            <div>\r\n                <span class=\"header-txt\">Title</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"pull-right\">\r\n                <!-- <button type=\"button\" class=\"btn btn-danger-lg\">Alerts</button> -->\r\n                <button class=\"btn btnpanel\"><span class=\"txtcolor\">Alert</span> &nbsp;<i class=\"fa fa-exclamation-triangle txtcolor\">\r\n                </i></button>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2 pr-0\">\r\n            <div class=\"form-group\">\r\n             <select id=\"region\" name=\"region\" [(ngModel)]=\"regiondefaultname\"  class=\"form-control dropdown-wrapper\"\r\n                  (change)=\"changeRegion($event)\">\r\n                  <option *ngFor=\"let regions of region\" [selected]=\"regiondefaultname == regions\">{{regions}}</option>\r\n                </select>\r\n              </div>\r\n        </div>\r\n        <div class=\"col-md-2 pr-0 pl-3\">\r\n            <div class=\"form-group\">\r\n\r\n                <select id=\"state\" name=\"state\" [(ngModel)]=\"statedefaultname\"  class=\"form-control dropdown-wrapper\"\r\n                  (change)=\"changeState($event)\">\r\n                  <option>State</option>\r\n                  <option *ngFor=\"let states of state\" [selected]=\"statedefaultname == states\">{{states}}</option>\r\n                </select>\r\n              </div>\r\n        </div>\r\n        <div class=\"col-md-2 pr-0 pl-3\">\r\n            <div class=\"form-group\">\r\n                <select id=\"category\" name=\"category\" [(ngModel)]=\"categorydefaultname\" class=\"form-control dropdown-wrapper\"\r\n                  (change)=\"changeCategory($event)\">\r\n                  <option> Performance Category</option>\r\n                  <option *ngFor=\"let catg of categories\" [selected]=\"categorydefaultname == catg\">{{catg}}</option>\r\n                </select>\r\n              </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 pl-3\">\r\n            <div class=\"form-group\">\r\n            <select id=\"rating\" name=\"rating\" [(ngModel)]=\"ratingdefaultname\"  class=\"form-control dropdown-wrapper\"\r\n                  (change)=\"changeRating($event)\">\r\n                  <option> Customer Rating</option>\r\n                  <option *ngFor=\"let ratings of rating\" [selected]=\"ratingdefaultname == ratings\">{{ratings}}</option>\r\n                </select>\r\n              </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngFor = \"let item of response\">\r\n        <div class=\"col-md-4 pr-0\">\r\n           <div class=\"card\" style=\"height:353px; background-color: #ffffff; border-bottom: 1px solid #273048;\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-6\">\r\n                    <img src=\"../../assets/images/Driver_Image.jpg\" alt=\"Avatar\" class=\"avatar\"><br>\r\n                    <span class=\"img-text\">{{item.Name}}</span>\r\n              </div>\r\n\r\n                 <!-- <img src=\"../../assets/images/Driver_Image.jpg\" alt=\"Avatar\" style=\"width:200px\"> -->\r\n                 <div class=\"col-md-6\" style=\"padding: 0px;padding-top:49px;line-height: 48px;\">\r\n                        <span class=\"fs-16\"><b>License:&nbsp;</b></span><span>{{item.Licensenumber}}</span><br>\r\n                        <span class=\"fs-16\"><b>Exp:&nbsp;</b></span><span>{{item.Experience}}</span><br>\r\n                        <span class=\"fs-16\"><b>Traffic Violations:&nbsp;</b></span><span>{{item.Trafficviolation}}</span><br>\r\n                       <span class=\"fs-16\"><b>Vehicle Type:&nbsp;</b></span>:<span>{{item.vehicletype}}</span><br>\r\n                 </div>\r\n\r\n            </div>\r\n            <!-- <div class=\"col-md-6\">\r\n\r\n            </div> -->\r\n           </div>\r\n        </div>\r\n        <div class=\"col-md-8 pl-3\">\r\n            <div class=\"card\" style=\"background-color: #ffffff; border-bottom:1px solid #273048;\">\r\n                <div class=\"card-header\">\r\n                  <ul class=\"nav nav-tabs card-header-tabs\">\r\n                    <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" [ngClass]=\"{activeclass: isActive(1)}\" (click)=\"setActiveDriver(1);\" style=\"color: #797A7A\">Driver Analytics</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\"[ngClass]=\"{activeclass: isActive(2)}\" (click)=\"setActive(2);\"style=\"color: #797A7A\" >Driver Attendance</a>\r\n                    </li>\r\n                    <li>\r\n                       \r\n                    </li>\r\n\r\n                  </ul>\r\n                </div>\r\n                <div class=\"card-body\" *ngIf = driveranalytics>\r\n                    <div [chart]=\"item.chartObject\"  style=\"height:279px\"></div>\r\n                 \r\n                   <div class=\"row pl-27\">\r\n                    <button type=\"button\" class=\"btn btn-primary btnclass\" [ngClass]=\"{cardactiveclass: isCardActive(1)}\" (click)=\"setOverSpeedingActive(1)\">Over speeding</button>\r\n                    <button type=\"button\" class=\"btn btn-primary ml-2 btnclass\" [ngClass]=\"{cardactiveclass: isCardActive(2)}\" (click)=\"setOverRudhBreakingActive(2)\">Rash Braking</button>\r\n                    <button type=\"button\" class=\"btn btn-primary ml-2 btnclass\" [ngClass]=\"{cardactiveclass: isCardActive(3)}\" (click)=\"setEngineIdlingActive(3)\">Engine Idling</button>\r\n                    \r\n                </div>\r\n            </div>\r\n\r\n                <div class=\"card-body\" *ngIf = driverattendance> \r\n                <div [chart]=\"item.heatMapObject\" style=\"height:313px\"></div>\r\n                 </div>\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/driver-overview/driver-overview.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/driver-overview/driver-overview.component.ts ***!
  \**************************************************************/
/*! exports provided: DriverOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverOverviewComponent", function() { return DriverOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DriverOverviewComponent = /** @class */ (function () {
    function DriverOverviewComponent(http, route) {
        this.http = http;
        this.route = route;
        this.driveranalytics = true;
        this.driverattendance = false;
        this.months = ["1", "2", "3"];
        this.categories = [];
        this.state = [];
        this.region = [];
        this.rating = [];
        this.driverinformation = [];
        this.drivername = [];
        this.response = [];
        this.historiceventdata = [];
        this.xasis = [];
        this.yaxis = [];
        /**Heat Map Value */
        this.heatmapdata = [];
        this.array = [];
    }
    DriverOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cardSelected = 1;
        this.selected = 1;
        this.regiondefaultname = "Midwest", this.statedefaultname = "Illinois", this.categorydefaultname = "91-100", this.ratingdefaultname = "4";
        this.http.get('../../assets/data/driverinfo.json').subscribe(function (data) {
            _this.jsondata = data;
            var index;
            for (index in _this.jsondata) {
                // alert('HII')
                if (_this.region.indexOf(_this.jsondata[index].Region) < 0) {
                    _this.region.push(_this.jsondata[index].Region);
                }
            }
            _this.loadDefaultRegion(_this.regiondefaultname, _this.jsondata);
        });
    };
    DriverOverviewComponent.prototype.loadDefaultRegion = function (regiondefaultname, jsondata) {
        this.state = [];
        this.categories = [];
        this.rating = [];
        var index;
        for (index in this.jsondata) {
            if (this.jsondata[index].Region === regiondefaultname) {
                if (this.state.indexOf(jsondata[index].State) < 0) {
                    this.state.push(jsondata[index].State);
                }
            }
        }
        this.loadDefaultCategory(this.regiondefaultname, this.statedefaultname, this.jsondata);
    };
    DriverOverviewComponent.prototype.loadDefaultCategory = function (regiondefaultname, statedefaultname, jsondata) {
        this.categories = [];
        this.rating = [];
        var index;
        for (index in this.jsondata) {
            if (jsondata[index].Region === regiondefaultname && this.jsondata[index].State === statedefaultname) {
                if (this.categories.indexOf(this.jsondata[index].Category) < 0) {
                    this.categories.push(this.jsondata[index].Category);
                }
            }
        }
        this.loadDefaultRating(this.regiondefaultname, this.statedefaultname, this.jsondata, this.categorydefaultname);
    };
    DriverOverviewComponent.prototype.loadDefaultRating = function (regiondefaultname, statedefaultname, jsondata, categorydefaultname) {
        var index;
        for (index in this.jsondata) {
            if (jsondata[index].Region === regiondefaultname && this.jsondata[index].State === statedefaultname, this.jsondata[index].Category === categorydefaultname) {
                if (this.rating.indexOf(this.jsondata[index].Rating) < 0) {
                    this.rating.push(this.jsondata[index].Rating);
                }
            }
        }
        this.loadDefaultData(this.regiondefaultname, this.statedefaultname, this.categorydefaultname, this.ratingdefaultname, this.jsondata);
    };
    DriverOverviewComponent.prototype.loadDefaultData = function (regiondefaultname, statedefaultname, categorydefaultname, ratingdefaultname, jsondata) {
        var index;
        var index;
        for (index in this.jsondata) {
            if (jsondata[index].Region === regiondefaultname && jsondata[index].Category === categorydefaultname &&
                this.jsondata[index].State === statedefaultname && this.jsondata[index].Rating == ratingdefaultname) {
                this.driverinformation.push({
                    "Name": this.jsondata[index]['Name'], "Experience": this.jsondata[index].Experience, "Licensenumber": this.jsondata[index]['Licence Number'], "Trafficviolation": this.jsondata[index]['Traffic Violation'], "Truckid": this.jsondata[index]['Truck ID'],
                    "Xcategory": this.jsondata[index].Dates, "overspeeding": this.jsondata[index].Over_Speeding, "heatmapdata": this.jsondata[index].Shift,
                    "rashbreaking": this.jsondata[index]['Rash Breaking'], "idletime": this.jsondata[index]['Idle Item'], "vehicletype": this.jsondata[index]['Vehcile Type']
                });
            }
        }
        this.loadChartsForDriver(this.driverinformation);
    };
    DriverOverviewComponent.prototype.loadSpline = function (seriesdata, dates) {
        this.options = {
            chart: {
                type: 'spline'
            },
            xAxis: {
                categories: seriesdata,
                min: 0,
                max: 10,
                scrollbar: {
                    enabled: true
                }
            },
            title: {
                text: ''
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return this.value + '';
                    },
                },
                gridLineColor: 'transparent',
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        // radius: 4,
                        lineColor: '#273048',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                    data: dates,
                    color: '#273048'
                }]
        };
        return new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"](this.options);
    };
    DriverOverviewComponent.prototype.loadHeatmap = function (heatdata) {
        this.array = [];
        var duplicatearr = heatdata.slice();
        duplicatearr.push("8.08", "8.53", "9.02", "8.00");
        duplicatearr[63] = null;
        for (var j = 0; j < 3; j++) {
            for (var k = 0; k <= 31; k++) {
                this.array.push([k, j, duplicatearr[k]]);
                // heapmapdata.splice(0,k);
            }
            duplicatearr.splice(0, k);
        }
        this.options = {
            chart: {
                type: 'heatmap',
                marginTop: 40,
                marginBottom: 80,
                plotBorderWidth: 1,
                ScrollBar: {
                    enabled: true
                }
            },
            title: {
                text: 'Driver Attendance'
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: this.months,
                min: 0,
                max: 8,
                scrollbar: {
                    enabled: true
                }
            },
            yAxis: {
                categories: ['Oct', 'Nov', 'Dec'],
                title: null
            },
            colorAxis: {
                min: 0,
                max: 9,
                minColor: '#FFFFFF',
                maxColor: '#155F57'
            },
            legend: {
                align: 'right',
                layout: 'vertical',
                margin: 0,
                verticalAlign: 'top',
                y: 25,
                symbolHeight: 280
            },
            tooltip: {
                formatter: function () {
                    return this.point.value + '</b> hours on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
                }
            },
            series: [{
                    name: '',
                    borderWidth: 1,
                    data: this.array,
                    dataLabels: {
                        enabled: true,
                        color: 'black'
                    }
                }]
        };
        return new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"](this.options);
    };
    DriverOverviewComponent.prototype.setActive = function (item) {
        this.driveranalytics = false;
        this.driverattendance = true;
        this.selected = item;
    };
    DriverOverviewComponent.prototype.setActiveDriver = function (item) {
        this.driveranalytics = true;
        this.driverattendance = false;
        this.selected = item;
    };
    DriverOverviewComponent.prototype.isActive = function (item) {
        return this.selected === item;
    };
    /**Drop Down*/
    DriverOverviewComponent.prototype.changeRegion = function (region) {
        this.regionname = this.regiondefaultname = region.currentTarget.value;
        this.state = [];
        this.categories = [];
        this.rating = [];
        var index;
        for (index in this.jsondata) {
            if (this.jsondata[index].Region === this.regionname) {
                if (this.state.indexOf(this.jsondata[index].State) < 0) {
                    this.state.push(this.jsondata[index].State);
                }
            }
        }
    };
    DriverOverviewComponent.prototype.changeState = function (state) {
        this.statename = this.statedefaultname = state.currentTarget.value;
        this.categories = [];
        this.rating = [];
        var index;
        for (index in this.jsondata) {
            if (this.jsondata[index].Region === this.regiondefaultname && this.jsondata[index].State === this.statename) {
                if (this.categories.indexOf(this.jsondata[index].Category) < 0) {
                    this.categories.push(this.jsondata[index].Category);
                }
            }
        }
    };
    DriverOverviewComponent.prototype.changeCategory = function (category) {
        this.categoryname = this.categorydefaultname = category.currentTarget.value;
        // console.log(this.categoryname)
        this.rating = [];
        var index;
        for (index in this.jsondata) {
            if (this.jsondata[index].Region === this.regiondefaultname && this.jsondata[index].State ===
                this.statedefaultname && this.jsondata[index].Category === this.categoryname) {
                if (this.rating.indexOf(this.jsondata[index].Rating) < 0) {
                    this.rating.push(this.jsondata[index].Rating);
                }
            }
        }
    };
    DriverOverviewComponent.prototype.changeRating = function (rating) {
        this.response = [];
        this.driverinformation = [];
        this.performanc = this.ratingdefaultname = rating.currentTarget.value;
        var index;
        for (index in this.jsondata) {
            if (this.jsondata[index].Region === this.regiondefaultname && this.jsondata[index].Category === this.categorydefaultname &&
                this.jsondata[index].State === this.statedefaultname && this.jsondata[index].Rating == this.performanc) {
                this.driverinformation.push({
                    "Name": this.jsondata[index]['Name'], "Experience": this.jsondata[index].Experience, "Licensenumber": this.jsondata[index]['Licence Number'], "Trafficviolation": this.jsondata[index]['Traffic Violation'], "Truckid": this.jsondata[index]['Truck ID'],
                    "Xcategory": this.jsondata[index].Dates, "overspeeding": this.jsondata[index].Over_Speeding, "heatmapdata": this.jsondata[index]['Shift'],
                    "rashbreaking": this.jsondata[index]['Rash Breaking'], "idletime": this.jsondata[index]['Idle Item'], "vehicletype": this.jsondata[index]['Vehcile Type']
                });
                //  this.drivername = this.jsondata[index]['Name']
                //        this.xasis = this.jsondata[index]['X Axis'] 
                //        this.yaxis = this.jsondata[index]['Y Axis']
                // this.loadSpline(this.xasis,this.yaxis);
                // this.getOverSpeedingData(this.drivername)
            }
        }
        this.loadChartsForDriver(this.driverinformation);
    };
    DriverOverviewComponent.prototype.loadChartsForDriver = function (driverinfochart) {
        var _this = this;
        console.log(this.cardSelected);
        driverinfochart.forEach(function (element) {
            if (_this.cardSelected == 1) {
                element['chartObject'] = _this.loadSpline(element.Xcategory, element.overspeeding);
            }
            else if (_this.cardSelected == 2) {
                element['chartObject'] = _this.loadSpline(element.Xcategory, element.rashbreaking);
            }
            else if (_this.cardSelected == 3) {
                element['chartObject'] = _this.loadSpline(element.Xcategory, element.idletime);
            }
            element['heatMapObject'] = _this.loadHeatmap(element.heatmapdata);
            _this.response.push(element);
        });
        // console.log(this.response);
    };
    /**Chart Binding */
    DriverOverviewComponent.prototype.isCardActive = function (item) {
        return this.cardSelected === item;
    };
    DriverOverviewComponent.prototype.setOverSpeedingActive = function (item) {
        this.cardSelected = item;
        this.response = [];
        this.loadChartsForDriver(this.driverinformation);
    };
    DriverOverviewComponent.prototype.setOverRudhBreakingActive = function (item) {
        this.cardSelected = item;
        this.response = [];
        this.loadChartsForDriver(this.driverinformation);
    };
    DriverOverviewComponent.prototype.setEngineIdlingActive = function (item) {
        this.cardSelected = item;
        this.response = [];
        this.loadChartsForDriver(this.driverinformation);
    };
    DriverOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driver-overview',
            template: __webpack_require__(/*! ./driver-overview.component.html */ "./src/app/driver-overview/driver-overview.component.html"),
            styles: [__webpack_require__(/*! ./driver-overview.component.css */ "./src/app/driver-overview/driver-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DriverOverviewComponent);
    return DriverOverviewComponent;
}());



/***/ }),

/***/ "./src/app/energy/energy.component.css":
/*!*********************************************!*\
  !*** ./src/app/energy/energy.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/energy/energy.component.html":
/*!**********************************************!*\
  !*** ./src/app/energy/energy.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  energy works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/energy/energy.component.ts":
/*!********************************************!*\
  !*** ./src/app/energy/energy.component.ts ***!
  \********************************************/
/*! exports provided: EnergyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnergyComponent", function() { return EnergyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnergyComponent = /** @class */ (function () {
    function EnergyComponent() {
    }
    EnergyComponent.prototype.ngOnInit = function () {
    };
    EnergyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-energy',
            template: __webpack_require__(/*! ./energy.component.html */ "./src/app/energy/energy.component.html"),
            styles: [__webpack_require__(/*! ./energy.component.css */ "./src/app/energy/energy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EnergyComponent);
    return EnergyComponent;
}());



/***/ }),

/***/ "./src/app/finance-usecase/expense-analytics/expense-analytics.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/finance-usecase/expense-analytics/expense-analytics.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/finance-usecase/expense-analytics/expense-analytics.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/finance-usecase/expense-analytics/expense-analytics.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<iframe src=\"https://app.powerbi.com/view?r=eyJrIjoiMGIyMDY0NjAtMzM0Mi00ZjQwLTg4Y2QtZjdmZTY0NDQyZDYxIiwidCI6IjI1MmRlZDAzLWM5ZDQtNDE5OS05YTM1LTEzZDAyZGYzYzc1NCIsImMiOjN9\"\r\nheight='650' width='1366' scrolling='no'  frameborder=\"0\" allowfullscreen>\r\n  \r\n</iframe>"

/***/ }),

/***/ "./src/app/finance-usecase/expense-analytics/expense-analytics.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/finance-usecase/expense-analytics/expense-analytics.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ExpenseAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseAnalyticsComponent", function() { return ExpenseAnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpenseAnalyticsComponent = /** @class */ (function () {
    function ExpenseAnalyticsComponent() {
    }
    ExpenseAnalyticsComponent.prototype.ngOnInit = function () {
    };
    ExpenseAnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expense-analytics',
            template: __webpack_require__(/*! ./expense-analytics.component.html */ "./src/app/finance-usecase/expense-analytics/expense-analytics.component.html"),
            styles: [__webpack_require__(/*! ./expense-analytics.component.css */ "./src/app/finance-usecase/expense-analytics/expense-analytics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExpenseAnalyticsComponent);
    return ExpenseAnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topnav {\r\n    overflow: hidden;\r\n    background-color:#20283d;\r\n}\r\n\r\n/* Style the search box inside the navigation bar */\r\n\r\n.topnav input[type=text] {\r\n    float: right;\r\n    padding: 2px;\r\n    border: none;\r\n    margin: 2px;\r\n/*     margin-right: 16px; */\r\n    font-size: 17px;\r\n   /*  background-color: #155f57; */\r\n     border: 1px solid  #2e3956;\r\n    border-radius: 3px;\r\n}\r\n\r\n/* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */\r\n\r\n@media screen and (max-width: 600px) {\r\n    .topnav a, .topnav input[type=text] {\r\n        float: none;\r\n        display: block;\r\n        text-align: left;\r\n        width: 100%;\r\n        margin: 0;\r\n        padding: 14px;\r\n    }\r\n    .topnav input[type=text] {\r\n        border: 1px solid #ccc;\r\n    }\r\n}\r\n\r\n/* The side navigation menu */\r\n\r\n.sidenav {\r\n  height: 100%; /* 100% Full-height */\r\n  width: 0; /* 0 width - change this with JavaScript */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Stay on top */\r\n  top: 0; /* Stay at the top */\r\n  left: 0;\r\n  background-color:#1c2337; /* Black*/\r\n  overflow-x: hidden; /* Disable horizontal scroll */\r\n  padding-top: 60px; /* Place content 60px from the top */\r\n  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\r\n}\r\n\r\n/* The navigation menu links */\r\n\r\n.sidenav a {\r\n  padding: 4px 4px 4px 28px;\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  color: white;\r\n  display: block;\r\n  transition: 0.3s;\r\n  font-size: 22px;\r\n}\r\n\r\n/* When you mouse over the navigation links, change their color */\r\n\r\n.sidenav a:hover {\r\n  color: white\r\n}\r\n\r\n/* Position and style the close button (top right corner) */\r\n\r\n.sidenav .closebtn {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n\r\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\r\n\r\n#main {\r\n  transition: margin-left .5s;\r\n  padding: 20px;\r\n}\r\n\r\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {padding-top: 15px;}\r\n  .sidenav a {font-size: 18px;}\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n}\r\n\r\n::-ms-input-placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n}\r\n\r\n::placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n}\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n color: white;\r\n}\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n color:white;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding: 0px\">\r\n  <div>\r\n    <nav class=\"navbar navbar-inverse\" style=\"margin-bottom: 0px;border-radius: 0px;border:none\">\r\n      <div class=\"container-fluid\" style=\"background-color: #1c2337;\">\r\n        <div class=\"navbar-header\">\r\n\r\n          <a class=\"navbar-brand navheader\" (click)=\"showDashBoard()\">Client Logo</a>\r\n        </div>\r\n\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li class=\"navheader\"><a href=\"#\" style=\"color:white\"><span class=\"glyphicon glyphicon-user navheader\"></span>\r\n              {{userName}}</a></li>\r\n          <li><button type=\"button\" class=\"btn btn-primary btn-xs\" style=\"margin: 14px;background-color: #273048;;border: 0px;\" (click)=\"logOut()\">Log\r\n              Out</button></li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n  <div class=\"topnav\">\r\n      <i class=\"fa fa-bars\" aria-hidden=\"true\" style=\"font-size:26px;color:white; margin-left:24px;padding: 4px;\" (click)=\"showSideMenu()\"></i>\r\n     <i class=\"fa fa-home\" aria-hidden=\"true\" style=\"font-size:26px;color:white; margin-left:24px;padding: 4px;\" (click)=\"showDashBoard()\"></i>\r\n      <span style=\"font-size: 22px;color:white;padding-left: 150px;font-family: sans-serif;\">{{title}}</span>\r\n    <input type=\"text\" placeholder=\" Search..\" style=\"background-color:#4A587D\">\r\n  </div>\r\n\r\n</div>\r\n<!--Side Menu-->\r\n<div id=\"mySidenav\" class=\"sidenav\">\r\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\r\n<div *ngIf =\"addClient\">\r\n  <a [routerLink]=\"['/add-tenant']\">Add Client</a>\r\n</div> \r\n\r\n<div *ngIf =\"addUser\">\r\n  <a [routerLink]=\"['/add-user']\" >Add User</a>\r\n</div>\r\n  <!-- <a [routerLink]=\"['/add-device']\">Add Device</a> -->\r\n  <a [routerLink]=\"['/data-ingestion']\">Data Ingestion Platform</a>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.childmessage = "I am passed from Parent to child component";
        this.addClient = false;
        this.addUser = false;
        this.title = localStorage.getItem('title');
        this.userName = localStorage.getItem('userName');
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.userRole = localStorage.getItem('userRole');
        if (this.userRole == "superadmin") {
            this.addClient = true;
            this.addUser = false;
        }
        if (this.userRole == "Client") {
            console.log("User Role" + this.userRole);
            this.addUser = true;
            this.addClient = false;
        }
        if (this.userRole == "User") {
            console.log("User Role" + "" + this.userRole);
            this.addUser = false;
            this.addClient = false;
        }
    };
    HeaderComponent.prototype.logOut = function () {
        this.router.navigate(['/login']);
    };
    HeaderComponent.prototype.showDashBoard = function () {
        this.router.navigate(['/industries']);
        localStorage.removeItem('title');
    };
    HeaderComponent.prototype.showSideMenu = function () {
        document.getElementById("mySidenav").style.width = "250px";
    };
    HeaderComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/health/health.component.css":
/*!*********************************************!*\
  !*** ./src/app/health/health.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/health/health.component.html":
/*!**********************************************!*\
  !*** ./src/app/health/health.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  health works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/health/health.component.ts":
/*!********************************************!*\
  !*** ./src/app/health/health.component.ts ***!
  \********************************************/
/*! exports provided: HealthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthComponent", function() { return HealthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HealthComponent = /** @class */ (function () {
    function HealthComponent() {
    }
    HealthComponent.prototype.ngOnInit = function () {
    };
    HealthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-health',
            template: __webpack_require__(/*! ./health.component.html */ "./src/app/health/health.component.html"),
            styles: [__webpack_require__(/*! ./health.component.css */ "./src/app/health/health.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HealthComponent);
    return HealthComponent;
}());



/***/ }),

/***/ "./src/app/healthcare-usecase/health-care-analytics/health-care-analytics.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/healthcare-usecase/health-care-analytics/health-care-analytics.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/healthcare-usecase/health-care-analytics/health-care-analytics.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/healthcare-usecase/health-care-analytics/health-care-analytics.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<iframe src=\"https://app.powerbi.com/view?r=eyJrIjoiMDdiMzBiMWEtZjFiYi00ZGU1LTg2YjQtOGMwZmZkOGRkMzY3IiwidCI6IjI1MmRlZDAzLWM5ZDQtNDE5OS05YTM1LTEzZDAyZGYzYzc1NCIsImMiOjN9\"\r\nheight='650' width='1366' scrolling='no'  frameborder=\"0\" allowfullscreen>\r\n  \r\n</iframe>"

/***/ }),

/***/ "./src/app/healthcare-usecase/health-care-analytics/health-care-analytics.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/healthcare-usecase/health-care-analytics/health-care-analytics.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: HealthCareAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthCareAnalyticsComponent", function() { return HealthCareAnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HealthCareAnalyticsComponent = /** @class */ (function () {
    function HealthCareAnalyticsComponent() {
    }
    HealthCareAnalyticsComponent.prototype.ngOnInit = function () {
    };
    HealthCareAnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-health-care-analytics',
            template: __webpack_require__(/*! ./health-care-analytics.component.html */ "./src/app/healthcare-usecase/health-care-analytics/health-care-analytics.component.html"),
            styles: [__webpack_require__(/*! ./health-care-analytics.component.css */ "./src/app/healthcare-usecase/health-care-analytics/health-care-analytics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HealthCareAnalyticsComponent);
    return HealthCareAnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/hrms-usecase/hrms-usecase1/hrms-usecase1.component.css":
/*!************************************************************************!*\
  !*** ./src/app/hrms-usecase/hrms-usecase1/hrms-usecase1.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg{\r\n  background:#fff;\r\n  border-radius:5px;\r\n  padding:10px;\r\n}\r\n.padding0\r\n{\r\n  padding:0px;\r\n}\r\n.padding-top{\r\n  padding-top: 11px\r\n}\r\n.mrgn{\r\n  padding-top:10px;\r\n  font-size: 15px;\r\n  padding-bottom:10px;\r\n  padding-left:10px;\r\n}\r\n.average{\r\n  background: #3D7BAA;\r\n  color: white;\r\n  margin-left: 15px;\r\n  padding: 5px 10px;\r\n  border-radius: 10px;\r\n}\r\n.mt5{\r\n  margin-top: 5px;\r\n}\r\n.font{\r\n  color:#2a2b2f;\r\n  font-size:30px;\r\n  font-weight:bold;\r\n}\r\n.progress{\r\n  background:#ea1651;\r\n  border-radius: 7px;\r\n   margin-bottom:0px;\r\n}\r\n.progress-bar{\r\n  background:#3d7baa;\r\n}\r\n#chartdiv{\r\n\r\n  width:100%;\r\n}\r\n.font1 {\r\n  color:#2a2b2f;\r\n  font-size:20px;\r\n  font-weight:bold;\r\n}\r\n.employee_chart{\r\n  background-color: #EAEAEA;\r\n}\r\n.cardactiveclass{\r\n    background-color: #f9f9f9!important;\r\n    border-bottom: 1px solid palevioletred;\r\n\r\n  }\r\ntable {\r\n    display: block;\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n  }\r\n.fs-19-margin{\r\n  font-size: 19px;\r\n  margin-top: 4\r\n}\r\n.overview-txt{\r\n     font-size: 21px;\r\n    background-color : #fff;\r\n    padding-bottom: 8px;\r\n    margin-top: 4px;\r\n   border-radius: -3px;\r\n    border-radius: 5px;\r\n}\r\n.progress{\r\n  height: 20px;\r\n}\r\n.circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 250px;\r\n  font-size: 19px;\r\n  color: #fff;\r\n  line-height: 41px;\r\n  text-align: center;\r\n  background: #3D7BAA;\r\n}\r\n.band-circle{\r\n  text-align: center;padding-left: 12px\r\n}\r\n.txt-align{\r\n  text-align: center\r\n}\r\n.pointer-class{\r\n  cursor: pointer;\r\n}\r\n.age-lables{\r\n  width: 9px;\r\n  height: 9px;\r\n  display: inline-block;\r\n  border-radius: 6px;\r\n}\r\n.fs-11{\r\n  font-size: 11px;\r\n}\r\n.fs-12{\r\n  font-size: 12px;\r\n}\r\n.selecteddiv{\r\n  background-color:#285475 !important;\r\n}\r\n.femaleselecteddiv{\r\n  background-color:#741631 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/hrms-usecase/hrms-usecase1/hrms-usecase1.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/hrms-usecase/hrms-usecase1/hrms-usecase1.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clearfix\"></div>\r\n<app-header></app-header>\r\n<div class=\"clearfix\"></div>\r\n<div class=\"container-fluid\" style=\"padding:0 !important;\">\r\n  <div class=\"col-md-12\" style=\"margin-top:7px;\">\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"col-md-4 \" style=\"padding:3px !important;\">\r\n      <div class=\"bg col-md-12\" style=\"padding-top:10px;\">\r\n        <span class=\"mrgn\">Total employees</span>\r\n        <br> <br>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"col-md-6\">\r\n            <img src=\"../../../assets/iconss/1_new.png\" style=\"height:45px !important;\"\r\n              class=\"img-center img-responsive\">\r\n            <p style=\"margin:0px;\">Employees</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span class=\"font\">{{employeecount}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"col-md-6\">\r\n            <img src=\"../../../assets/iconss/2_new.png\" style=\"height:45px !important;\"\r\n              class=\"img-center img-responsive\">\r\n            <p style=\"margin:0px;\">Permanent</p>\r\n          </div>\r\n          <div class=\"col-md-6 padding0\">\r\n            <span class=\"font\">{{fulltimeemployeeCount}}<img src=\"../../../assets/iconss/red.png\"></span>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div>\r\n            <span style=\"color:#7282a7\"><span style=\"color:red;\">-4% </span> vs\r\n              Previous year</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\" style=\"margin-top:41px;\">\r\n          <div class=\"col-md-6\">\r\n            <img src=\"../../../assets/iconss/3_new.png\" style=\"height:41px !important;\"\r\n              class=\"img-center img-responsive\">\r\n            <p style=\"margin:0px;\">Contract</p>\r\n          </div>\r\n          <div class=\"col-md-6 padding0\">\r\n            <span class=\"font\">{{contractemployeeCount}}<img src=\"../../../assets/iconss/green.png\"></span>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div>\r\n            <span style=\"color:#7282a7\"><span style=\"color:#3fd767;\">+4% </span> vs\r\n              Previous year</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\" style=\"margin-top:41px;margin-bottom:6px;\">\r\n          <div class=\"col-md-6\">\r\n            <img src=\"../../../assets/iconss/4_new.png\" style=\"height:41px !important;\"\r\n              class=\"img-center img-responsive\">\r\n            <p style=\"margin:0px;\">Trainees</p>\r\n          </div>\r\n          <div class=\"col-md-6 padding0\">\r\n            <span class=\"font\">{{traineeemployeeCount}}<img src=\"../../../assets/iconss/green.png\"></span>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div>\r\n            <span style=\"color:#7282a7\"><span style=\"color:#3fd767;\">+4% </span> vs\r\n              Previous year</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <!--First col-md-4 open-->\r\n    <div class=\"col-md-4\" style=\"padding:3px !important;\">\r\n      <div class=\"bg col-md-12\" style=\"padding-top:10px;\">\r\n        <!-- <div class=\"mrgn\" style=\"padding:0px;margin-bottom:26px;\">Gender</div> -->\r\n        <!--Gender-->\r\n        <div class=\"col-md-12\" style=\"margin-bottom: 30px;\">\r\n          <div class=\"col-md-4\">\r\n            <img src=\"../../../assets/iconss/5_new.png\" style=\"width:24px;\" class=\"img-center img-responsive\">\r\n          </div>\r\n          <div class=\"col-md-4 text-center\">\r\n            <!-- <span>Head Count</span><br>\r\n                                        <span class=\"font\">{{employeecount}}</span> -->\r\n            <span>Gender</span>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <img src=\"../../../assets/iconss/6_new.png\" style=\"width:24px;float: right;;\"\r\n              class=\"img-center img-responsive\">\r\n          </div>\r\n\r\n          <div class=\"clearfix\"></div>\r\n\r\n          <div class=\"progress\" style=\"margin-top: 2px;\">\r\n            <div class=\"progress-bar pointer-class\" role=\"progressbar\"\r\n              [ngStyle]=\"{'width':malepercent,'background-color':'#3D7BAA'}\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n              (click)=\"getMaleEmployeeAvg();\" [ngClass]=\"\">{{maleemployeeCount}}</div>\r\n            <div class=\"progress-bar pointer-class\" role=\"progressbar\"\r\n              [ngStyle]=\"{'width':femaleperecent,'background-color':'#EA1652'}\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n              (click)=\"getFemaleEmployeeAvg();\">{{femaleemployeeCount}}</div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n\r\n        <!--Age-->\r\n        <div class=\"col-md-12\" style=\"margin-bottom: 11px;\">\r\n          <div class=\"col-md-5\">\r\n\r\n\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <span style=\"margin-left: 6px;\">Age</span>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"progress\" style=\"margin-top: 2px;\">\r\n            <div class=\"progress-bar pointer-class\" role=\"progressbar\"\r\n              [ngStyle]=\"{'width':eighteenTwentyPercent,'background-color':'#3D7BAA'}\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\" (click)=\"getAgeAverage(18,25,eighteentwentyfive)\">{{eighteentwentyfive}}</div>\r\n            <div class=\"progress-bar pointer-class\" role=\"progressbar\"\r\n              [ngStyle]=\"{'width':twentysixthirtyPercent,'background-color':'#F7C13B'}\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\" (click)=\"getAgeAverage(26,30,twentyfivethirty)\"> {{twentyfivethirty}}</div>\r\n            <div class=\"progress-bar pointer-class\" role=\"progressbar\"\r\n              [ngStyle]=\"{'width':thirtyonefivePercent,'background-color':'#E932FF'}\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\" (click)=\"getAgeAverage(31,35,thirtyonetothirtyfive)\"> {{thirtyonetothirtyfive}}</div>\r\n            <div class=\"progress-bar pointer-class\" role=\"progressbar\"\r\n              [ngStyle]=\"{'width':thirtySixfortyPercent,'background-color':'#EA1652'}\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\" (click)=\"getAgeAverage(36,40,thirtysixtofourty)\"> {{thirtysixtofourty}}</div>\r\n            <div class=\"progress-bar pointer-class\" role=\"progressbar\"\r\n              [ngStyle]=\"{'width':greaterFortyPercent,'background-color':'#3D7BAA'}\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\" (click)=\"getAgeAverageForty(40,greaterfoutry)\">{{greaterfoutry}}</div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"col-md-12\" style=\"text-align: center;\">\r\n            <div style=\"display:inline-block;\">\r\n              <div class=\"pull-left txt-align\" style=\"margin-top:2px;margin-right:18px;\">\r\n                <span class=\"age-lables\" style=\"background:#3D7BAA\"></span> 18-25\r\n\r\n              </div>\r\n              <div class=\"pull-left txt-align\" style=\"margin-top:2px;margin-right:18px;\">\r\n                <span class=\"age-lables\" style=\"background: #F7C13B\"></span> 26-30\r\n\r\n              </div>\r\n\r\n              <div class=\"pull-left txt-align\" style=\"margin-top:2px;margin-right:18px;\">\r\n                <span class=\"age-lables\" style=\"background:#E932FF\"></span> 31-35\r\n\r\n              </div>\r\n              <div class=\"pull-left txt-align\" style=\"margin-top:2px;margin-right:18px;\">\r\n                <span class=\"age-lables\" style=\"background:#EA1652\"></span> 36-40\r\n              </div>\r\n              <div class=\"pull-left txt-align\" style=\"margin-top:2px;margin-right:18px;\">\r\n                <span class=\"age-lables\" style=\"background:#3D7BAA\"></span> >40\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!--AgeClose-->\r\n\r\n        <div class=\"col-md-12\">\r\n          <!--Ethnicity-->\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"col-md-4\">\r\n\r\n          </div>\r\n          <div class=\"col-md-4 text-center\">\r\n            <span>Ethnicity</span>\r\n\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"progress\" style=\"margin-top: 2px;\">\r\n            <div class=\"progress-bar pointer-class\" role=\"progressbar\"\r\n              [ngStyle]=\"{'width':whiteEthinPercent,'background-color':'#3D7BAA'}\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n              (click)=\"getAvgForEthinicity('White', whiteEthnicity)\">{{whiteEthnicity}}</div>\r\n            <div class=\"progress-bar pointer-class\" role=\"progressbar\"\r\n              [ngStyle]=\"{'width':africanAmericanPercent,'background-color':'#42505d'}\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\" (click)=\"getAvgForEthinicity('African American', africanamericanEthnicity)\">\r\n              {{africanamericanEthnicity}}</div>\r\n            <div class=\"progress-bar pointer-class\" role=\"progressbar\"\r\n              [ngStyle]=\"{'width':latinAmericanPercent,'background-color':'#2CB065'}\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\" (click)=\"getAvgForEthinicity('Latin American', latinAmericanEthnicity)\">\r\n              {{latinAmericanEthnicity}}</div>\r\n            <div class=\"progress-bar pointer-class\" role=\"progressbar\"\r\n              [ngStyle]=\"{'width':asianPercent,'background-color':'#EA1652'}\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n              (click)=\"getAvgForEthinicity('Asian', asianEthnicity)\">{{asianEthnicity}}</div>\r\n            <div class=\"progress-bar pointer-class\" role=\"progressbar\"\r\n              [ngStyle]=\"{'width':otherPercent,'background-color':'#E932FF'}\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n              (click)=\"getAvgForEthinicity('Others', otherEthnicity)\">{{otherEthnicity}}</div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"col-md-12\" style=\"text-align: center;\">\r\n            <div style=\"display:inline-block;\">\r\n              <div class=\"pull-left txt-align\" style=\"margin-top:2px;margin-right:10px;\">\r\n                <span class=\"age-lables\" style=\"background:#3D7BAA\"></span>&nbsp;<span class=\"fs-11\">Whites</span>\r\n\r\n              </div>\r\n              <div class=\"pull-left txt-align\" style=\"margin-top:2px;margin-right:10px;\">\r\n                <span class=\"age-lables\" style=\"background: #42505D\"></span>&nbsp;<span class=\"fs-11\">African\r\n                  Americans</span>\r\n\r\n              </div>\r\n\r\n              <div class=\"pull-left txt-align\" style=\"margin-top:2px;margin-right:10px;\">\r\n                <span class=\"age-lables\" style=\"background:#2cb065\"></span>&nbsp;<span class=\"fs-11\">Latin\r\n                  Americans</span>\r\n\r\n              </div>\r\n              <div class=\"pull-left txt-align\" style=\"margin-top:2px;margin-right:10px;\">\r\n                <span class=\"age-lables\" style=\"background:#EA1652\"></span>&nbsp;<span class=\"fs-11\">Asians</span>\r\n              </div>\r\n              <div class=\"pull-left txt-align\" style=\"margin-top:2px;margin-right:10px;\">\r\n                <span class=\"age-lables\" style=\"background:#E932FF\"></span>&nbsp;<span class=\"fs-11\">Others</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--First col-md-4  close-->\r\n    <!--Chart-->\r\n    <div class=\"col-md-4\" style=\"padding:3px !important;\">\r\n      <div class=\"bg col-md-12\">\r\n        <span class=\"mrgn\">Education</span>\r\n        <div class=\"col-md-12 padding-top\" style=\"margin-bottom: 15px\">\r\n          <div class=\"progress\" style=\"margin-top: 2px;\">\r\n            <div class=\"progress-bar pointer-class\" role=\"progressbar\"\r\n              [ngStyle]=\"{'width':gradPercent,'background-color':'#3D7BAA'}\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n              (click)=\"getEduAverage('Graduate',grad)\">{{grad}}\r\n            </div>\r\n            <div class=\"progress-bar pointer-class\" role=\"progressbar\"\r\n              [ngStyle]=\"{'width':postGraduatePercent,'background-color':'#F7C13B'}\" aria-valuemin=\"0\"\r\n              aria-valuemax=\"100\" (click)=\"getEduAverage('Post Graduate',grad)\">{{postgra}}</div>\r\n            <div class=\"progress-bar pointer-class\" role=\"progressbar\"\r\n              [ngStyle]=\"{'width':undergradPercent,'background-color':'#EA1651'}\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n              (click)=\"getEduAverage('Under Graduate',grad)\">{{undergrad}}</div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"col-md-12\" style=\"text-align: center;\">\r\n            <div style=\"display:inline-block;\">\r\n              <div class=\"pull-left txt-align\" style=\"margin-top:2px;margin-right:18px;\">\r\n                <span class=\"age-lables\" style=\"background:#3D7BAA\"></span>&nbsp;<span class=\"fs-11\">Graduate</span>\r\n\r\n              </div>\r\n              <div class=\"pull-left txt-align\" style=\"margin-top:2px;margin-right:18px;\">\r\n                <span class=\"age-lables\" style=\"background: #F7C13B\"></span>&nbsp;<span class=\"fs-11\">Post\r\n                  Graduate</span>\r\n\r\n              </div>\r\n\r\n              <div class=\"pull-left txt-align\" style=\"margin-top:2px;margin-right:18px;\">\r\n                <span class=\"age-lables\" style=\"background:#EA1651\"></span>&nbsp;<span class=\"fs-11\">Under\r\n                  Graduate</span>\r\n\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-12 padding-top\">\r\n          <div>\r\n            <span>Bands</span>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <span class=\"band-circle\">B1</span>\r\n            <div class=\"circle pointer-class fs-12\" style=\"background-color:#3D7BAA\"\r\n              (click)=\"getBandAvgData(1,bandOneCount)\">\r\n              {{bandOneCount}}</div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <span class=\"band-circle\">B2</span>\r\n            <div class=\"circle pointer-class fs-12\" style=\"background-color: #42506d\"\r\n              (click)=\"getBandAvgData(2,bandOneCount)\">\r\n              {{bandTwoCount}}</div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <span class=\"band-circle\">B3</span>\r\n            <div class=\"circle pointer-class fs-12\" style=\"background-color:#F7C13B\"\r\n              (click)=\"getBandAvgData(3,bandOneCount)\">\r\n              {{bandThreeCount}}</div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <span class=\"band-circle pointer-class\">B4</span>\r\n            <div class=\"circle pointer-class fs-12\" style=\"background-color:#EA1651\"\r\n              (click)=\"getBandAvgData(4,bandOneCount)\">\r\n              {{bandFourCount}}</div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-md-12\" style=\"margin-top: 5px;\">\r\n          <div class=\"col-md-3\">\r\n            <span class=\"band-circle\">B5</span>\r\n            <div class=\"circle pointer-class fs-12\" style=\"background-color:#E932FF\"\r\n              (click)=\"getBandAvgData(5,bandOneCount)\">\r\n              {{bandFiveCount}}</div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <span class=\"band-circle\">B6</span>\r\n            <div class=\"circle pointer-class fs-12\" style=\"background-color:#2CAFC4\"\r\n              (click)=\"getBandAvgData(6,bandOneCount)\">\r\n              {{bandSixCount}}</div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <span class=\"band-circle\">B7</span>\r\n            <div class=\"circle pointer-class fs-12\" style=\"background-color:#EA1651\"\r\n              (click)=\"getBandAvgData(7,bandOneCount)\">\r\n              {{bandSevenCount}}</div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <!--Chart claose-->\r\n  </div>\r\n  <!--First col-md-12 close-->\r\n\r\n  <div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"col-md-8\" style=\"padding:3px !important;\">\r\n\r\n        <div class=\"col-md-12\" style=\"background: #fff;\">\r\n          <span class=\"mrgn\">Departments</span>\r\n          <div>\r\n            <div [chart]=\"stockchartcategories\">\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 padding0\">\r\n                <div class=\"card employee_chart pointer-class\" style=\"padding-bottom: 2px;\"\r\n                  [ngClass]=\"{cardactiveclass: isCardActive(1)}\" (click)=\"setDepatmentActive(1)\">\r\n                  <div class=\"card-body\" style=\"text-align: center;padding: 7px 0px;\">\r\n                    <span>Department</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 padding0\">\r\n                <div class=\"card employee_chart pointer-class\" style=\"padding-bottom: 2px;\"\r\n                  [ngClass]=\"{cardactiveclass: isCardActive(2)}\" (click)=\"setDemographicActive(2)\">\r\n                  <div class=\"card-body\" style=\"text-align: center;padding: 7px 0px;\">\r\n                    <span>Ethnicity</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 padding0\">\r\n                <div class=\"card employee_chart pointer-class\" style=\"padding-bottom: 2px;\"\r\n                  [ngClass]=\"{cardactiveclass: isCardActive(3)}\" (click)=\"setAgeActive(3)\">\r\n                  <div class=\"card-body\" style=\"text-align: center;padding: 7px 0px;\">\r\n                    <span>Age</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-12\" style=\"background:#fff;padding:20px 0px;margin-top:10px;\">\r\n          <div *ngIf=\"category\">\r\n            <span class=\"mrgn average\">{{category}}</span>\r\n          </div>\r\n          <div *ngIf=\"default\">\r\n              <span class=\"mrgn average\">Total Average</span>\r\n            </div>\r\n\r\n          <div class=\"col-md-3 text-center mt5\">\r\n            <img src=\"../../../assets/iconss/8_new.png\" style=\"width:45px !important;margin:auto;height:45px;\"\r\n              class=\"img-center img-responsive\">\r\n            <span>Avg Salary</span>\r\n            <br>\r\n            <span class=\"font1\">${{averageSalary | number : '1.2-2'}}k <img\r\n                src=\"../../../assets/iconss/green.png\"></span>\r\n            <br>\r\n            <span style=\"color:#7282a7\"><span style=\"color:#3fd767;\">+4% </span> vs\r\n              Market Avg</span>\r\n          </div>\r\n          <div class=\"col-md-3 text-center mt5\">\r\n            <img src=\"../../../assets/iconss/9_new.png\" style=\"width:45px !important;margin:auto;height:45px;\"\r\n              class=\"img-center img-responsive\">\r\n            <span>Avg Experience</span>\r\n            <br>\r\n            <span class=\"font1\">{{averageExperience | number : '1.2-2'}} Yrs <img\r\n                src=\"../../../assets/iconss/red.png\"></span>\r\n            <br>\r\n            <span style=\"color:#7282a7\"><span style=\"color:#3fd767;\">+4% </span> vs\r\n              Market Avg</span>\r\n          </div>\r\n          <div class=\"col-md-3 text-center mt5 pointer-class\" (click)=\"openAttritionTable();\">\r\n            <img src=\"../../../assets/iconss/10_new.png\" style=\"width:45px !important;margin:auto;height:45px;\"\r\n              class=\"img-center img-responsive\">\r\n            <span>Attrition Rate</span>\r\n            <br>\r\n            <span class=\"font1\">{{averageattritionRate | number : '1.2-2'}}% <img\r\n                src=\"../../../assets/iconss/green.png\"></span>\r\n            <br>\r\n            <span style=\"color:#7282a7\"><span style=\"color:#3fd767;\">+4% </span> vs\r\n              Market Avg</span>\r\n          </div>\r\n          <div class=\"col-md-3 text-center mt5\">\r\n            <img src=\"../../../assets/iconss/11_new.png\" style=\"width:45px !important;margin:auto;height:45px;\"\r\n              class=\"img-center img-responsive\">\r\n            <span>Satisfaction</span>\r\n            <br>\r\n            <span class=\"font1\">{{averageSatisfaction |number : '1.2-2'}} <img\r\n                src=\"../../../assets/iconss/red.png\"></span>\r\n            <br>\r\n            <span style=\"color:#7282a7\"><span style=\"color:#3fd767;\">+4% </span> vs\r\n              Market Avg</span>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-md-4\" style=\"padding:0px 4px !important;\">\r\n        <div class=\"bg\" style=\"padding-bottom: 48px;\">\r\n          <span class=\"mrgn\">Hired vs Left for this Qtr</span>\r\n          <!-- <span class=\"float-right\" style=\"float:right;\"\r\n                                                (click)=\"goToHrmsUsecase2()\">click</span> -->\r\n          <img src=\"../../../assets/hrmsimg/right-d-png.png\" (click)=\"goToHrmsUsecase2()\" class=\"pointer-class\"\r\n            style=\"width:12%;float: right\">\r\n          <div [chart]=\"negativStack\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Attrition Rate</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row card\">\r\n          <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\" *ngFor=\"let header of tableAttritionHeaders\">\r\n                  {{header}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let row of attritionData\">\r\n                <td *ngFor=\"let col of tableAttritionHeaders\">\r\n                  {{row[col]}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/hrms-usecase/hrms-usecase1/hrms-usecase1.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/hrms-usecase/hrms-usecase1/hrms-usecase1.component.ts ***!
  \***********************************************************************/
/*! exports provided: HrmsUsecase1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrmsUsecase1Component", function() { return HrmsUsecase1Component; });
/* harmony import */ var _core_databot_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/databot.service */ "./src/app/core/databot.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HrmsUsecase1Component = /** @class */ (function () {
    /**Age group */
    function HrmsUsecase1Component(databotService, router, http) {
        this.databotService = databotService;
        this.router = router;
        this.http = http;
        this.fulltimeemployee = [];
        this.traineeemployee = [];
        this.contractemployee = [];
        this.femaleemployee = [];
        this.maleemployee = [];
        this.oneBandemployee = [];
        this.twoBandemployee = [];
        this.threeBandemployee = [];
        this.fourBandemployee = [];
        this.fiveBandemployee = [];
        this.sixBandemployee = [];
        this.sevenBandemployee = [];
        this.tableAttritionHeaders = [];
        this.selected = false;
        this.selectedFemale = false;
        this.selectedband1 = false;
        this.default = true;
        this.hiredChart();
    }
    HrmsUsecase1Component.prototype.ngOnInit = function () {
        this.cardSelected = 1;
        this.loadJsonData();
        this.loadAttritionRate();
        this.loadEthnicityData();
    };
    HrmsUsecase1Component.prototype.loadJsonData = function () {
        var _this = this;
        this.databotService.loadHrdashboard1().subscribe(function (data) {
            console.log(data);
            _this.hrdashboardData = data;
            _this.employeecount = _this.hrdashboardData.length;
            _this.filterData(data);
            _this.filterBandData(data);
            _this.filterAverageData(data);
            _this.departmentChart(data);
        });
    };
    HrmsUsecase1Component.prototype.loadAttritionRate = function () {
        var _this = this;
        this.databotService.loadAttritionData().subscribe(function (data) {
            _this.attritionData = data;
            var responseData = data[0];
            for (var key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    _this.tableAttritionHeaders.push(key);
                }
            }
        });
    };
    HrmsUsecase1Component.prototype.loadEthnicityData = function () {
        var _this = this;
        this.http.get('../../assets/data/ethnicity.json').subscribe(function (data) {
            _this.ethnicityData = data;
            // alert(JSON.stringify(this.ethnicityData))
        });
    };
    HrmsUsecase1Component.prototype.filterBandData = function (banddata) {
        for (var i = 0; i < banddata.length; i++) {
            if (banddata[i]['Employee Band'] == 1) {
                this.oneBandemployee.push(banddata[i]['Employee Band']);
            }
            else if (banddata[i]['Employee Band'] == 2) {
                this.twoBandemployee.push(banddata[i]['Employee Band']);
            }
            else if (banddata[i]['Employee Band'] == 3) {
                this.threeBandemployee.push(banddata[i]['Employee Band']);
            }
            else if (banddata[i]['Employee Band'] == 4) {
                this.fourBandemployee.push(banddata[i]['Employee Band']);
            }
            else if (banddata[i]['Employee Band'] == 5) {
                this.fiveBandemployee.push(banddata[i]['Employee Band']);
            }
            else if (banddata[i]['Employee Band'] == 6) {
                this.sixBandemployee.push(banddata[i]['Employee Band']);
            }
            else if (banddata[i]['Employee Band'] == 7) {
                this.sevenBandemployee.push(banddata[i]['Employee Band']);
            }
        }
        this.bandChart(this.oneBandemployee, this.twoBandemployee, this.threeBandemployee, this.fourBandemployee, this.fiveBandemployee, this.sixBandemployee, this.sevenBandemployee);
    };
    HrmsUsecase1Component.prototype.filterData = function (hrdata) {
        this.africanamericanEthnicity = 0;
        this.whiteEthnicity = 0;
        this.latinAmericanEthnicity = 0;
        this.asianEthnicity = 0;
        this.otherEthnicity = 0;
        this.postgra = 0;
        this.undergrad = 0;
        this.grad = 0;
        this.eighteentwentyfive = 0;
        this.twentyfivethirty = 0;
        this.thirtyonetothirtyfive = 0;
        this.thirtysixtofourty = 0;
        this.greaterfoutry = 0;
        for (var i = 0; i < hrdata.length; i++) {
            if (hrdata[i]['Employement'] == 'Full Time') {
                this.fulltimeemployee.push(hrdata[i]['Employement']);
            }
            if (hrdata[i]['Employement'] == 'Trainee') {
                this.traineeemployee.push(hrdata[i]['Employement']);
            }
            if (this.hrdashboardData[i]['Employement'] == 'Contract') {
                this.contractemployee.push(hrdata[i]['Employement']);
            }
            if (hrdata[i]['Gender'] == 'Male') {
                this.maleemployee.push(hrdata[i]['Gender']);
            }
            if (hrdata[i]['Gender'] == 'Female') {
                this.femaleemployee.push(hrdata[i]['Gender']);
            }
            if (hrdata[i]['Ethinicity'] == 'African American') {
                this.africanamericanEthnicity += 1;
            }
            if (hrdata[i]['Ethinicity'] == 'White') {
                this.whiteEthnicity += 1;
            }
            if (hrdata[i]['Ethinicity'] == 'Latin American') {
                this.latinAmericanEthnicity += 1;
            }
            if (hrdata[i]['Ethinicity'] == 'Asian') {
                this.asianEthnicity += 1;
            }
            if (hrdata[i]['Ethinicity'] == 'Others') {
                this.otherEthnicity += 1;
            }
            if (hrdata[i]['Education'] == 'Under Graduate') {
                this.undergrad += 1;
            }
            if (hrdata[i]['Education'] == 'Post Graduate') {
                this.postgra += 1;
            }
            if (hrdata[i]['Education'] == 'Graduate') {
                this.grad += 1;
            }
            if (hrdata[i]['Age Group'] >= 18 && hrdata[i]['Age Group'] <= 25) {
                this.eighteentwentyfive += 1;
            }
            if (hrdata[i]['Age Group'] >= 26 && hrdata[i]['Age Group'] <= 30) {
                this.twentyfivethirty += 1;
            }
            if (hrdata[i]['Age Group'] >= 31 && hrdata[i]['Age Group'] <= 35) {
                this.thirtyonetothirtyfive += 1;
            }
            if (hrdata[i]['Age Group'] >= 36 && hrdata[i]['Age Group'] <= 40) {
                this.thirtysixtofourty += 1;
            }
            if (hrdata[i]['Age Group'] > 40) {
                this.greaterfoutry += 1;
            }
        }
        this.traineeemployeeCount = this.traineeemployee.length;
        this.fulltimeemployeeCount = this.fulltimeemployee.length;
        this.contractemployeeCount = this.contractemployee.length;
        this.femaleemployeeCount = this.femaleemployee.length;
        this.maleemployeeCount = this.maleemployee.length;
        this.malepercent = (this.maleemployeeCount / 1000) * 100 + "%";
        this.femaleperecent = (this.femaleemployeeCount / 1000) * 100 + "%";
        this.gradPercent = (this.grad / 1000) * 100 + "%";
        this.undergradPercent = (this.undergrad / 1000) * 100 + "%";
        this.postGraduatePercent = (this.postgra / 1000) * 100 + "%";
        this.whiteEthinPercent = (this.whiteEthnicity / 1000) * 100 + "%";
        this.africanAmericanPercent = (this.africanamericanEthnicity / 1000) * 100 + "%";
        ;
        this.latinAmericanPercent = (this.latinAmericanEthnicity / 1000) * 100 + "%";
        ;
        this.asianPercent = (this.asianEthnicity / 1000) * 100 + "%";
        this.otherPercent = (this.otherEthnicity / 1000) * 100 + "%";
        this.eighteenTwentyPercent = (this.eighteentwentyfive / 1000) * 100 + "%";
        this.twentysixthirtyPercent = (this.twentyfivethirty / 1000) * 100 + "%";
        this.thirtyonefivePercent = (this.thirtyonetothirtyfive / 1000) * 100 + "%";
        this.thirtySixfortyPercent = (this.thirtysixtofourty / 1000) * 100 + "%";
        this.greaterFortyPercent = (this.greaterfoutry / 1000) * 100 + "%";
    };
    HrmsUsecase1Component.prototype.filterAverageData = function (avgdata) {
        var averageSal = 0;
        var averageExp = 0;
        var attrRate = 0;
        var satisRate = 0;
        for (var i = 0; i < avgdata.length; i++) {
            averageSal += avgdata[i]['Salary'];
            averageExp += avgdata[i]['Experience'];
            attrRate += avgdata[i]['Attrition rate'];
            satisRate += avgdata[i]['Satisfaction Index'];
        }
        this.averageSalary = averageSal / this.employeecount;
        this.averageExperience = averageExp / this.employeecount;
        this.averageattritionRate = attrRate / this.employeecount;
        this.averageSatisfaction = satisRate / this.employeecount;
    };
    HrmsUsecase1Component.prototype.bandChart = function (oneband, twoband, threeband, fourband, fiveband, sixband, sevenband) {
        this.bandOneCount = oneband.length;
        this.bandTwoCount = twoband.length;
        this.bandThreeCount = threeband.length;
        this.bandFourCount = fourband.length;
        this.bandFiveCount = fiveband.length;
        this.bandSixCount = sixband.length;
        this.bandSevenCount = sevenband.length;
    };
    HrmsUsecase1Component.prototype.departmentChart = function (itbandone) {
        var $this = this;
        var UNDEFINED;
        this.options = {
            chart: {
                type: 'column',
                height: 200
            },
            title: {
                text: '',
            },
            xAxis: {
                categories: ["Admin", "Accounting", "IT", "Marketing", "Sales", "Legal"]
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'gray'
                    }
                },
                gridLineColor: 'transparent',
                labels: {
                    enabled: false
                },
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                        color: 'black'
                    }
                }
            },
            series: [
                {
                    name: 'Band 1',
                    data: [31, 42, 52, 43, 16, 28],
                    color: '#3D7BAA'
                },
                {
                    name: 'Band 2',
                    data: [37, 31, 52, 23, 30, 24],
                    color: '#42506D'
                },
                {
                    name: 'Band 3',
                    data: [31, 31, 75, 44, 19, 35],
                    color: '#F7C13B'
                },
                {
                    name: 'Band 4',
                    data: [29, 29, 35, 26, 10, 25],
                    color: '#EA1651'
                },
                {
                    name: 'Band 5',
                    data: [0, 18, 33, 15, 16, 13],
                    color: '#E932FF'
                },
                {
                    name: 'Band 6',
                    data: [0, 10, 27, 10, 7, 10],
                    color: '#2CAFC4'
                },
                {
                    name: 'Band 7',
                    data: [0, 6, 22, 5, 6, 4],
                    color: '#3D7BAA'
                }
            ]
        };
        this.stockchartcategories = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.options);
    };
    HrmsUsecase1Component.prototype.ethinicityChart = function (itbandone) {
        var $this = this;
        var UNDEFINED;
        this.options = {
            chart: {
                type: 'column',
                height: 200
            },
            title: {
                text: '',
            },
            xAxis: {
                categories: ["Admin", "Accounting", "IT", "Marketing", "Sales", "Legal"]
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'gray'
                    }
                },
                gridLineColor: 'transparent',
                labels: {
                    enabled: false
                },
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                        color: 'black'
                    }
                }
            },
            series: [
                {
                    name: 'White',
                    data: [23, 35, 58, 40, 21, 27],
                    color: '#3D7BAA'
                },
                {
                    name: 'Africian Americian',
                    data: [60, 28, 52, 31, 14, 25],
                    color: '#42506D'
                },
                {
                    name: 'Latin Americian',
                    data: [32, 40, 62, 39, 26, 33],
                    color: '#F7C13B'
                },
                {
                    name: 'Asian',
                    data: [27, 35, 57, 30, 18, 30],
                    color: '#EA1651'
                },
                {
                    name: 'Other',
                    data: [30, 29, 67, 26, 25, 25],
                    color: '#E932FF'
                },
            ]
        };
        this.stockchartcategories = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.options);
    };
    HrmsUsecase1Component.prototype.ageGroupChart = function (itbandone) {
        var $this = this;
        var UNDEFINED;
        this.options = {
            chart: {
                type: 'column',
                height: 200
            },
            title: {
                text: '',
            },
            xAxis: {
                categories: ["Admin", "Accounting", "IT", "Marketing", "Sales", "Legal"]
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'gray'
                    }
                },
                gridLineColor: 'transparent',
                labels: {
                    enabled: false
                },
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                        color: 'black'
                    }
                }
            },
            series: [
                {
                    name: '18-25',
                    data: [68, 73, 104, 66, 46, 52],
                    color: '#3D7BAA'
                },
                {
                    name: '26-30',
                    data: [51, 55, 103, 67, 27, 53],
                    color: '#42506D'
                },
                {
                    name: '31-35',
                    data: [9, 31, 57, 24, 24, 30],
                    color: '#F7C13B'
                },
                {
                    name: '35-40',
                    data: [0, 7, 22, 7, 3, 4],
                    color: '#EA1651'
                },
                {
                    name: 'Above 40',
                    data: [0, 1, 7, 2, 2, 0],
                    color: '#E932FF'
                },
            ]
        };
        this.stockchartcategories = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.options);
    };
    HrmsUsecase1Component.prototype.hiredChart = function () {
        var categories = [
            "IT",
            "Accounting",
            "Marketing",
            "Sales",
            "Admin",
            "Legal"
        ];
        this.options = {
            chart: {
                type: "bar",
                height: 375
            },
            title: {
                text: ""
            },
            subtitle: {
                text: ''
            },
            xAxis: [
                {
                    categories: categories,
                    reversed: false,
                    labels: {
                        step: 1
                    },
                },
                {
                    // mirror axis on right side
                    opposite: true,
                    reversed: false,
                    categories: categories,
                    linkedTo: 0,
                    labels: {
                        step: 1
                    }
                }
            ],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return Math.abs(this.value) + "%";
                    }
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                series: {
                    stacking: "normal",
                    pointWidth: 20,
                }
            },
            tooltip: {
                formatter: function () {
                    return ("<b>" +
                        this.series.name +
                        ", age " +
                        this.point.category +
                        "</b><br/>" +
                        "Population: " +
                        angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Highcharts"].numberFormat(Math.abs(this.point.y), 0));
                }
            },
            series: [
                {
                    name: "Employees left",
                    data: [
                        -2.9,
                        -3.5,
                        -4.4,
                        -4.1,
                        -3.4,
                        -2.7,
                    ],
                    color: "#ea2537",
                },
                {
                    name: "Employees hired",
                    data: [
                        4.3,
                        4.0,
                        3.5,
                        2.9,
                        2.5,
                        2.7,
                    ],
                    color: "#7282a7",
                }
            ]
        };
        this.negativStack = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.options);
        // Data gathered from http://populationpyramid.net/germany/2015/
        // Age categories
    };
    HrmsUsecase1Component.prototype.getAverageData = function (dep, count) {
        var index;
        this.category = dep;
        this.default = false;
        this.averageSalary = 0;
        this.averageExperience = 0;
        this.averageattritionRate = 0;
        this.averageSatisfaction = 0;
        for (index in this.hrdashboardData) {
            if (this.hrdashboardData[index]['Department'] == dep) {
                this.averageSalary += this.hrdashboardData[index]['Salary'] / count;
                this.averageExperience += this.hrdashboardData[index]['Experience'] / count;
                this.averageattritionRate += this.hrdashboardData[index]['Attrition rate'] / count;
                this.averageSatisfaction += this.hrdashboardData[index]['Satisfaction Index'] / count;
            }
        }
    };
    HrmsUsecase1Component.prototype.getBandAvgData = function (band, count) {
        this.default = false;
        this.category = "Band" + ' ' + ':' + ' ' + band;
        var index;
        this.averageSalary = 0;
        this.averageExperience = 0;
        this.averageattritionRate = 0;
        this.averageSatisfaction = 0;
        for (index in this.hrdashboardData) {
            if (this.hrdashboardData[index]['Employee Band'] == band) {
                this.averageSalary += this.hrdashboardData[index]['Salary'] / count;
                this.averageExperience += this.hrdashboardData[index]['Experience'] / count;
                this.averageattritionRate += this.hrdashboardData[index]['Attrition rate'] / count;
                this.averageSatisfaction += this.hrdashboardData[index]['Satisfaction Index'] / count;
            }
        }
    };
    HrmsUsecase1Component.prototype.getMaleEmployeeAvg = function () {
        var index;
        this.default = false;
        this.category = "Gender" + ' ' + ':' + ' ' + "Male";
        this.selected = true;
        this.averageSalary = 0;
        this.averageExperience = 0;
        this.averageattritionRate = 0;
        this.averageSatisfaction = 0;
        for (index in this.hrdashboardData) {
            if (this.hrdashboardData[index]['Gender'] == "Male") {
                this.averageSalary += this.hrdashboardData[index]['Salary'] / this.maleemployeeCount;
                this.averageExperience += this.hrdashboardData[index]['Experience'] / this.maleemployeeCount;
                this.averageattritionRate += this.hrdashboardData[index]['Attrition rate'] / this.maleemployeeCount;
                this.averageSatisfaction += this.hrdashboardData[index]['Satisfaction Index'] / this.maleemployeeCount;
            }
        }
    };
    HrmsUsecase1Component.prototype.getFemaleEmployeeAvg = function () {
        this.default = false;
        this.category = "Gender" + ' ' + ':' + ' ' + "Female";
        var index;
        this.averageSalary = 0;
        this.averageExperience = 0;
        this.averageattritionRate = 0;
        this.averageSatisfaction = 0;
        for (index in this.hrdashboardData) {
            if (this.hrdashboardData[index]['Gender'] == "Female") {
                this.averageSalary += this.hrdashboardData[index]['Salary'] / this.femaleemployeeCount;
                this.averageExperience += this.hrdashboardData[index]['Experience'] / this.femaleemployeeCount;
                this.averageattritionRate += this.hrdashboardData[index]['Attrition rate'] / this.femaleemployeeCount;
                this.averageSatisfaction += this.hrdashboardData[index]['Satisfaction Index'] / this.femaleemployeeCount;
            }
        }
    };
    HrmsUsecase1Component.prototype.getEduAverage = function (category, count) {
        this.default = false;
        this.category = "Education" + ' ' + ':' + ' ' + category;
        var index;
        this.averageSalary = 0;
        this.averageExperience = 0;
        this.averageattritionRate = 0;
        this.averageSatisfaction = 0;
        for (index in this.hrdashboardData) {
            if (this.hrdashboardData[index]['Education'] == category) {
                this.averageSalary += this.hrdashboardData[index]['Salary'] / count;
                this.averageExperience += this.hrdashboardData[index]['Experience'] / count;
                this.averageattritionRate += this.hrdashboardData[index]['Attrition rate'] / count;
                this.averageSatisfaction += this.hrdashboardData[index]['Satisfaction Index'] / count;
            }
        }
    };
    HrmsUsecase1Component.prototype.getAgeAverage = function (min, max, count) {
        this.default = false;
        this.category = "Age" + ' ' + ':' + ' ' + min + '-' + max;
        var index;
        this.averageSalary = 0;
        this.averageExperience = 0;
        this.averageattritionRate = 0;
        this.averageSatisfaction = 0;
        for (index in this.hrdashboardData) {
            if (this.hrdashboardData[index]['Age Group'] >= min && this.hrdashboardData[index]['Age Group'] <= max) {
                this.averageSalary += this.hrdashboardData[index]['Salary'] / count;
                this.averageExperience += this.hrdashboardData[index]['Experience'] / count;
                this.averageattritionRate += this.hrdashboardData[index]['Attrition rate'] / count;
                this.averageSatisfaction += this.hrdashboardData[index]['Satisfaction Index'] / count;
            }
        }
    };
    HrmsUsecase1Component.prototype.getAgeAverageForty = function (value, count) {
        this.default = false;
        this.category = "Age" + ' ' + ':' + ' ' + value;
        var index;
        this.averageSalary = 0;
        this.averageExperience = 0;
        this.averageattritionRate = 0;
        this.averageSatisfaction = 0;
        for (index in this.hrdashboardData) {
            if (this.hrdashboardData[index]['Age Group'] > value) {
                this.averageSalary += this.hrdashboardData[index]['Salary'] / count;
                this.averageExperience += this.hrdashboardData[index]['Experience'] / count;
                this.averageattritionRate += this.hrdashboardData[index]['Attrition rate'] / count;
                this.averageSatisfaction += this.hrdashboardData[index]['Satisfaction Index'] / count;
            }
        }
    };
    HrmsUsecase1Component.prototype.getAvgForEthinicity = function (value, count) {
        this.default = false;
        this.category = "Ethnicity" + ' ' + ':' + ' ' + value;
        var index;
        this.averageSalary = 0;
        this.averageExperience = 0;
        this.averageattritionRate = 0;
        this.averageSatisfaction = 0;
        for (index in this.hrdashboardData) {
            if (this.hrdashboardData[index]['Ethinicity'] == value) {
                this.averageSalary += this.hrdashboardData[index]['Salary'] / count;
                this.averageExperience += this.hrdashboardData[index]['Experience'] / count;
                this.averageattritionRate += this.hrdashboardData[index]['Attrition rate'] / count;
                this.averageSatisfaction += this.hrdashboardData[index]['Satisfaction Index'] / count;
            }
        }
    };
    HrmsUsecase1Component.prototype.goToHrmsUsecase2 = function () {
        this.router.navigate(['/hrms-usecase-2']);
    };
    HrmsUsecase1Component.prototype.isCardActive = function (item) {
        return this.cardSelected === item;
    };
    HrmsUsecase1Component.prototype.setDepatmentActive = function (item) {
        this.cardSelected = item;
        this.departmentChart(item);
    };
    HrmsUsecase1Component.prototype.setDemographicActive = function (item) {
        this.cardSelected = item;
        this.ethinicityChart(item);
    };
    HrmsUsecase1Component.prototype.setAgeActive = function (item) {
        this.cardSelected = item;
        this.ageGroupChart(item);
    };
    HrmsUsecase1Component.prototype.openAttritionTable = function () {
        $('#myModal').modal('show');
    };
    HrmsUsecase1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hrms-usecase1',
            template: __webpack_require__(/*! ./hrms-usecase1.component.html */ "./src/app/hrms-usecase/hrms-usecase1/hrms-usecase1.component.html"),
            styles: [__webpack_require__(/*! ./hrms-usecase1.component.css */ "./src/app/hrms-usecase/hrms-usecase1/hrms-usecase1.component.css")]
        }),
        __metadata("design:paramtypes", [_core_databot_service__WEBPACK_IMPORTED_MODULE_0__["DatabotService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], HrmsUsecase1Component);
    return HrmsUsecase1Component;
}());



/***/ }),

/***/ "./src/app/hrms-usecase/hrms-usecase2/hrms-usecase2.component.css":
/*!************************************************************************!*\
  !*** ./src/app/hrms-usecase/hrms-usecase2/hrms-usecase2.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.h1c{\r\n  color:white;\r\n}\r\n.progress {\r\n  height: 10px;\r\n  background-color: #c3c4c7;\r\n}\r\n.card-text{\r\n  font-size: 11px;\r\n}\r\n.hrmspt{padding-top:11px}\r\n.hrmsth{\r\n  background-color: rgb(223, 219, 219);\r\n}\r\n.padding0{\r\n  padding:0px;\r\n}\r\n.cardimage1{\r\n  background-color:#59ac5e;\r\n  padding: 10px;\r\n}\r\nimg.cardimage1,img.cardimage2 ,img.cardimage3 ,img.cardimage4,img.cardimage5{\r\n  width: 55px;\r\n}\r\n.cardimage2{\r\n  background-color:#f98e2c;\r\n  padding: 10px;\r\n}\r\n.cardimage3{\r\n  background-color:#ec4243;\r\n  padding: 10px;\r\n}\r\n.cardimage4{\r\n  background-color:#29bacd;\r\n  padding: 10px;\r\n}\r\n.cardimage5{\r\n  background-color:#4ca978;\r\n  padding: 10px;\r\n}\r\n.avgtext{position: relative;\r\n  top: -11px;\r\n  padding: 9px;}\r\n.phrmsfont{\r\n  position: relative;\r\n  }\r\n.pointer-class{\r\n    cursor: pointer;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/hrms-usecase/hrms-usecase2/hrms-usecase2.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/hrms-usecase/hrms-usecase2/hrms-usecase2.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n\r\n\r\n  <div style=\"background-color: white;border-radius:6px\">\r\n    <h3 style=\"margin-top: 1px;padding: 12px;\">HR Hiring</h3>\r\n    <button type=\"button\" class=\"btn btn-primary\" style=\"float: right;margin-top:-54px;margin-right: 31px;\"(click)=hrmsOverview()>HR Overview</button>\r\n  </div>\r\n  <div class=\"col-md-8\" style=\"padding:0px 5px;\">\r\n    <div class=\"colmd-12\">\r\n      <div class=\"col-md-3\" style=\"background-color: white;margin-right:10px;width: 24%;padding:0px;\">\r\n        <span>\r\n          <span><img src=\"../../../assets/hrmsimg/hrmsjoinericon.png\" style=\"padding: 20px;\"></span>\r\n          <span style=\"display: inline-table;\">\r\n            <span style=\"font-size:24px;\">156</span><br>\r\n\r\n            <span>Joined</span>\r\n          </span>\r\n          <hr style=\"background-color:#47b6dc; height:2px; border: 0;margin-bottom:0px;\">\r\n        </span>\r\n      </div>\r\n      <div class=\"col-md-3\" style=\"background-color: white;margin-right:12px;width: 24%;padding:0px;\">\r\n        <span>\r\n          <span><img src=\"../../../assets/hrmsimg/hrmsleavers.png\" style=\"padding: 20px;\"></span>\r\n          <span style=\"display: inline-table;\">\r\n              <span style=\"font-size:24px;\">52</span><br>\r\n            <span> Left</span>\r\n          </span>\r\n          <hr style=\"background-color:#fb6550; height:2px; border: 0;margin-bottom:0px;\">\r\n        </span>\r\n      </div>\r\n      <div class=\"col-md-3\" style=\"background-color: white;margin-right:12px;width: 24%;padding:0px;\">\r\n        <span>\r\n          <span><img src=\"../../../assets/hrmsimg/hrmsmovers.png\" style=\"padding: 20px;\"></span>\r\n          <span style=\"display: inline-table;\">\r\n              <span style=\"font-size:24px;\">14</span><br>\r\n            <span> Moved\r\n            </span>\r\n\r\n          </span>\r\n          <hr style=\"background-color:#47b6dc; height:2px; border: 0;margin-bottom:0px;\">\r\n        </span>\r\n      </div>\r\n      <div class=\"col-md-3\" style=\"background-color: white;margin-right:0px;width: 24%;padding:0px;\">\r\n        <span>\r\n          <span><img src=\"../../../assets/hrmsimg/hrmstotalopeningicon.png\" style=\"padding: 20px;\"></span>\r\n          <span style=\"display: inline-table;\">\r\n              <span style=\"font-size:24px;\">20</span><br>\r\n          <span>Total Openings\r\n          </span>\r\n         </span>\r\n          <hr style=\"background-color:#47b6dc; height:2px; border: 0;margin-bottom:0px;\">\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!--start second card-->\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"col-md-12 padding0\" style=\"margin-top: 10px;\">\r\n      <div class=\"col-md-7 padding0\" style=\"background: #fff;\">\r\n        <div class=\"col-md-12 \" style=\"background-color:#d43e29;text-align: center\">\r\n          <span>\r\n            <img class=\"mx-auto d-block\" src=\"../../../assets/hrmsimg/interviewicon.png\">\r\n\r\n          </span><span\r\n            style=\"color:white;font-weight: 900;font-size: large;position: relative;bottom: -4px;padding: 12px;\">Interviewing</span>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 padding0 card-deck\">\r\n\r\n          <div class=\"col-md-4\">\r\n            <div class=\"card\" style=\"border-bottom: 2px solid #d43e29;\">\r\n\r\n              <div class=\"card-body\" style=\"text-align:center\">\r\n                <h5 class=\"card-title\" style=\"font-size: -webkit-xxx-large;\"> 15</h5>\r\n                <p class=\"card-text\">\r\n\r\n                  Open Positions</p>\r\n                <!-- <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p> -->\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"col-md-4\">\r\n            <div class=\"card\" style=\"border-bottom: 2px solid #d43e29;\">\r\n\r\n              <div class=\"card-body\" style=\"text-align:center\">\r\n                <h5 class=\"card-title\" style=\"font-size: -webkit-xxx-large;\">5 </h5>\r\n                <p class=\"card-text\">\r\n                  Interviews Scheduled</p>\r\n                <!-- <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\" style=\"border-bottom: 2px solid #d43e29;\">\r\n            <div class=\"card\">\r\n\r\n              <div class=\"card-body\" style=\"text-align:center\">\r\n                <h5 class=\"card-title\" style=\"font-size: -webkit-xxx-large;\">92</h5>\r\n                <p class=\"card-text\">\r\n                  Selected Candidates</p>\r\n                <!-- <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"col-md-5 padding0\" style=\"background: #fff;\">\r\n        <div class=\"col-md-12\" style=\"background-color:#52ae59;text-align: center\">\r\n          <span>\r\n            <img class=\"mx-auto d-block\" src=\"../../../assets/hrmsimg/onboardicon.png\">\r\n\r\n          </span><span\r\n            style=\"color:white;font-weight: 900;font-size: large;position: relative;bottom: -4px;padding: 12px;\">Onboarding</span>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\" style=\"border-bottom: 2px solid #52ae59;\">\r\n\r\n            <div class=\"card-body\" style=\"text-align:center\">\r\n              <h5 class=\"card-title\" style=\"font-size: -webkit-xxx-large;\"> 7 </h5>\r\n              <p class=\"card-text\">\r\n                Open Offers</p>\r\n              <!-- <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\" style=\"border-bottom: 2px solid #52ae59;\">\r\n\r\n            <div class=\"card-body\" style=\"text-align:center\">\r\n              <h5 class=\"card-title\" style=\"font-size: -webkit-xxx-large;\">13</h5>\r\n              <p class=\"card-text\">\r\n                  Current Onboardings</p>\r\n              <!-- <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <!--end second card-->\r\n    <!--secondtablerow-->\r\n\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"col-md-12 hrmspt padding0\" style=\"margin-top:10px;\">\r\n      <div class=\"col-md-8 padding0\" style=\"overflow-x:auto;overflow-y:auto;\r\n          height:461px;\">\r\n\r\n        <p style=\"background-color:#596fa7;font-weight: 900;margin: 0px;padding:5px;color:white\">Recruitment Pipeline</p>\r\n\r\n        <table class=\"table\" style=\"width: 100%;\">\r\n\r\n          <thead class=\"thead-light hrmsth\">\r\n\r\n            <tr>\r\n              <th scope=\"col\">Department\r\n\r\n              </th>\r\n              <th scope=\"col\">Postion</th>\r\n              <th scope=\"col\">Date</th>\r\n\r\n            </tr>\r\n\r\n          </thead>\r\n          <tbody style=\"height:200px;overflow-y:auto;width: 100%;\">\r\n\r\n            <tr *ngFor=\"let obj of hiringPlan;let i=index\" class=\"pointer-class\" (click)=\"onClickHiring(i,obj)\" [ngStyle]=\"{'background-color': selectedItem == i ? 'grey' : ''}\">\r\n              <th scope=\"row\">\r\n                {{obj.Department}}\r\n              </th>\r\n              <td>{{obj.Position}}</td>\r\n              <td>{{obj.date}}</td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-md-4 padding0\"  *ngIf=\"isClicked==true\">\r\n\r\n        <!--click\r\n          Best Hiring Channel: \"Website Posting\"\r\nDepartment: \"Marketing\"\r\nMarket Availability: \"Low\"\r\nPosition: \"B1 - Trainee\"\r\nTurnout Ratio: 80\r\navg days to hire: 7\r\ncost of hiring: 307\r\ndate: \"23-Jul-18\"\r\n           event come-->\r\n          <div style=\"background-color:white;padding: 0px 0px 40px 0px;\">\r\n        <div class=\"col-md-12\">\r\n          <h4>Forecast</h4>\r\n        </div>\r\n        <div class=\"col-md-12\" style=\"padding: 4px;margin-bottom:10px;margin-top:15px;\">\r\n          <div class=\"col-md-4\">\r\n            <p><img class=\"cardimage1\" src=\"../../../assets/hrmsimg/avgtimeicon.png\" alt=\"Smiley face\" align=\"left\">\r\n          </div>\r\n          <div class=\"col-md-8\" style=\"padding-left:10px;padding-right:2px;margin-left: -24px;\">\r\n            <h5 style=\"margin-top:0px;margin-bottom:0px;font-size: 15px;\">Avg Time to hire</h5>\r\n            <h1 style=\"margin-top:8px;margin-bottom:0px;font-size: 26px;\">{{hiringPlanObjData['avg days to hire']}} Days</h1>\r\n          </div>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"col-md-12\" style=\"padding: 4px;margin-bottom:10px;\">\r\n          <div class=\"col-md-4\">\r\n            <p><img class=\"cardimage2\" src=\"../../../assets/hrmsimg/avgcosticon.png\" alt=\"Smiley face\" align=\"left\">\r\n          </div>\r\n          <div class=\"col-md-8\" style=\"padding-left:10px;padding-right:2px;margin-left: -24px;\">\r\n            <h5 style=\"margin-top:0px;margin-bottom:0px;font-size: 15px;\">Avg Cost of Hiring</h5>\r\n            <h1 style=\"margin-top:10px;margin-bottom:0px;font-size: 26px;\">$ {{hiringPlanObjData['cost of hiring']}}</h1>\r\n          </div>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n\r\n        <div class=\"col-md-12\" style=\"padding: 4px;margin-bottom:10px;\">\r\n          <div class=\"col-md-4\">\r\n            <p><img class=\"cardimage3\" src=\"../../../assets/hrmsimg/turnouticon.png\" alt=\"Smiley face\" align=\"left\">\r\n          </div>\r\n          <div class=\"col-md-8\" style=\"padding-left:10px;padding-right:2px;margin-left: -24px;\">\r\n            <h5 style=\"margin-top:0px;margin-bottom:0px;font-size: 15px;\">Turnout Ratio</h5>\r\n            <h1 style=\"margin-top:8px;margin-bottom:0px;font-size: 26px;\">{{hiringPlanObjData['Turnout Ratio']}} %</h1>\r\n          </div>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"col-md-12\" style=\"padding: 4px;margin-bottom:10px;\">\r\n          <div class=\"col-md-4\">\r\n            <p><img class=\"cardimage4\" src=\"../../../assets/hrmsimg/marketicon.png\" alt=\"Smiley face\" align=\"left\">\r\n          </div>\r\n          <div class=\"col-md-8\" style=\"padding-left:10px;padding-right:2px;margin-left: -24px;\">\r\n            <h5 style=\"margin-top:0px;margin-bottom:0px;font-size: 15px;\">Market Availability</h5>\r\n            <h1 style=\"margin-top:8px;margin-bottom:0px;font-size: 26px;\">{{hiringPlanObjData['Market Availability']}}\r\n            </h1>\r\n          </div>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"col-md-12\" style=\"padding: 4px;margin-bottom:10px;\">\r\n          <div class=\"col-md-4\">\r\n            <p><img class=\"cardimage5\" src=\"../../../assets/hrmsimg/besthiringicon.png\" alt=\"Smiley face\" align=\"left\">\r\n          </div>\r\n          <div class=\"col-md-8\" style=\"padding-left:10px;padding-right:2px;margin-left: -24px;\">\r\n            <h5 style=\"margin-top:0px;margin-bottom:0px;font-size: 15px;\">Best Hiring Channel\r\n            </h5>\r\n            <h1 style=\"margin-top:8px;margin-bottom:0px; font-size: 26px;\"> {{hiringPlanObjData['Best Hiring Channel']}}\r\n            </h1>\r\n          </div>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n\r\n\r\n        <!--click end event -->\r\n\r\n      </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!--second row end-->\r\n\r\n  </div>\r\n  <div class=\"col-md-4 padding0\">\r\n\r\n    <div class=\"col-md-12 padding0\" style=\"overflow-x:auto;overflow-y:auto;background: #fff;\r\n    height:283px;\">\r\n      <p style=\"background-color:#596fa7;padding:5px;margin:0px;color:white\"> Onboarding Details</p>\r\n      <table class=\"table\" style=\"\r\n                border: 1px solid #ddd;\r\n\r\n              \">\r\n        <!---->\r\n        <thead class=\"thead-light\">\r\n\r\n          <tr>\r\n\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Department</th>\r\n            <th scope=\"col\">Joining Date</th>\r\n            <th scope=\"col\">Role</th>\r\n            <th scope=\"col\">Onboarding Status</th>\r\n          </tr>\r\n\r\n        </thead>\r\n        <tbody>\r\n\r\n\r\n          <tr *ngFor=\"let object of onboardingDetaols;index as id\">\r\n\r\n            <td>{{object.Name}}</td>\r\n            <td>{{object.Department}}</td>\r\n            <td>{{object['Joinning Date']}}</td>\r\n            <td>{{object['Role']}}</td>\r\n            <th scope=\"row\">\r\n\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar\" [style.width.px]=\"[object['Onboarding Status']]\"></div>\r\n              </div>\r\n            </th>\r\n          </tr>\r\n\r\n\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-12\" style=\"margin-top:10px;padding:0px;background: #fff;\">\r\n      <div style=\"padding:7px 15px;\">\r\n        Spend by hiring channels\r\n      </div>\r\n      <div [chart]=\"costofHiringChart\">\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-12\" style=\"margin-top:10px;padding:0px;background: #fff;\">\r\n      <div style=\"padding:7px 15px;\">\r\n        Candidate yield ratio\r\n      </div>\r\n      <div [chart]=\"yieldratioChart\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/hrms-usecase/hrms-usecase2/hrms-usecase2.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/hrms-usecase/hrms-usecase2/hrms-usecase2.component.ts ***!
  \***********************************************************************/
/*! exports provided: HrmsUsecase2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrmsUsecase2Component", function() { return HrmsUsecase2Component; });
/* harmony import */ var _core_databot_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/databot.service */ "./src/app/core/databot.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HrmsUsecase2Component = /** @class */ (function () {
    function HrmsUsecase2Component(http, databotService, router) {
        this.http = http;
        this.databotService = databotService;
        this.router = router;
        this.isClicked = false;
        this.onboardingDetaols = [
            {
                "Onbording": 10,
                "Primary": "Guglielmo",
                "Department": "Engineering",
                "Start Dates": "18/04/18",
                "Job Title": "Engineering",
            },
            {
                "Onbording": 20,
                "Primary": "Heathfield",
                "Department": "Sales",
                "Start Dates": "11/06/18",
                "Job Title": "VP of Sales",
            },
            {
                "Onbording": 30,
                "Primary": "Lainey Bolus",
                "Department": "Legal",
                "Start Dates": "12/07/18",
                "Job Title": "Sales Man",
            },
            {
                "Onbording": 40,
                "Primary": "Ami Cozens",
                "Department": "Engineering",
                "Start Dates": "15/08/18",
                "Job Title": "Senior Bus",
            },
            {
                "Onbording": 50,
                "Primary": "Binnie Murkus",
                "Department": "Marketing",
                "Start Dates": "18/09/18",
                "Job Title": "BA ",
            },
            {
                "Onbording": 60,
                "Primary": "Nixie Celiz",
                "Department": "Enoineera",
                "Start Dates": "7/11/18",
                "Job Title": "Sales Man",
            },
            {
                "Onbording": 70,
                "Primary": "Miles Hendrick",
                "Department": "Marketing",
                "Start Dates": "2/03/18",
                "Job Title": "Developer",
            },
            {
                "Onbording": 55,
                "Primary": "Eydie Winfrey",
                "Department": "Engineering",
                "Start Dates": "1/03/18",
                "Job Title": "HR",
            },
        ];
    }
    HrmsUsecase2Component.prototype.ngOnInit = function () {
        var _this = this;
        //Onbording_Status
        this.databotService.loadHrHiringDashboard().subscribe(function (data) {
            _this.hiringPlan = data;
            _this.hiringPlanObjData = data[2];
            _this.isClicked = true;
            console.log(" this.hiringPlan ", _this.hiringPlan);
        });
        this.databotService.loadHiringOnboarding().subscribe(function (data) {
            _this.onboardingDetaols = data;
            console.log("  this.onboardingDetaols ", _this.onboardingDetaols);
        });
        this.onboardingDetaols;
        this.loadyieldChart();
        this.loadHiringChart();
    };
    HrmsUsecase2Component.prototype.loadyieldChart = function () {
        this.options = {
            chart: {
                type: 'column',
                height: 193,
                style: {
                    fontFamily: 'Ubuntu,sans-serif'
                }
            },
            title: {
                text: ''
            },
            xAxis: {
                type: 'category',
                labels: {
                    enabled: true
                }
            },
            yAxis: {
                // title: { text: 'Total percent market share' },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'red'
                    }
                },
                gridLineColor: 'transparent',
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                }
            },
            series: [
                {
                    name: 'Categories',
                    data: [
                        {
                            name: 'Dice',
                            y: 30,
                            color: '#a8b3cf'
                        },
                        {
                            name: 'Indeed',
                            y: 20,
                            color: '#a8b3cf'
                        },
                        {
                            name: 'Employee Referral',
                            y: 10,
                            color: '#a8b3cf'
                        },
                        {
                            name: 'Website Posting',
                            y: 15,
                            color: '#a8b3cf'
                        },
                        {
                            name: 'Social Media',
                            y: 25,
                            color: '#a8b3cf'
                        }
                    ]
                }
            ],
            credits: {
                enabled: null
            }
        };
        this.yieldratioChart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.options);
    };
    HrmsUsecase2Component.prototype.loadHiringChart = function () {
        this.options = {
            chart: {
                type: 'column',
                height: 193,
                style: {
                    fontFamily: 'Ubuntu,sans-serif'
                }
            },
            title: {
                text: ''
            },
            xAxis: {
                type: 'category',
                labels: {
                    enabled: true
                }
            },
            yAxis: {
                //  title: { text: 'Total percent market share' },
                stackLabels: {
                    enabled: false,
                    style: {
                        fontWeight: 'bold',
                        color: 'red'
                    }
                },
                gridLineColor: 'transparent',
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '${point.y:.1f}'
                    }
                }
            },
            series: [
                {
                    name: 'Categories',
                    data: [
                        {
                            name: 'Dice',
                            y: 3000,
                            color: '#a8b3cf'
                        },
                        {
                            name: 'Indeed',
                            y: 2000,
                            color: '#a8b3cf'
                        },
                        {
                            name: 'Employee Referral',
                            y: 1500,
                            color: '#a8b3cf'
                        },
                        {
                            name: 'Website Posting',
                            y: 1200,
                            color: '#a8b3cf'
                        },
                        {
                            name: 'Social Media',
                            y: 1400,
                            color: '#a8b3cf'
                        }
                    ]
                }
            ],
            credits: {
                enabled: null
            }
        };
        this.costofHiringChart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.options);
    };
    HrmsUsecase2Component.prototype.onClickHiring = function (id, data) {
        this.isClicked = true;
        this.selectedItem = id;
        this.hiringPlanObjData = data;
        console.log("Data coming from", this.hiringPlanObjData);
    };
    HrmsUsecase2Component.prototype.hrmsOverview = function () {
        this.router.navigate(['./hrms-usecase-1']);
    };
    HrmsUsecase2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hrms-usecase2',
            template: __webpack_require__(/*! ./hrms-usecase2.component.html */ "./src/app/hrms-usecase/hrms-usecase2/hrms-usecase2.component.html"),
            styles: [__webpack_require__(/*! ./hrms-usecase2.component.css */ "./src/app/hrms-usecase/hrms-usecase2/hrms-usecase2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _core_databot_service__WEBPACK_IMPORTED_MODULE_0__["DatabotService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HrmsUsecase2Component);
    return HrmsUsecase2Component;
}());



/***/ }),

/***/ "./src/app/hrms-usecase/hrms-usecase3/hrms-usecase3.component.css":
/*!************************************************************************!*\
  !*** ./src/app/hrms-usecase/hrms-usecase3/hrms-usecase3.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hrms-usecase/hrms-usecase3/hrms-usecase3.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/hrms-usecase/hrms-usecase3/hrms-usecase3.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>"

/***/ }),

/***/ "./src/app/hrms-usecase/hrms-usecase3/hrms-usecase3.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/hrms-usecase/hrms-usecase3/hrms-usecase3.component.ts ***!
  \***********************************************************************/
/*! exports provided: HrmsUsecase3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrmsUsecase3Component", function() { return HrmsUsecase3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HrmsUsecase3Component = /** @class */ (function () {
    function HrmsUsecase3Component() {
    }
    HrmsUsecase3Component.prototype.ngOnInit = function () {
    };
    HrmsUsecase3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hrms-usecase3',
            template: __webpack_require__(/*! ./hrms-usecase3.component.html */ "./src/app/hrms-usecase/hrms-usecase3/hrms-usecase3.component.html"),
            styles: [__webpack_require__(/*! ./hrms-usecase3.component.css */ "./src/app/hrms-usecase/hrms-usecase3/hrms-usecase3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HrmsUsecase3Component);
    return HrmsUsecase3Component;
}());



/***/ }),

/***/ "./src/app/industries/industries.component.css":
/*!*****************************************************!*\
  !*** ./src/app/industries/industries.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navheader{\r\n    color: white;\r\n    }\r\n    \r\n    .panel-heading {\r\n        padding:0px;\r\n        border-bottom: 0px;\r\n         border-top-left-radius: 0px;\r\n         border-top-right-radius: 0px;\r\n    }\r\n    \r\n    .panel {\r\n        margin-bottom: 0px;\r\n        border-radius: 4px;\r\n        box-shadow: 0 1px 1px rgba(0,0,0,.05);\r\n        border: 0px solid transparent;\r\n    }\r\n    \r\n    .shape:after {\r\n        border-top: 100px solid red;\r\n        border-left: 50px solid transparent;\r\n        border-right: 50px solid transparent;\r\n        height: 0;\r\n        \r\n    }\r\n    \r\n    .shape {\r\n        width: 200px;\r\n        height: 200px;\r\n         border-bottom-left-radius: 25px;\r\n        border-bottom-right-radius: 25px; \r\n        background: red;\r\n        /* transform: perspective(10px) rotateX(-2deg);*/\r\n       \r\n    \r\n    }\r\n    \r\n    .talkbubble {\r\n        border-right:1px solid #273048;\r\n        padding:15px;\r\n    }\r\n    \r\n    .talkbubble:hover {\r\n        /* width: 120px; */\r\n       padding:15px;\r\n        background: #273048;\r\n        position: relative;\r\n        border-bottom-left-radius: 25px;\r\n        border-bottom-right-radius: 25px; \r\n      \r\n      }\r\n    \r\n    .talkbubble:hover p {\r\n          color:#fff !important;\r\n      }\r\n    \r\n    .talkbubble:hover:before {\r\n        content: \"\";\r\n        position: absolute;\r\n        right: -14px;\r\n        top: -24px;\r\n        left: -14px;\r\n        border-top: 24px solid #273048;\r\n        border-left: 14px solid transparent;\r\n        border-right: 13px solid transparent;\r\n        height: 0;\r\n        /* width: 100%; */\r\n      }\r\n    \r\n    .talkbubble1 {\r\n        /* width: 120px; */\r\n       padding:15px;\r\n        background: #273048;\r\n        position: relative;\r\n        border-bottom-left-radius: 25px;\r\n        border-bottom-right-radius: 25px; \r\n      }\r\n    \r\n    .talkbubble1:before {\r\n        content: \"\";\r\n        position: absolute;\r\n        right: -14px;\r\n        top: -24px;\r\n        left: -14px;\r\n        border-top: 24px solid #273048;\r\n        border-left: 14px solid transparent;\r\n        border-right: 14px solid transparent;\r\n        height: 0;\r\n        /* width: 100%; */\r\n      }\r\n    \r\n    .topt {\r\n        border-top: 43px solid red;\r\n        border-left: 14px solid transparent;\r\n        border-right: 15px solid transparent;\r\n        height: 0;\r\n        position: absolute;\r\n        top: -42px;\r\n        left: 2px;\r\n        right: -5px;\r\n    }\r\n    \r\n    .panel-body {\r\n        padding: 4px;\r\n    }\r\n    \r\n    /* .container-fluid {\r\n        padding-right: 7px;\r\n        padding-left: 7px;\r\n        margin-right: auto;\r\n        margin-left: auto;\r\n    } */\r\n    \r\n    .topnav {\r\n        overflow: hidden;\r\n        background-color:#155f57;\r\n    }\r\n    \r\n    /* Style the search box inside the navigation bar */\r\n    \r\n    .topnav input[type=text] {\r\n        float: right;\r\n        padding: 2px;\r\n        border: none;\r\n        margin: 2px;\r\n    /*     margin-right: 16px; */\r\n        font-size: 17px;\r\n       /*  background-color: #155f57; */\r\n         border: 1px solid  #155f57;\r\n        border-radius: 3px;\r\n    }\r\n    \r\n    /* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */\r\n    \r\n    @media screen and (max-width: 600px) {\r\n        .topnav a, .topnav input[type=text] {\r\n            float: none;\r\n            display: block;\r\n            text-align: left;\r\n            width: 100%;\r\n            margin: 0;\r\n            padding: 14px;\r\n        }\r\n        .topnav input[type=text] {\r\n            border: 1px solid #ccc;\r\n        }\r\n    }\r\n    \r\n    .menudiv {\r\n        width: 35px;\r\n        height: 5px;\r\n        background-color: black;\r\n        margin: 6px 0;\r\n    }\r\n    \r\n    .vl {\r\n        border-left: 1px solid #6c950f;\r\n        height: 194px;\r\n        position: absolute;\r\n        left: 39%;\r\n        margin-left: 74px;\r\n        margin-top: 18px;\r\n        top: 0;\r\n    }\r\n    \r\n    .img-center {\r\n        display: block;\r\n        margin: 0 auto;\r\n        \r\n    }\r\n    \r\n    #fleet_hover:hover, #health_hover:hover{\r\n        background-color:grey;\r\n    }\r\n    \r\n    .imgmargin{\r\n       margin-top:13px\r\n    }\r\n    \r\n    \r\n    "

/***/ }),

/***/ "./src/app/industries/industries.component.html":
/*!******************************************************!*\
  !*** ./src/app/industries/industries.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\" style=\"padding: 0px\">\r\n\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-body\" style=\"text-align: right; background-color:#273048\"><strong\r\n        style=\"color:white;\">INDUSTRIES</strong></div>\r\n  </div>\r\n\r\n  <div class=\"col-md-12 padding:0px\" *ngIf=\"noindustry\">\r\n      <p>There are no industries assigned</p>\r\n  </div>\r\n  <div class=\"col-md-12 padding:0px\" *ngIf=\"!noindustry\">\r\n    <div class=\"row\">\r\n      <div *ngIf=\"manufacturing\">\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"showUseCase(3)\" *ngIf='!showManufacturing'>\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/3.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#36567e;font-weight:bold;\"> Manufacturing / Supply Chain</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 imgmargin\" *ngIf='showManufacturing'>\r\n          <div class=\"talkbubble1\">\r\n            <img src=\"../../assets/3.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#fff;font-weight:bold;\"> Manufacturing / Supply Chain</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"transportation\">\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"showUseCase(1)\" *ngIf='!show'>\r\n          <div class=\"talkbubble\">\r\n\r\n            <img src=\"../../assets/22.png\" class=\"img-center img-responsive\">\r\n\r\n            <p style=\"text-align: center; color:#36567e;font-weight:bold;\">Transportation</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 imgmargin\" *ngIf='show'>\r\n\r\n          <div class=\"talkbubble1\">\r\n\r\n            <img src=\"../../assets/22.png\" class=\"img-center img-responsive\">\r\n\r\n            <p style=\"text-align: center; color:#fff;font-weight:bold;\">Transportation</p>\r\n          </div>\r\n          <!-- <img src=\"../../assets/fleet_Image.png\"  class=\"img-center img-responsive\">\r\n           <p style=\"text-align: center; color:#267872\"></p> -->\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"finance\">\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"showUseCase(2)\" *ngIf='!showHealth'>\r\n          <div class=\"talkbubble\">\r\n\r\n            <img src=\"../../assets/HospitalIcon.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#36567e ;font-weight:bold;\">Finance</p>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-2 imgmargin\" *ngIf='showHealth'>\r\n          <div class=\"talkbubble1\">\r\n\r\n            <img src=\"../../assets/HospitalIcon.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#fff;font-weight:bold; \">Finance</p>\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"humanresource\">\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"showUseCase(4)\" *ngIf='!showTextile'>\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/4.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#36567e;font-weight:bold;\">Human Resource</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 imgmargin\" *ngIf='showTextile'>\r\n          <div class=\"talkbubble1\">\r\n            <img src=\"../../assets/4.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#fff;font-weight:bold;\">Human Resources</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"healthcare\">\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"showUseCase(5)\" *ngIf='!showEnergy'>\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#36567e;font-weight:bold;\">Health Care</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 imgmargin\" *ngIf='showEnergy'>\r\n          <div class=\"talkbubble1\">\r\n            <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#fff;font-weight:bold;\">Health Care</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"energy\">\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"showUseCase(7)\" *ngIf='!showEng'>\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#36567e;font-weight:bold;\">Energy</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 imgmargin\" *ngIf='showEng'>\r\n          <div class=\"talkbubble1\">\r\n            <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#fff;font-weight:bold;\">Energy</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div class=\"col-md-2 imgmargin\" (click)=\"showUseCase(6)\" *ngIf='!showpsephology'>\r\n        <div class=\"talkbubble\">\r\n          <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n          <p style=\"text-align: center;color:#36567e;font-weight:bold;\">psephology</p>\r\n        </div>\r\n      </div>-->\r\n\r\n    </div>\r\n  </div>\r\n<!--Super Admin-->\r\n  <div class=\"col-md-12 padding:0px\" *ngIf =\"superadmin\">\r\n    <div class=\"row\">\r\n      <div>\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"showUseCase(3)\" *ngIf='!showManufacturing'>\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/3.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#36567e;font-weight:bold;\"> Manufacturing / Supply Chain</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 imgmargin\" *ngIf='showManufacturing'>\r\n          <div class=\"talkbubble1\">\r\n            <img src=\"../../assets/3.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#fff;font-weight:bold;\"> Manufacturing / Supply Chain</p>\r\n          </div>\r\n  \r\n        </div>\r\n      </div>\r\n  \r\n  \r\n      <div>\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"showUseCase(1)\" *ngIf='!show'>\r\n          <div class=\"talkbubble\">\r\n  \r\n            <img src=\"../../assets/22.png\" class=\"img-center img-responsive\">\r\n  \r\n            <p style=\"text-align: center; color:#36567e;font-weight:bold;\">Transportation</p>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"col-md-2 imgmargin\" *ngIf='show'>\r\n  \r\n          <div class=\"talkbubble1\">\r\n  \r\n            <img src=\"../../assets/22.png\" class=\"img-center img-responsive\">\r\n  \r\n            <p style=\"text-align: center; color:#fff;font-weight:bold;\">Transportation</p>\r\n          </div>\r\n          <!-- <img src=\"../../assets/fleet_Image.png\"  class=\"img-center img-responsive\">\r\n           <p style=\"text-align: center; color:#267872\"></p> -->\r\n  \r\n  \r\n        </div>\r\n      </div>\r\n  \r\n      <div>\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"showUseCase(2)\" *ngIf='!showHealth'>\r\n          <div class=\"talkbubble\">\r\n  \r\n            <img src=\"../../assets/HospitalIcon.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#36567e ;font-weight:bold;\">Finance</p>\r\n  \r\n  \r\n          </div>\r\n        </div>\r\n  \r\n  \r\n        <div class=\"col-md-2 imgmargin\" *ngIf='showHealth'>\r\n          <div class=\"talkbubble1\">\r\n  \r\n            <img src=\"../../assets/HospitalIcon.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#fff;font-weight:bold; \">Finance</p>\r\n  \r\n  \r\n          </div>\r\n  \r\n        </div>\r\n      </div>\r\n  \r\n      <div>\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"showUseCase(4)\" *ngIf='!showTextile'>\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/4.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#36567e;font-weight:bold;\">Human Resource</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 imgmargin\" *ngIf='showTextile'>\r\n          <div class=\"talkbubble1\">\r\n            <img src=\"../../assets/4.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#fff;font-weight:bold;\">Human Resources</p>\r\n          </div>\r\n  \r\n        </div>\r\n      </div>\r\n  \r\n      <div>\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"showUseCase(5)\" *ngIf='!showEnergy'>\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#36567e;font-weight:bold;\">Health Care</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 imgmargin\" *ngIf='showEnergy'>\r\n          <div class=\"talkbubble1\">\r\n            <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#fff;font-weight:bold;\">Health Care</p>\r\n          </div>\r\n  \r\n        </div>\r\n      </div>\r\n  \r\n      <div>\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"showUseCase(7)\" *ngIf='!showEng'>\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#36567e;font-weight:bold;\">Energy</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 imgmargin\" *ngIf='showEng'>\r\n          <div class=\"talkbubble1\">\r\n            <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#fff;font-weight:bold;\">Energy</p>\r\n          </div>\r\n  \r\n        </div>\r\n      </div>\r\n  \r\n      <!-- <div class=\"col-md-2 imgmargin\" (click)=\"showUseCase(6)\" *ngIf='!showpsephology'>\r\n        <div class=\"talkbubble\">\r\n          <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n          <p style=\"text-align: center;color:#36567e;font-weight:bold;\">psephology</p>\r\n        </div>\r\n      </div>-->\r\n  \r\n    </div>\r\n  </div>\r\n  <!--Super Admin-->\r\n</div>\r\n\r\n\r\n\r\n<app-usecase [UseCaseType]=\"UseCaseTypeValue\" [IndustryType]=\"industryType\" [usecaseslist]=\"usecases\" *ngIf=\"usecase\"></app-usecase>\r\n\r\n\r\n\r\n\r\n<!-- <app-health *ngIf=\"health\"></app-health> -->"

/***/ }),

/***/ "./src/app/industries/industries.component.ts":
/*!****************************************************!*\
  !*** ./src/app/industries/industries.component.ts ***!
  \****************************************************/
/*! exports provided: IndustriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustriesComponent", function() { return IndustriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_databot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/databot.service */ "./src/app/core/databot.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndustriesComponent = /** @class */ (function () {
    function IndustriesComponent(router, databotservice) {
        this.router = router;
        this.databotservice = databotservice;
        this.someProperty = false;
        this.show = false;
        this.showHealth = false;
        this.showManufacturing = false;
        this.showTextile = false;
        this.showEnergy = false;
        this.usecase = false;
        this.health = false;
        this.showpsephology = false;
        this.UseCaseTypeValue = 0;
        this.showreport = false;
        this.showEng = false;
        this.organizationCategories = [];
        this.manufacturing = false;
        this.transportation = false;
        this.finance = false;
        this.humanresource = false;
        this.healthcare = false;
        this.energy = false;
        this.noindustry = true;
        this.manufacturingusecase = [];
        this.transportationusecase = [];
        this.financeusecase = [];
        this.hrusecase = [];
        this.healthcareusecase = [];
        this.energyusecase = [];
        this.usecases = [];
        this.superadmin = false;
        this.userloginid = localStorage.getItem('userId');
        this.userRole = localStorage.getItem('userRole');
        console.log(this.userloginid);
    }
    IndustriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('userRole') == "superadmin") {
            this.superadmin = true;
            this.noindustry = false;
        }
        else {
            this.superadmin = false;
        }
        var userData = {
            role: localStorage.getItem('userRole'),
            userid: localStorage.getItem('userId')
        };
        this.databotservice.getUserDetails(userData).subscribe(function (data) {
            var userdata = data;
            var industries = userdata['user_data']['industries'];
            var industriesusecase = userdata['user_data']['industriesUsecase'];
            console.log(industries);
            _this.displayIndustries(industries);
            _this.displayIndustriesusecase(industriesusecase);
        }, function (err) {
            console.log(JSON.stringify(err) + "this is error");
        });
    };
    IndustriesComponent.prototype.displayIndustries = function (industries) {
        var index;
        for (index in industries) {
            switch (industries[index]) {
                case 'Manufacturing':
                    this.manufacturing = true;
                    this.noindustry = false;
                    break;
                case 'Transportation':
                    this.transportation = true;
                    this.noindustry = false;
                    break;
                case 'Finance':
                    this.finance = true;
                    this.noindustry = false;
                    break;
                case 'Human Resources':
                    this.humanresource = true;
                    this.noindustry = false;
                    break;
                case 'Health Care':
                    this.healthcare = true;
                    this.noindustry = false;
                    break;
                case 'Energy':
                    this.energy = true;
                    this.noindustry = false;
                    break;
            }
        }
    };
    IndustriesComponent.prototype.displayIndustriesusecase = function (industiesusecase) {
        var index;
        for (index in industiesusecase) {
            switch (industiesusecase[index]['industryName']) {
                case 'Manufacturing':
                    this.manufacturingusecase = industiesusecase[index]['industriesUsecase'];
                    break;
                case 'Transportation':
                    this.transportationusecase = industiesusecase[index]['industriesUsecase'];
                    break;
                case 'Finance':
                    this.financeusecase = industiesusecase[index]['industriesUsecase'];
                    break;
                case 'Human Resources':
                    this.hrusecase = industiesusecase[index]['industriesUsecase'];
                    break;
                case 'Health Care':
                    this.healthcareusecase = industiesusecase[index]['industriesUsecase'];
                    break;
                case 'Energy':
                    this.energyusecase = industiesusecase[index]['industriesUsecase'];
                    break;
            }
        }
    };
    IndustriesComponent.prototype.loaduseCase = function () {
        var _this = this;
        this.databotservice.loadUseCase().subscribe(function (data) {
            _this.usecasejsonData = data;
            var index;
            for (index in _this.usecasejsonData) {
                if (_this.organizationCategories.indexOf(_this.usecasejsonData[index].Industry) < 0) {
                    _this.organizationCategories.push(_this.usecasejsonData[index].Industry);
                }
            }
        });
    };
    // @Output() emitShowUseCase = new EventEmitter();
    IndustriesComponent.prototype.showUseCase = function (useCaseType) {
        this.UseCaseTypeValue = useCaseType;
        if (useCaseType == 1) {
            this.show = true;
            this.showHealth = false;
            this.showManufacturing = false;
            this.showTextile = false;
            this.showEnergy = false;
            this.showpsephology = false;
            this.showEng = false;
            this.usecase = true;
            this.industryType = 'Transportation';
            this.usecases = this.transportationusecase;
        }
        else if (useCaseType == 2) {
            this.showHealth = true;
            this.show = false;
            this.showManufacturing = false;
            this.showTextile = false;
            this.showEnergy = false;
            this.showpsephology = false;
            this.showEng = false;
            this.usecase = true;
            this.industryType = 'Finance';
            this.usecases = this.financeusecase;
        }
        else if (useCaseType == 3) {
            this.showManufacturing = true;
            this.show = false;
            this.showHealth = false;
            this.showTextile = false;
            this.showEnergy = false;
            this.showpsephology = false;
            this.showEng = false;
            this.usecase = true;
            this.industryType = 'Manufacturing';
            this.usecases = this.manufacturingusecase;
        }
        else if (useCaseType == 4) {
            this.showTextile = true;
            this.show = false;
            this.showHealth = false;
            this.showEnergy = false;
            this.showManufacturing = false;
            this.showpsephology = false;
            this.showEng = false;
            this.usecase = true;
            this.industryType = 'Human Resources';
            this.usecases = this.hrusecase;
        }
        else if (useCaseType == 5) {
            this.showEnergy = true;
            this.show = false;
            this.showHealth = false;
            this.showManufacturing = false;
            this.showTextile = false;
            this.showpsephology = false;
            this.showEng = false;
            this.usecase = true;
            this.industryType = 'Health Care';
            this.usecases = this.healthcareusecase;
        }
        else if (useCaseType == 7) {
            this.showEng = true;
            this.showpsephology = false;
            this.showEnergy = false;
            this.show = false;
            this.showHealth = false;
            this.showManufacturing = false;
            this.showTextile = false;
            this.usecase = true;
            this.industryType = 'Energy';
            this.usecases = this.energyusecase;
        }
        // alert(useCaseType);
        // this.emitShowUseCase.emit(useCaseType);
    };
    IndustriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-industries',
            template: __webpack_require__(/*! ./industries.component.html */ "./src/app/industries/industries.component.html"),
            styles: [__webpack_require__(/*! ./industries.component.css */ "./src/app/industries/industries.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_databot_service__WEBPACK_IMPORTED_MODULE_2__["DatabotService"]])
    ], IndustriesComponent);
    return IndustriesComponent;
}());



/***/ }),

/***/ "./src/app/inventory-map/inventory-map.component.css":
/*!***********************************************************!*\
  !*** ./src/app/inventory-map/inventory-map.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*card*/\r\n.card_wrapper{\r\n    /* width: 18rem; */\r\n    height: 10rem;\r\n    background-color: #FFFFFF;\r\n    border-top: 2px solid #50c4bb;\r\n}\r\n.dropdown_wrapper{\r\n    width: 97%;\r\n    height: 33px;\r\n  padding: -1px 30px;\r\n  border: 0px;\r\n  border-bottom: 1px solid grey;\r\n  }\r\n.padding-left-right{\r\npadding-left: 5px;\r\npadding-right: 5px\r\n}\r\n/**/\r\n/*Padding*/\r\n.padding-top{\r\n    padding-top: 6px;\r\n    padding-left: 10px;\r\n  }\r\n/**/\r\n/*alerticon*/\r\n.alert-icon{\r\n    font-size: 42px;\r\n    color: red;\r\n  }\r\n/**/\r\n.activeclass{\r\n    background-color: #f9f9f9!important;\r\n    border-bottom: 3px solid palevioletred;\r\n\r\n  }\r\n#map {\r\n    height:500px;\r\n    width: 100%\r\n  }\r\n.button-wrapper{\r\n    width: 50%;\r\n    float: right;\r\n    margin-top: 20px;\r\n  }\r\n.horizontalline-wrapper\r\n  {\r\n    border: 1px solid black;\r\n    margin-top: 22px;\r\n    width: 80%;\r\n  }\r\n.icon-text-wrapper{\r\n  margin-top: -36px;\r\n    text-align:center;\r\n    \r\n}\r\n.icon-image-wrapper{\r\n  margin-top: -11px;\r\n  width: 30%;\r\n  margin-left: 3px;\r\n\r\n}\r\n@media only screen and (max-width :2160px) {\r\n  .card_wrapper {\r\n height: 12rem;\r\n background-color: #FFFFFF;\r\n border-top: 2px solid #50c4bb;\r\n}\r\n.icon-text-wrapper{\r\nmargin-top: -36px;\r\n  text-align:center;\r\n  \r\n}\r\n.icon-image-wrapper{\r\nmargin-top: -11px;\r\nwidth: 30%;\r\nmargin-left: 3px;\r\n\r\n}\r\n  \r\n  }\r\n@media only screen and (max-width :1920px) {\r\n  .card_wrapper {\r\n height: 11rem;\r\n background-color: #FFFFFF;\r\n border-top: 2px solid #50c4bb;\r\n}\r\n.icon-text-wrapper{\r\nmargin-top: -36px;\r\n  text-align:center;\r\n  \r\n}\r\n.icon-image-wrapper{\r\nmargin-top: -11px;\r\nwidth: 30%;\r\nmargin-left: 3px;\r\n\r\n}\r\n  \r\n  }\r\n@media only screen and (max-width :1680px) {\r\n    .card_wrapper {\r\n   height: 11rem;\r\n   background-color: #FFFFFF;\r\n   border-top: 2px solid #50c4bb;\r\n }\r\n .icon-text-wrapper{\r\n  margin-top: -36px;\r\n    text-align:center;\r\n    \r\n}\r\n.icon-image-wrapper{\r\n  margin-top: -3px;\r\n  width: 30%;\r\n  margin-left: 3px;\r\n\r\n}\r\n    \r\n    }\r\n@media only screen and (max-width :1600px) {\r\n    .card_wrapper {\r\n   height: 10rem;\r\n   background-color: #FFFFFF;\r\n   border-top: 2px solid #50c4bb;\r\n }\r\n .icon-text-wrapper{\r\n  margin-top: -36px;\r\n    text-align:center;\r\n    \r\n}\r\n.icon-image-wrapper{\r\n  margin-top: -11px;\r\n  width: 30%;\r\n  margin-left: 3px;\r\n\r\n}\r\n    \r\n    }\r\n@media only screen and (max-width :1440px) {\r\n      .card_wrapper {\r\n     height: 10rem;\r\n     background-color: #FFFFFF;\r\n     border-top: 2px solid #50c4bb;\r\n   }\r\n   .icon-text-wrapper{\r\n    margin-top: -36px;\r\n      text-align:center;\r\n      \r\n  }\r\n  .icon-image-wrapper{\r\n    margin-top: -5px;\r\n    width: 30%;\r\n    margin-left: 3px;\r\n  \r\n  }\r\n      \r\n      }\r\n@media only screen and (max-width :1366px) {\r\n          .card_wrapper {\r\n         height: 10rem;\r\n         background-color: #FFFFFF;\r\n         border-top: 2px solid #50c4bb;\r\n       }\r\n       .icon-text-wrapper{\r\n        margin-top: -36px;\r\n          text-align:center;\r\n          \r\n      }\r\n      .icon-image-wrapper{\r\n        margin-top: -5px;\r\n        width: 30%;\r\n        margin-left: 3px;\r\n      \r\n      }\r\n          \r\n          } \r\n"

/***/ }),

/***/ "./src/app/inventory-map/inventory-map.component.html":
/*!************************************************************!*\
  !*** ./src/app/inventory-map/inventory-map.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n      <div class=\"row\" style=\"padding-top: 3px;\">\r\n\r\n        <div class=\"col-md-2 padding-left-right\">\r\n          <div class=\"card card_wrapper\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title padding-top\">Category</h5>\r\n              \r\n                <div class=\"form-group\" style=\"margin-left: 20px;\">\r\n\r\n                    <select id=\"category\" name=\"category\" placeholder=\"Category\" [(ngModel)]=\"categorydefaultname\" class=\"form-control dropdown_wrapper\"\r\n                    (change)=\"changecategory($event)\">\r\n                \r\n                      <option *ngFor=\"let catg of categories\" [selected]=\"categorydefaultname == catg\">{{catg}}</option>\r\n                    </select>\r\n                  </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-2 padding-left-right\">\r\n          <div class=\"card card_wrapper\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title padding-top\">Vehicle</h5>\r\n                <div class=\"form-group\" style=\"margin-left: 20px;\">\r\n                    <select id=\"vehicle\" name=\"vehicle\" [(ngModel)]=\" stockItemdefaultname\" class=\"form-control dropdown_wrapper\"\r\n                    (change)=\"changeStock($event)\">\r\n                      <option>Select Vehicle</option>\r\n                      <option *ngFor=\"let stocktitem of stockitem\" [selected]=\"stockItemdefaultname == stocktitem\">{{stocktitem}}</option>\r\n                    </select>\r\n                  </div>\r\n\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 padding-left-right\">\r\n          <div class=\"card card_wrapper\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title padding-top\">Spare Part</h5>\r\n              <div class=\"form-group\" style=\"margin-left: 20px;\">\r\n                  <select id=\"sparename\" name=\"sparename\" [(ngModel)]=\"sparepartdefaultname\" class=\"form-control dropdown_wrapper\"\r\n                  (change)=\"changesparepart($event)\">\r\n                    <option>Select Spare</option>\r\n                    <option *ngFor=\"let part of sparepart\" [selected]=\"sparepartdefaultname == sparepart\">{{part}}</option>\r\n                  </select>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 padding-left-right\">\r\n          <div class=\"card card_wrapper\">\r\n            \r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title padding-top\">Availability</h5>\r\n              <img src =\"../../assets/iconss/availability.png\" class=\"icon-image-wrapper\">\r\n              <h4 class=\"icon-text-wrapper\">{{availability}}</h4>\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 padding-left-right\">\r\n          <div class=\"card card_wrapper\">\r\n             \r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title padding-top\">Cost per Unit</h5>\r\n                <img src =\"../../assets/iconss/costunit.png\" class=\"icon-image-wrapper\">\r\n                <h4 class=\"icon-text-wrapper\" style=\"margin-left: 26px;\">100 USD</h4>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 padding-left-right\">\r\n          <div class=\"card card_wrapper\">\r\n              \r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title padding-top\">ETA</h5>\r\n                <img src =\"../../assets/iconss/ETA.png\" class=\"icon-image-wrapper\">\r\n                <h4 class=\"icon-text-wrapper\" style=\"margin-left: 26px;\">{{esttime}}</h4>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-2 padding-left-right\" style=\"margin-top: 3px;\">\r\n      <div class=\"card card_wrapper\">\r\n        \r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title padding-top\">Store ID - 1</h5>\r\n            <h5 class=\"padding-top\">Manager Name - Franklin</h5>\r\n            <h5 class=\"padding-top\">Address - Texas</h5>\r\n              \r\n             </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-1 padding-left-right;\" style=\"text-align: center;\">\r\n      <p style=\"color: red\">Alerts</p>\r\n      <i class=\"fa alert-icon\">&#xf0f3;</i>\r\n  </div>\r\n  </div>\r\n\r\n  <!--map html-->\r\n  <div class=\"row\"> \r\n    <div class=\"col-md-12\">\r\n      <div class=\"card text-center\">\r\n          <div class=\"card-header\">\r\n              <ul class=\"nav nav-tabs card-header-tabs nav_border_bottom\">\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" style=\"color: #788786;\">Distributors Stock Availability</a>\r\n                </li>\r\n               \r\n              </ul>\r\n            </div>\r\n\r\n            <div class=\"card-body\">\r\n              <div id=\"map\"></div>\r\n              \r\n            </div>\r\n         </div>\r\n    </div>\r\n\r\n  \r\n  </div>\r\n  \r\n\r\n</div>\r\n\r\n<!--Modal-->\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Purchase Order</h4>\r\n      </div>\r\n      <div class=\"modal-body\" style=\"height:330px;\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div>\r\n            <span>To:</span><br>\r\n             <h3>{{warehousename}}</h3>\r\n             <h4>{{city}}</h4>\r\n             <h4>{{state}}</h4>\r\n             <h4>{{country}}</h4>\r\n              </div>\r\n             <hr>\r\n            \r\n             </div>\r\n\r\n            <div class=\"col-md-6\">\r\n              <div>\r\n             <span>From:</span><br>\r\n             <h3>Willow Avenue</h3>\r\n             <h4>Nashville</h4>\r\n             <h4>Texas</h4>\r\n             <h4>United States</h4>\r\n            </div>\r\n            <hr>\r\n              </div>\r\n             \r\n             \r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">\r\n              <label for=\"inputspare\">Spare Part Name</label>\r\n              <input class=\"form-control input-sm\" id=\"inputspare\" type=\"text\" [(ngModel)]=\" sparevalue\">\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n              <label for=\"inputqty\">Quantity</label>\r\n            <input class=\"form-control input-sm\" id=\"inputqty\" type=\"number\" min =\"0\" [(ngModel)]=\"qty\">\r\n    \r\n          </div>\r\n          <div class=\"col-md-3\">\r\n              <label for=\"inputrate\">Rate</label>\r\n            <input class=\"form-control input-sm\" id=\"inputrate\" type=\"number\" [ngModel]=\"rate\" [readonly]=\"true\">\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n              <label for=\"inputotal\">Total</label>\r\n              <input class=\"form-control input-sm\" id=\"inputotal\" type=\"number\"[ngModel]=\"qty*rate\" [readonly]=\"true\">\r\n              <button type=\"button\" class=\"btn btn-primary active\" style=\"margin-top: 20px; width: 50%; float: right\">Add</button>\r\n          </div>\r\n          \r\n           </div>\r\n      </div>\r\n\r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/inventory-map/inventory-map.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/inventory-map/inventory-map.component.ts ***!
  \**********************************************************/
/*! exports provided: InventoryMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryMapComponent", function() { return InventoryMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventoryMapComponent = /** @class */ (function () {
    function InventoryMapComponent(http) {
        this.http = http;
        this.dist = true;
        this.trackorder = false;
        this.rate = 100;
        /**Drop downs */
        this.categories = [];
        this.sparevalue = "Battery";
        this.categorydefaultname = "M Category";
        this.stockItemdefaultname = "M559";
        this.sparepartdefaultname = "Battery";
    }
    InventoryMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.categoryname = 'D Category';
        this.http.get('../../assets/data/stock.json').subscribe(function (data) {
            _this.jsondata = data;
            // this.distributors = data['LOCATIONS'];
            var index;
            for (index in _this.jsondata) {
                if (_this.categories.indexOf(_this.jsondata[index].Category) < 0) {
                    _this.categories.push(_this.jsondata[index].Category);
                }
                _this.loaddefaultcategory(_this.categories, _this.jsondata);
            }
        });
    };
    InventoryMapComponent.prototype.loaddefaultcategory = function (category, jsondata) {
        // this.getsparenames(categoryname)
        var index;
        this.stockitem = [];
        this.sparepart = [];
        for (index in this.jsondata) {
            if (jsondata[index].Category === this.categorydefaultname) {
                if (this.stockitem.indexOf(jsondata[index].Item) < 0) {
                    this.stockitem.push(jsondata[index].Item);
                }
            }
        }
        this.loaddefaulteStock(jsondata, this.categorydefaultname, this.stockItemdefaultname);
    };
    InventoryMapComponent.prototype.loaddefaulteStock = function (jsondata, categorydefaultname, stockItemdefaultname) {
        var index;
        // this.sparepart = [];
        for (index in jsondata) {
            if (jsondata[index].Item === stockItemdefaultname && jsondata[index].Category === categorydefaultname) {
                if (this.sparepart.indexOf(jsondata[index].Spare) < 0) {
                    this.sparepart.push(jsondata[index].Spare);
                    // console.log(this.jsondata[index].sparepart)
                }
            }
        }
        this.defaultSparePart(jsondata, categorydefaultname, stockItemdefaultname, this.sparepartdefaultname);
    };
    InventoryMapComponent.prototype.defaultSparePart = function (jsondata, categorydefaultname, stockItemdefaultname, sparepartdefaultname) {
        var index;
        //  this.sparepart = [];   
        for (index in jsondata) {
            if (jsondata[index].Item === stockItemdefaultname && jsondata[index].Category === categorydefaultname && jsondata[index].Spare === sparepartdefaultname) {
                this.availability = this.jsondata[index].Availabilty;
                this.distributors = this.jsondata[index].Locations;
                this.loadmap(this.distributors);
            }
        }
    };
    InventoryMapComponent.prototype.changecategory = function (category) {
        var categoryname = this.categorydefaultname = category.currentTarget.value;
        var index;
        this.stockitem = [];
        this.sparepart = [];
        for (index in this.jsondata) {
            if (this.jsondata[index].Category === categoryname) {
                if (this.stockitem.indexOf(this.jsondata[index].Item) < 0) {
                    this.stockitem.push(this.jsondata[index].Item);
                }
            }
        }
    };
    InventoryMapComponent.prototype.changeStock = function (item) {
        var stockitemname = this.selectedItem = item.currentTarget.value;
        var index;
        this.sparepart = [];
        for (index in this.jsondata) {
            if (this.jsondata[index].Item === stockitemname && this.jsondata[index].Category === this.categorydefaultname) {
                if (this.sparepart.indexOf(this.jsondata[index].Spare) < 0) {
                    this.sparepart.push(this.jsondata[index].Spare);
                    // console.log(this.sparepart)
                    // alert(this.sparepart)
                }
            }
        }
    };
    InventoryMapComponent.prototype.changesparepart = function (event) {
        var spare = this.sparevalue = event.currentTarget.value;
        var index;
        for (index in this.jsondata) {
            if (this.jsondata[index].Item === this.selectedItem && this.jsondata[index].Category === this.categorydefaultname && this.jsondata[index].Spare === spare) {
                this.availability = this.jsondata[index].Availabilty;
                this.distributors = this.jsondata[index].Locations;
                this.loadmap(this.distributors);
            }
        }
    };
    InventoryMapComponent.prototype.loadmap = function (distributors) {
        var $this = this;
        // alert("hii")
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 5,
            center: new google.maps.LatLng(31.129707, -99.357130),
            // center:myLatlng
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false
        });
        var infowindow = new google.maps.InfoWindow();
        var marker;
        var i;
        var image = {
            url: '../../assets/images/warehouse.png',
            // This marker is 50 pixels wide by 50 pixels high.
            scaledSize: new google.maps.Size(50, 50),
        };
        for (i = 0; i < distributors.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(distributors[i].latitude, distributors[i].longtitude),
                map: this.map,
                icon: image
                // title: this.fleetMap[i].latlong[0].unit_number
            });
            attachSecretMessage(marker, distributors[i].est, distributors[i].warehouse, distributors[i].latitude, distributors[i].longtitude, distributors[i].availibility);
        }
        function attachSecretMessage(marker, est, warehouse, lat, long, availability) {
            var geocoder = new google.maps.Geocoder();
            marker.addListener('click', function () {
                var latlong1 = new google.maps.LatLng(lat, long);
                geocoder.geocode({ 'location': latlong1 }, function (res, status) {
                    if (status == 'OK') {
                        var currentLocation = res[0].address_components[2].long_name;
                        $this.city = currentLocation;
                        $this.state = res[0].address_components[4].long_name;
                        $this.country = res[0].address_components[5].long_name;
                        $this.esttime = est;
                        infowindow = new google.maps.InfoWindow({
                            content: '<b><p style="color:blue;text-weight:bold">' + warehouse + '</p></b>' +
                                '<b><p style="color:blue;text-weight:bold">' + est + '</p></b>' +
                                '<b><p style="color:blue;text-weight:bold">' + $this.city + '</p></b>'
                        });
                        $this.warehousename = warehouse;
                        $this.availability = availability;
                        // alert(this.warehousename)
                        infowindow.open(this.map, marker);
                    }
                    else {
                        alert('Geocode was not successful for the following reason: ' + status);
                    }
                    marker.addListener('mouseout', function () {
                        infowindow.close(marker.get('map'), marker);
                    });
                });
            });
            marker.addListener('dblclick', function (mouseEvent) {
                // alert('Right click triggered');
                // this.map.setCenter(this.position);
                $(".modal-header .modal-title").text(this.title);
                //  $(".modal-body #modalLatLng").text(this.position);
                $('#myModal').modal('show');
            });
        }
    };
    InventoryMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory-map',
            template: __webpack_require__(/*! ./inventory-map.component.html */ "./src/app/inventory-map/inventory-map.component.html"),
            styles: [__webpack_require__(/*! ./inventory-map.component.css */ "./src/app/inventory-map/inventory-map.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InventoryMapComponent);
    return InventoryMapComponent;
}());



/***/ }),

/***/ "./src/app/inventory-report/inventory-report.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/inventory-report/inventory-report.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel_wrapper{\r\n  margin-top: 5px;\r\n  border: 0px;\r\n  margin-bottom: -8px;\r\n  /* background-color: #d4d4d4 */\r\n\r\n}\r\n.panel-body {\r\n  padding: 5px;\r\n}\r\n.panel-body .form-control {\r\npadding: 2px;\r\nborder-radius: 0px;\r\nbox-shadow:none\r\n}\r\n.panel {\r\n\r\nbackground:none\r\n\r\n\r\n}\r\n.stock_wrapper{\r\n  border-top: 2px solid #50c4bb;\r\n    background-color: lightgray;\r\n    padding: 20px;\r\n    background-color: white;\r\n    padding: 23px 0px 40px 0px;\r\n}\r\n.stock_wrapper_font_icon{\r\n\r\n  position: absolute;\r\n  margin-top: 6px;\r\n  color:red;\r\n  font-size:20px;\r\n}\r\n.stock_wrapper_font_icongreen{\r\n\r\n  position: absolute;\r\n  margin-top: 15px;\r\n  color:green;\r\n\r\n  font-size:20px;\r\n}\r\n.stock_wrapper_col_padding{\r\n    padding-left: 10px;\r\n    padding-right: 5px\r\n\r\n  }\r\n.paddinginventory{\r\n\r\n    padding-top: 0px;\r\n    padding-bottom: 12px;\r\n\r\n  }\r\n.margin_left_text{\r\n    margin-left: -34px;\r\n  }\r\n.menuHorizontal {\r\n  float: right;\r\n  color: #ccc;\r\n  margin-right: 8px;\r\n  font-size: 12px;\r\n}\r\n.inventory_cards_wrapper{\r\n  width: 100%;\r\n\r\n    padding: 9px;\r\n    background-color: white;\r\n\r\n}\r\n.newborder{\r\n  background:#fff;border-top: 2px solid #50c4bb;\r\n}\r\n.fs-30{\r\n  font-size:28px;\r\n}\r\n.fs-20{\r\n  font-size:20px;\r\n}\r\n.fs-25{\r\n  font-size:25px;\r\n}\r\n.dropdown_wrapper{\r\n  width: 80%;\r\nheight: 25px;\r\npadding: 0px 30px;\r\nborder: 0px;\r\nborder-bottom: 1px solid grey;\r\n}\r\n.btnpanel{\r\n  float: right;\r\n  background-color: #fe2626;\r\n  width: 40%;\r\n  border-radius: 7px;\r\n  margin-top: -1px;\r\n}\r\n.txtcolor{\r\ncolor: white\r\n\r\n}\r\n.inventorttextalign{\r\n  text-align: center;\r\n}\r\n.imgicon{\r\n  width: 17%;\r\n  margin-top: -11px;\r\n}\r\n.padding10{\r\n\r\n  padding-left: 10px;\r\n\r\n}\r\n.padding0{\r\n  padding: 0px;\r\n}\r\n.padding11{\r\n  padding-top: 11px;\r\n\r\n}\r\n.padding8{\r\n  padding-top: 8px;\r\n}\r\n.inventory_stock_wrapper{\r\n  text-align: center;\r\n}\r\n.inventoryiconwidth{\r\n  width: 50%;\r\n}\r\n.inventory_text_wrapper{\r\n  padding-left: 25px;\r\n      font-size: 24px;\r\n      /* margin-bottom: 28px; */\r\n      margin-top: -33px;\r\n      margin-top: 26px;\r\n      position: absolute;\r\n\r\n}\r\n.width_sell_inventory{\r\nwidth :29%\r\n}\r\n.cardactiveclass ,.historicactiveclass{\r\n  background-color: #f9f9f9!important;\r\n  border-bottom: 1px solid palevioletred;\r\n\r\n}\r\n/*Charts*/\r\n.live_charts_wrapper{\r\n  margin-top: 7px;\r\n  }\r\n.stock_charts_wrapper{\r\n    margin-top: 7px;\r\n    }\r\n.activeclass{\r\n    background-color: #f9f9f9!important;\r\n    border-bottom: 3px solid palevioletred;\r\n\r\n  }\r\n.backgroundcolor{\r\n      color: white\r\n  }\r\n.historical_chart_value{\r\n    background-color: #EAEAEA;\r\n    }\r\n.live_chart_border{\r\n    border-top: 2px solid palevioletred\r\n  }\r\n.stock_aging_chart_border{\r\nborder-top: 2px solid yellow\r\n}\r\n.chart_height{\r\n\r\nheight: 300px;\r\n}\r\n.chart_back_color{\r\n\r\nbackground-color: white\r\n}\r\n.stock_categories_chart_border{\r\nborder-top: 2px solid #50c4bb;\r\n\r\n}\r\n.padding_right5{\r\npadding-right: 5px;\r\n\r\n}\r\n.padding_left_right{\r\n padding-left: 5px;\r\n padding-right: 5px\r\n}\r\n.nav_border_bottom{\r\n\r\n  border-bottom: 0px solid #ddd;\r\n\r\n}\r\n.tab1_padding{\r\npadding: 0px;\r\npadding-left: 15px;\r\nborder-right: 1px solid #ccc;\r\n}\r\n.tab2_padding{\r\npadding: 0px;\r\nborder-right: 1px solid #ccc;\r\n}\r\n.tab3_padding{\r\npadding: 0px;\r\npadding-right: 14px;\r\n}\r\n.padding_bottom{\r\npadding-bottom: 15px\r\n}\r\n.txt_align_centre{\r\ntext-align: center\r\n}\r\n.padding_left{\r\npadding-left: 35px\r\n}\r\n/* .backdrop{ \r\n\r\n\r\n  background-color:rgba(0,0,0,0.6);\r\n  \r\n  \r\n  position:fixed;\r\n  \r\n  \r\n  top:0;\r\n  \r\n  \r\n  left:0;\r\n  \r\n  \r\n  width:100%;\r\n  \r\n  \r\n  height:100vh;\r\n  \r\n  \r\n  }\r\n  \r\n   */\r\n.modal-dialog {\r\n\r\n  width: 360px;\r\n\r\n}\r\n.modal-header {\r\n\r\nbackground-color:#FE2626;\r\n\r\npadding:16px 16px;\r\n\r\ncolor:#FFF;\r\n\r\nborder-bottom:2px dashed #FE2626;\r\n\r\n}\r\n.modal-dialog {\r\n\r\n  width: 400px;\r\n  /* padding-right:100px */\r\n  float: right;\r\n  margin-top: 60px;\r\n  /* overflow-x: initial !important */\r\n\r\n}\r\n.modal-header {\r\n\r\nbackground-color:#155F57;\r\n\r\npadding:2px 2px;\r\n\r\ncolor:#FFF;\r\n border-bottom:2px dashed #155F57;\r\n}\r\n.modal-body {\r\n  position: relative;\r\n  padding: 2px;\r\n  /* overflow-y: auto; */\r\n}\r\n.alert_button{\r\n color: #fff;\r\nbackground:none;\r\nbackground-color:red\r\n\r\n}\r\n/*Media Query*/\r\n@media only screen and (max-width :1920px) {\r\n.width_sell_inventory{\r\n  width :23%\r\n}\r\n\r\n}\r\n@media only screen and (max-width :1680px) {\r\n.width_sell_inventory{\r\n  width :27%\r\n}\r\n}\r\n@media only screen and (max-width :1600px) {\r\n  .width_sell_inventory{\r\n    width :18%\r\n  }\r\n  .paddinginventory {\r\n    padding-top: 0px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n}\r\n@media only screen and (max-width :1440px) {\r\n  .paddinginventory {\r\n    padding-top: 0px;\r\n    padding-bottom: 14px;\r\n}\r\n.fs-30 {\r\n  font-size: 27px;\r\n}\r\n\r\n  }\r\n@media only screen and (max-width :1366px) {\r\n    .fs-30 {\r\n      font-size: 22px;\r\n  }\r\n  .paddinginventory{\r\n    padding-top: 0px;\r\n    padding-bottom: 23px;\r\n}\r\n.stock_wrapper {\r\n  border-top: 2px solid #50c4bb;\r\n  background-color: lightgray;\r\n  padding: 20px;\r\n  background-color: white;\r\n  padding: 32px 0px 40px 0px;\r\n}\r\n\r\n    }\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/inventory-report/inventory-report.component.html":
/*!******************************************************************!*\
  !*** ./src/app/inventory-report/inventory-report.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"container-fluid container_wrapper\">\r\n\r\n  <!--Drop downs-->\r\n\r\n  <div class=\"panel panel-default panel_wrapper\">\r\n    <div class=\"panel-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n\r\n            <select id=\"category\" name=\"category\" placeholder=\"Category\" [(ngModel)]=\"categoryname\" class=\"form-control dropdown_wrapper\"\r\n              (change)=\"changeValue($event)\">\r\n              <option *ngFor=\"let catg of categories\">{{catg?.Category_name}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <select id=\"vehicle\" name=\"vehicle\" [(ngModel)]=\"vehiclename\" class=\"form-control dropdown_wrapper\"\r\n              (change)=\"changeValue($event)\">\r\n              <option>Select Vehicle</option>\r\n              <option *ngFor=\"let veh of vehicle\">{{veh?.vehicle_name}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <select id=\"sparename\" name=\"sparename\" [(ngModel)]=\"sparename\" class=\"form-control dropdown_wrapper\"\r\n              (change)=\"changeValue($event)\">\r\n              <option>Select Spare</option>\r\n              <option *ngFor=\"let part of spare\">{{part?.spare_name}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button class=\"btn btnpanel\" (click)=\"openModal()\" data-toggle=\"modal\" data-target=\"#bootstrapModel\"><span class=\"txtcolor\">Alert</span> &nbsp;<i class=\"fa fa-exclamation-triangle txtcolor\">\r\n       </i></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!--Cards-->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 padding_right5\">\r\n      <div class=\"card col-md-12 stock_wrapper\">\r\n        <!-- <span> <i class=\"fa fa-ellipsis-h menuHorizontal\"></i></span> -->\r\n        <div class=\"clearfix\" style=\"margin-bottom:7px;\"></div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card-body inventory_stock_wrapper\">\r\n            <i><img class=\"imgicon\" src=\"../../assets/iconss/1.png\"></i>&nbsp;<span class=\"fs-30\"><strong>{{inventoryDatafromJson?.stock_value}}</strong></span>&nbsp;<i\r\n              class=\"fa fa-sort-up stock_wrapper_font_icongreen\"></i>\r\n            <p class=\"inventorttextalign\">Stock value</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card-body inventory_stock_wrapper\">\r\n            <i><img class=\"imgicon\" src=\"../../assets/iconss/2.png\"></i>&nbsp;<span class=\"fs-30\"><strong>{{inventoryDatafromJson?.transit_value}}</strong></span>&nbsp;<i\r\n              class=\"fa fa-sort-down stock_wrapper_font_icon\"></i>\r\n            <p class=\"inventorttextalign\">Transit value</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card-body inventory_stock_wrapper\">\r\n\r\n            <i><img class=\"imgicon\" src=\"../../assets/iconss/3.png\"></i>&nbsp;<span class=\"fs-30\"><strong>{{inventoryDatafromJson?.delivered_value}}</strong></span>&nbsp;<i\r\n              class=\"fa fa-sort-down stock_wrapper_font_icon\"></i>\r\n            <p class=\"inventorttextalign\">Delivered value</p>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-2 padding_left_right\">\r\n      <div class=\"card newborder  inventory_cards_wrapper \">\r\n        <!-- <span> <i class=\"fa fa-ellipsis-h menuHorizontal\"></i></span> -->\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Days to Sell Inventory</h5>\r\n          <div class=\"col-md-12 paddinginventory\">\r\n            <div class=\"col-md-6\">\r\n              <img src=\"../../assets/iconss/4.png\" class=\"img-responsive\">\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <h3>{{inventoryDatafromJson?.daystosell}}</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <!-- <h6 class=\"card-text txt_align_centre\" style=\"margin-top: 25px;\">\r\n                    <img class=\"width_sell_inventory\" src=\"../../assets/iconss/4.png\">\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;<span class=\"fs-25 padding11\">2368</span></h6> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-2 padding_left_right\">\r\n      <div class=\"card newborder  inventory_cards_wrapper\">\r\n        <!-- <span> <i class=\"fa fa-ellipsis-h menuHorizontal\"></i></span> -->\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Inventory Accuracy</h5>\r\n          <div class=\"col-md-12\" style=\"padding:0px !important;\">\r\n            <div class=\"col-md-7\">\r\n              <circle-progress [percent]=\"inventoryDatafromJson?.inventory_accuracy\" [radius]=\"31\" [outerStrokeWidth]=\"5\"\r\n                [showInnerStroke]=\"false\" [outerStrokeColor]=\"'#FA940B'\" [animation]=\"true\" [animationDuration]=\"300\"\r\n                [showTitle]=\"false\" [subtitle]=\"\" [imageSrc]=\"'../../assets/iconss/5.png'\" [showImage]=\"true\"\r\n                [imageHeight]=\"30\" [imageWidth]=\"30\"></circle-progress>\r\n            </div>\r\n            <div class=\"col-md-5 margin_left_text\">\r\n              <h3>{{inventoryDatafromJson?.inventory_accuracy}}%</h3>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-2 inventory_col_2 padding_left_right\">\r\n      <div class=\"card newborder  inventory_cards_wrapper\">\r\n        <!-- <span> <i class=\"fa fa-ellipsis-h menuHorizontal\"></i></span> -->\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Perfect Order Rate</h5>\r\n          <div class=\"col-md-12\" style=\"padding:0px !important;\">\r\n            <div class=\"col-md-7\">\r\n              <circle-progress [percent]=\"inventoryDatafromJson?.perfect_order_rate\" [radius]=\"31\" [outerStrokeWidth]=\"5\"\r\n                [showInnerStroke]=\"false\" [outerStrokeColor]=\"'#32BECE'\" [animation]=\"true\" [animationDuration]=\"300\"\r\n                [showTitle]=\"false\" [subtitle]=\"\" [imageSrc]=\"'../../assets/iconss/6.png'\" [showImage]=\"true\"\r\n                [imageHeight]=\"30\" [imageWidth]=\"30\"></circle-progress>\r\n            </div>\r\n            <div class=\"col-md-5 margin_left_text\">\r\n              <h3>{{inventoryDatafromJson?.perfect_order_rate}}%</h3>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-2 inventory_col_2 padding_left_right\">\r\n      <div class=\"card  newborder inventory_cards_wrapper\">\r\n        <!-- <span> <i class=\"fa fa-ellipsis-h menuHorizontal\"></i></span> -->\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Warehouse Occupancy</h5>\r\n          <div class=\"col-md-12\" style=\"padding:0px !important;\">\r\n            <div class=\"col-md-7\">\r\n              <circle-progress [percent]=\"inventoryDatafromJson?.Warehouse_occupancy\" [radius]=\"31\" [outerStrokeWidth]=\"5\"\r\n                [showInnerStroke]=\"false\" [outerStrokeColor]=\"'#FB6C92'\" [animation]=\"true\" [animationDuration]=\"300\"\r\n                [showTitle]=\"false\" [subtitle]=\"\" [imageSrc]=\"'../../assets/iconss/7.png'\" [showImage]=\"true\"\r\n                [imageHeight]=\"30\" [imageWidth]=\"30\"></circle-progress>\r\n            </div>\r\n            <div class=\"col-md-5 margin_left_text\">\r\n              <h3>{{inventoryDatafromJson?.Warehouse_occupancy}}%</h3>\r\n\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n\r\n  <!--Charts live historical and donut chart-->\r\n  <div class=\"row live_charts_wrapper\">\r\n    <div class=\"col-md-8 padding_right5\">\r\n      <div class=\"card text-center live_chart_border chart_back_color padding_bottom\">\r\n        <div class=\"card-header\">\r\n          <ul class=\"nav nav-tabs card-header-tabs nav_border_bottom\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [ngClass]=\"{activeclass: isActive(1)}\" (click)=\"setActiveLive(1);\" style=\"color: #788786;\">Live</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [ngClass]=\"{activeclass: isActive(2)}\" (click)=\"setActive(2);\" style=\"color: #788786\">Historical</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"card-body\" *ngIf=\"livechart\">\r\n          <div class=\"chart_border\">\r\n            <div [chart]=\"livechartdata\" style=\"height:247px\">\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 tab1_padding \">\r\n                <div class=\"card historical_chart_value\" [ngClass]=\"{cardactiveclass: isCardActive(1)}\" (click)=\"setStockActive(1)\">\r\n                  <div class=\"card-body\">\r\n                    <p>Stock value</p>\r\n                    <span class=\"fs-20\"><strong>2.84</strong></span>&nbsp;&nbsp;<i style=\"color:red; font-size: 20px;\"\r\n                      class=\"fa fa-arrow-circle-down\">&nbsp;&nbsp;9%</i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"col-md-4 tab2_padding\">\r\n                <div class=\"card historical_chart_value\" [ngClass]=\"{cardactiveclass: isCardActive(2)}\" (click)=\"setVolumeActive(2)\">\r\n                  <div class=\"card-body\">\r\n                    <p>Stock Volume</p>\r\n                    <span class=\"fs-20\"><strong>1,464</strong></span>&nbsp;&nbsp;<i style=\"color:red; font-size: 20px;\"\r\n                      class=\"fa fa-arrow-circle-down\">&nbsp;&nbsp;5%</i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 tab3_padding\">\r\n                <div class=\"card historical_chart_value\" [ngClass]=\"{cardactiveclass: isCardActive(3)}\" (click)=\"setDeliveryActive(3)\">\r\n                  <div class=\"card-body\">\r\n                    <p>Total Delivery value</p>\r\n                    <span class=\"fs-20\"><strong>2.84</strong>&nbsp;&nbsp;</span><i style=\"color:green; font-size: 20px;\"\r\n                      class=\"fa fa-arrow-circle-up\">&nbsp;&nbsp;5%</i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n </div>\r\n\r\n\r\n \r\n        <div class=\"card-body\" *ngIf=\"historicalchart\">\r\n          <div class=\"chart_border\">\r\n            <div [chart]=\"historicalchartdata\" style=\"height:247px\">\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 tab1_padding \">\r\n                <div class=\"card historical_chart_value\" [ngClass]=\"{historicactiveclass: isHistoricActive(1)}\" (click)=\"setHistoricStockActive(1)\">\r\n                  <div class=\"card-body\">\r\n                    <p>Stock value</p>\r\n                    <span class=\"fs-20\"><strong>2.84</strong></span>&nbsp;&nbsp;<i style=\"color:red; font-size: 20px;\"\r\n                      class=\"fa fa-arrow-circle-down\">&nbsp;&nbsp;9%</i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 tab2_padding\">\r\n                <div class=\"card historical_chart_value\" [ngClass]=\"{historicactiveclass: isHistoricActive(2)}\" (click)=\"setHistoricVolumeActive(2)\">\r\n                  <div class=\"card-body\">\r\n                    <p>Stock Volume</p>\r\n                    <span class=\"fs-20\"><strong>1,464</strong></span>&nbsp;&nbsp;<i style=\"color:red; font-size: 20px;\"\r\n                      class=\"fa fa-arrow-circle-down\">&nbsp;&nbsp;5%</i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 tab3_padding\">\r\n                <div class=\"card historical_chart_value\" [ngClass]=\"{historicactiveclass: isHistoricActive(3)}\" (click)=\"setHistoricDeliveryActive(3)\">\r\n                  <div class=\"card-body\">\r\n                    <p>Total Delivery value</p>\r\n                    <span class=\"fs-20\"><strong>2.84</strong>&nbsp;&nbsp;</span><i style=\"color:green; font-size: 20px;\"\r\n                      class=\"fa fa-arrow-circle-up\">&nbsp;&nbsp;5%</i>\r\n                  </div>\r\n                </div>\r\n              </div> \r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-4 padding_left_right\">\r\n      <div class=\"card stock_aging_chart_border chart_back_color\">\r\n        <div class=\"card-body\">\r\n          <div class=\"card-text\">\r\n            <div [chart]=\"stockagingchart\" style=\"height: 367px\">\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!--Bar charts and heat chart-->\r\n  <div class=\"row stock_charts_wrapper\">\r\n    <div class=\"col-md-7 padding_right5\">\r\n      <div class=\"card chart_back_color stock_categories_chart_border\">\r\n        <div class=\"card-body\">\r\n          <div class=\"card-text\">\r\n            <div [chart]=\"stockchartcategories\" class=\"chart_height\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-5 padding_left_right\">\r\n      <div class=\"card chart_back_color stock_categories_chart_border\">\r\n        <div class=\"card-body \">\r\n          <div class=\"card-text\">\r\n\r\n\r\n            <div [chart]=\"returnchart\" class=\"chart_height\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- open a modal window by clicking button-->\r\n\r\n\r\n<!-- <button type=\"button\" class=\"btn btn-info btn-lg\" (click)=\"openModal()\">click to open</button> -->\r\n\r\n\r\n<!-- Modal section -->\r\n<!-- <div class=\"backdrop\" [ngStyle]=\"{'display':display}\"></div> -->\r\n\r\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':display}\" *ngIf=\"showalertmodel\">\r\n\r\n\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n\r\n\r\n    <div class=\"modal-content\">\r\n\r\n\r\n      <div class=\"modal-header\">\r\n\r\n\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCloseHandled()\"><span aria-hidden=\"true\">&times;</span></button>\r\n\r\n\r\n        <h4 class=\"modal-title\">Alerts</h4>\r\n\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"modal-body\">\r\n        <div class=\"card\" style=\"width: 50rem;\">\r\n          <ul class=\"list-group list-group-flush\">\r\n            <li class=\"list-group-item\" *ngFor=\"let alert of alerts\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-2\">\r\n                  <span style=\"color:red;\"><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                \r\n                   <span style=\"color: black;\">\r\n                   {{alert.name}}</span>&nbsp;&nbsp;\r\n                  <span style=\"color: black;\">\r\n                      {{alert.Date}}</span><br>\r\n                  <span style=\"color: black;\"> {{alert.Type}}</span>\r\n\r\n                </div>\r\n                <div class=\"col-md-4\" style=\"padding:0px;\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-xs alert_button\"(click)=\"openModalAdd(alert)\"> {{alert.Button_text}}</button>\r\n                </div>\r\n              </div>\r\n            </li>\r\n        \r\n          </ul>\r\n          \r\n\r\n        </div>\r\n\r\n      \r\n      </div>\r\n </div><!-- /.modal-content -->\r\n\r\n\r\n  </div><!-- /.modal-dialog -->\r\n\r\n\r\n</div><!-- /.modal !-->\r\n\r\n\r\n<!--Alert Model-->\r\n\r\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':display1}\" *ngIf=\"showactionmodel\">\r\n\r\n\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n\r\n\r\n    <div class=\"modal-content\">\r\n\r\n\r\n      <div class=\"modal-header\">\r\n\r\n\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\"data-dismiss=\"modal\" (click)=\"onalertCloseHandled()\"><span aria-hidden=\"true\">&times;</span></button>\r\n\r\n\r\n        <h4 class=\"modal-title\">{{actionalerttext}}</h4>\r\n\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"modal-body\" style=\"height:250px;overflow: overlay;\">\r\n        \r\n          <textarea rows=\"4\" cols=\"50\" [(ngModel)]=\"alertmsg\">\r\n          \r\n          </textarea>\r\n        \r\n        \r\n          <button type=\"button\" class=\"btn btn-success\" style=\"float: right;margin-right: 20px;\"(click)=\"actionalert()\">Save</button>\r\n        <p *ngFor = \"let aletrmodel of alertarray\">{{aletrmodel}}</p>\r\n       </div>\r\n      \r\n\r\n </div><!-- /.modal-content -->\r\n   \r\n\r\n  </div><!-- /.modal-dialog -->\r\n\r\n\r\n</div><!-- /.modal !-->\r\n\r\n<!--Alert Box-->\r\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displaypopup}\">\r\n\r\n\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n\r\n\r\n    <div class=\"modal-content\">\r\n\r\n\r\n      <!-- <div class=\"modal-header\">\r\n\r\n\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onpopmodelclose()\"><span aria-hidden=\"true\">&times;</span></button>\r\n\r\n\r\n        <h4 class=\"modal-title\">Alerts</h4>\r\n\r\n\r\n      </div> -->\r\n\r\n\r\n      <div class=\"modal-body\">\r\n        <div class=\"card\" style=\"width: 50rem;\">\r\n          <ul class=\"list-group list-group-flush\">\r\n            <li class=\"list-group-item\" *ngFor=\"let modelar of modelarr\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-2\">\r\n                  <span style=\"color:red;\"><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                \r\n                   <span style=\"color: black;\">\r\n                   {{modelar.name}}</span>&nbsp;&nbsp;\r\n                  <span style=\"color: black;\">\r\n                      {{modelar.Date}}</span><br>\r\n                  <span style=\"color: black;\"> {{modelar.Type}}</span>\r\n\r\n                </div>\r\n                <!-- <div class=\"col-md-4\" style=\"padding:0px;\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-xs alert_button\"(click)=\"openModalAdd(alert)\"> {{modelar.Button_text}}</button>\r\n                </div> -->\r\n              </div>\r\n            </li>\r\n        \r\n          </ul>\r\n          \r\n\r\n        </div>\r\n\r\n      \r\n      </div>\r\n </div><!-- /.modal-content -->\r\n\r\n\r\n  </div><!-- /.modal-dialog -->\r\n\r\n\r\n</div><!-- /.modal !-->"

/***/ }),

/***/ "./src/app/inventory-report/inventory-report.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/inventory-report/inventory-report.component.ts ***!
  \****************************************************************/
/*! exports provided: InventoryReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryReportComponent", function() { return InventoryReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InventoryReportComponent = /** @class */ (function () {
    function InventoryReportComponent(http, ngZone) {
        this.http = http;
        this.ngZone = ngZone;
        this.livechart = true;
        this.historicalchart = false;
        /**Model Display*/
        this.display = 'none';
        this.display1 = 'none';
        this.displaypopup = 'none';
        this.alertarray = [];
        this.showalertmodel = false;
        this.showactionmodel = false;
        this.showpopmodel = false;
        /** Column chart categories */
        this.stockchartcategories = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'column',
                style: {
                    fontFamily: 'Ubuntu,sans-serif'
                }
            },
            title: {
                text: 'Stock Categories'
            },
            xAxis: {
                type: 'category',
                labels: {
                    enabled: true
                }
            },
            yAxis: {
                title: { text: 'Total percent market share' },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'red'
                    }
                },
                gridLineColor: 'transparent',
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false,
                        format: '{point.y:.1f}%'
                    }
                }
            },
            series: [
                {
                    name: 'Categories',
                    data: [
                        {
                            name: 'D Category',
                            y: 222624,
                            drilldown: 'D Category'
                        },
                        {
                            name: 'C Category',
                            y: 824520,
                            drilldown: 'C Category',
                            color: '#F64947'
                        },
                        {
                            name: 'M Category',
                            y: 347710,
                            drilldown: 'M Category',
                            color: 'orange'
                        },
                        {
                            name: '0-9 Category',
                            y: 458649,
                            drilldown: '0-9 Category',
                            color: 'green'
                        }
                    ]
                }
            ],
            credits: {
                enabled: null
            },
            drilldown: {
                series: [
                    {
                        name: 'D Category',
                        id: 'D Category',
                        data: [
                            { name: 'Caterpillar D4', y: 67713, drilldown: 'Caterpillar D4' },
                            { name: 'Caterpillar D5', y: 44335, drilldown: 'Caterpillar D5' },
                            { name: 'Caterpillar D6', y: 60644, drilldown: 'Caterpillar D6' },
                            { name: 'Caterpillar D7', y: 49912, drilldown: 'Caterpillar D7' }
                        ]
                    }, {
                        name: 'Caterpillar D4', id: 'Caterpillar D4', data: [
                            ['Battery', 29071],
                            ['Fan Belt', 14990],
                            ['Camshaft', 23652]
                        ]
                    },
                    {
                        name: 'Caterpillar D5', id: 'Caterpillar D5', data: [
                            ['Fan Belt', 9472],
                            ['Camshaft', 19036],
                            ['Battery', 15827]
                        ]
                    },
                    {
                        name: 'Caterpillar D6', id: 'Caterpillar D6', data: [
                            ['Camshaft', 23174],
                            ['Battery', 21755],
                            ['Fan Belt', 15735]
                        ]
                    },
                    {
                        name: 'Caterpillar D7', id: 'Caterpillar D7', data: [
                            ['Battery', 14794],
                            ['Fan Belt', 29543],
                            ['Camshaft', 5575]
                        ]
                    },
                    {
                        name: 'C Category',
                        id: 'C Category',
                        data: [
                            { name: 'Caterpillar CS-533E', y: 212040, drilldown: 'Caterpillar CS-533E' },
                            { name: 'Caterpillar 797', y: 251450, drilldown: 'Caterpillar 797' },
                            { name: 'Caterpillar 797F', y: 168895, drilldown: 'Caterpillar 797F' },
                            { name: 'Caterpillar Twenty-Two', y: 170825, drilldown: 'Caterpillar Twenty-Two' }
                        ]
                    }, {
                        name: 'Caterpillar CS-533E', id: 'Caterpillar CS-533E', data: [
                            ['Fan Belt', 37773],
                            ['Camshaft', 84969],
                            ['Battery', 89298]
                        ]
                    },
                    {
                        name: 'Caterpillar 797', id: 'Caterpillar 797', data: [
                            ['Camshaft', 95889],
                            ['Battery', 60566],
                            ['Fan Belt', 94995]
                        ]
                    },
                    {
                        name: 'Caterpillar 797F', id: 'Caterpillar 797F', data: [
                            ['Battery', 53087],
                            ['Fan Belt', 47033],
                            ['Camshaft', 68775]
                        ]
                    },
                    {
                        name: 'Caterpillar Twenty-Two', id: 'Caterpillar Twenty-Two', data: [
                            ['Battery', 40182],
                            ['Fan Belt', 99326],
                            ['Camshaft', 31317]
                        ]
                    },
                    {
                        name: 'M Category',
                        id: 'M Category',
                        data: [
                            { name: 'M520 Goer', y: 109612, drilldown: 'M520 Goer' },
                            { name: 'M559', y: 107832, drilldown: 'M559' },
                            { name: 'M877', y: 130266, drilldown: 'M877' }
                        ]
                    }, {
                        name: 'M520 Goer', id: 'M520 Goer', data: [
                            ['Fan Belt', 14319],
                            ['Camshaft', 41389],
                            ['Battery', 53904]
                        ]
                    },
                    {
                        name: 'M559', id: 'M559', data: [
                            ['Camshaft', 38575],
                            ['Battery', 63961],
                            ['Fan Belt', 5296]
                        ]
                    },
                    {
                        name: 'M877', id: 'M877', data: [
                            ['Battery', 88218],
                            ['Fan Belt', 36640],
                            ['Camshaft', 5408]
                        ]
                    },
                    {
                        name: '0-9 Category',
                        id: '0-9 Category',
                        data: [
                            { name: 'Caterpillar 345C L', y: 147560, drilldown: 'Caterpillar 345C L' },
                            { name: 'Caterpillar 924G', y: 192202, drilldown: 'Caterpillar 924G' },
                            { name: 'Caterpillar 930G', y: 118887, drilldown: 'Caterpillar 930G' }
                        ]
                    }, {
                        name: 'Caterpillar 345C L', id: 'Caterpillar 345C L', data: [
                            ['Fan Belt', 33618],
                            ['Camshaft', 78582],
                            ['Battery', 35360]
                        ]
                    },
                    {
                        name: 'Caterpillar 924G', id: 'Caterpillar 924G', data: [
                            ['Camshaft', 91195],
                            ['Battery', 44681],
                            ['Fan Belt', 56326]
                        ]
                    },
                    {
                        name: 'Caterpillar 930G', id: 'Caterpillar 930G', data: [
                            ['Battery', 38977],
                            ['Fan Belt', 43270],
                            ['Camshaft', 36640]
                        ]
                    }
                ]
            }
        });
        /**Treemap chart for return goods */
        this.returnchart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            series: [{
                    type: 'treemap',
                    // layoutAlgorithm: 'squarified',
                    data: [{
                            name: 'D Category',
                            value: 6,
                            colorValue: 1
                        }, {
                            name: 'C Category',
                            value: 4,
                            color: '#FF6260'
                        }, {
                            name: 'M Category',
                            value: 3,
                            color: '#FFA500'
                        }, {
                            name: '0-9 Category',
                            value: 2,
                            color: '#008000'
                        },
                    ],
                }],
            title: {
                text: 'Defective/Return Goods'
            },
        });
    }
    InventoryReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.alerttxt=""
        this.modelarr = [{ "name": "Alert1", "Date": "18-08-2018", "Type": "DSIReaching Threshold", "Button_text": "Action1" }];
        this.selected = 1;
        this.cardSelected = 1;
        this.historiccardSelected = 1;
        this.categoryname = 'D Category';
        /**Getting data from local json file */
        this.http.get('../../assets/data/data.json').subscribe(function (data) {
            _this.categories = data['CATEGORIES'];
            _this.vehicle = data['VEHICLE'];
            _this.spare = data['SPARENAME'];
            _this.inventorydata = data['INVENTORY_DATA'];
            _this.alerts = data['ALERTS'];
            _this.loadDefaultData(_this.inventorydata);
        });
        this.settimeinterval();
        this.onpopmodelclose();
        //this.stopinterval()
        // this.openModal()
        // this.ngZone.run(() => {
        //   this.settimeinterval()
        // });
    };
    InventoryReportComponent.prototype.loadDefaultData = function (inventorydefault) {
        for (var i = 0; i < inventorydefault.length; i++) {
            if (inventorydefault[i].main_value === this.categoryname) {
                this.inventoryDatafromJson = inventorydefault[i];
                this.stockvalueChartData = inventorydefault[i].stock_value_chart;
                this.stockvolumeChartData = inventorydefault[i].stock_volume_chart;
                this.deliveryValueChartdata = inventorydefault[i].total_delevery_chart;
                if (this.cardSelected === 1) {
                    this.getLiveChart(this.stockvalueChartData);
                }
                else if (this.cardSelected === 2) {
                    this.getLiveChart(this.stockvolumeChartData);
                }
                else if (this.cardSelected === 3) {
                    this.getLiveChart(this.deliveryValueChartdata);
                }
                this.stockAgingChartData = this.inventorydata[i].stockaging;
                this.sampleHistoricChartData = [1234, 5684, 6645, 3455, 2334, 2311, 7000, 5545, 2344, 3534, 3423, 6345];
                this.getHistoricalChart(this.sampleHistoricChartData);
                this.getStockaging(this.categoryname, this.stockAgingChartData);
                this.settimeinterval();
            }
        }
    };
    InventoryReportComponent.prototype.changeValue = function (selection) {
        var selectedValue = selection.currentTarget.value;
        console.log(selectedValue);
        for (var i = 0; i < this.inventorydata.length; i++) {
            if (this.inventorydata[i].main_value === selectedValue) {
                this.inventoryDatafromJson = this.inventorydata[i];
                this.stockvalueChartData = this.inventorydata[i].stock_value_chart;
                this.stockvolumeChartData = this.inventorydata[i].stock_volume_chart;
                this.deliveryValueChartdata = this.inventorydata[i].total_delevery_chart;
                if (this.cardSelected === 1) {
                    this.getLiveChart(this.stockvalueChartData);
                }
                else if (this.cardSelected === 2) {
                    this.getLiveChart(this.stockvolumeChartData);
                }
                else if (this.cardSelected === 3) {
                    this.getLiveChart(this.deliveryValueChartdata);
                }
                this.stockAgingChartData = this.inventorydata[i].stockaging;
                this.sampleHistoricChartData = [1234, 5684, 6645, 3455, 2334, 2311, 7000, 5545, 2344, 3534, 3423, 6345];
                this.getHistoricalChart(this.sampleHistoricChartData);
                this.getStockaging(selectedValue, this.stockAgingChartData);
            }
        }
    };
    InventoryReportComponent.prototype.setActive = function (item) {
        this.livechart = false;
        this.historicalchart = true;
        this.selected = item;
    };
    InventoryReportComponent.prototype.setActiveLive = function (item) {
        this.livechart = true;
        this.historicalchart = false;
        this.selected = item;
    };
    InventoryReportComponent.prototype.isActive = function (item) {
        return this.selected === item;
    };
    /**for historical buttons */
    InventoryReportComponent.prototype.isCardActive = function (item) {
        return this.cardSelected === item;
    };
    InventoryReportComponent.prototype.isHistoricActive = function (item) {
        return this.historiccardSelected === item;
    };
    InventoryReportComponent.prototype.setStockActive = function (item) {
        this.cardSelected = item;
        this.getLiveChart(this.stockvalueChartData);
    };
    InventoryReportComponent.prototype.setVolumeActive = function (item) {
        this.cardSelected = item;
        this.getLiveChart(this.stockvolumeChartData);
    };
    InventoryReportComponent.prototype.setDeliveryActive = function (item) {
        this.cardSelected = item;
        this.getLiveChart(this.deliveryValueChartdata);
    };
    InventoryReportComponent.prototype.setHistoricStockActive = function (item) {
        this.historiccardSelected = item;
        this.sampleHistoricChartData = [1234, 5684, 6645, 3455, 2334, 2311, 7000, 5545, 2344, 3534, 3423, 6345];
        this.getHistoricalChart(this.sampleHistoricChartData);
    };
    InventoryReportComponent.prototype.setHistoricVolumeActive = function (item) {
        this.historiccardSelected = item;
        this.sampleHistoricChartData = [1000, 3000, 4000, 4540, 1230, 3450, 8000, 5000, 11000, 800, 1500, 2500];
        this.getHistoricalChart(this.sampleHistoricChartData);
    };
    InventoryReportComponent.prototype.setHistoricDeliveryActive = function (item) {
        this.historiccardSelected = item;
        this.sampleHistoricChartData = [2000, 10000, 6000, 4455, 5420, 4678, 8354, 1234, 5432, 6754, 9238, 8734];
        this.getHistoricalChart(this.sampleHistoricChartData);
    };
    InventoryReportComponent.prototype.getLiveChart = function (value) {
        var $this = this;
        this.livechartdata = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'spline',
                events: {
                    load: function () {
                        // set up the updating of the chart each second
                        var dataIndex = 0;
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                            y = (+value[dataIndex]);
                            series.addPoint([x, y], true, true);
                        }, 1000);
                        setInterval(function () {
                            dataIndex = dataIndex + 1;
                            if (dataIndex === value.length) {
                                dataIndex = 0;
                            }
                        }, 1000);
                    }
                }
            },
            time: {
                useUTC: false
            },
            credits: {
                enabled: null
            },
            title: {
                text: ''
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: ''
                },
                plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
            },
            tooltip: {
                pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                    name: '',
                    data: (function () {
                        // generate an array of random data
                        var data = [], time = (new Date()).getTime();
                        for (var i = -10; i <= 0; i += 1) {
                            data.push({
                                x: time + i * 1000,
                                y: value[i]
                            });
                        }
                        return data;
                    }())
                }]
        });
    };
    InventoryReportComponent.prototype.getHistoricalChart = function (datahistory) {
        /** Historical Chart data */
        this.historicalchartdata = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'line',
                style: {
                    fontFamily: 'Ubuntu,sans-serif'
                }
            },
            title: {
                text: null
            },
            credits: {
                enabled: null,
            },
            yAxis: {
                gridLineColor: 'transparent',
                title: null,
                labels: {
                    enabled: true
                },
                plotLines: [{
                        color: '#20283D',
                        width: 1,
                        value: 6000,
                        label: {
                            text: 'Market Average',
                            align: 'left'
                        }
                    }]
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                title: {
                    text: null
                },
            },
            series: [{
                    data: datahistory,
                }],
            legend: {
                enabled: false
            },
        });
    };
    InventoryReportComponent.prototype.getStockaging = function (value, chartsdata) {
        this.stockagingchart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45,
                },
                style: {
                    fontFamily: 'Ubuntu,sans-serif'
                }
            },
            title: {
                text: 'Stock Aging'
            },
            credits: {
                enabled: null
            },
            plotOptions: {
                pie: {
                    innerSize: 100,
                    depth: 45
                }
            },
            series: [{
                    name: value,
                    data: [
                        { name: '< 1month', y: chartsdata[0], color: 'green' },
                        { name: '1-6 month', y: chartsdata[1], color: 'yellow' },
                        { name: '6 month - 1 year', y: chartsdata[2], color: 'red' },
                        { name: '> 1 year', y: chartsdata[3], color: 'purple' },
                    ]
                }]
        });
    };
    //** Open Model**/
    InventoryReportComponent.prototype.openModal = function () {
        this.display = 'block';
        localStorage.setItem('ModelOpen', 'true');
        this.showalertmodel = true;
    };
    InventoryReportComponent.prototype.openModalAdd = function (value) {
        // alert("Hi")
        this.display1 = 'block';
        this.actionalerttext = value.Button_text;
        this.showactionmodel = true;
        this.showalertmodel = false;
        //this.alertarray = [];
    };
    InventoryReportComponent.prototype.openpopmodeladd = function () {
        this.displaypopup = 'block';
    };
    //close model
    InventoryReportComponent.prototype.onCloseHandled = function () {
        this.display = 'none';
    };
    InventoryReportComponent.prototype.onalertCloseHandled = function () {
        this.display1 = 'none';
    };
    InventoryReportComponent.prototype.onpopmodelclose = function () {
        var _this = this;
        setInterval(function () {
            _this.displaypopup = 'none';
        }, 6000);
    };
    InventoryReportComponent.prototype.actionalert = function () {
        // alert(this.alertarray)
        // this.alertmsg =""
        this.alerttxt = this.alertmsg;
        for (var i = 0; i < this.alerts.length; i++) {
            if (this.actionalerttext == this.alerts[i].Button_text) {
                this.alertarray.push(this.alerttxt);
                this.alertmsg = '';
            }
        }
    };
    InventoryReportComponent.prototype.settimeinterval = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.openpopmodeladd();
        }, 10000);
    };
    ;
    InventoryReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory-report',
            template: __webpack_require__(/*! ./inventory-report.component.html */ "./src/app/inventory-report/inventory-report.component.html"),
            styles: [__webpack_require__(/*! ./inventory-report.component.css */ "./src/app/inventory-report/inventory-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], InventoryReportComponent);
    return InventoryReportComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.bg{\r\n\r\n  background-image: url('background_Image.jpg')\r\n}\r\n\r\nheader {\r\n  position: relative;\r\n  background-color: black;\r\n  height: 100vh;\r\n  min-height: 25rem;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\nheader video {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  width: auto;\r\n  height: auto;\r\n  z-index: 0;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n  transform: translateX(-50%) translateY(-50%);\r\n}\r\n\r\nheader .container {\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\nheader .overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: black;\r\n  opacity: 0.9;\r\n  z-index: 1;\r\n}\r\n\r\n.card{\r\nheight: 270px;\r\n\r\nmargin-bottom: auto;\r\nwidth: 400px;\r\nmargin-top:5px;\r\nmargin:auto;\r\nbackground-color: rgba(0,0,0,0.5) !important;\r\npadding:15px;\r\nfont-family: Ubuntu;\r\n}\r\n\r\n.clr {\r\n  color:#00b26f;\r\n  font-weight:lighter;\r\n  margin-top:13px;\r\n}\r\n\r\n.p-0 {\r\npadding:0 !important;\r\n}\r\n\r\n.form-control {\r\n  border-radius:0px !important;\r\n  border:none !important;\r\n  border-bottom:1px solid #00b26f !important;\r\n  \r\n  background: transparent;\r\n\r\n}\r\n\r\n.social_icon span{\r\nfont-size: 60px;\r\nmargin-left: 10px;\r\ncolor: #FFC312;\r\n}\r\n\r\n.social_icon span:hover{\r\ncolor: white;\r\ncursor: pointer;\r\n}\r\n\r\n.card-header h3{\r\ncolor: white;\r\n}\r\n\r\n.social_icon{\r\nposition: absolute;\r\nright: 20px;\r\ntop: -45px;\r\n}\r\n\r\n.input-group-prepend span{\r\nwidth: 50px;\r\nbackground-color: #00b66b;\r\ncolor: black;\r\nborder:0 !important;\r\n}\r\n\r\ninput:focus{\r\noutline: 0 0 0 0  !important;\r\nbox-shadow: 0 0 0 0 !important;\r\n\r\n}\r\n\r\n.remember{\r\ncolor: white;\r\n}\r\n\r\n.remember input\r\n{\r\nwidth: 20px;\r\nheight: 20px;\r\nmargin-left: 15px;\r\nmargin-right: 5px;\r\n}\r\n\r\n.login_btn{\r\ncolor: #fff;\r\nbackground-color: transparent;\r\nwidth: 100px;\r\nborder:1px solid  #00b66b;\r\nborder-radius:15px;\r\nmargin-top:20px;\r\n}\r\n\r\n.card-header{\r\n  margin-top:25px;\r\n}\r\n\r\n.login_btn:hover{\r\ncolor: black;\r\nbackground-color: white;\r\n}\r\n\r\n.form-control {\r\n  color:#fff;\r\n}\r\n\r\n.links{\r\ncolor: white;\r\n}\r\n\r\n.links a{\r\nmargin-left: 4px;\r\n}\r\n\r\n@media (pointer: coarse) and (hover: none) {\r\n  header {\r\n    background: url('https://source.unsplash.com/XT5OInaElMw/1600x900') black no-repeat center center scroll;\r\n  }\r\n  header video {\r\n    display: none;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"bg\">\r\n    <div class=\"overlay\"></div>\r\n    <!-- <video playsinline=\"playsinline\" autoplay=\"autoplay\" muted=\"muted\" loop=\"loop\">\r\n      <source src=\"../assets/videos/cb5.mp4\" type=\"video/mp4\">\r\n        \r\n    </video> -->\r\n    <div>\r\n         \r\n    </div>\r\n    \r\n    <div class=\"container h-100\">\r\n        <div style=\"text-align:center;margin-top:9%;margin-bottom:2%;\"><img style=\"width:12%;\" src=\"../assets/images/dblogo.png\"><br>\r\n        <span style=\"color:#dbdfdc;padding-top:10px;font-family: Ubuntu;font-size: 11px;\">Your data ingestion  platform</span>\r\n        </div>\r\n      <div class=\"d-flex text-center h-100\"  style=\"height:76% !important;\">\r\n        <div class=\"my-auto w-100 text-white\">\r\n          <div class=\"d-flex justify-content-center h-100\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <h4 style=\"color:#fff;\">Sign In</h4>\r\n               \r\n              </div>\r\n              <div class=\"card-body\">\r\n                <form #myForm=\"ngForm\" (ngSubmit)=\"register(myForm)\" >\r\n                  <div class=\"form-group col-md-12\">\r\n                  <label class=\"col-md-3 p-0 clr\">User name</label>\r\n                  <div class=\"col-md-9\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"user\" [(ngModel)] = \"userName\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group col-md-12\">\r\n                    <label class=\"col-md-3 p-0 clr\">Password</label>\r\n                    <div class=\"col-md-9\">  <div class=\"col-md-9\"></div>\r\n                    <input type=\"password\" class=\"form-control\" name =\"password\" [(ngModel)] = \"password\">\r\n                    </div>\r\n                  </div>\r\n                  <!-- <div class=\"row  remember\">\r\n                    <input type=\"checkbox\">Remember Me\r\n                  </div> -->\r\n                  <div class=\"form-group\">\r\n                    <input type=\"submit\"   class=\"btn float-right login_btn\">\r\n                   </div>\r\n                  <!-- <pre>{{myForm.value | json}}</pre> -->\r\n                </form>\r\n              </div>\r\n             \r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n</header>\r\n    <!-- Modal -->\r\n    <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n      <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button> -->\r\n            <!-- <h4 class=\"modal-title\">Modal Header</h4> -->\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <p style=\"text-align: center\">{{modelText}}</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n  <ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\">\r\n <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_databot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/databot.service */ "./src/app/core/databot.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, databotService, spinner) {
        this.fb = fb;
        this.router = router;
        this.databotService = databotService;
        this.spinner = spinner;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.redirectRegister = function () {
        this.router.navigate(['./sign-up']);
    };
    LoginComponent.prototype.register = function (register) {
        var _this = this;
        this.spinner.show();
        console.log(register.value);
        this.modelText = '';
        if (register.value.user == "" || register.value.password == "") {
            this.modelText = "Please enter username or password";
            console.log(this.modelText);
            $('#myModal').modal('show');
            this.spinner.hide();
        }
        else if (register.value.user != "" && register.value.password != "") {
            var body = {
                emailId: register.value.user,
                password: register.value.password
            };
            console.log(body);
            this.databotService.userLogin(body).subscribe(function (data) {
                console.log(data);
                if (data['success'] == true) {
                    localStorage.setItem("userId", data['userData']['userId']);
                    localStorage.setItem("userRole", data['userData']['role']);
                    localStorage.setItem("userName", data['userData']['userName']);
                    _this.router.navigate(['./industries']);
                }
                else if (data['success'] == false) {
                    _this.modelText = data['msg'];
                    $('#myModal').modal('show');
                    _this.spinner.hide();
                }
            }, function (err) {
                console.log(JSON.stringify(err['error']['message']) + "this is error");
                _this.modelText = err['error']['message'];
                $('#myModal').modal('show');
                _this.spinner.hide();
            });
        }
        else {
            this.modelText = "Wrong Credentials";
            console.log(this.modelText);
            $('#myModal').modal('show');
            this.spinner.hide();
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_databot_service__WEBPACK_IMPORTED_MODULE_4__["DatabotService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/manfacturing/manfacturing.component.css":
/*!*********************************************************!*\
  !*** ./src/app/manfacturing/manfacturing.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manfacturing/manfacturing.component.html":
/*!**********************************************************!*\
  !*** ./src/app/manfacturing/manfacturing.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  manfacturing works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/manfacturing/manfacturing.component.ts":
/*!********************************************************!*\
  !*** ./src/app/manfacturing/manfacturing.component.ts ***!
  \********************************************************/
/*! exports provided: ManfacturingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManfacturingComponent", function() { return ManfacturingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManfacturingComponent = /** @class */ (function () {
    function ManfacturingComponent() {
    }
    ManfacturingComponent.prototype.ngOnInit = function () {
    };
    ManfacturingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manfacturing',
            template: __webpack_require__(/*! ./manfacturing.component.html */ "./src/app/manfacturing/manfacturing.component.html"),
            styles: [__webpack_require__(/*! ./manfacturing.component.css */ "./src/app/manfacturing/manfacturing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManfacturingComponent);
    return ManfacturingComponent;
}());



/***/ }),

/***/ "./src/app/manufacturing-usecase/project-managment/project-managment.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/manufacturing-usecase/project-managment/project-managment.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manufacturing-usecase/project-managment/project-managment.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/manufacturing-usecase/project-managment/project-managment.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<iframe src=\"https://app.powerbi.com/view?r=eyJrIjoiNTdjZjBiOWMtMjBmYS00ZDg5LWJkZWItNjdlMjI4NjM2ZDBjIiwidCI6IjI1MmRlZDAzLWM5ZDQtNDE5OS05YTM1LTEzZDAyZGYzYzc1NCIsImMiOjN9\"\r\nheight='650' width='1366' scrolling='no'  frameborder=\"0\" allowfullscreen>\r\n  \r\n</iframe>"

/***/ }),

/***/ "./src/app/manufacturing-usecase/project-managment/project-managment.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/manufacturing-usecase/project-managment/project-managment.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProjectManagmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectManagmentComponent", function() { return ProjectManagmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectManagmentComponent = /** @class */ (function () {
    function ProjectManagmentComponent() {
    }
    ProjectManagmentComponent.prototype.ngOnInit = function () {
    };
    ProjectManagmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-managment',
            template: __webpack_require__(/*! ./project-managment.component.html */ "./src/app/manufacturing-usecase/project-managment/project-managment.component.html"),
            styles: [__webpack_require__(/*! ./project-managment.component.css */ "./src/app/manufacturing-usecase/project-managment/project-managment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectManagmentComponent);
    return ProjectManagmentComponent;
}());



/***/ }),

/***/ "./src/app/politics-usecase/boothincharge-level/boothincharge-level.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/politics-usecase/boothincharge-level/boothincharge-level.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/*padding*/\r\n.padding-0{\r\n    padding: 0px\r\n}\r\n/**/\r\n/*Margin*/\r\n.mt-2{\r\n    margin-top: 2px\r\n}\r\n.mt-4{\r\n    margin-top: 4px\r\n}\r\n.ml-37{\r\n       margin-left: -37px;\r\n}\r\n/*Margin*/\r\n/*Font-Size*/\r\n.fs-18{\r\n    font-size: 18px\r\n}\r\n.fs-19{\r\n    font-size: 19px\r\n}\r\n.fs-20{\r\n    font-size: 20px\r\n}\r\n.txt.align-centre-wrapper{\r\n    text-align: center\r\n}\r\n.current-align-div{\r\n    background-color: #104B6b;\r\n    color: white;\r\n    /* font-size: 13px; */\r\n    text-align: center;\r\n    border-radius: 6px;\r\n\r\n    }\r\n.panel-first-bg-color{\r\n    background-color:#104B6B;\r\n    font-size: 20px; \r\n    color:white;\r\n    margin-top: 2px;\r\n}\r\n.form-group {\r\n    margin-bottom: 0px;\r\n}\r\n/*dropdown*/\r\n.dropdown-wrapper{\r\n    width:99%;\r\n    \r\n}\r\n.dropdown-bg-color{\r\n    background-color: #E23030\r\n}\r\n.table-dropdown-wrapper{\r\n    height: 26px;\r\n    padding: 1px 12px;\r\n    border-radius: 8px;\r\n}\r\n.txt-align-centre-wrapper{\r\n    text-align:center\r\n}\r\n.table-txt-header-wrapper{\r\n    text-align: center;\r\n    background-color: #E23030;\r\n    color: white;\r\n    /* padding-bottom: 6px; */\r\n}\r\n.table-header-bg-color{\r\n    background-color: #DBDBDB\r\n}\r\n.table-th-srno-wrapper{\r\n    background-color: #6B8EA1;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n.textbox-wrapper{\r\n    width:100%\r\n}\r\n/*dropdown*/"

/***/ }),

/***/ "./src/app/politics-usecase/boothincharge-level/boothincharge-level.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/politics-usecase/boothincharge-level/boothincharge-level.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<!--Container-->\r\n<div class=\"container-fluid\">\r\n  <div class=\"col-md-12 panel-first-bg-color\">\r\n    <span>Andhra Pradesh Legislative Assembly election,2014</span>\r\n  </div>\r\n\r\n  <!--Drop Down-->\r\n  <div class=\"col-md-12 mt-2\">\r\n    <div class=\"col-md-4 padding-0\">\r\n      <div class=\"form-group dropdown-wrapper\">\r\n        <select id=\"districtname\" class=\"dropdown-bg-color\" name=\"districtname\" [(ngModel)]=\"distdefaultname\" placeholder=\"DistrictName\"  class=\"form-control dropdown-wrapper\"\r\n           (change)=\"changeDistrict($event)\">\r\n           <option> District Name</option>\r\n             <option *ngFor=\"let dist of district\" [selected]=\"distdefaultname == dist\"  >{{dist}}</option>\r\n           </select>\r\n         </div>\r\n    </div>\r\n    <div class=\"col-md-4 padding-0\">\r\n        <div class=\"form-group dropdown-wrapper\">\r\n            <select id=\"assemblyname\" class=\"dropdown-bg-color\" name=\"assemblyname\" [(ngModel)]=\"asseblydefaultname\" placeholder=\"Booth Incharge Name\"  class=\"form-control dropdown-wrapper\"\r\n            (change)=\"changeAssembly($event)\">\r\n               <option></option>\r\n                 <option *ngFor=\"let assemblys of assembly\" [selected]=\"asseblydefaultname == assemblys\" >{{assemblys}}</option>\r\n               </select>\r\n             </div>\r\n       </div>\r\n    <div class=\"col-md-4 padding-0\">\r\n        <div class=\"form-group dropdown-wrapper\">\r\n            <select id=\"boothinchargename\" class=\"dropdown-bg-color\" name=\"boothinchargename\" [(ngModel)]=\"bootdefaultname\" placeholder=\"Booth Incharge Name\"   class=\"form-control dropdown-wrapper\"\r\n            (change)=\"onChangeNumber($event)\" >\r\n                 <option *ngFor=\"let bootnumber of boothNumbers\" [selected]=\"bootdefaultname == bootnumber\">{{bootnumber}}</option>\r\n               </select>\r\n             </div>\r\n\r\n    </div>\r\n  </div>\r\n    <!--Drop Down close-->\r\n  <div class=\"col-md-12 mt-4\">\r\n    <div class=\"col-md-4 padding-0\">\r\n        <div class=\"col-md-4 padding-0 current-align-div\">\r\n            <span class=\"fs-20 txt.align-centre-wrapper\">Current</span> \r\n          </div>\r\n          <div class=\"col-md-1 padding-0\">\r\n\r\n            </div>\r\n        \r\n          <div class=\"col-md-4 current-align-div ml-37\">\r\n            <span class=\"fs-20\">Historic</span>\r\n            </div>\r\n    </div>\r\n    \r\n   \r\n    <div class=\"col-md-4 padding-0\">\r\n      <div class=\"col-md-2 col-md-offset-2\">\r\n\r\n      </div>\r\n      <div class=\"col-md-6 padding-0\">\r\n        <input type=\"text\" id =\"txt_search\" placeholder=\"Search\" style=\"width:100%\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n       <div class=\"col-md-4 col-md-offset-4\">\r\n\r\n       </div>\r\n       <div class=\"col-md-4 col-md-offset-4\">\r\n\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <button type=\"button\" class=\"btn btn-primary\">Update</button>\r\n          </div>\r\n    </div>\r\n  \r\n\r\n  </div>\r\n\r\n<!--Bootstrap Table-->\r\n  <div class=\"col-md-12 mt-4\">\r\n    <div class=\"col-md-12 table-txt-header-wrapper padding-0\">\r\n      <span class=\"fs-19\">Electorate Details</span>\r\n    </div>\r\n    <div class=\"col-md-12 padding-0\">\r\n   \r\n        <table class=\"table\">\r\n            <thead>\r\n              <tr class=\"table-header-bg-color\">\r\n                <th scope=\"col\">SlNO</th>\r\n                <th scope=\"col\">Name</th>\r\n                <th scope=\"col\">Contact No.</th>\r\n                <th scope=\"col\">Age</th>\r\n                <th scope=\"col\">Gender</th>\r\n                <th scope=\"col\" class=\"txt-align-centre-wrapper\">Profession</th>\r\n                <th scope=\"col\" class=\"txt-align-centre-wrapper\">Income Group</th>\r\n                <th scope=\"col\" class=\"txt-align-centre-wrapper\">Mood</th>\r\n                <th scope=\"col\" class=\"txt-align-centre-wrapper\">Convinced</th>\r\n                <th scope=\"col\" class=\"txt-align-centre-wrapper\">Influencing vote</th>\r\n                <th scope=\"col\" class=\"txt-align-centre-wrapper\">Major Concerns</th>\r\n              </tr>\r\n            </thead>\r\n          \r\n            <tbody>\r\n              \r\n              <tr *ngFor=\"let object of personData ;index as id\">\r\n                <th scope=\"row\" class=\"table-th-srno-wrapper\">{{id+1}}</th>\r\n                <td>{{object.Name}}</td>\r\n                <td>\r\n                  <input type=\"text\" id=\"contact-no\" class=\"textbox-wrapper\" [(ngModel)]=\"object['Phone number']\" >\r\n                </td>\r\n                <td>{{object.Age}}</td>\r\n                <td>{{object.Gender}}</td>\r\n                <td>\r\n                <select id=\"profession\" name=\"profession\" placeholder=\"ProfessionName\"  class=\"form-control table-dropdown-wrapper\">\r\n                    <option>Profession</option>\r\n                    <option>Agriculture</option>\r\n                    <option>Teacher</option>\r\n                    <option>Public Sector</option>\r\n                    <option>Private Sector</option>\r\n                    <option>Wage Labor</option>\r\n                 </select>\r\n                </td>\r\n                <td>\r\n                    <select id=\"incomegroup\" name=\"incomegroup\" placeholder=\"IncomrGroup\"  class=\"form-control table-dropdown-wrapper\">\r\n                      <option>Income Group</option>\r\n                    <option>Less than 10,000</option>\r\n                    <option>Between 24,999 & 10,000</option>\r\n                    <option>Between 99,999 & 50 ,000</option>\r\n                    <option>Between 49 ,999 & 25,000</option>\r\n                     </select>\r\n                    </td>\r\n                    <td>\r\n                   <select id=\"mood\" name=\"mood\" placeholder=\"Mood\"  class=\"form-control table-dropdown-wrapper\">\r\n                      <option>Against</option>\r\n                      <option>For</option>\r\n                      <option>Neutral</option>\r\n                   </select>\r\n                   </td>\r\n                   <td>\r\n                      <select id=\"conviced\" name=\"conviced\" placeholder=\"conviced\"  class=\"form-control table-dropdown-wrapper\">\r\n                       <option>Yes</option>\r\n                       <option>No</option>\r\n                      </select>\r\n                      </td>\r\n                      <td>\r\n                      <select id=\"influencingvote\" name=\"conviced\" placeholder=\"conviced\"  class=\"form-control table-dropdown-wrapper\">\r\n                          <option>Yes</option>\r\n                          <option>No</option>\r\n                      </select>\r\n                    </td> \r\n                    <td>\r\n                        <select id=\"Majorconcern\" name=\"Majorconcern\" placeholder=\"Majorconcern\"  class=\"form-control table-dropdown-wrapper\">\r\n                         <option>Infrastructure</option>\r\n                         <option>Jobs</option>\r\n                         <option>Law & Order</option>\r\n                         <option>Agriculture</option>\r\n                         <option>Governance</option>\r\n                        </select>\r\n                      </td> \r\n              </tr>\r\n           \r\n              <!--tr one close-->\r\n              \r\n           \r\n            </tbody>\r\n          \r\n          </table>\r\n        \r\n  \r\n\r\n  </div>\r\n\r\n<!--Bootstrap Table-->\r\n\r\n</div>\r\n<!--Container-->"

/***/ }),

/***/ "./src/app/politics-usecase/boothincharge-level/boothincharge-level.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/politics-usecase/boothincharge-level/boothincharge-level.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BoothinchargeLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoothinchargeLevelComponent", function() { return BoothinchargeLevelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoothinchargeLevelComponent = /** @class */ (function () {
    function BoothinchargeLevelComponent(http) {
        this.http = http;
        this.district = [];
        this.assembly = [];
    }
    BoothinchargeLevelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.distdefaultname = "Chittoor";
        this.asseblydefaultname = "Chittoor", this.bootdefaultname = "Booth 70";
        this.http.get('../../assets/data/boothincharge.json').subscribe(function (data) {
            _this.boothjsondata = data;
            var index;
            for (index in _this.boothjsondata) {
                if (_this.district.indexOf(_this.boothjsondata[index].District) < 0) {
                    _this.district.push(_this.boothjsondata[index].District);
                }
            }
            //this.distdefaultname=this.district[0];
            _this.loadDefaultDistrict(_this.distdefaultname, _this.boothjsondata);
        });
    };
    //monika (14-02-2019)
    BoothinchargeLevelComponent.prototype.loadDefaultDistrict = function (distdefaultname, boothjsondata) {
        console.log("loadDefaultDistrict", distdefaultname);
        this.assembly = [];
        this.boothNumbers = [];
        var index;
        for (index in this.boothjsondata) {
            if (this.boothjsondata[index].District === distdefaultname) {
                if (this.assembly.indexOf(boothjsondata[index].Assembly) < 0) {
                    this.assembly.push(boothjsondata[index].Assembly);
                }
            }
        }
        this.loadDefaultAssembly(this.distdefaultname, this.asseblydefaultname, this.boothjsondata);
    };
    BoothinchargeLevelComponent.prototype.loadDefaultAssembly = function (distdefaultname, asseblydefaultname, boothjsondata) {
        console.log("loadDefaultAssembly", distdefaultname, asseblydefaultname);
        this.boothNumbers = [];
        //  this.rating = [];
        var index;
        for (index in this.boothjsondata) {
            if (boothjsondata[index].District === distdefaultname && this.boothjsondata[index].Assembly === asseblydefaultname) {
                if (this.boothNumbers.indexOf(this.boothjsondata[index]['Booth Number']) < 0) {
                    this.boothNumbers.push(this.boothjsondata[index]['Booth Number']);
                }
            }
        }
        this.loadDefaultData(this.distdefaultname, this.asseblydefaultname, this.bootdefaultname, this.boothjsondata);
    };
    BoothinchargeLevelComponent.prototype.loadDefaultData = function (distdefaultname, asseblydefaultname, bootdefaultname, boothjsondata) {
        this.personData = [];
        console.log("loadDefaultData", distdefaultname, asseblydefaultname, bootdefaultname, boothjsondata);
        var index;
        for (index in this.boothjsondata) {
            if (this.boothjsondata[index]['Booth Number'] === this.bootdefaultname) {
                this.personData.push({
                    "Name": this.boothjsondata[index].Name, "Age": this.boothjsondata[index].Age, "Phone number": this.boothjsondata[index]['Phone number'], "Gender": this.boothjsondata[index].Gender
                });
            }
        }
        console.log("personData", this.personData);
    };
    BoothinchargeLevelComponent.prototype.changeDistrict = function (district) {
        console.log("data from changeDistrict", district.currentTarget.value);
        this.assembly = [];
        this.boothNumbers = [];
        this.districtname = this.distdefaultname = district.currentTarget.value;
        var index;
        for (index in this.boothjsondata) {
            if (this.boothjsondata[index].District === this.districtname) {
                if (this.assembly.indexOf(this.boothjsondata[index].Assembly) < 0) {
                    this.assembly.push(this.boothjsondata[index].Assembly);
                }
            }
        }
        // this.asseblydefaultname=this.assembly[0];
    };
    //monika (2/14/2019)
    BoothinchargeLevelComponent.prototype.changeAssembly = function (assembly) {
        console.log("data from changeAssembly", assembly.currentTarget.value);
        this.boothNumbers = [];
        this.assemlyname = this.asseblydefaultname = assembly.currentTarget.value;
        var index;
        for (index in this.boothjsondata) {
            if (this.boothjsondata[index].District === this.distdefaultname && this.boothjsondata[index].Assembly === this.assemlyname) {
                if (this.boothNumbers.indexOf(this.boothjsondata[index]['Booth Number']) < 0) {
                    this.boothNumbers.push(this.boothjsondata[index]['Booth Number']);
                }
            }
        }
        // this.bootdefaultname=this.boothNumbers[0];
    };
    BoothinchargeLevelComponent.prototype.onChangeNumber = function (bootnumber) {
        console.log("selected bootnumber", bootnumber.currentTarget.value);
        this.personData = [];
        this.name = this.bootdefaultname = bootnumber.currentTarget.value;
        var index;
        for (index in this.boothjsondata) {
            if (this.boothjsondata[index]['Booth Number'] === this.name) {
                if (this.personData.indexOf(this.boothjsondata[index].Name) < 0) {
                    this.personData.push({
                        "Name": this.boothjsondata[index].Name, "Age": this.boothjsondata[index].Age, "Phone number": this.boothjsondata[index]['Phone number'], "Gender": this.boothjsondata[index].Gender
                    });
                }
            }
        }
        console.log(" this.personData", this.personData);
    };
    BoothinchargeLevelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-boothincharge-level',
            template: __webpack_require__(/*! ./boothincharge-level.component.html */ "./src/app/politics-usecase/boothincharge-level/boothincharge-level.component.html"),
            styles: [__webpack_require__(/*! ./boothincharge-level.component.css */ "./src/app/politics-usecase/boothincharge-level/boothincharge-level.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BoothinchargeLevelComponent);
    return BoothinchargeLevelComponent;
}());



/***/ }),

/***/ "./src/app/politics-usecase/forecast-trend-analysis/forecast-trend-analysis.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/politics-usecase/forecast-trend-analysis/forecast-trend-analysis.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/*padding*/\r\n.padding-0{\r\n    padding: 0px\r\n}\r\n.yellow{\r\n    background:#eec23f;\r\n    color:#fff;\r\n    text-align:center;\r\n}\r\n.blue{\r\n    background:#449d9e;\r\n    color:#fff;\r\n    text-align:center;\r\n}\r\n.pt-35{\r\n    padding-top: 35px\r\n}\r\n/*Margin*/\r\n.mt-2{\r\n    margin-top: 2px\r\n}\r\n.mt-4{\r\n    margin-top: 4px\r\n}\r\n.ml-37{\r\n       margin-left: -37px;\r\n}\r\n/*Margin*/\r\n/*padding*/\r\n.panel-first-bg-color{\r\n    background-color:#104B6B;\r\n    font-size: 20px; \r\n    color:white;\r\n    margin-top: 2px;\r\n}\r\n.form-group {\r\n    margin-bottom: 0px;\r\n}\r\n/*dropdown*/\r\n.dropdown-wrapper{\r\n    width:99%;\r\n    \r\n}\r\n.dropdown-wrapper-ap{\r\n    width: 99%;\r\n    height: 34px;\r\n    border-radius: 6px;\r\n    \r\n}\r\n.dropdown-bg-color{\r\n    background-color: #E23030\r\n}\r\n.v{\r\n    -webkit-writing-mode: vertical-lr;\r\n        -ms-writing-mode: tb-lr;\r\n            writing-mode: vertical-lr;\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n    text-orientation: sideways;\r\n    text-align:right;\r\n    text-orientation: sideways;\r\n    margin: 1rem;\r\n    color: white;\r\n  }\r\n/* p{\r\n    font-family: sans-serif;\r\n    font-size:2rem;\r\n  } */\r\np {\r\n    margin: 0px 0 6px;\r\n}\r\n.txt-gender{\r\n    background-color:#0F4B6B;\r\n    color:#0F4B6B;\r\n    padding-bottom: 18px;\r\n  }\r\n.p-txt-align{\r\n      text-align: center;\r\n      border-bottom: 1px solid #F6F6F6;\r\n\r\n  }\r\n.txt-wrapper-border{\r\n   border:1px solid #FCFDFE;\r\n  }\r\n.table-th-wrapper{\r\n    text-align: center\r\n  }\r\n.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {\r\n    padding: 1px;\r\n    \r\n}\r\n.green-color-wrapper{\r\n    background-color: #44909E\r\n}\r\n.yellow-color-wrapper{\r\n    background-color: #EEC2EF\r\n}\r\n.light-color-wrapper{\r\n    background-color: #419293\r\n}\r\n.gray-color-wrapper{\r\n    background-color: #F5F5F5\r\n}\r\n.td{\r\n    text-align: center;\r\n}\r\n.table-scroll {\r\n\tposition:relative;\r\n\t/* max-width:1000px; */\r\n\tmargin:auto;\r\n    overflow-y:hidden;\r\n    overflow-x:scroll;\r\n\t\r\n}\r\n.table-wrap {\r\n\twidth:100%;\r\n\toverflow:auto;\r\n}\r\n.table-scroll table {\r\n\twidth:100%;\r\n\tmargin:auto;\r\n\tborder-collapse:separate;\r\n\tborder-spacing:2px;\r\n}\r\n.table-scroll th, .table-scroll td {\r\n\tpadding:5px 10px;\r\n\tborder:1px solid #d1e2eb;\r\n\r\n\twhite-space:nowrap;\r\n  \r\n}\r\n.table-scroll thead, .table-scroll tfoot {\r\n\tbackground:#f9f9f9;\r\n}\r\n.clone {\r\n\tposition:absolute;\r\n\ttop:0;\r\n\tleft:0;\r\n\tpointer-events:none;\r\n}\r\n.fixed-side{\r\n    color:#4a4a4a !important;\r\n    font-size:12px;\r\n    width: 3%;\r\n}\r\n.bg{\r\n    background:#0e4b6b !important;\r\n    color:#fff !important;\r\n}\r\n.transform{\r\n    -webkit-writing-mode: vertical-lr;\r\n        -ms-writing-mode: tb-lr;\r\n            writing-mode: vertical-lr;\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n}\r\n.clone th, .clone td {\r\n\tvisibility:hidden\r\n}\r\n.clone td, .clone th {\r\n\tborder-color:transparent\r\n}\r\n.clone tbody th {\r\n\tvisibility:visible;\r\n\tcolor:red;\r\n}\r\n.clone .fixed-side {\r\n\tborder:1px solid #d1e2eb;\r\n\tbackground:#f5f5f5;\r\n    visibility:visible;\r\n   \r\n}\r\n.content {\r\n    display:none;\r\n}\r\n.pop:hover .content{\r\n    display:block;\r\n    position:absolute;\r\n    background-color:#fff;\r\n    box-shadow: 0 0 10px #fff;\r\n}\r\n.small th{\r\n    background: #cacccb;\r\n    color:#000;\r\n}\r\n.small th {\r\n    border:none !important;\r\n}\r\n.small td {\r\n    border:none !important;\r\n}\r\n.small tr{\r\n   border-bottom:1px solid #cacccb !important;;\r\n}\r\n.yellow1{\r\n    background:#f6eb15;\r\n    color:#000 !important;\r\n    padding: 5px 22px;\r\n}\r\n.blue1{\r\n    background:#0066b4;\r\n    color:#fff !important;\r\n    padding: 5px 22px;\r\n}\r\n.other{\r\n    background:#f54141;\r\n    color:#fff !important;\r\n    padding: 5px 22px;\r\n}\r\n.non {\r\n    color:#868686 !important;\r\n}\r\n.pading{\r\n    padding: 5px 22px;\r\n}\r\n.clone thead, .clone tfoot{background:transparent;}\r\n"

/***/ }),

/***/ "./src/app/politics-usecase/forecast-trend-analysis/forecast-trend-analysis.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/politics-usecase/forecast-trend-analysis/forecast-trend-analysis.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"col-md-12 panel-first-bg-color\">\r\n    <span style=\"font-size:13px;\">Andhra Pradesh Legislative Assembly election,2014</span>\r\n  </div>\r\n  <!--Drop Down-->\r\n  <!--Drop Down-->\r\n  <div class=\"col-md-12 mt-2\">\r\n    <div class=\"col-md-3 padding-0\">\r\n      <div class=\"form-group\">\r\n        <select class=\"dropdown-wrapper-ap\">\r\n          <option>Ap</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4 padding-0\">\r\n      <div class=\"form-group dropdown-wrapper\">\r\n        <select id=\"districtname\" class=\"dropdown-bg-color\" name=\"districtname\" [(ngModel)]=\"distdefaultname\"\r\n          placeholder=\"DistrictName\" class=\"form-control dropdown-wrapper\" (change)=\"changeDistrict($event)\">\r\n          <option> District Name</option>\r\n          <option *ngFor=\"let dist of district\" [selected]=\"distdefaultname == dist\">{{dist}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4 padding-0\">\r\n      <div class=\"form-group dropdown-wrapper\">\r\n        <select id=\"assemblyname\" class=\"dropdown-bg-color\" name=\"assemblyname\" [(ngModel)]=\"asseblydefaultname\"\r\n          placeholder=\"Booth Incharge Name\" class=\"form-control dropdown-wrapper\" (change)=\"changeAssembly($event)\">\r\n          <option></option>\r\n          <option *ngFor=\"let assemblys of assemblynew\" [selected]=\"asseblydefaultname == assemblys\">{{assemblys}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <!-- <div class=\"col-md-3 padding-0\">\r\n            <div class=\"form-group dropdown-wrapper\">\r\n                <select id=\"boothinchargename\" class=\"dropdown-bg-color\" name=\"boothinchargename\" [(ngModel)]=\"bootdefaultname\" placeholder=\"Booth Incharge Name\"   class=\"form-control dropdown-wrapper\"\r\n                (change)=\"onChangeNumber($event)\" >\r\n                     <option *ngFor=\"let bootnumber of boothNumbers\" [selected]=\"bootdefaultname == bootnumber\">{{bootnumber}}</option>\r\n                   </select>\r\n                 </div>\r\n    \r\n        </div> -->\r\n\r\n  </div>\r\n\r\n\r\n  <!--Drop Down close-->\r\n  <div class=\"col-md-12\">\r\n    <div id=\"table-scroll\" class=\"table-scroll\">\r\n      <div class=\"table-wrap\">\r\n        <table class=\"main-table\">\r\n          <thead>\r\n            <tr>\r\n\r\n              <th class=\"fixed-side\" colspan=\"2\" scope=\"col\">&nbsp;</th>\r\n              <th scope=\"col\" *ngFor=\"let obj of assembly\">{{obj}}</th>\r\n\r\n              <!-- <div *ngIf=\"isBoot==true\"> <th scope=\"col\"  *ngFor=\"let obj of boothNumbers\">{{obj}}</th></div> -->\r\n\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <th class=\"fixed-side bg\" rowspan=\"3\"> <span class=\"transform\">Gender</span></th>\r\n              <th class=\"fixed-side\">Male</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.partyname=='TDP' , 'blue': obj.partyname=='YSRCP','other': obj.partyname=='Others' } \"\r\n                *ngFor=\"let obj of male_latest;let i=index\"> <span>{{obj.male}} </span>\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\"> <span *ngFor=\"let obj of assemblyobj;let j=index\">\r\n                          <span class=\"pading\" *ngIf=\"i==j\">{{obj.Male[0]}} </span></span>\r\n\r\n                      </td>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\"> <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Male[1]}} </span></span>\r\n\r\n                      </td>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Male[2]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n                </div>\r\n              </td>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n            <tr>\r\n              <th class=\"fixed-side\">Female</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.partyname=='TDP' , 'blue': obj.partyname=='YSRCP','other': obj.partyname=='Others' } \"\r\n                *ngFor=\"let obj of female_latest; let i=index\">{{obj.female}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Female[0]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Female[1]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Female[2]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n            <tr>\r\n              <th class=\"fixed-side\">Other</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of other_latest;let i=index;\">{{obj.other}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Other[0]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Other[1]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Other[2]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n\r\n\r\n\r\n            </tr>\r\n            <tr style=\"height:4px;\"></tr>\r\n            <!--Gender-->\r\n            <tr>\r\n              <th class=\"fixed-side bg\" rowspan=\"3\"><span class=\"transform\">Religion</span></th>\r\n              <th class=\"fixed-side\">Hindu</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of hindu_latest,let i=index\">{{obj.hindu}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Hindu[0]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Hindu[1]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Hindu[2]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n            <tr>\r\n              <th class=\"fixed-side\">Muslim</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of muslim_latest;let i=index\">{{obj.muslim}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Muslim[0]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Muslim[1]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Muslim[2]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n            </tr>\r\n            <tr>\r\n              <th class=\"fixed-side\">Christian</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of Christian_latest,let i=index;\">{{obj.christian}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Christian[0]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Christian[1]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Christian[2]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n            <!--Religion-->\r\n            <tr style=\"height:4px;\"></tr>\r\n            <tr>\r\n              <th class=\"fixed-side bg\" rowspan=\"5\"> <span class=\"transform\">Income Group</span></th>\r\n              <th class=\"fixed-side\">More than 1,00,000</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of  greatelacks_latest; let i=index\">{{obj['greatevalue']}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['>100000'][0]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['>100000'][1]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['>100000'][2]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n            <tr>\r\n              <th class=\"fixed-side\">Between 99,999 & 50,0000</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of max_5000_latest;let i=index\">{{obj['>50000']}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['>50000'][0]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['>50000'][1]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['>50000'][2]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n\r\n                  </table>\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n            <tr>\r\n              <th class=\"fixed-side\">Between 49,999 & 25,000</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of max_25000_latest;let i=index\">{{obj['>25000']}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['>25000'][0]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of assemblyobj; let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['>25000'][1]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['>25000'][2]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n\r\n                  </table>\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n            <tr>\r\n              <th class=\"fixed-side\">Between 24,999 & 10,000</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of max_10000_latest,let i=index\">{{obj['>10000']}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['>10000'][0]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['>10000'][1]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['>10000'][2]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n         </tr>\r\n            <tr>\r\n              <th class=\"fixed-side\">Less then 10,000</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of less_10000_latest;let i=index\">{{obj['lesten']}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['10000'][0]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['10000'][1]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['10000'][2]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n            <!--Income Group-->\r\n            <tr style=\"height:4px;\"></tr>\r\n            <tr>\r\n              <th class=\"fixed-side bg\" rowspan=\"5\"><span class=\"transform\">Age Group</span></th>\r\n              <th class=\"fixed-side\">Above 60</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of ageabove_60;let i=index\">{{obj['Above 60']}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['Above 60'][0]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['Above 60'][1]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['Above 60'][2]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n            <tr>\r\n              <th class=\"fixed-side\">Between 45-60</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of abeabove_45;let i=index\">{{obj['46-60']}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['46-60'][0]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['46-60'][1]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['46-60'][2]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n            <tr>\r\n              <th class=\"fixed-side\">Between 30-45</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of ageabove_30;let i=index\">{{obj['31-45']}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['31-45'][0]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['31-45'][1]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['31-45'][2]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n            <tr>\r\n              <th class=\"fixed-side\">Between 20-30</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of ageabove_20; let i=index\">{{obj['21-30']}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['21-30'][0]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['21-30'][1]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['21-30'][2]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n            <tr>\r\n              <th class=\"fixed-side\">Between 18-20</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of ageabove_18;let i=index\">{{obj['18-20']}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['21-30'][0]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['21-30'][1]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj['21-30'][2]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n            <!--Age Group-->\r\n            <tr style=\"height:4px;\"></tr>\r\n\r\n\r\n\r\n\r\n            <!--Income Group-->\r\n            <tr style=\"height:4px;\"></tr>\r\n            <tr>\r\n              <th class=\"fixed-side bg\" rowspan=\"5\"><span class=\"transform\">Incomebency</span></th>\r\n              <th class=\"fixed-side\">Agriculture</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of agriculture_latest;let i=index\">{{obj.Agriculture}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Agriculture[0]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Agriculture[1]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Agriculture[2]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n            <tr>\r\n              <th class=\"fixed-side\">Jobs</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of jobs_latest;let i=index\">{{obj.Jobs}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Jobs[0]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Jobs[1]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\"\r\n                            *ngIf=\"i==j\">{{obj.Jobs[2]}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n            <tr>\r\n              <th class=\"fixed-side\">Infrastructure</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of infrastructure_latest;let i=index\">{{obj.Infrastructure}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\" *ngIf=\"i==j\">{{obj}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\" *ngIf=\"i==j\">{{obj}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  assemblyobj;let j=index\"><span class=\"pading\" *ngIf=\"i==j\">{{obj}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n            <tr>\r\n              <th class=\"fixed-side\">Law & Order</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of law_latest;let i=index\">{{obj['Law & Order']}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  tdpLO;let j=index\"><span class=\"pading\" *ngIf=\"i==j\">{{obj}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  ysrLO;let j=index\"><span class=\"pading\" *ngIf=\"i==j\">{{obj}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  otherLO;let j=index\"><span class=\"pading\" *ngIf=\"i==j\">{{obj}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n            <tr>\r\n              <th class=\"fixed-side\">Governmance</th>\r\n              <td class=\"pop\"\r\n                [ngClass]=\"{'yellow': obj.Party=='TDP' , 'blue': obj.Party=='YSRCP','other': obj.Party=='Others' } \"\r\n                *ngFor=\"let obj of governance_latest;let i =index\">{{obj.governance}}\r\n                <!--hover code-->\r\n                <div class=\"content\">\r\n                  <table class=\"small\">\r\n                    <tr>\r\n                      <th>Party</th>\r\n                      <th>Votes%</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"yellow1\">TDP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  tdpGovt;let j=index\"><span class=\"pading\" *ngIf=\"i==j\">{{obj}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td> <span class=\"blue1\">YSRCP</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  ysrGovt;let j=index\"><span class=\"pading\" *ngIf=\"i==j\">{{obj}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><span class=\"other\">Others</span></td>\r\n                      <td class=\"non\">\r\n                        <span *ngFor=\"let obj of  otherGovt;let j=index\"><span class=\"pading\" *ngIf=\"i==j\">{{obj}}\r\n                          </span></span>\r\n\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </table>\r\n\r\n                </div>\r\n                <!--hover code end-->\r\n              </td>\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n          </tbody>\r\n\r\n\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/politics-usecase/forecast-trend-analysis/forecast-trend-analysis.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/politics-usecase/forecast-trend-analysis/forecast-trend-analysis.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ForecastTrendAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastTrendAnalysisComponent", function() { return ForecastTrendAnalysisComponent; });
/* harmony import */ var _core_databot_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/databot.service */ "./src/app/core/databot.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForecastTrendAnalysisComponent = /** @class */ (function () {
    function ForecastTrendAnalysisComponent(http, databotService) {
        this.http = http;
        this.databotService = databotService;
        this.district = [];
        this.assembly = [];
        this.totalMale = [];
        this.assemblynew = [];
        this.boothNumber = [];
        this.allRecord = [];
        this.assemblyobj = [];
        this.malecount = [];
        this.male_latest = [];
        this.female_latest = [];
        this.other_latest = [];
        this.hindu_latest = [];
        this.muslim_latest = [];
        this.Christian_latest = [];
        this.greatelacks_latest = [];
        this.max_5000_latest = [];
        this.max_25000_latest = [];
        this.max_10000_latest = [];
        this.less_10000_latest = [];
        this.ageabove_60 = [];
        this.abeabove_45 = [];
        this.ageabove_30 = [];
        this.ageabove_20 = [];
        this.ageabove_18 = [];
        this.agriculture_latest = [];
        this.jobs_latest = [];
        this.infrastructure_latest = [];
        this.law_latest = [];
        this.governance_latest = [];
    }
    ForecastTrendAnalysisComponent.prototype.ngOnInit = function () {
        this.loadDistricts();
        this.loadAssemblies();
        this.loadBooths();
    };
    ForecastTrendAnalysisComponent.prototype.loadDistricts = function () {
        var _this = this;
        this.databotService.loadPoliticsTrendDistrict().subscribe(function (data) {
            _this.boothjsondata = data;
            var index;
            for (index in _this.boothjsondata) {
                if (_this.district.indexOf(_this.boothjsondata[index].District) < 0) {
                    _this.district.push(_this.boothjsondata[index].District);
                    _this.assembly.push(_this.boothjsondata[index].District);
                    _this.assemblyobj.push(_this.boothjsondata[index]);
                }
            }
            _this.filterRecord(_this.assemblyobj);
        });
    };
    ForecastTrendAnalysisComponent.prototype.loadAssemblies = function () {
        var _this = this;
        this.databotService.loadPoliticsTrendAssembly().subscribe(function (data) {
            _this.assemblyjsondata = data;
        });
    };
    ForecastTrendAnalysisComponent.prototype.loadBooths = function () {
        var _this = this;
        this.databotService.loadPoliticsTrendBooth().subscribe(function (data) {
            _this.assemblyboothdata = data;
        });
    };
    ForecastTrendAnalysisComponent.prototype.changeDistrict = function (district) {
        this.assembly = [];
        this.assemblynew = [];
        this.assemblyobj = [];
        this.male_latest = [];
        this.female_latest = [];
        this.other_latest = [];
        this.hindu_latest = [];
        this.muslim_latest = [];
        this.Christian_latest = [];
        this.greatelacks_latest = [];
        this.max_5000_latest = [];
        this.max_25000_latest = [];
        this.max_10000_latest = [];
        this.less_10000_latest = [];
        this.ageabove_60 = [];
        this.abeabove_45 = [];
        this.ageabove_30 = [];
        this.ageabove_20 = [];
        this.ageabove_18 = [];
        this.agriculture_latest = [];
        this.jobs_latest = [];
        this.infrastructure_latest = [];
        this.law_latest = [];
        this.governance_latest = [];
        this.districtname = district.currentTarget.value;
        var index;
        for (index in this.assemblyjsondata) {
            if (this.assemblyjsondata[index].District == this.districtname) {
                if (this.assemblynew.indexOf(this.assemblyjsondata[index].Assembly) < 0) {
                    this.assemblynew.push(this.assemblyjsondata[index].Assembly);
                    this.assembly.push(this.assemblyjsondata[index].Assembly);
                    this.assemblyobj.push(this.assemblyjsondata[index]);
                }
            }
        }
        this.filterRecord(this.assemblyobj);
    };
    ForecastTrendAnalysisComponent.prototype.changeAssembly = function (district) {
        this.assembly = [];
        this.assemblyobj = [];
        this.male_latest = [];
        this.female_latest = [];
        this.other_latest = [];
        this.hindu_latest = [];
        this.muslim_latest = [];
        this.Christian_latest = [];
        this.greatelacks_latest = [];
        this.max_5000_latest = [];
        this.max_25000_latest = [];
        this.max_10000_latest = [];
        this.less_10000_latest = [];
        this.ageabove_60 = [];
        this.abeabove_45 = [];
        this.ageabove_30 = [];
        this.ageabove_20 = [];
        this.ageabove_18 = [];
        this.agriculture_latest = [];
        this.jobs_latest = [];
        this.infrastructure_latest = [];
        this.law_latest = [];
        this.governance_latest = [];
        var assemblyname = district.currentTarget.value;
        var index;
        for (index in this.assemblyboothdata) {
            if (this.assemblyboothdata[index].Assembly == assemblyname) {
                if (this.assemblynew.indexOf(this.assemblyboothdata[index]['Booth Number']) < 0) {
                    this.assembly.push(this.assemblyboothdata[index]['Booth Number']);
                    this.assemblyobj.push(this.assemblyboothdata[index]);
                }
            }
        }
        this.filterRecord(this.assemblyobj);
    };
    ForecastTrendAnalysisComponent.prototype.filterRecord = function (assemblyobj) {
        var index;
        for (index in this.assemblyobj) {
            this.maxMale(assemblyobj[index].Male, assemblyobj[index].Parties);
            this.maxFemale(assemblyobj[index].Female, assemblyobj[index].Parties);
            this.maxOthers(assemblyobj[index].Other, assemblyobj[index].Parties);
            this.maxHindu(assemblyobj[index].Hindu, assemblyobj[index].Parties);
            this.maxMuslim(assemblyobj[index].Muslim, assemblyobj[index].Parties);
            this.maxChristian(assemblyobj[index].Christian, assemblyobj[index].Parties);
            this.maxgreater100000(assemblyobj[index]['>100000'], assemblyobj[index].Parties);
            this.max_5000(assemblyobj[index]['>50000'], assemblyobj[index].Parties);
            this.max_25000(assemblyobj[index]['>25000'], assemblyobj[index].Parties);
            this.max_10000(assemblyobj[index]['>10000'], assemblyobj[index].Parties);
            this.less_10000(assemblyobj[index]['10000'], assemblyobj[index].Parties);
            this.age_60(assemblyobj[index]['Above 60'], assemblyobj[index].Parties);
            this.age_45(assemblyobj[index]['46-60'], assemblyobj[index].Parties);
            this.age_30(assemblyobj[index]['31-45'], assemblyobj[index].Parties);
            this.age_20(assemblyobj[index]['31-45'], assemblyobj[index].Parties);
            this.age_18(assemblyobj[index]['31-45'], assemblyobj[index].Parties);
            this.maxAgriculture(assemblyobj[index].Agriculture, assemblyobj[index].Parties);
            this.maxJobs(assemblyobj[index].Jobs, assemblyobj[index].Parties);
            this.maxInfrastructure(assemblyobj[index].Infrastructure, assemblyobj[index].Parties);
            this.maxLaw(assemblyobj[index]['Law & Order'], assemblyobj[index].Parties);
            this.maxGovernmance(assemblyobj[index].Governance, assemblyobj[index].Parties);
        }
    };
    ForecastTrendAnalysisComponent.prototype.maxMale = function (male, party) {
        var $this = this;
        var maleCount = Math.max.apply(null, male);
        var partyNmae = party[male.indexOf(Math.max.apply(null, male))];
        this.male_latest.push({ "male": maleCount, "partyname": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.maxFemale = function (female, party) {
        var $this = this;
        var femaleCount = Math.max.apply(null, female);
        var partyNmae = party[female.indexOf(Math.max.apply(null, female))];
        this.female_latest.push({ "female": femaleCount, "partyname": partyNmae });
        console.log(this.female_latest);
    };
    ForecastTrendAnalysisComponent.prototype.maxOthers = function (other, party) {
        var $this = this;
        var othercount = Math.max.apply(null, other);
        var partyNmae = party[other.indexOf(Math.max.apply(null, other))];
        this.other_latest.push({ "other": othercount, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.maxHindu = function (hindu, party) {
        var $this = this;
        var hindicount = Math.max.apply(null, hindu);
        var partyNmae = party[hindu.indexOf(Math.max.apply(null, hindu))];
        this.hindu_latest.push({ "hindu": hindicount, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.maxMuslim = function (muslim, party) {
        var $this = this;
        var muslimcount = Math.max.apply(null, muslim);
        var partyNmae = party[muslim.indexOf(Math.max.apply(null, muslim))];
        this.muslim_latest.push({ "muslim": muslimcount, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.maxChristian = function (Christian, party) {
        var $this = this;
        var christiancount = Math.max.apply(null, Christian);
        var partyNmae = party[Christian.indexOf(Math.max.apply(null, Christian))];
        this.Christian_latest.push({ "christian": christiancount, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.maxgreater100000 = function (value, party) {
        var $this = this;
        var greatelacksvalue = Math.max.apply(null, value);
        var partyNmae = party[value.indexOf(Math.max.apply(null, value))];
        this.greatelacks_latest.push({ "greatevalue": greatelacksvalue, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.max_5000 = function (max5000, party) {
        var $this = this;
        var max5000value = Math.max.apply(null, max5000);
        var partyNmae = party[max5000.indexOf(Math.max.apply(null, max5000))];
        this.max_5000_latest.push({ ">50000": max5000value, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.max_25000 = function (max25000, party) {
        var $this = this;
        var max25000value = Math.max.apply(null, max25000);
        var partyNmae = party[max25000.indexOf(Math.max.apply(null, max25000))];
        this.max_25000_latest.push({ ">25000": max25000value, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.max_10000 = function (max10000, party) {
        var $this = this;
        var max10000value = Math.max.apply(null, max10000);
        var partyNmae = party[max10000.indexOf(Math.max.apply(null, max10000))];
        this.max_10000_latest.push({ ">10000": max10000value, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.less_10000 = function (less10000, party) {
        var $this = this;
        var less10000value = Math.max.apply(null, less10000);
        var partyNmae = party[less10000.indexOf(Math.max.apply(null, less10000))];
        this.less_10000_latest.push({ "lesten": less10000value, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.age_60 = function (age, party) {
        var $this = this;
        var agevalue = Math.max.apply(null, age);
        var partyNmae = party[age.indexOf(Math.max.apply(null, age))];
        this.ageabove_60.push({ "Above 60": agevalue, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.age_45 = function (age, party) {
        var $this = this;
        var agevalue = Math.max.apply(null, age);
        var partyNmae = party[age.indexOf(Math.max.apply(null, age))];
        this.abeabove_45.push({ "46-60": agevalue, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.age_30 = function (age, party) {
        var $this = this;
        var agevalue = Math.max.apply(null, age);
        var partyNmae = party[age.indexOf(Math.max.apply(null, age))];
        this.ageabove_30.push({ "31-45": agevalue, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.age_20 = function (age, party) {
        var $this = this;
        var agevalue = Math.max.apply(null, age);
        var partyNmae = party[age.indexOf(Math.max.apply(null, age))];
        this.ageabove_20.push({ "21-30": agevalue, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.age_18 = function (age, party) {
        var $this = this;
        var agevalue = Math.max.apply(null, age);
        var partyNmae = party[age.indexOf(Math.max.apply(null, age))];
        this.ageabove_18.push({ "18-20": agevalue, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.maxAgriculture = function (incomebency, party) {
        var $this = this;
        var agriculturevalue = Math.max.apply(null, incomebency);
        var partyNmae = party[incomebency.indexOf(Math.max.apply(null, incomebency))];
        this.agriculture_latest.push({ "Agriculture": agriculturevalue, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.maxJobs = function (incomebency, party) {
        var $this = this;
        var agriculturevalue = Math.max.apply(null, incomebency);
        var partyNmae = party[incomebency.indexOf(Math.max.apply(null, incomebency))];
        this.jobs_latest.push({ "Jobs": agriculturevalue, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.maxInfrastructure = function (incomebency, party) {
        var $this = this;
        var agriculturevalue = Math.max.apply(null, incomebency);
        var partyNmae = party[incomebency.indexOf(Math.max.apply(null, incomebency))];
        this.infrastructure_latest.push({ "Infrastructure": agriculturevalue, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.maxLaw = function (incomebency, party) {
        var $this = this;
        var agriculturevalue = Math.max.apply(null, incomebency);
        var partyNmae = party[incomebency.indexOf(Math.max.apply(null, incomebency))];
        this.law_latest.push({ "Law & Order": agriculturevalue, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent.prototype.maxGovernmance = function (incomebency, party) {
        var $this = this;
        var agriculturevalue = Math.max.apply(null, incomebency);
        var partyNmae = party[incomebency.indexOf(Math.max.apply(null, incomebency))];
        this.governance_latest.push({ "governance": agriculturevalue, "Party": partyNmae });
    };
    ForecastTrendAnalysisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forecast-trend-analysis',
            template: __webpack_require__(/*! ./forecast-trend-analysis.component.html */ "./src/app/politics-usecase/forecast-trend-analysis/forecast-trend-analysis.component.html"),
            styles: [__webpack_require__(/*! ./forecast-trend-analysis.component.css */ "./src/app/politics-usecase/forecast-trend-analysis/forecast-trend-analysis.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _core_databot_service__WEBPACK_IMPORTED_MODULE_0__["DatabotService"]])
    ], ForecastTrendAnalysisComponent);
    return ForecastTrendAnalysisComponent;
}());



/***/ }),

/***/ "./src/app/politics-usecase/poltical-statics/poltical-statics.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/politics-usecase/poltical-statics/poltical-statics.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Padding*/\r\n\r\n.pt-4{\r\n    padding-top: 4px\r\n}\r\n\r\n.pt-0{\r\n    padding: 0px;\r\n}\r\n\r\n.ptrbl-0{\r\n    padding: 0px\r\n}\r\n\r\n.plr-2{\r\n    padding-left: 2px;\r\n    padding-right: 1px\r\n}\r\n\r\n/* .plr-2{\r\n    padding-left: 2px;\r\n    padding-right: 0px\r\n} */\r\n\r\n/*Padding*/\r\n\r\n/*Margin*/\r\n\r\n.mt-7{\r\n    margin-top: 7px\r\n}\r\n\r\n.mt-6{\r\n    margin-top: 6px\r\n}\r\n\r\n/*Margin*/\r\n\r\n/*Font-size*/\r\n\r\n/*Font-size*/\r\n\r\n/*Font-size*/\r\n\r\n/**/\r\n\r\n.panle-one-wrapper{\r\n    background-color: #0E4B68;\r\n    margin-top: 2px;\r\n    height: 27px;\r\n    font-size: 16px;\r\n    color: white;\r\n    padding-left: 8px;\r\n}\r\n\r\n.category-txt{\r\n    background-color: #E22F2F;\r\n    text-align: center;\r\n    \r\n    border-radius: 5px;\r\n    color: white;\r\n    line-height:32px;\r\n    font-size: large;\r\n}\r\n\r\n.dropdown-wrapper{\r\n    width:70%;\r\n    height: 32px;\r\n    background-color: #E22F2F;\r\n    color: white;\r\n}\r\n\r\n.panle-parameters-wrapper{\r\n    background-color: #8A8A8A;\r\n    margin-top: 9px;\r\n    height: 27px;\r\n    font-size: 16px;\r\n    color: white;\r\n    padding-left: 8px;\r\n}\r\n\r\n.card-header-wrapper{\r\n    height: 30px;\r\n    background-color: #F5C8C9;\r\n    text-align: center;\r\n    padding-top: 5px;\r\n}\r\n\r\n.card-height-wrapper{\r\n    height: 200px;\r\n    background-color: #F5F5F5\r\n}\r\n\r\n.progress {\r\n    height: 29px;\r\n    margin-bottom: 16px;\r\n    margin-top: 29px;\r\n   \r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.comfort-win-header-wrapper{\r\n    background-color: #22CE5C;\r\n    font-size: 19px;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.progress-wrapper{\r\n    margin-bottom: 2px;\r\n    margin-top: 0px;\r\n}\r\n\r\n.li-group-item-height{\r\n    height: 51px\r\n}\r\n\r\n.card-body-wrapper{\r\n    background-color: #F6F6F6\r\n\r\n}\r\n\r\n.progress-bar {\r\n \r\n    background-color: #344183;\r\n   \r\n}\r\n\r\n.state-analysis{\r\n    border-bottom: 1px solid #F1F1F1;\r\n    margin-top: 3px;\r\n    padding-bottom: 4px; \r\n    background-color: #F6F6F6;\r\n}\r\n\r\n.content {\r\n    display:none;\r\n    }\r\n\r\n.pop:hover .content{\r\n    display:block;\r\n    position:absolute;\r\n    padding:10px;\r\n    background-color:#344183;\r\n    color:#fff !important;\r\n    box-shadow: 0 0 10px #fff;\r\n    z-index:999999999 !important;\r\n    }\r\n\r\n\r\n\r\n   "

/***/ }),

/***/ "./src/app/politics-usecase/poltical-statics/poltical-statics.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/politics-usecase/poltical-statics/poltical-statics.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n  <div class=\"col-md-12 panle-one-wrapper\">\r\n    <span>\r\n      Andhra Pradesh Legislative Assembly.2014\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"col-md-12 pt-4\">\r\n    <div class=\"col-md-2 pt-0 category-txt\">\r\n      <span>Select category</span>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div class=\"form-group\">\r\n        <select id=\"demographic\" name=\"demographic\" class=\"form-control dropdown-wrapper\" ([ngModel]) =\"demographicnames\"\r\n      (change)=\"ChaneDemographic($event)\">\r\n      <option>Demographic</option>\r\n          <option>Gender</option>\r\n           <option>Income Group</option>\r\n          <option>Age Group</option>\r\n          <option>Major Concern</option>\r\n          \r\n          </select>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12 panle-parameters-wrapper\">\r\n    <span>Parameters</span>\r\n\r\n  </div>\r\n\r\n  <!--Gender-->\r\n  <div class=\"col-md-12 ptrbl-0\" *ngIf=\"showgender\">\r\n    <div class=\"col-md-7 plr-2\">\r\n    <div class=\"col-md-4 ptrbl-0 plr-2\">\r\n        <div class=\"card text-white card-height-wrapper\">\r\n          <div class=\"card-header card-header-wrapper\">{{demographiconeparam}}</div>\r\n          <div class=\"card-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                  style=\"width:70%\">\r\n                 70\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n               <ng5-slider [(value)]=\"valueparamone\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider> \r\n              \r\n            \r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-md-4 plr-2\">\r\n        <div class=\"card text-white card-height-wrapper\">\r\n          <div class=\"card-header card-header-wrapper\" style=\"background-color: #FBE9B3\">{{demographictwoparam}}</div>\r\n          <div class=\"card-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                  style=\"width:70%\">\r\n                  70\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n              <ng5-slider [(value)]=\"valueparamtwo\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n \r\n    </div>\r\n\r\n  \r\n  </div>\r\n\r\n    <!--Gender-->\r\n\r\n\r\n    <!--Demographic-->\r\n    <div class=\"col-md-12 ptrbl-0\" *ngIf=\"showdemographi\">\r\n        <div class=\"col-md-7 plr-2\">\r\n        <div class=\"col-md-4 ptrbl-0 plr-2\">\r\n            <div class=\"card text-white card-height-wrapper\">\r\n              <div class=\"card-header card-header-wrapper\">{{demographiconeparam}}</div>\r\n              <div class=\"card-body\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                      style=\"width:70%\">\r\n                      70%\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n    \r\n                <div class=\"col-md-12\">\r\n                  <ng5-slider [(value)]=\"valueparamone\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n                </div>\r\n              </div>\r\n            </div>\r\n    \r\n          </div>\r\n          <div class=\"col-md-4 plr-2\">\r\n            <div class=\"card text-white card-height-wrapper\">\r\n              <div class=\"card-header card-header-wrapper\" style=\"background-color: #FBE9B3\">{{demographictwoparam}}</div>\r\n              <div class=\"card-body\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                      style=\"width:70%\">\r\n                      70%\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <ng5-slider [(value)]=\"valueparamtwo\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n    \r\n                </div>\r\n    \r\n              </div>\r\n            </div>\r\n    \r\n          </div>\r\n    \r\n          <div class=\"col-md-4 plr-2\">\r\n            <div class=\"card text-white card-height-wrapper\">\r\n              <div class=\"card-header card-header-wrapper\" style=\"background-color: #F5f8AE\">{{demographicthreeparam}}</div>\r\n              <div class=\"card-body\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                      style=\"width:70%\">\r\n                      70%\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <ng5-slider [(value)]=\"valueparamthree\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n    \r\n                </div>\r\n    \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    \r\n        <div class=\"col-md-5 pt-0\">\r\n    \r\n          <div class=\"col-md-6 plr-2\">\r\n            <div class=\"card text-white card-height-wrapper\">\r\n              <div class=\"card-header card-header-wrapper\" style=\"background-color: #DCFA9A\">{{demographicfourparam}}</div>\r\n              <div class=\"card-body\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                      style=\"width:70%\">\r\n                      70%\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n    \r\n                <div class=\"col-md-12 plr-2\">\r\n                  <ng5-slider [(value)]=\"valueparamfour\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n\r\n    \r\n                </div>\r\n              </div>\r\n            </div>\r\n    \r\n          </div>\r\n          <div class=\"col-md-6 plr-2\">\r\n            <div class=\"card text-white card-height-wrapper\">\r\n              <div class=\"card-header card-header-wrapper\" style=\"background-color: #D0FFF1\">{{demographicfiveparam}}</div>\r\n              <div class=\"card-body\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                      style=\"width:70%\">\r\n                      70%\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <ng5-slider [(value)]=\"valueparamfive\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n    \r\n                </div>\r\n    \r\n              </div>\r\n            </div>\r\n    \r\n          </div>\r\n    \r\n    \r\n        </div>\r\n      </div>\r\n\r\n     <!--Demographic-->\r\n      <!--Income Group-->\r\n      <div class=\"col-md-12 ptrbl-0\" *ngIf=\"showincomegroup\">\r\n          <div class=\"col-md-7 plr-2\">\r\n          <div class=\"col-md-4 ptrbl-0 plr-2\">\r\n              <div class=\"card text-white card-height-wrapper\">\r\n                <div class=\"card-header card-header-wrapper\">{{demographiconeparam}}</div>\r\n                <div class=\"card-body\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"progress\">\r\n                      <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                        style=\"width:70%\">\r\n                        70%\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n      \r\n                  <div class=\"col-md-12\">\r\n                    <ng5-slider [(value)]=\"valueparamone\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n      \r\n                  </div>\r\n                </div>\r\n              </div>\r\n      \r\n            </div>\r\n            <div class=\"col-md-4 plr-2\">\r\n              <div class=\"card text-white card-height-wrapper\">\r\n                <div class=\"card-header card-header-wrapper\" style=\"background-color: #FBE9B3\">{{demographictwoparam}}</div>\r\n                <div class=\"card-body\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"progress\">\r\n                      <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                        style=\"width:70%\">\r\n                        70%\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <ng5-slider [(value)]=\"valueparamtwo\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n      \r\n                  </div>\r\n      \r\n                </div>\r\n              </div>\r\n      \r\n            </div>\r\n      \r\n            <div class=\"col-md-4 plr-2\">\r\n              <div class=\"card text-white card-height-wrapper\">\r\n                <div class=\"card-header card-header-wrapper\" style=\"background-color: #F5f8AE\">{{demographicthreeparam}}</div>\r\n                <div class=\"card-body\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"progress\">\r\n                      <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                        style=\"width:70%\">\r\n                        70%\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <ng5-slider [(value)]=\"valueparamthree\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n      \r\n                  </div>\r\n      \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      \r\n          <div class=\"col-md-5 pt-0\">\r\n      \r\n            <div class=\"col-md-6 plr-2\">\r\n              <div class=\"card text-white card-height-wrapper\">\r\n                <div class=\"card-header card-header-wrapper\" style=\"background-color: #DCFA9A\">{{demographicfourparam}}</div>\r\n                <div class=\"card-body\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"progress\">\r\n                      <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                        style=\"width:70%\">\r\n                        70%\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n      \r\n                  <div class=\"col-md-12 plr-2\">\r\n                    <ng5-slider [(value)]=\"valueparamfour\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n      \r\n                  </div>\r\n                </div>\r\n              </div>\r\n      \r\n            </div>\r\n            <div class=\"col-md-6 plr-2\">\r\n              <div class=\"card text-white card-height-wrapper\">\r\n                <div class=\"card-header card-header-wrapper\" style=\"background-color: #D0FFF1\">{{demographicfiveparam}}</div>\r\n                <div class=\"card-body\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"progress\">\r\n                      <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                        style=\"width:70%\">\r\n                        70%\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <ng5-slider [(value)]=\"valueparamfive\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n      \r\n                  </div>\r\n      \r\n                </div>\r\n              </div>\r\n      \r\n            </div>\r\n      \r\n      \r\n          </div>\r\n        </div>\r\n\r\n\r\n      <!--Income Group-->\r\n         <!--Age Group-->\r\n         <div class=\"col-md-12 ptrbl-0\" *ngIf=\"agegroup\">\r\n            <div class=\"col-md-7 plr-2\">\r\n            <div class=\"col-md-4 ptrbl-0 plr-2\">\r\n                <div class=\"card text-white card-height-wrapper\">\r\n                  <div class=\"card-header card-header-wrapper\">{{demographiconeparam}}</div>\r\n                  <div class=\"card-body\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                          style=\"width:70%\">\r\n                          70%\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n        \r\n                    <div class=\"col-md-12\">\r\n                      <ng5-slider [(value)]=\"valueparamone\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n\r\n        \r\n                    </div>\r\n                  </div>\r\n                </div>\r\n        \r\n              </div>\r\n              <div class=\"col-md-4 plr-2\">\r\n                <div class=\"card text-white card-height-wrapper\">\r\n                  <div class=\"card-header card-header-wrapper\" style=\"background-color: #FBE9B3\">{{demographictwoparam}}</div>\r\n                  <div class=\"card-body\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                          style=\"width:70%\">\r\n                          70%\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                    <ng5-slider [(value)]=\"valueparamtwo\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n        \r\n                    </div>\r\n        \r\n                  </div>\r\n                </div>\r\n        \r\n              </div>\r\n        \r\n              <div class=\"col-md-4 plr-2\">\r\n                <div class=\"card text-white card-height-wrapper\">\r\n                  <div class=\"card-header card-header-wrapper\" style=\"background-color: #F5f8AE\">{{demographicthreeparam}}</div>\r\n                  <div class=\"card-body\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                          style=\"width:70%\">\r\n                          70%\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                      <ng5-slider [(value)]=\"valueparamthree\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n        \r\n                    </div>\r\n        \r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        \r\n            <div class=\"col-md-5 pt-0\">\r\n        \r\n              <div class=\"col-md-6 plr-2\">\r\n                <div class=\"card text-white card-height-wrapper\">\r\n                  <div class=\"card-header card-header-wrapper\" style=\"background-color: #DCFA9A\">{{demographicfourparam}}</div>\r\n                  <div class=\"card-body\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                          style=\"width:70%\">\r\n                          70%\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n        \r\n                    <div class=\"col-md-12 plr-2\">\r\n                      <ng5-slider [(value)]=\"valueparamfour\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n        \r\n                    </div>\r\n                  </div>\r\n                </div>\r\n        \r\n              </div>\r\n              <div class=\"col-md-6 plr-2\">\r\n                <div class=\"card text-white card-height-wrapper\">\r\n                  <div class=\"card-header card-header-wrapper\" style=\"background-color: #D0FFF1\">{{demographicfiveparam}}</div>\r\n                  <div class=\"card-body\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                          style=\"width:70%\">\r\n                          70%\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                      <ng5-slider [(value)]=\"valueparamfive\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n        \r\n                    </div>\r\n        \r\n                  </div>\r\n                </div>\r\n        \r\n              </div>\r\n        \r\n        \r\n            </div>\r\n          </div>\r\n  \r\n  \r\n        <!--Age Group-->\r\n          <!--Law Order-->\r\n          <div class=\"col-md-12 ptrbl-0\" *ngIf=\"laworder\">\r\n              <div class=\"col-md-7 plr-2\">\r\n              <div class=\"col-md-4 ptrbl-0 plr-2\">\r\n                  <div class=\"card text-white card-height-wrapper\">\r\n                    <div class=\"card-header card-header-wrapper\">{{demographiconeparam}}</div>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"progress\">\r\n                          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                            style=\"width:70%\">\r\n                            70%\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n          \r\n                      <div class=\"col-md-12\">\r\n                        <ng5-slider [(value)]=\"valueparamone\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n\r\n          \r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n          \r\n                </div>\r\n                <div class=\"col-md-4 plr-2\">\r\n                  <div class=\"card text-white card-height-wrapper\">\r\n                    <div class=\"card-header card-header-wrapper\" style=\"background-color: #FBE9B3\">{{demographictwoparam}}</div>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"progress\">\r\n                          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                            style=\"width:70%\">\r\n                            70%\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-12\">\r\n                        <ng5-slider [(value)]=\"valueparamtwo\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n          \r\n                      </div>\r\n          \r\n                    </div>\r\n                  </div>\r\n          \r\n                </div>\r\n          \r\n                <div class=\"col-md-4 plr-2\">\r\n                  <div class=\"card text-white card-height-wrapper\">\r\n                    <div class=\"card-header card-header-wrapper\" style=\"background-color: #F5f8AE\">{{demographicthreeparam}}</div>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"progress\">\r\n                          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                            style=\"width:70%\">\r\n                            70%\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-12\">\r\n                        <ng5-slider [(value)]=\"valueparamthree\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n          \r\n                      </div>\r\n          \r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          \r\n              <div class=\"col-md-5 pt-0\">\r\n          \r\n                <div class=\"col-md-6 plr-2\">\r\n                  <div class=\"card text-white card-height-wrapper\">\r\n                    <div class=\"card-header card-header-wrapper\" style=\"background-color: #DCFA9A\">{{demographicfourparam}}</div>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"progress\">\r\n                          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                            style=\"width:70%\">\r\n                            70%\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n          \r\n                      <div class=\"col-md-12 plr-2\">\r\n                        <ng5-slider [(value)]=\"valueparamfour\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n          \r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n          \r\n                </div>\r\n                <div class=\"col-md-6 plr-2\">\r\n                  <div class=\"card text-white card-height-wrapper\">\r\n                    <div class=\"card-header card-header-wrapper\" style=\"background-color: #D0FFF1\">{{demographicfiveparam}}</div>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"progress\">\r\n                          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                            style=\"width:70%\">\r\n                            70%\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-12\">\r\n                        <ng5-slider [(value)]=\"valueparamfive\" [options]=\"options\" (valueChange)=\"onUserChangeStart($event)\"></ng5-slider>\r\n          \r\n                      </div>\r\n          \r\n                    </div>\r\n                  </div>\r\n          \r\n                </div>\r\n          \r\n          \r\n              </div>\r\n            </div>\r\n           \r\n\r\n           <!--Law Order-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <!--Election State List-->\r\n\r\n  <div class=\"col-md-12 ptrbl-0 mt-7\">\r\n    <div class=\"col-md-3 plr-2\">\r\n      <div class=\"card text-white\">\r\n        <div class=\"card-header comfort-win-header-wrapper\">Comfortable Win</div>\r\n        <div class=\"card-body\">\r\n          <div style=\"height:300px;overflow: overlay;\">\r\n          <div class=\"col-md-12 state-analysis\" *ngFor=\"let comfortablewins of comfortablewin\"> \r\n             <div class=\"col-md-6 ptrbl-0 mt-6\">\r\n              <span>{{comfortablewins.ConstituencyName}}</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 ptrbl-0\">\r\n              \r\n              <div class=\"progress progress-wrapper\">\r\n               <div class=\"progress-bar pop\" role=\"progressbar\" [style.width.%]=\"comfortablewins.TDP\"\r\n                  aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{comfortablewins.TDP}} \r\n                <div class=\"content\">\r\n                    TDP: {{comfortablewins.TDP}}\r\n                </div>\r\n                </div>\r\n\r\n                <div class=\"progress-bar pop bg-success\" role=\"progressbar\" style=\"background-color: #20AC4F\" [style.width.%]=\"comfortablewins.YSR\"\r\n                  aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{comfortablewins.YSR}}\r\n              \r\n                  <div class=\"content\" style=\"background-color: #20AC4F\">\r\n                      YSR: {{comfortablewins.YSR}}\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"progress-bar pop bg-info\" role=\"progressbar\" style=\"background-color: #EF8700\" [style.width.%]=\"comfortablewins.OTHR\"\r\n                  aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{comfortablewins.OTHR}}\r\n                \r\n                  <div class=\"content\" style=\"background-color: #EF8700\">\r\n                      OTHR: {{comfortablewins.OTHR}}\r\n                  </div>\r\n\r\n                </div>\r\n               \r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n     </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-3 plr-2\">\r\n      <div class=\"card text-white\">\r\n        <div class=\"card-header comfort-win-header-wrapper\" style=\"background-color: #9AC7FE\">Moderate Fight</div>\r\n        <div style=\"height:300px;overflow: overlay;\">\r\n        <div class=\"card-body\">\r\n          <div class=\"col-md-12 state-analysis\" *ngFor=\"let moderatefights of moderatefight\">\r\n            <div class=\"col-md-6 ptrbl-0 mt-6\">\r\n              <span>{{moderatefights.ConstituencyName}}</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 ptrbl-0\">\r\n              <div class=\"progress progress-wrapper\">\r\n                <div class=\"progress-bar pop\" role=\"progressbar\" [style.width.%]=\"moderatefights.TDP\"\r\n                  aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{moderatefights.TDP}}\r\n                  <div class=\"content\">\r\n                      TDP: {{moderatefights.TDP}}\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"progress-bar pop bg-success\" role=\"progressbar\" style=\"background-color: #20AC4F\" [style.width.%]=\"moderatefights.YSR\"\r\n                  aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{moderatefights.YSR}}\r\n                  <div class=\"content\" style=\"background-color: #20AC4F\">\r\n                      YSR: {{moderatefights.YSR}}\r\n                  </div>\r\n                \r\n                </div>\r\n                <div class=\"progress-bar pop bg-info\" role=\"progressbar\" style=\"background-color: #EF8700\" [style.width.%]=\"moderatefights.OTHR\"\r\n                  aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{moderatefights.OTHR}}\r\n\r\n                  <div class=\"content\" style=\"background-color: #EF8700\">\r\n                      OTHR: {{moderatefights.OTHR}}\r\n                  </div>\r\n\r\n                \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n       </div>\r\n      </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-3 plr-2\">\r\n      <div class=\"card text-white\">\r\n        <div class=\"card-header comfort-win-header-wrapper\" style=\"background-color: #F3DF2F\">Narrow Fight</div>\r\n\r\n        <div style=\"height:300px;overflow: overlay;\">\r\n        <div class=\"card-body card-body-wrapper\">\r\n          <div class=\"col-md-12 state-analysis\" *ngFor=\"let narrowfights of narrowfight\">\r\n            <div class=\"col-md-6 ptrbl-0 mt-6\">\r\n              <span>{{narrowfights.ConstituencyName}}</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 ptrbl-0\">\r\n              <div class=\"progress  progress-wrapper\">\r\n                <div class=\"progress-bar pop\" role=\"progressbar\" [style.width.%]=\"narrowfights.TDP\"\r\n                  aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{narrowfights.TDP}}\r\n                  <div class=\"content\">\r\n                      TDP: {{narrowfights.TDP}}\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"progress-bar pop bg-success\" role=\"progressbar\" style=\"background-color: #20AC4F\" [style.width.%]=\"narrowfights.YSR\"\r\n                  aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{narrowfights.YSR}}\r\n                  <div class=\"content\" style=\"background-color: #20AC4F\">\r\n                      YSR: {{narrowfights.YSR}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"progress-bar pop bg-info\" role=\"progressbar\" style=\"background-color: #EF8700\" [style.width.%]=\"narrowfights.OTHR\"\r\n                  aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{narrowfights.OTHR}}\r\n                \r\n                  <div class=\"content\" style=\"background-color: #EF8700\">\r\n                      OTHR: {{narrowfights.OTHR}}\r\n                  </div>\r\n                \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n    \r\n     </div>\r\n    </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-3 plr-2\">\r\n      <div class=\"card text-white\">\r\n        <div class=\"card-header comfort-win-header-wrapper\"  style=\"background-color: #f54141\">Tough Fight</div>\r\n        <div style=\"height:300px;overflow: overlay;\">\r\n        <div class=\"card-body card-body-wrapper\">\r\n          <div class=\"col-md-12 state-analysis\" *ngFor=\"let toughfights of toughfight\">\r\n            <div class=\"col-md-6 ptrbl-0 mt-6\">\r\n              <span>{{toughfights.ConstituencyName}}</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 ptrbl-0\">\r\n              <div class=\"progress progress-wrapper\">\r\n                <div class=\"progress-bar pop\" role=\"progressbar\" [style.width.%]=\"toughfights.TDP\"\r\n                  aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{toughfights.TDP}}\r\n                  <div class=\"content\">\r\n                      TDP: {{toughfights.TDP}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"progress-bar pop bg-success\" role=\"progressbar\" style=\"background-color: #20AC4F\" [style.width.%]=\"toughfights.YSR\"\r\n                  aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{toughfights.YSR}}\r\n\r\n                  <div class=\"content\" style=\"background-color: #20AC4F\">\r\n                      YSR: {{toughfights.YSR}}\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"progress-bar pop bg-info\" role=\"progressbar\" style=\"background-color: #EF8700\" [style.width.%]=\"toughfights.OTHR\"\r\n                  aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{toughfights.OTHR}}\r\n                \r\n                  <div class=\"content\" style=\"background-color: #EF8700\">\r\n                      OTHR: {{toughfights.OTHR}}\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n         </div>\r\n      </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!--Election State List-->\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/politics-usecase/poltical-statics/poltical-statics.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/politics-usecase/poltical-statics/poltical-statics.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PolticalStaticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolticalStaticsComponent", function() { return PolticalStaticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_databot_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/databot.service */ "./src/app/core/databot.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PolticalStaticsComponent = /** @class */ (function () {
    function PolticalStaticsComponent(databotService, http) {
        this.databotService = databotService;
        this.http = http;
        this.ConstituencyName = [];
        this.comfortablewin = [];
        this.moderatefight = [];
        this.narrowfight = [];
        this.toughfight = [];
        this.changecomfortwin = [];
        this.changemoderatefight = [];
        this.changenarrowfight = [];
        this.changetoughfight = [];
        this.showgender = false;
        this.showdemographi = false;
        this.showincomegroup = false;
        this.agegroup = false;
        this.laworder = false;
        this.logText = '';
        this.valueparamone = 50;
        this.valueparamtwo = 50;
        this.valueparamthree = 50;
        this.valueparamfour = 50;
        this.valueparamfive = 50;
        this.options = {
            floor: 0,
            ceil: 100,
        };
    }
    PolticalStaticsComponent.prototype.ngOnInit = function () {
        this.demographicnames = "Demographic";
        this.showdemographi = true;
        this.demographiconeparam = "OC";
        this.demographictwoparam = "BC";
        this.demographicthreeparam = "SC & ST";
        this.demographicfourparam = "Muslim";
        this.demographicfiveparam = "Christian";
        this.loadAttritionRate();
    };
    // ngOnChanges() {
    //   console.log(this.valueparamone)
    // }
    PolticalStaticsComponent.prototype.onUserChangeStart = function (changeContext) {
        console.log(changeContext);
        this.slidervalue = changeContext;
        if (this.slidervalue < 50) {
            this.moderatefight = this.changecomfortwin;
            this.narrowfight = this.changemoderatefight;
        }
        else if (this.slidervalue > 50) {
            this.narrowfight = this.changetoughfight;
            this.moderatefight = this.changenarrowfight;
        }
        // this.toughfight = this.changemoderatefight;
        // this.moderateFight = this.changetoughfight;
        // this.comfortableFight = this.changenarrowfight;
        // this.narrowfight = this.changecomfortwin;
        //   console.log(this.categoryData);
        //   this.comfortableFight(this.categoryData);
        //  this.moderateFight(this.categoryData);
        //   this.narrowFight(this.categoryData);
        //   this.fightleveltTough(this.categoryData);
    };
    PolticalStaticsComponent.prototype.loadAttritionRate = function () {
        var _this = this;
        this.databotService.loadPoliticsData().subscribe(function (data) {
            _this.categoryData = data;
            _this.fightleveltTough(_this.categoryData);
            _this.moderateFight(_this.categoryData);
            _this.narrowFight(_this.categoryData);
            _this.comfortableFight(_this.categoryData);
        });
    };
    PolticalStaticsComponent.prototype.comfortableFight = function (categoryData) {
        var index;
        for (index in categoryData) {
            if (categoryData[index]['Fight Level'] == "Comfortable") {
                this.comfortablewin.push({
                    "ConstituencyName": categoryData[index]['Constituency name'], "TDP": categoryData[index]['TDP'],
                    "YSR": categoryData[index]['YSR'], "OTHR": categoryData[index]['OTHR'],
                });
            }
        }
        this.changecomfortwin = this.comfortablewin;
    };
    PolticalStaticsComponent.prototype.moderateFight = function (categoryData) {
        var index;
        for (index in categoryData) {
            if (categoryData[index]['Fight Level'] == "Moderate") {
                this.moderatefight.push({
                    "ConstituencyName": categoryData[index]['Constituency name'], "TDP": categoryData[index]['TDP'],
                    "YSR": categoryData[index]['YSR'], "OTHR": categoryData[index]['OTHR'],
                });
            }
        }
        this.changemoderatefight = this.moderatefight;
    };
    PolticalStaticsComponent.prototype.narrowFight = function (categoryData) {
        var index;
        for (index in categoryData) {
            if (categoryData[index]['Fight Level'] == "Narrow") {
                this.narrowfight.push({
                    "ConstituencyName": categoryData[index]['Constituency name'], "TDP": categoryData[index]['TDP'],
                    "YSR": categoryData[index]['YSR'], "OTHR": categoryData[index]['OTHR'],
                });
            }
        }
        this.changenarrowfight = this.narrowfight;
    };
    PolticalStaticsComponent.prototype.fightleveltTough = function (categoryData) {
        var index;
        for (index in categoryData) {
            if (categoryData[index]['Fight Level'] == "Tough") {
                this.toughfight.push({
                    "ConstituencyName": categoryData[index]['Constituency name'], "TDP": categoryData[index]['TDP'],
                    "YSR": categoryData[index]['YSR'], "OTHR": categoryData[index]['OTHR'],
                });
            }
        }
        this.changetoughfight = this.toughfight;
    };
    PolticalStaticsComponent.prototype.ChaneDemographic = function (demographic) {
        this.demographicname = demographic.currentTarget.value;
        if (this.demographicname == "Gender") {
            this.demographiconeparam = "Male";
            this.demographictwoparam = "Female";
            this.showgender = true;
            this.showdemographi = false;
            this.showincomegroup = false;
            this.agegroup = false;
            this.laworder = false;
        }
        else if (this.demographicname == "Demographic") {
            this.demographiconeparam = "OC";
            this.demographictwoparam = "BC";
            this.demographicthreeparam = "SC & ST";
            this.demographicfourparam = "Muslim";
            this.demographicfiveparam = "Christian";
            this.showdemographi = true;
            this.showgender = false;
            this.showincomegroup = false;
            this.agegroup = false;
            this.laworder = false;
        }
        else if (this.demographicname == "Income Group") {
            this.demographiconeparam = "More than 1,00,000";
            this.demographictwoparam = "Between 99,999 & 50,0000";
            this.demographicthreeparam = "Between 49,999 & 25,000";
            this.demographicfourparam = "Between 24,999 & 10,000";
            this.demographicfiveparam = "Less then 10,000";
            this.showincomegroup = true;
            this.showdemographi = false;
            this.showgender = false;
            this.agegroup = false;
            this.laworder = false;
        }
        else if (this.demographicname == "Age Group") {
            this.demographiconeparam = "Above 60";
            this.demographictwoparam = "Between 45-60";
            this.demographicthreeparam = "Between 30-45";
            this.demographicfourparam = "Between 20-30";
            this.demographicfiveparam = "Between 18-20";
            this.agegroup = true;
            this.showincomegroup = false;
            this.showdemographi = false;
            this.showgender = false;
            this.laworder = false;
        }
        else if (this.demographicname == "Major Concern") {
            this.demographiconeparam = "Agriculture";
            this.demographictwoparam = "Jobs";
            this.demographicthreeparam = "Infrastructure";
            this.demographicfourparam = "Law & Order";
            this.demographicfiveparam = "Governance";
            this.laworder = true;
            this.agegroup = false;
            this.showincomegroup = false;
            this.showdemographi = false;
            this.showgender = false;
        }
    };
    PolticalStaticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-poltical-statics',
            template: __webpack_require__(/*! ./poltical-statics.component.html */ "./src/app/politics-usecase/poltical-statics/poltical-statics.component.html"),
            styles: [__webpack_require__(/*! ./poltical-statics.component.css */ "./src/app/politics-usecase/poltical-statics/poltical-statics.component.css")]
        }),
        __metadata("design:paramtypes", [_core_databot_service__WEBPACK_IMPORTED_MODULE_1__["DatabotService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PolticalStaticsComponent);
    return PolticalStaticsComponent;
}());



/***/ }),

/***/ "./src/app/politics-usecase/state-overview/state-overview.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/politics-usecase/state-overview/state-overview.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.panel-footer {\r\n  padding: 0px 15px;\r\n  background-color:#104b6b;\r\n\r\n}\r\n.panel-body {\r\n  padding: 8px;\r\n  background-color:#12374a\r\n}\r\n.panel {\r\n  margin-bottom: 0px;\r\n   border: none;\r\n\r\n}\r\nbody{\r\n  background-color: #fff !important;\r\n}\r\n.left {\r\n  float: left;\r\n  shape-outside: polygon(0 0, 0 300px, 200px 300px);\r\n  -webkit-clip-path: polygon(0 0, 0 300px, 200px 300px);\r\n          clip-path: polygon(0 0, 0 300px, 200px 300px);\r\n  background: linear-gradient(to top right, #67D7F5, #86F7CC);\r\n  height: 300px;\r\n  width: 300px;\r\n}\r\n.right {\r\n  float: right;\r\n  shape-outside: polygon(200px 300px, 300px 300px, 300px 0, 0 0);\r\n  -webkit-clip-path: polygon(200px 300px, 300px 300px, 300px 0, 0 0);\r\n          clip-path: polygon(200px 300px, 300px 300px, 300px 0, 0 0);\r\n  background: linear-gradient(to bottom left, #67D7F5, #86F7CC);\r\n  height: 300px;\r\n  width: 300px;\r\n}\r\n.full_bg{\r\n  background:#fff;\r\n  border-radius:5px;\r\n  border-radius: 11px;\r\n  box-shadow: 0 0 7px #ccc;\r\n\r\n}\r\n.red{\r\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAAD6CAYAAADZeGleAAAACXBIWXMAAFxGAABcRgEUlENBAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAE8FJREFUeNrsnWuQVOWdh5/33Pr0ZS4MMjA4DMP9MgzMgFzlKiqKIGAQFBPjbmLMZmvzwS9b+2Fra7e2tmqrktps1t0tjYm5bRI0Se2ajRo1xoAYbxGVxMRLELkIgiLKTHdPd59z9gMmS3CM0IeZ6e75PVVWWdR0n3P+3U///u97znmPiaIIIcT5wVIJhDh/OL//nwPd3eciYTMwHvg0sBGoA4zKKYYLUalgjb3/vr90Wsff0a9QZ8lMYDnwt8BYlVUMS4IAd0pbzmoYcfRDE+ojaAbWAn8PtKmiYjgTZnPUfeLG7Sad/lE5Qs1+P5E2q5RC6RRijUhF/qKVzxvLjs5VqOXAvwOzVEkhTqVTZuP63XZj5tk/OSnRD8uAO4EpKqMQQARERdKXXrXTJOt2vv8vf8SHTZt3Af8pmYQ4zadcjuTS+fvcGTMPAIn+/qY/ocYA/wh0qIRC/H86RX15/Esue9a+oPkHQOFshboMuFIVFOI0n0olnPaWwJs9ey/GOgKEZyPUFOAf0BUUQvyxUD0nSa/f9HN/zvx/Bfo+7O9OF8cGVgPtKp8QpxGEmPpk5E6acBzLOtnfZER/Qo0A/kbVE+KDkxH+vHn7EgsXPPhR3dvp0+aj0FUQQnxgNiIiJHHR/NeclvF3A+/+qb8+3bbPq3hCnEGhhDthXC6x+KKdf6rV60+oj6l6QvwxYamAM3X64UT3om8B752LUPUqnxCnNXtBgN3YUEytWLTHGPusbk86XSjdzyTE6QQlnNbWd9JXbbodOHyuQgkh/hBPEcZ18GZPO2pS9fuAXgklRNmDpxB75Mje+k/d/EXglbN9mYQSoj8M2BeOzjmtk14CShJKiDi4bpTetP4+IH8uL5NQQvQzfrIyqTC98frtwG4JJUSs8VNE6tKlzxlj7T/XlzqqnhAfMIr09Td+PQqDX/ERC8Ea21FCCfGhBAFu5+Rj7riJb5fzciWUEKdnU76P+k/f8m3jejswRkIJUX46hVijG0nMnLMXYw4Rhh/9GstSyydEv+mUzVL/8W0/tpuafkCZD9FQQgkBpy418iySF696GjdxaonlMlo+JZQQQJTN4y9bsM9uGb0/jhcSSgggLORIrVn/uD1y9HagKKGEKDed8gW8GRN7vVmznowjk8ZQQgBhtpfU6suedSdP+m7UlzsnoUwiKaGE+ANBgN2UwZs9e7+xEsUoysZ6Owklhnc69faS3rBuj79o6Z1A1vgpCSVEeYOnCONYeDNnvm3VN+6OgqBwrm9hbFtCCQEQ9RXwOqYfT65YcifQU+7JXAklBBAFRbyO2fvcKbMeBQLjxNdB0+ZieBIE2KOaSolFXb86nwt+SSgxPNOpVMQZN/54atWaO4FDEkqIcglDjJ8I/UXdr5tU/bHz+dYSSgxLoeymEdnMtVvuArISSog47Z4BZ2LrSefCSc8B+yWUEGXbFGGl08X6Wz57B/Dq+X57CSWGHXZjPf68ix8GjkkoIWJhSK5dtQvwB+LdJZQYXjp5DvU3fvYrwGMSSog4BCHe3OmHTKbuBOe4xLKEEuIMolKRui3X321s5ycDtQ0JJYYHpRC7rTmXmLv4RSCQUELESadclrqt195vMpmXB/J7r6vNRe0TRpCy8Zes2mMcd8dAbkoJJWrfp94s6Y3rdztt4x8a6O+8EkrUeK8HlPKkLrvqUSuZ3jXQm1NCidr2qVDAmzP9uNvWehxISigh4rR7PSfJbL7hYae1/WtAn4QSotx0KgU4Y5oid+L4Y9jOcSCUUEKUK1Q2i798+YteV9ftDNCVERJKDJNeL8Qk7Chx0YKXrXTjwcHarIQStZlO+T68zo6j/uKFjwzmdiWUqE2hwiKJ2XMOueOn3AO8I6GEKJdiEbetNZu6bNV9QI8SSog46VQs4E6Z+mZiwdJvAL0SSohyCSNMXTpKdHfsA8sM9uYllKitdCqVcFoufCez9YbbgIMSSogYGMfgTptwwmoc9TKQG+zt6+JYUUPtXoiVqSvWXbf5TqLoxcEx2EgoUbvYLRdkve4lz4S5bDgY27NSaQklatUmi/Q16x80tnvUpNwh2QUJJWpn/JT0yGza9n2i6PnB26haPlGDREFIauXiX+EkfhOVSoPnk+tKKFGDBAH1N93yVWNbe4ZyNySUqIl08qaNO+m0TXgLa2jPBOk8lKh+oXJ5Mlu23mtc99Gh3hcJJaqbMMJq8EksXvFLLPughBIijk/ZLJlN63Y6o8ccqYQhjIQSVdzrRUBIYvGK542fvBcoSSghyk2nXB5/SfcRb8bM54FiJeyTZvlE9QZUrpf0hi0POS2t3yKKCkOyEzqxK2pCpkIRd2Jrrzux/R3Ai8Kwb0h8sm0JJWqg3evpoe7G6572OmbdAxTP/GJrDCXE2RKE2PVJEp1zDhs3+QyDtOaehBK1mU75PF7X7MPevDnfZwAfniahxHAYPQEBie55v3NGt+2gQmb3JJSoTp0KJdyJ7e8mVy17AvAqbf8klKguSkW8yZOPJroW/hdwREIJUS5BgNVYH/jLFr+AsY4yCE/TkFCidtu9Ygln4sS3Mtde/8/AG5W4jxJKVA+eHbkzJh3F8nKVuosSSlRNu2c3jczV3/Dx24ETEkqImLjjxmTdSTMfZwhWhJVQooYGTxG4bphaf8V9wIFK3lUJJaoCqz5Fev2W7wNvSSghYpK6fMWTxk/lKl58fVSi4jGQ2XzD3cAOCSVEHEoBidlT3nbGtf8OKEgoIWIQFfqou+VzXzF+8sdVMdbTRyYqljDEGt1Y9KZ17ufUZeYSSoiyfTrZS911Wx+y6jJ7qmWfdQu8qNBeD7AjUqvXPmU8/7Fq2W0llKjMdMrlSK5afMAaNXJXNX1PlVCiMgOqL0tq7cZH7KYLdkSlYlip+2kcPc5GVLpMhSLutPasN2P6fjB2paxopIQS1dnu9fbScNWf7/ImT78LyGMsCSVEWQQB9si6yO2YsQ/bOUoYVvZ0+RnPo9KkhKisdMpmSS5f9lt/waJ/A3qrbf+VUKKCBk8RxgFvTtdeq27Eof4SoNJRQonK8amvgDt18gl/8YKdVOACLBJKVJdQpT68WZ2HvGlzvkkF3+YuoUQVyBRgN1+QTy5d+CKQqNbjkFCiMigVcdsnvJ285IqvAscllBBlx1MEvovX3XHI+Jl9wHsSSohyfQoCnJaxJ+r/7OYvAq9V87Fo2lwMOcYyuO2teXvkmFejUqFQVfvueBJKVFa7Z1LJYmbblu/29wVVyyfEOQplX9DUl1x6+Y+AZ6v9cCSUGOKeCZKXLnuaKp7Zk1CigkbxNpnN274DPC+hhIjT7QUhycXd+5wL29+ulWOSUGLIWj0KfaS3XHc3sFtCCREnnUohTtuoktfR/Ttgn4QSIo5QuSx1N3/me/aIkffW1JBQH60YdMIIk/JIdC34NcYciYKgejvXM9a7kFBi8H3KZslsvvJZp2XMIcA1tl1UyydEWb0eEBRIb9j6iJVp2A4Ua+nwJJQYXJ/6Cnizp2XtMc37a/H4JJQY3Havt4fU5Wt3uuPbv00VPJ5GQonKpRhgtzQVEvPnv4JxCrV4iBJKDF46ZXtJLlv6kjez40dAIKGEKHfsFEYYzyLRNfeglW54AshLKCHKFSqfIzF/7qHUmsvuALK1epwSSgyCTREmDPBmdb5uj2rdBZQklBDl+lQKcMaNyfmLLnoB8Gr5WCWUGHihCn24nd37ksvXfAF4Q0IJUS5hhFWXjrxZkw9iTJ4qefi0hBIV2u6VsFtaTqY3bPoycKjWj1dCiQHF2AZ3xuTDTnPba8PheCWUGMB2L8TU1RXqtlx7DzWyCIuEEkPY70XYo0cG/vxlPwUOSygh4rR7jhNlrt34Q+C54XLMEkoMWDqRSUaZjdfdQ5U+60lCiYoSKrmk+7cmmc4Pp8OWUGKAfAqp/9Tn7gR+KqGEiEMQ4E1qzdsXjt9LDV+31x9apEWc/3TK5cncsG275Xn/GwW17ZOxHQklBpAwxDQmo8TC5XsiIqJiUUIJUbZPvVnqrrvuF86o5qeM40XV/rwntXxiCHs9gBKp1Wt3GT+5s5oXsDz7hNJCl2KgfMrn8Zct3OdMaD8G+ObU1eVKKCHKavdyvaQ3bH7UGTXme0ARa/hNImvaXJyfdCqUcNvHBt6kCW+CeZMaXdVIQonBESrbS/KS1b/0Zsy6ixpbXllCicElCDGZRJiYO28vTuINavyuXAklBjadcjn8i+a+7i9c8OhwH5dLKBHTJohMgNfRedhubv0f4B0JJUSZhIUC7qSJPak1q+8Heod7PTRtLuJRLODOnHnQ65z/9SgonRxuh3/mpUdKKFF+txeE2E0NxeSiua8AviqihBJxKBVwJ844ml676UvAkTN/rTWGEuKs4ynCuA7ujElvm3T9fqBHRZFQolzCEGtEUz6zacNdwOsqiIQScccLbWPf82bNf5xhfGWEhBLnp93zvDB9zboHMEYySSgRF1OfDlKr1t4P7FY1JJSIlVCQWnvJk1bDiF+rGGe0wSqBOPd4iqi/8eavEkV7VAujhBIxCEK8WZOP2U2jciqGEkrEJOzL0/BXt96O7Tx+5q+zUEKJc7IpxB7VgDe943WMOaCCSCgRx6dcnvTGq3aalP+gqiGhRByiCONA+opNDxvXP6iCSCgRx6dcnuTKRa/aY1sOALYqIqFEnHavkCd1+bon7KZRd6NLjSSUiJFOfQW8GRN7vc7Op4CCKiKhRJx06j1J+qqrd7kTp3xL6SShRByCEKsxg9sx6yDGLqkgEkrE8amnh9TqS/f43d3fUTpJKBFr8BRhbEh0zj5iNYz8BdCnokgoUa5PhQLe9CnveQu675FMZ4eu5RMfLlSpiNc975XEjK4HoiAIVJEPoudDibOjFGCPagr8hd0vYtmBLoNVyydippM7efKR1Jp1twFvqCJq+US5hBH4XpiY23nYOP67hKFq8qGRZEko8RHpFAQ4LS0nM9duvR3ID8cnEarlE+f1W+FOanvXGTvhCbTmnoQScdq9ECuZKmW2fOwe4C0VREKJmNgjG6LkijX3AkdUDQkl4g2yo9RVlz4GlsbXEkrExbgO6Q2btwNPqhoSSsQcPyXmzTzgtLQdQE8jLAvFuvgDUVCi/tOfvQvbfoAoUkHOKtKNhBL9EIQ445r7nPZJh6JSMdTJ3LP0yfMllOgnnbJZ6j/x+R9aI5peMpZjAEWUWj5R3tgpwqRd/JVXPGMsZ4cKUj6alBCE2TzJy1f+1q7P7NZ3Qgkl4lLIkr5y48Mm0/CoWj0llIgzdsoX8OZ1vOlOnX4QSKgiEkrEafdyWZKrL9/tjB37Q7TmnoQSMdKpFGCPbsTvnvsqlnMQ0Fy5xlCibKF6e8hsvPaX/oKFtxFFeoBaOejErjjV60XgO7gzOg7i+MeiQl41KccnndgVAFEuh7+g61Dy4sUPAdGZXwyhlk+ctU0QBUX8ixbtdcZP+TbwropyftCkxHCkVMJpbSl43TOfQhMREkrEDKhCAXfa9MP+khV3AidVEQklyiUMMfXJ0F809yXjJrW8soQSsdKpVMIe0/Juat26bwBvqiISSpRtU4SxLbzpk044zeNfALIqioQSMYSyRjTm6z75yS8Dv1FBzj+aNh9uQo0ZlU10zn+GMNTTNM5LJGkp5uGL60R111z9INCr5ZXV8om46ZRORpmtN30N2K2CSCgRU6jEgtl7iSLN7EkoEdunIKDups/cgTEvqBoSSsSSKcSd0noyMb3zgKohoURc8n3Ubdv231jW4yqGhBJxCCOsRh9/0YrnsKz9KoiEEnF8yuXIXHP1Lnt08z2qhoQSsQZPEZiA5JWbHjFeUg+ellAilk/5PvxFcw87Y5oP6LOWUCJuu5ftIfOx6++3R1/4TaCoikgoUW46FUq441tybnvbCcBWRSSUiJNOvT34l1622506/T50m7uEEnFsirDSLn73vIPGT+8CtEaYhBLlj51y+AsXHkguXfJdQLdpDCK6faPmBk+ACUh0db1mNY3ZEZUKmowYQIzjSaia9qlQwJ3UfsJfvuQZwDe2PmIllChfqFKBRNfc1xKzF/wH8CZGXb2EEuURhFhNDWGia+Y+LDuv29wHgTPufNbPVy2lU7GA2zb+rfS6DV8CDqkiSigRB8+N3FnTD5v0iKP9/XqKQQgslaBW2r0Aa0RjPrP5mu1Ajwoy9EJpjetqbveIcC4cnU/MnPdz4KAqMvRC/VjlqFabIozvB3Xbtt4NvKyCVMYY6l+AG1WSKv1lrEuRWn3lvVFf/i1VY/AwiQ9/guEbwBFgjMpUfSQvufhZ46dLBJopr5SEehv4O+B2laXKfiVdm8a/uPU2YAe27tSolDFUADwGHFZZqogwxJ3W/o6paziOriqvKKEAXgT+mlOXWIoqICoUqLvh498xrnO/qlF5QgH87P3/RBWkk93cWPAXLn8ejG4irFChDr6fUq+qPBXuUzZHeuPax0wmo8+qgoUCeAb4HKCFESu21wOsiOTKK542XuJnatMrWyiAh4DPoBOFlelTLkfq8uV73SlTf4IuIasYPuri2J8AnwT+CVilclWQUPksqSuv/qmVadgZFfs0fhoijJs4J6EAngBuAq4HbgWaVcYhlqlQxJ3W3utNnXIEcI3tlFSV6kio37Mf+ALwOHAlcDNwgco3RJMRPe+R2XbrA+6EqbcDfVg6mVttQsGpE787gaeAu4E5wBZgJbqvavAoBdhN9bjjxx3Ddt5Ca+5VVgsYRZocEuJ88X8DAEaGlErgbUIMAAAAAElFTkSuQmCC\");\r\n  background-size:100% 100%;\r\n  min-height: 111px;\r\n\r\n\r\n}\r\n.bg_new {\r\n  background:#e23030;\r\n  color:#fff;\r\n  margin:0 !important;\r\n}\r\n.bg_blue {\r\n  background:#104b6b;\r\n  color:#fff;\r\n  margin:0 !important;\r\n}\r\n.p-15{\r\n  font-size:11px;\r\n  font-weight:bold;\r\n}\r\n.orange{\r\n  color:#f7862c;\r\n}\r\n.blue {\r\n  color:#4a5387;\r\n}\r\n.white{\r\n  color:#fff !important;\r\n  padding-left: 8px;\r\n  font-size:12px;\r\n}\r\n.panel-footer {\r\n border-top:none;\r\n\r\n}\r\n.panel-footer-wrapper{\r\n  color: white;\r\n  font-size: 18px;\r\n  padding-left: 36px;\r\n}\r\n.category-wrapper{\r\n  padding: 0px;\r\n  font-size: 17px;\r\n}\r\n.ptrbl{\r\n padding: 0px;\r\n}\r\n.pt-25{\r\n  padding-top: 25px\r\n}\r\n.pt-22{\r\n  padding-top: 22px;\r\n}\r\n.pt-9{\r\n  padding-top: 9px\r\n}\r\n.pl-16{\r\n  padding-left: 16px\r\n}\r\n.pt-7{\r\n  padding-top: 7px\r\n}\r\n/**/\r\n.mt-3{\r\n  margin-top: 3px\r\n}\r\n/**/\r\n/**/\r\n/*Font-Size*/\r\n.fs-18{\r\n  font-size: 18px\r\n\r\n}\r\n.border-bottom-wrapper{\r\n  border-bottom: 2px solid #6A9DB7;\r\n\r\n}\r\n.card-header-wrapper{\r\n  text-align: center;\r\n  font-size: 22px;\r\n  background-color: #E23030;\r\n  color: white;\r\n  padding-bottom: 4px;\r\n}\r\n.top-parties-wrapper{\r\n  background-color: #E23030;\r\n  margin-top: 2px;\r\n  font-size: 19px;\r\n  text-align: center;\r\n  color: white;\r\n  padding-bottom: 5px;\r\n}\r\n.txt-align{\r\n  text-align: center\r\n}\r\n.fs-18{\r\n  font-size: 18px\r\n}\r\n.tdp-block{\r\n  width: 41px;\r\n  height: 31px;\r\n  background-color: yellow;\r\n  border-radius: 1px;\r\n  display: inline-block;\r\n}\r\n.age-lables{\r\n  width: 9px;\r\n  height: 9px;\r\n  display: inline-block;\r\n  border-radius: 6px;\r\n}"

/***/ }),

/***/ "./src/app/politics-usecase/state-overview/state-overview.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/politics-usecase/state-overview/state-overview.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\" style=\"background:#FFFFFF;\">\r\n  <div class=\"col-md-12\" style=\"padding: 0px\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-body\" style=\"color:white\">ECR</div>\r\n      <div class=\"panel-footer panel-footer-wrapper\">Andhra Pradesh Legislative Assembly</div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <div class=\"col-md-8\" style=\"margin-top:20px;border-bottom:1px solid #f4f4f4;\">\r\n              <div class=\"col-md-6 category-wrapper\">\r\n                <span>Total Constituencies</span>\r\n              </div>\r\n              <div class=\"col-md-2 category-wrapper\">\r\n                <span>Gen.</span>\r\n                </div>\r\n                <div class=\"col-md-2 category-wrapper\">\r\n                  SC.\r\n                  </div>\r\n                  <div class=\"col-md-2 category-wrapper\">\r\n                    ST.\r\n                    </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6  col-md-offset-6\">\r\n\r\n            </div>\r\n\r\n            <div class=\"col-md-8\" style=\"border-bottom:2px solid #6A9DB7;padding-bottom:10px;\">\r\n                <div class=\"col-md-6 category-wrapper\">\r\n                  <span><b>175</b></span>\r\n                </div>\r\n                <div class=\"col-md-2 category-wrapper\">\r\n                  <span><b>139</b></span>\r\n                  </div>\r\n                  <div class=\"col-md-2 category-wrapper\">\r\n                   <b>29</b>\r\n                    </div>\r\n                    <div class=\"col-md-2 category-wrapper\">\r\n                    <b>7</b>\r\n                      </div>\r\n  \r\n              </div>\r\n            \r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n            <div style=\"display:inline-block;\">\r\n                <div class=\"pull-left txt-align\" style=\"margin-top:2px;margin-right:18px;\">\r\n                  <span class=\"age-lables\" style=\"background:#F6EB17\"></span>&nbsp;<span class=\"fs-11\">YSRCP</span>\r\n  \r\n                </div>\r\n                <div class=\"pull-left txt-align\" style=\"margin-top:2px;margin-right:18px;\">\r\n                  <span class=\"age-lables\" style=\"background: #3D7BAA\"></span>&nbsp;<span class=\"fs-11\">TDP\r\n                    </span>\r\n  \r\n                </div>\r\n  \r\n                <div class=\"pull-left txt-align\" style=\"margin-top:2px;margin-right:18px;\">\r\n                  <span class=\"age-lables\" style=\"background:#f44E42\"></span>&nbsp;<span class=\"fs-11\">Seats\r\n                    </span>\r\n  \r\n                </div>\r\n  \r\n  \r\n              </div>\r\n        </div>\r\n       \r\n      \r\n      \r\n      <div class=\"col-md-12\">\r\n            <img src=\"../../../assets/iconss/map.png\" style=\"width:100%; height:100%;\">\r\n        </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"col-md-6 mt-3\">\r\n    <!--Electorial Features-->\r\n    <div class=\"col-md-12\" style=\"padding: 0px\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-wrapper\">Electorial Features</div>\r\n        <div class=\"card-body\">  \r\n          <div class=\"col-md-7 pt-25 border-bottom-wrapper\" style=\"background-color: #fff;padding-bottom:59px;\">\r\n            <div class=\"col-md-12 txt-align\">\r\n                <span style=\"font-size:18px;\">Total Booth:</span> <span style=\"font-size: 20px;padding-left: 33px;\">38801</span>\r\n            </div>\r\n            <div class=\"col-md-12 txt-align\" style=\"padding-top: 9px\">\r\n                <span style=\"font-size: 18px;\">Voter Polled:</span> <span style=\"font-size: 20px; padding-left: 33px;\">2,89,51,390</span>\r\n            </div>\r\n              \r\n\r\n          </div>\r\n          <div class=\"col-md-5 pt-9 border-bottom-wrapper\" style=\"border:1px solid #f4f4f4;\">\r\n            <div class=\"col-md-12 txt-align\">\r\n              <span class=\"fs-18\">Voter Turn Out</span>\r\n            </div>\r\n            <div class=\"col-md-12 txt-align\">\r\n                <circle-progress [percent]=\"78.9\" [radius]=\"45\" [outerStrokeWidth]=\"5\" [showInnerStroke]=\"false\"\r\n                [outerStrokeColor]=\"'#094361'\" [animation]=\"true\" [animationDuration]=\"300\" [showTitle]=\"true\"\r\n                [subtitle]=\"\"  [showImage]=\"false\"  [showSubtitle] = \"false\"\r\n                ></circle-progress>\r\n\r\n            </div>\r\n \r\n\r\n          </div>\r\n\r\n          <div class=\"col-md-7 border-bottom-wrapper\" style=\"background-color: #fff;border:1px solid #f4f4f4;border-bottom: 2px solid #6A9DB7;padding-bottom: 32px;\">\r\n              <div class=\"col-md-12\" style=\"text-align: center;font-size: 19px;\">\r\n                <span>Sex Ratio</span>\r\n\r\n              </div>\r\n                  <div class=\"col-md-12 txt-align\">\r\n                    <img src =\"../../../assets/iconss/male.png\" alt=\"maleimage\" width=\"10%\">\r\n                      <span style=\"font-size:18px;\">Male Ratio:</span> <span style=\"font-size: 20px;padding-left: 33px;\">17315552</span>\r\n                  </div>\r\n                  <div class=\"col-md-12 txt-align\" style=\"padding-top: 9px\">\r\n                      <img src =\"../../../assets/iconss/female.png\" alt=\"maleimage\" width=\"10%\">\r\n                      <span style=\"font-size: 18px;\">Female Ratio:</span> <span style=\"font-size: 20px; padding-left: 33px;\">17604377</span>\r\n                  </div>\r\n                    \r\n      \r\n               \r\n           \r\n                \r\n  \r\n            </div>\r\n            <div class=\"col-md-5 pt-9 border-bottom-wrapper\" style=\"padding-bottom:43px;\">\r\n                <!-- <span style=\"font-size: 18px;\">Voter Polled</span><br> <span style=\"font-size: 20px; padding-left: 33px;\">25217251</span> -->\r\n\r\n                <p class=\"txt-align\" style=\"font-size: 18px; padding-top: 17px;\">Total Electors</p>\r\n\r\n                <p class=\"txt-align\" style=\"font-size: 21px;\">3,67,16,839</p>\r\n          </div>\r\n\r\n\r\n\r\n       </div>\r\n      </div>\r\n\r\n    </div>\r\n   <!--Electorial Features-->\r\n\r\n    <div class=\"col-md-12 top-parties-wrapper\">\r\n      <span>\r\n        Top Parties\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\" style=\"padding: 0px;\">\r\n      <div class=\"col-md-4\" style=\"padding: 3px;margin-top:10px;\">\r\n        <div class=\"full_bg col-md-12\" style=\"padding: 0px;\">\r\n          <div class=\"col-md-5 red\" style=\"padding: 0px;padding-left:5px !important\">\r\n              <img src =\"../../assets/iconss/ysr-image.png\" style=\"width:100\" height=\"51px\">\r\n              <p class=\"white\">YSRCP</p>\r\n           </div>\r\n         \r\n               <div class=\"col-md-7\" style=\"padding: 0px;\">\r\n                 <p class=\"pl-16\">Seats</p>\r\n                  <p class=\"pl-16 orange\">Won :67</p>\r\n                  <p class=\"pl-16 blue\">Contested :25</p>\r\n                </div>\r\n           </div>\r\n       \r\n      </div>\r\n      <!-- <div class=\"left\"></div>\r\n      <div class=\"right\"></div>\r\n      <p>Example text...</p> -->\r\n      <div class=\"col-md-4\" style=\"padding: 3px;margin-top:10px;\">\r\n          <div class=\"full_bg col-md-12\" style=\"padding: 0px;\">\r\n            <div class=\"col-md-5 red\" style=\"padding: 0px;padding-left:5px !important\">\r\n                <img src =\"../../assets/iconss/-1.png\" style=\"width:100\" height=\"51px\">\r\n                <p class=\"white\">TDP</p>\r\n             </div>\r\n           \r\n                 <div class=\"col-md-7\" style=\"padding: 0px;\">\r\n                   <p class=\"pl-16\">Seats</p>\r\n                    <p class=\"pl-16 orange\">Won :102</p>\r\n                    <p class=\"pl-16 blue\">Contested :25</p>\r\n                  </div>\r\n             </div>\r\n         \r\n        </div>\r\n        <div class=\"col-md-4\" style=\"padding: 3px;margin-top:10px;\">\r\n            <div class=\"full_bg col-md-12\" style=\"padding: 0px;\">\r\n              <div class=\"col-md-5 red\" style=\"padding: 0px;padding-left:5px !important\">\r\n                  <img src =\"../../assets/iconss/-1.png\" style=\"width:100\" height=\"51px\">\r\n                  <p class=\"white\">Others</p>\r\n               </div>\r\n             \r\n                   <div class=\"col-md-7\" style=\"padding: 0px;\">\r\n                     <p class=\"pl-16\">Seats</p>\r\n                      <p class=\"pl-16 orange\">Won:2</p>\r\n                      <p class=\"pl-16 blue\">Contested :25</p>\r\n                    </div>\r\n               </div>\r\n           \r\n          </div>\r\n       \r\n           <div class=\"clearfix\"></div>\r\n                <h4 style=\"text-align:right \">\r\n                  Government Format by Telugu Desam Party\r\n                  </h4>\r\n                  <div class=\"clearfix\"></div>\r\n                 \r\n                  <h4 style=\"float:right;font-weight:bold;\">N Chandra Babu Naidu</h4>\r\n                  <img src =\"../../assets/iconss/7-.png\" style=\"width:100;float:right\" height=\"51px\">\r\n\r\n    </div>\r\n </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/politics-usecase/state-overview/state-overview.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/politics-usecase/state-overview/state-overview.component.ts ***!
  \*****************************************************************************/
/*! exports provided: StateOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateOverviewComponent", function() { return StateOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StateOverviewComponent = /** @class */ (function () {
    function StateOverviewComponent() {
    }
    StateOverviewComponent.prototype.ngOnInit = function () {
    };
    StateOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-state-overview',
            template: __webpack_require__(/*! ./state-overview.component.html */ "./src/app/politics-usecase/state-overview/state-overview.component.html"),
            styles: [__webpack_require__(/*! ./state-overview.component.css */ "./src/app/politics-usecase/state-overview/state-overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StateOverviewComponent);
    return StateOverviewComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports.component.css":
/*!***********************************************!*\
  !*** ./src/app/reports/reports.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.panel-heading {\r\n    padding:0px;\r\n    border-bottom: 0px;\r\n     border-top-left-radius: 0px;\r\n     border-top-right-radius: 0px;\r\n}\r\n.panel {\r\n     margin-bottom: 0px; \r\n     border-radius: 4px;\r\n    box-shadow: 0 1px 1px rgba(0,0,0,.05);\r\n    border: 0px solid transparent;\r\n}\r\n.panel-body {\r\n    padding: 4px;\r\n}\r\n.container-fluid {\r\n    padding-right: 7px;\r\n    padding-left: 7px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n.vl {\r\n    border-left: 1px solid #6c950f;\r\n    height: 194px;\r\n    position: absolute;\r\n    left: 39%;\r\n    margin-left: 74px;\r\n    margin-top: 18px;\r\n    top: 0;\r\n}\r\n.img-center {\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n.img-Radius{\r\n    border-bottom-left-radius: 25px;\r\n    border-bottom-right-radius: 25px;\r\n}\r\n.talkbubble  {\r\n    padding:15px;\r\n}\r\n.talkbubble:hover {\r\n    /* width: 120px; */\r\n   padding:15px;\r\n    background: #5871b2;\r\n    position: relative;\r\n    border-bottom-left-radius: 25px;\r\n    border-bottom-right-radius: 25px; \r\n  \r\n  }\r\n.talkbubble:hover p {\r\n      color:#fff !important;\r\n  }\r\n.talkbubble:hover:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    right: -14px;\r\n    top: -23px;\r\n    left: -14px;\r\n    border-top: 24px solid #5871b2;\r\n    border-left: 14px solid transparent;\r\n    border-right: 14px solid transparent;\r\n    height: 0;\r\n    /* width: 100%; */\r\n  }"

/***/ }),

/***/ "./src/app/reports/reports.component.html":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding: 0px\">\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-body\" style=\"text-align: right;background-color:#5871b2;margin-top: 20px;\"><strong\r\n        style=\"color:white;\">Reports</strong></div>\r\n  </div>\r\n\r\n  <div class=\"col-md-12 padding:0px\" *ngIf='ReportUseCaseType==1'>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\" (click)=\"redirectDashboard()\">\r\n        <div class=\"talkbubble\">\r\n          <img src=\"../../assets/thumbnails/Fleet_overview.bmp\" class=\"img-center img-responsive img-Radius\">\r\n          <p style=\"text-align: center; color:#267872\">Fleet Overview</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\" (click)=\"redirectdriveroverview()\">\r\n        <div class=\"talkbubble\">\r\n          <img src=\"../../assets/thumbnails/Driver_performance.bmp\" class=\"img-center img-responsive img-Radius\">\r\n          <p style=\"text-align: center;color:#267872 \">Driver Profile</p>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\" (click)=\"redirectvehicleMetrics()\">\r\n        <div class=\"talkbubble\">\r\n          <img src=\"../../assets/thumbnails/Vehcile_live_metrics.bmp\" class=\"img-center img-responsive img-Radius\">\r\n          <p style=\"text-align: center;color:#267872\">Vehicle Live Metrics</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\" (click)=\"customerFeedbackAnalysis()\">\r\n        <div class=\"talkbubble\">\r\n          <img src=\"../../assets/thumbnails/Customer_feedback_analysis.bmp\" class=\"img-center img-responsive img-Radius\">\r\n          <p style=\"text-align: center;color:#267872\">Customer Feedback Analysis</p>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12 padding:0px\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\" (click)=\"redirectFinanceExpense()\" *ngIf='ReportUseCaseType==2'>\r\n        <div class=\"talkbubble\">\r\n          <img src=\"../../assets/hero_Image.jpg\" class=\"img-center img-responsive img-Radius\">\r\n          <p style=\"text-align: center; color:#267872\">Expenses Analytics</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\">\r\n        <div class=\"talkbubble\">\r\n          <img src=\"../../assets/hero_Image.jpg\" class=\"img-center img-responsive img-Radius\">\r\n          <p style=\"text-align: center;color:#267872 \">Vehicle Data</p>\r\n        </div>\r\n\r\n      </div> -->\r\n      <!-- <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\">\r\n        <div class=\"talkbubble\">\r\n          <img src=\"../../assets/hero_Image.jpg\" class=\"img-center img-responsive img-Radius\">\r\n          <p style=\"text-align: center;color:#267872\">Tire Data</p>\r\n        </div>\r\n      </div> -->\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-12 padding:0px\" *ngIf='ReportUseCaseType==3'>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\" (click)=\"redirectInventory()\">\r\n        <div class=\"talkbubble\">\r\n          <img src=\"../../assets/thumbnails/Inventory_management.bmp\" class=\"img-center img-responsive img-Radius\">\r\n          <p style=\"text-align: center; color:#267872\">Inventory Management</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\" (click)=\"redirectInventortMap()\">\r\n        <div class=\"talkbubble\">\r\n          <img src=\"../../assets/thumbnails/Stock_availability.bmp\" class=\"img-center img-responsive img-Radius\">\r\n          <p style=\"text-align: center; color:#267872\">Stock Availability</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\" (click)=\"redirectstocktracking()\">\r\n        <div class=\"talkbubble\">\r\n          <img src=\"../../assets/thumbnails/Track_order.bmp\" class=\"img-center img-responsive img-Radius\">\r\n          <p style=\"text-align: center; color:#267872\">Track Order</p>\r\n        </div>\r\n      </div>\r\n\r\n     \r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-12 padding:0px\" *ngIf='ReportUseCaseType==8'(click)=\"redirectProductManagment()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\">\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/inventory_managment.png\" class=\"img-center img-responsive img-Radius\">\r\n            <p style=\"text-align: center; color:#267872\">Project Management</p>\r\n          </div>\r\n        </div>\r\n  \r\n     \r\n  \r\n       \r\n       \r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n  <!--Human Resource-->\r\n\r\n  <div class=\"col-md-12 padding:0px\" *ngIf='ReportUseCaseType==4'>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\" (click)=\"redirectHrmsUseCaseOne()\">\r\n        <div class=\"talkbubble\">\r\n          <img src=\"../../assets/thumbnails/HR_Overview.bmp\" class=\"img-center img-responsive img-Radius\">\r\n          <p style=\"text-align: center; color:#267872\">HR Overview</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\" (click)=\"redirectHrmsUseCaseTwo()\">\r\n        <div class=\"talkbubble\">\r\n          <img src=\"../../assets/thumbnails/HR_Hiring_module.bmp\" class=\"img-center img-responsive img-Radius\">\r\n          <p style=\"text-align: center; color:#267872\">HR Hiring Module</p>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\" (click)=\"redirectHrmsUseCaseThree()\">\r\n        <div class=\"talkbubble\">\r\n          <img src=\"../../assets/hero_Image.jpg\" class=\"img-center img-responsive img-Radius\">\r\n          <p style=\"text-align: center; color:#267872\">HRMS=usecase-3</p>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n\r\n  \r\n       <!--Health Care-->\r\n     <div class=\"col-md-12 padding:0px\">\r\n        <div class=\"row\">\r\n       <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\" (click)=\"redirectHealthAnalytics()\" *ngIf='ReportUseCaseType==5'>\r\n         <div class=\"talkbubble\">\r\n           <img src=\"../../assets/inventory_managment.png\" class=\"img-center img-responsive img-Radius\">\r\n           <p style=\"text-align: center; color:#267872\">Health Care Analytics</p>\r\n         </div>\r\n       </div>\r\n \r\n       </div>\r\n       </div>\r\n     <!--Health Care-->\r\n \r\n\r\n\r\n  <!--Human Resource-->\r\n\r\n\r\n  <!--Assembly-->\r\n  <div class=\"col-md-12 padding:0px\" *ngIf='ReportUseCaseType==6'>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\" (click)=\"redirectStateOverview()\">\r\n            <div class=\"talkbubble\">\r\n              <img src=\"../../assets/images/state-overview.bmp\" class=\"img-center img-responsive img-Radius\">\r\n              <p style=\"text-align: center; color:#267872\">State Overview</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\" (click)=\"redirectForcastAnalysis()\">\r\n              <div class=\"talkbubble\">\r\n                <img src=\"../../assets/images/forecastanalysis.bmp\" class=\"img-center img-responsive img-Radius\">\r\n                <p style=\"text-align: center; color:#267872\">Trend Analysis</p>\r\n              </div>\r\n            </div>\r\n\r\n      <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\" (click)=\"redirectPolticalStatics()\">\r\n        <div class=\"talkbubble\">\r\n          <img src=\"../../assets/images/What if Analysis.bmp\" class=\"img-center img-responsive img-Radius\">\r\n          <p style=\"text-align: center; color:#267872\">Predective Analysis</p>\r\n        </div>\r\n      </div>\r\n    \r\n      <div class=\"col-md-2\" id=\"fleet_hover\" style=\"margin-top: 13px;\" (click)=\"redirectBoothIncharge()\">\r\n        <div class=\"talkbubble\">\r\n          <img src=\"../../assets/images/Booth-Incharge.bmp\" class=\"img-center img-responsive img-Radius\">\r\n          <p style=\"text-align: center; color:#267872\">Demographic Survey</p>\r\n        </div>\r\n      </div>\r\n     \r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!---->\r\n\r\n  <!---->\r\n\r\n  <!-- Example: {{ childExample }} -->\r\n</div>"

/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(router) {
        this.router = router;
        this.ReportUseCaseType = 0;
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent.prototype.ngOnChanges = function () {
    };
    ReportsComponent.prototype.ngOnDestroy = function () {
    };
    ReportsComponent.prototype.redirectDashboard = function () {
        this.router.navigate(['./dashboard']);
        localStorage.setItem('title', "Fleet Overview");
    };
    ReportsComponent.prototype.redirectInventory = function () {
        this.router.navigate(['./inventory']);
        localStorage.setItem('title', "Inventory Management");
    };
    ReportsComponent.prototype.redirectInventortMap = function () {
        this.router.navigate(['./inventormap']);
        localStorage.setItem('title', "Stock Availability");
    };
    ReportsComponent.prototype.redirectwarehouseoverview = function () {
        this.router.navigate(['./warehouseoverview']);
    };
    ReportsComponent.prototype.redirectstocktracking = function () {
        this.router.navigate(['./stocktracking']);
        localStorage.setItem('title', "Order Tracking");
    };
    ReportsComponent.prototype.redirectdriveroverview = function () {
        this.router.navigate(['./driver-overview']);
        localStorage.setItem('title', "Driver Performance Profile");
    };
    ReportsComponent.prototype.redirectvehicleMetrics = function () {
        this.router.navigate(['./vehicle-metric']);
        localStorage.setItem('title', "Vehicle Live Metrics");
    };
    ReportsComponent.prototype.customerFeedbackAnalysis = function () {
        this.router.navigate(['./customer-feedback']);
        localStorage.setItem('title', "Customer Feedback Analysis");
    };
    ReportsComponent.prototype.redirectPolticalStatics = function () {
        this.router.navigate(['./poltical-statics']);
    };
    ReportsComponent.prototype.redirectStateOverview = function () {
        this.router.navigate(['./state-overview']);
    };
    ReportsComponent.prototype.redirectBoothIncharge = function () {
        this.router.navigate(['./booth-incharge']);
    };
    ReportsComponent.prototype.redirectForcastAnalysis = function () {
        this.router.navigate(['./forecast-analysis']);
    };
    ReportsComponent.prototype.redirectHrmsUseCaseOne = function () {
        this.router.navigate(['./hrms-usecase-1']);
        localStorage.setItem('title', "HR Overview");
    };
    ReportsComponent.prototype.redirectHrmsUseCaseTwo = function () {
        this.router.navigate(['./hrms-usecase-2']);
        localStorage.setItem('title', "Hiring Module");
    };
    ReportsComponent.prototype.redirectHrmsUseCaseThree = function () {
        this.router.navigate(['./hrms-usecase-3']);
    };
    ReportsComponent.prototype.redirectHealthAnalytics = function () {
        this.router.navigate(['./healthcare-analytics']);
        localStorage.setItem('title', "Health Care Analytics");
    };
    ReportsComponent.prototype.redirectFinanceExpense = function () {
        this.router.navigate(['./finance-expense']);
        localStorage.setItem('title', "Expense Analytics");
    };
    ReportsComponent.prototype.redirectProductManagment = function () {
        this.router.navigate(['./project-managment']);
        localStorage.setItem('title', "Project Managment");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('ReportUseCaseType'),
        __metadata("design:type", Number)
    ], ReportsComponent.prototype, "ReportUseCaseType", void 0);
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/reports/reports.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/service/route.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/route.service.ts ***!
  \******************************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import 'rxjs/add/operator/map';
// //import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
var RouteService = /** @class */ (function () {
    function RouteService(http, https) {
        this.http = http;
        this.https = https;
    }
    // loadDataforVehicle() {
    //   return this.http.get<any[]>('..')
    //   }
    RouteService.prototype.handleError = function (err) {
        //console.log(err.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err.message);
    };
    RouteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], RouteService);
    return RouteService;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.bg{\r\n\r\n    background-image: url('background_Image.jpg')\r\n  }\r\n  \r\n  header {\r\n    position: relative;\r\n    background-color: black;\r\n    height: 100vh;\r\n    min-height: 25rem;\r\n    width: 100%;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  header video {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    width: auto;\r\n    height: auto;\r\n    z-index: 0;\r\n    -webkit-transform: translateX(-50%) translateY(-50%);\r\n    transform: translateX(-50%) translateY(-50%);\r\n  }\r\n  \r\n  header .container {\r\n    position: relative;\r\n    z-index: 2;\r\n  }\r\n  \r\n  header .overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: black;\r\n    opacity: 0.9;\r\n    z-index: 1;\r\n  }\r\n  \r\n  .card{\r\n  height: 400px;\r\n  \r\n  margin-bottom: auto;\r\n  width: 550px;\r\n  margin-top:5px;\r\n  margin:auto;\r\n  background-color: rgba(0,0,0,0.5) !important;\r\n  padding:15px;\r\n  font-family: Ubuntu;\r\n  }\r\n  \r\n  .clr {\r\n    color:#00b26f;\r\n    font-weight:lighter;\r\n    margin-top:2px;\r\n  }\r\n  \r\n  .p-0 {\r\n  padding:0 !important;\r\n  }\r\n  \r\n  .form-control {\r\n    border-radius:0px !important;\r\n    border:none !important;\r\n    border-bottom:1px solid #00b26f !important;\r\n    \r\n    background: transparent;\r\n  \r\n  }\r\n  \r\n  .social_icon span{\r\n  font-size: 60px;\r\n  margin-left: 10px;\r\n  color: #FFC312;\r\n  }\r\n  \r\n  .social_icon span:hover{\r\n  color: white;\r\n  cursor: pointer;\r\n  }\r\n  \r\n  .card-header h3{\r\n  color: white;\r\n  }\r\n  \r\n  .social_icon{\r\n  position: absolute;\r\n  right: 20px;\r\n  top: -45px;\r\n  }\r\n  \r\n  .input-group-prepend span{\r\n  width: 50px;\r\n  background-color: #00b66b;\r\n  color: black;\r\n  border:0 !important;\r\n  }\r\n  \r\n  input:focus{\r\n  outline: 0 0 0 0  !important;\r\n  box-shadow: 0 0 0 0 !important;\r\n  \r\n  }\r\n  \r\n  .remember{\r\n  color: white;\r\n  }\r\n  \r\n  .remember input\r\n  {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin-left: 15px;\r\n  margin-right: 5px;\r\n  }\r\n  \r\n  .login_btn{\r\n  color: #fff;\r\n  background-color: transparent;\r\n  width: 100px;\r\n  border:1px solid  #00b66b;\r\n  border-radius:15px;\r\n  margin-top:20px;\r\n  }\r\n  \r\n  .card-header{\r\n    margin-top:25px;\r\n  }\r\n  \r\n  .login_btn:hover{\r\n  color: black;\r\n  background-color: white;\r\n  }\r\n  \r\n  .form-control {\r\n    color:#fff;\r\n  }\r\n  \r\n  .links{\r\n  color: white;\r\n  }\r\n  \r\n  .links a{\r\n  margin-left: 4px;\r\n  }\r\n  \r\n  @media (pointer: coarse) and (hover: none) {\r\n    header {\r\n      background: url('https://source.unsplash.com/XT5OInaElMw/1600x900') black no-repeat center center scroll;\r\n    }\r\n    header video {\r\n      display: none;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"bg\">\r\n  <div class=\"overlay\"></div>\r\n  <!-- <video playsinline=\"playsinline\" autoplay=\"autoplay\" muted=\"muted\" loop=\"loop\">\r\n    <source src=\"../assets/videos/cb5.mp4\" type=\"video/mp4\">\r\n      \r\n  </video> -->\r\n  <div>\r\n       \r\n  </div>\r\n  \r\n  <div class=\"container h-100\">\r\n     \r\n    <div class=\"d-flex text-center h-100\"  style=\"height:76% !important;\">\r\n      <div class=\"my-auto w-100 text-white\">\r\n        <div class=\"d-flex justify-content-center h-100\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <h4 style=\"color:#fff;\">Sign UP</h4>\r\n             \r\n            </div>\r\n            <div class=\"card-body\">\r\n              <form>\r\n                <div class=\"form-group col-md-12\">\r\n                <label class=\"col-md-5 p-0 clr\">Organization Name</label>\r\n                <div class=\"col-md-7\">\r\n                  <input type=\"text\" class=\"form-control\" name=\"user1\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"col-md-5 p-0 clr\">Organization Category</label>\r\n                  <div class=\"col-md-7\">\r\n                  <input type=\"password\" class=\"form-control\" name =\"password1\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"col-md-5 p-0 clr\">Admin Name</label>\r\n                  <div class=\"col-md-7\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"adminname\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group col-md-12\">\r\n                    <label class=\"col-md-5 p-0 clr\">Admin Role</label>\r\n                    <div class=\"col-md-7\">\r\n                      <input type=\"text\" class=\"form-control\" name=\"adminrole\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-12\">\r\n                      <label class=\"col-md-5 p-0 clr\">Official Email ID</label>\r\n                      <div class=\"col-md-7\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"OfficialEmailID\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group col-md-12\">\r\n                        <label class=\"col-md-5 p-0 clr\">Contact No</label>\r\n                        <div class=\"col-md-7\">\r\n                          <input type=\"text\" class=\"form-control\" name=\"Contact No\">\r\n                          </div>\r\n                        </div>\r\n                        \r\n              </form>\r\n            </div>\r\n           \r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(router) {
        this.router = router;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/stock-tracking/stock-tracking.component.css":
/*!*************************************************************!*\
  !*** ./src/app/stock-tracking/stock-tracking.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*card*/\r\n.card_wrapper{\r\n    /* width: 18rem; */\r\n    height: 10rem;\r\n    background-color: #FFFFFF;\r\n    border-top: 2px solid #50c4bb;\r\n}\r\n.dropdown_wrapper{\r\n    width: 97%;\r\n    height: 33px;\r\n  padding: -1px 30px;\r\n  border: 0px;\r\n  border-bottom: 1px solid grey;\r\n  }\r\n.padding-left-right{\r\npadding-left: 5px;\r\npadding-right: 5px\r\n}\r\n/**/\r\n/*Padding*/\r\n.padding-top{\r\n    padding-top: 6px;\r\n    padding-left: 10px;\r\n  }\r\n/**/\r\n/*alerticon*/\r\n.alert-icon{\r\n    font-size: 42px;\r\n    color: red;\r\n  }\r\n/**/\r\n.activeclass{\r\n    background-color: #f9f9f9!important;\r\n    border-bottom: 3px solid palevioletred;\r\n\r\n  }\r\n#Map {\r\n    height:500px;\r\n    width: 100%\r\n  }\r\n.button-wrapper{\r\n    width: 50%;\r\n    float: right;\r\n    margin-top: 20px;\r\n  }\r\n.icon-text-wrapper{\r\n    margin-top: -36px;\r\n      text-align:center;\r\n      \r\n  }\r\n.icon-image-wrapper{\r\n    margin-top: -11px;\r\n    width: 30%;\r\n    margin-left: 3px;\r\n  \r\n  }\r\n@media only screen and (max-width :2160px) {\r\n    .card_wrapper {\r\n   height: 12rem;\r\n   background-color: #FFFFFF;\r\n   border-top: 2px solid #50c4bb;\r\n }\r\n .icon-text-wrapper{\r\n  margin-top: -36px;\r\n    text-align:center;\r\n    \r\n}\r\n.icon-image-wrapper{\r\n  margin-top: -11px;\r\n  width: 30%;\r\n  margin-left: 3px;\r\n\r\n}\r\n    \r\n    }\r\n@media only screen and (max-width :1920px) {\r\n    .card_wrapper {\r\n   height: 11rem;\r\n   background-color: #FFFFFF;\r\n   border-top: 2px solid #50c4bb;\r\n }\r\n .icon-text-wrapper{\r\n  margin-top: -36px;\r\n    text-align:center;\r\n    \r\n}\r\n.icon-image-wrapper{\r\n  margin-top: -11px;\r\n  width: 30%;\r\n  margin-left: 3px;\r\n\r\n}\r\n    \r\n    }\r\n@media only screen and (max-width :1680px) {\r\n      .card_wrapper {\r\n     height: 11rem;\r\n     background-color: #FFFFFF;\r\n     border-top: 2px solid #50c4bb;\r\n   }\r\n   .icon-text-wrapper{\r\n    margin-top: -36px;\r\n      text-align:center;\r\n      \r\n  }\r\n  .icon-image-wrapper{\r\n    margin-top: -3px;\r\n    width: 30%;\r\n    margin-left: 3px;\r\n  \r\n  }\r\n      \r\n      }\r\n@media only screen and (max-width :1600px) {\r\n      .card_wrapper {\r\n     height: 10rem;\r\n     background-color: #FFFFFF;\r\n     border-top: 2px solid #50c4bb;\r\n   }\r\n   .icon-text-wrapper{\r\n    margin-top: -36px;\r\n      text-align:center;\r\n      \r\n  }\r\n  .icon-image-wrapper{\r\n    margin-top: -11px;\r\n    width: 30%;\r\n    margin-left: 3px;\r\n  \r\n  }\r\n      \r\n      }\r\n@media only screen and (max-width :1440px) {\r\n        .card_wrapper {\r\n       height: 10rem;\r\n       background-color: #FFFFFF;\r\n       border-top: 2px solid #50c4bb;\r\n     }\r\n     .icon-text-wrapper{\r\n      margin-top: -36px;\r\n        text-align:center;\r\n        \r\n    }\r\n    .icon-image-wrapper{\r\n      margin-top: -5px;\r\n      width: 30%;\r\n      margin-left: 3px;\r\n    \r\n    }\r\n        \r\n        }\r\n@media only screen and (max-width :1366px) {\r\n            .card_wrapper {\r\n           height: 10rem;\r\n           background-color: #FFFFFF;\r\n           border-top: 2px solid #50c4bb;\r\n         }\r\n         .icon-text-wrapper{\r\n          margin-top: -36px;\r\n            text-align:center;\r\n            \r\n        }\r\n        .icon-image-wrapper{\r\n          margin-top: -5px;\r\n          width: 30%;\r\n          margin-left: 3px;\r\n        \r\n        }\r\n            \r\n            } \r\n"

/***/ }),

/***/ "./src/app/stock-tracking/stock-tracking.component.html":
/*!**************************************************************!*\
  !*** ./src/app/stock-tracking/stock-tracking.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n      <div class=\"row\" style=\"padding-top: 3px;\">\r\n\r\n        <div class=\"col-md-2 padding-left-right\">\r\n          <div class=\"card card_wrapper\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title padding-top\"> Stock Category</h5>\r\n              \r\n                <div class=\"form-group\" style=\"margin-left: 20px;\">\r\n\r\n                    <select id=\"category\" name=\"category\" placeholder=\"Category\" [(ngModel)]=\"categorydefaultname\" class=\"form-control dropdown_wrapper\"\r\n                      (change)=\"changecategory($event)\">\r\n                      <option *ngFor=\"let catg of categories\"[selected]=\"categorydefaultname == catg\">{{catg}}</option>\r\n                    </select>\r\n                  </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-2 padding-left-right\">\r\n          <div class=\"card card_wrapper\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title padding-top\">Vehicle</h5>\r\n                <div class=\"form-group\" style=\"margin-left: 20px;\">\r\n                    <select id=\"vehicle\" name=\"vehicle\" [(ngModel)]=\"stockItemdefaultname\" class=\"form-control dropdown_wrapper\"\r\n                      (change)=\"changeStock($event)\">\r\n                      <option>Select Vehicle</option>\r\n                      <option *ngFor=\"let stocktitem of stockitem\" [selected]=\"stockItemdefaultname == stocktitem\">{{stocktitem}}</option>\r\n                    </select>\r\n                  </div>\r\n\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 padding-left-right\">\r\n          <div class=\"card card_wrapper\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title padding-top\">Spare Part</h5>\r\n              <div class=\"form-group\" style=\"margin-left: 20px;\">\r\n                  <select id=\"sparename\" name=\"sparename\" [(ngModel)]=\"sparepartdefaultname\" class=\"form-control dropdown_wrapper\"\r\n                     (change)=\"changesparepart($event)\">\r\n                    <option>Select Spare</option>\r\n                    <option *ngFor=\"let spares of sparepart\" [selected]=\"sparepartdefaultname == spares\">{{spares}}</option>\r\n                  </select>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 padding-left-right\">\r\n          <div class=\"card card_wrapper\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title padding-top\">Store ID</h5>\r\n              <div class=\"form-group\" style=\"margin-left: 20px;\">\r\n                  <select id=\"sparename\" name=\"sparename\" [(ngModel)]=\"stockname\" class=\"form-control dropdown_wrapper\">\r\n                    <!-- (change)=\"changeValue($event)\" -->\r\n                    <option>1</option>\r\n                    <!-- <option *ngFor=\"let spares of stocks\">{{spares}}</option> -->\r\n                  </select>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-md-2 padding-left-right\">\r\n          <div class=\"card card_wrapper\">\r\n            \r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title padding-top\">Stock Quantity</h5>\r\n                <img src =\"../../assets/iconss/availability.png\" class=\"icon-image-wrapper\">\r\n                <h4 class=\"icon-text-wrapper\">200</h4>\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 padding-left-right\">\r\n          <div class=\"card card_wrapper\">\r\n             \r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title padding-top\">Stock Value</h5>\r\n                <img src =\"../../assets/iconss/costunit.png\" class=\"icon-image-wrapper\">\r\n                <h4 class=\"icon-text-wrapper\" style=\"margin-left: 26px;\">100 USD</h4>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n     \r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-2 padding-left-right\">\r\n        <div class=\"card card_wrapper\" style=\"width:77%;margin-top:3px;\">\r\n          \r\n          <div class=\"card-body\">\r\n              <h5 class=\"card-title padding-top\">ETA</h5>\r\n              <img src =\"../../assets/iconss/ETA.png\" class=\"icon-image-wrapper\">\r\n              <h4 class=\"icon-text-wrapper\" style=\"margin-left: 26px;\">8 hrs</h4>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    <div class=\"col-md-1 padding-left-right;\" style=\"text-align: center\">\r\n        <p style=\"color: red\">Alerts</p>\r\n        <i class=\"fa alert-icon\">&#xf0f3;</i>\r\n    </div>\r\n  </div>\r\n\r\n  <!--map html-->\r\n  <div class=\"row\"> \r\n    <div class=\"col-md-12\">\r\n      <div class=\"card text-center\">\r\n          <div class=\"card-header\">\r\n              <ul class=\"nav nav-tabs card-header-tabs nav_border_bottom\">\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" style=\"color: #788786;\">Order Tracking</a>\r\n                </li>\r\n               \r\n              </ul>\r\n            </div>\r\n\r\n            <div class=\"card-body\">\r\n              <div id=\"Map\"></div>\r\n              \r\n            </div>\r\n           \r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n  \r\n  </div>\r\n  \r\n\r\n</div>\r\n\r\n<!--Modal-->\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Purchase Order</h4>\r\n      </div>\r\n      <div class=\"modal-body\" style=\"height:330px;\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div>\r\n            <span>To:</span><br>\r\n             <h3>{{warehousename}}</h3>\r\n             <h4>{{city}}</h4>\r\n             <h4>{{state}}</h4>\r\n             <h4>{{country}}</h4>\r\n              </div>\r\n             <hr>\r\n            \r\n             </div>\r\n\r\n            <div class=\"col-md-6\">\r\n              <div>\r\n             <span>From:</span><br>\r\n             <h3>Willow Avenue</h3>\r\n             <h4>Nashville</h4>\r\n             <h4>Texas</h4>\r\n             <h4>United States</h4>\r\n            </div>\r\n            <hr>\r\n              </div>\r\n             \r\n             \r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">\r\n              <label for=\"inputspare\">Spare Part Name</label>\r\n              <input class=\"form-control input-sm\" id=\"inputspare\" type=\"text\" [(ngModel)]=\"spare_part\">\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n              <label for=\"inputqty\">Quantity</label>\r\n            <input class=\"form-control input-sm\" id=\"inputqty\" type=\"number\" [(ngModel)]=\"qty\">\r\n    \r\n          </div>\r\n          <div class=\"col-md-3\">\r\n              <label for=\"inputrate\">Rate</label>\r\n            <input class=\"form-control input-sm\" id=\"inputrate\" type=\"number\" [ngModel]=\"rate\">\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n              <label for=\"inputotal\">Total</label>\r\n              <input class=\"form-control input-sm\" id=\"inputotal\" type=\"number\"[(ngModel)]=\"qty*rate\">\r\n              <button type=\"button\" class=\"btn btn-primary active\" style=\"margin-top: 20px; width: 50%; float: right\">Add</button>\r\n          </div>\r\n          \r\n           </div>\r\n      </div>\r\n\r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/stock-tracking/stock-tracking.component.ts":
/*!************************************************************!*\
  !*** ./src/app/stock-tracking/stock-tracking.component.ts ***!
  \************************************************************/
/*! exports provided: StockTrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockTrackingComponent", function() { return StockTrackingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/route.service */ "./src/app/service/route.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StockTrackingComponent = /** @class */ (function () {
    function StockTrackingComponent(http, route) {
        this.http = http;
        this.route = route;
        this.dist = true;
        this.trackorder = false;
        this.rate = 100;
        /**Drop downs */
        this.categories = [];
        this.categorydefaultname = "M Category";
        this.stockItemdefaultname = "M559";
        this.sparepartdefaultname = "Battery";
    }
    StockTrackingComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.categoryname = 'D Category';
        this.stockname = 1;
        this.http.get('../../assets/data/stock.json').subscribe(function (data) {
            _this.jsondata = data;
            var index;
            for (index in _this.jsondata) {
                if (_this.categories.indexOf(_this.jsondata[index].Category) < 0) {
                    _this.categories.push(_this.jsondata[index].Category);
                    // console.log(this.categories)
                }
                _this.loaddefaultcategory(_this.categories, _this.jsondata);
            }
        });
        this.loadmap();
    };
    StockTrackingComponent.prototype.loaddefaultcategory = function (category, jsondata) {
        // this.getsparenames(categoryname)
        var index;
        this.stockitem = [];
        this.sparepart = [];
        for (index in this.jsondata) {
            if (jsondata[index].Category === this.categorydefaultname) {
                if (this.stockitem.indexOf(jsondata[index].Item) < 0) {
                    this.stockitem.push(jsondata[index].Item);
                }
            }
        }
        this.loaddefaulteStock(jsondata, this.categorydefaultname, this.stockItemdefaultname);
    };
    StockTrackingComponent.prototype.loaddefaulteStock = function (jsondata, categorydefaultname, stockItemdefaultname) {
        var index;
        // this.sparepart = [];
        for (index in jsondata) {
            if (jsondata[index].Item === stockItemdefaultname && jsondata[index].Category === categorydefaultname) {
                if (this.sparepart.indexOf(jsondata[index].Spare) < 0) {
                    this.sparepart.push(jsondata[index].Spare);
                    // console.log(this.jsondata[index].sparepart)
                }
            }
        }
        this.defaultSparePart(jsondata, categorydefaultname, stockItemdefaultname, this.sparepartdefaultname);
    };
    StockTrackingComponent.prototype.defaultSparePart = function (jsondata, categorydefaultname, stockItemdefaultname, sparepartdefaultname) {
        var index;
        // this.sparepart = [];   
        for (index in jsondata) {
            if (jsondata[index].Item === stockItemdefaultname && jsondata[index].Category === categorydefaultname && jsondata[index].Spare === sparepartdefaultname) {
                //  this.loadmap();
            }
        }
    };
    StockTrackingComponent.prototype.changecategory = function (category) {
        var categoryname = this.categorydefaultname = category.currentTarget.value;
        // this.getsparenames(categoryname)
        var index;
        this.stockitem = [];
        this.sparepart = [];
        for (index in this.jsondata) {
            if (this.jsondata[index].Category === categoryname) {
                if (this.stockitem.indexOf(this.jsondata[index].Item) < 0) {
                    this.stockitem.push(this.jsondata[index].Item);
                }
            }
        }
    };
    StockTrackingComponent.prototype.changeStock = function (item) {
        var stockitemname = this.selectedItem = item.currentTarget.value;
        var index;
        this.sparepart = [];
        for (index in this.jsondata) {
            if (this.jsondata[index].Item === stockitemname && this.jsondata[index].Category === this.categorydefaultname) {
                if (this.sparepart.indexOf(this.jsondata[index].Spare) < 0) {
                    this.sparepart.push(this.jsondata[index].Spare);
                    // console.log(this.jsondata[index].sparepart)
                }
            }
        }
    };
    StockTrackingComponent.prototype.changesparepart = function (event) {
        var sparevalue = event.currentTarget.value;
        var index;
        for (index in this.jsondata) {
            if (this.jsondata[index].Item === this.stockItemdefaultname && this.jsondata[index].Category === this.categorydefaultname && this.jsondata[index].Spare === sparevalue) {
                this.loadmap();
            }
        }
    };
    //   getsparenames(catehoryname) {
    //     var index: any;
    //     this.spare = [];
    //     for (index in this.jsondata) {
    //       if (this.jsondata[index].Category === catehoryname) {
    //         if (this.spare.indexOf(this.jsondata[index].Spare) < 0) {
    //           this.spare.push(this.jsondata[index].Spare);
    //         }
    //       }
    //     }
    // }
    StockTrackingComponent.prototype.loadmap = function () {
        var _this = this;
        this.http.get('../../assets/data/location.json').subscribe(function (res) {
            var newmapdata = res;
            _this.newMapData(newmapdata);
        });
    };
    StockTrackingComponent.prototype.newMapData = function (newmapdata) {
        // console.log(JSON.stringify(newmapdata) + "value");
        var lat_lng = new Array();
        // let that;
        for (var i = 0; i < newmapdata.length; i++) {
            var lat = newmapdata[i].Latitude;
            var long = newmapdata[i].Longitude;
            var myLatlng = new google.maps.LatLng(lat, long);
            var map = new google.maps.Map(document.getElementById('Map'), {
                zoom: 8,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false,
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.LEFT_BOTTOM
                },
                fullscreenControl: true,
                fullscreenControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_CENTER
                }
            });
            lat_lng.push(myLatlng);
            var image = {
                url: '../../assets/images/warehouse.png',
                // This marker is 50 pixels wide by 50 pixels high.
                scaledSize: new google.maps.Size(50, 50),
            };
            var imagetruck = {
                url: '../../assets/images/truck_top.png',
                // This marker is 50 pixels wide by 50 pixels high.
                scaledSize: new google.maps.Size(30, 30),
            };
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, long),
                map: map,
                icon: imagetruck,
            });
            var marker1 = new google.maps.Marker({
                position: new google.maps.LatLng(32.542, -93.604),
                map: map,
                icon: image,
            });
            // var infowindow = new google.maps.InfoWindow({
            //   content: '<b><p style="color:red;text-weight:bold">Tire Position:' + JSON.stringify(tirepos) + '</p></b>' +
            //     '<b><p style="color:red;text-weight:bold">Tire Pressure:' + JSON.stringify(tirepsi) + '</p></b>'
            // });
            var infowindow1 = new google.maps.InfoWindow({
                content: '<b><p style="color:black">1</p>'
            });
            // infowindow.open(map, marker);
            infowindow1.open(map, marker1);
            setInterval(function () {
                map.panTo(marker.getPosition());
            }, 5000);
        }
        var service = new google.maps.DirectionsService();
        var delayFactor = 0;
        function m_get_directions_route(request, latlong) {
            service.route(request, function (result, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    //Process you route here
                    var path = new google.maps.MVCArray();
                    var polylineoptns = {
                        strokeOpacity: 0.8,
                        strokeWeight: 3,
                        strokeColor: "blue",
                        map: map,
                    };
                    var poly = new google.maps.Polyline(polylineoptns);
                    poly.setPath(path);
                    var infowindow_polygon_1 = new google.maps.InfoWindow({ content: 'Stock' });
                    google.maps.event.addListener(poly, "mouseover", function (event) {
                        this.setOptions({ fillColor: "#00FF00" });
                        infowindow_polygon_1.setPosition(event.latLng);
                        infowindow_polygon_1.open(map);
                    });
                    google.maps.event.addListener(poly, "mouseout", function (event) {
                        this.setOptions({ fillColor: "#00FF00" });
                        //infowindow_polygon_1.setPosition(event.latLng);
                        infowindow_polygon_1.close(map);
                    });
                    for (var i = 0, len = result.routes[0].overview_path.length; i < len; i++) {
                        path.push(result.routes[0].overview_path[i]);
                        marker.setPosition(result.routes[0].overview_path[i]);
                    }
                }
                else if (status === google.maps.DirectionsStatus.OVER_QUERY_LIMIT) {
                    delayFactor++;
                    setTimeout(function () {
                        m_get_directions_route(request, latlong);
                    }, delayFactor * 1000);
                }
                else {
                    //console.log("Route: " + status);
                }
            });
        }
        for (i = 0; i < lat_lng.length; i++) {
            if ((i + 1) < lat_lng.length) {
                var src = lat_lng[i];
                var des = lat_lng[i + 1];
                var request = {
                    origin: src,
                    destination: des,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };
                m_get_directions_route(request, lat_lng);
            }
        }
    };
    StockTrackingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock-tracking',
            template: __webpack_require__(/*! ./stock-tracking.component.html */ "./src/app/stock-tracking/stock-tracking.component.html"),
            styles: [__webpack_require__(/*! ./stock-tracking.component.css */ "./src/app/stock-tracking/stock-tracking.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _service_route_service__WEBPACK_IMPORTED_MODULE_2__["RouteService"]])
    ], StockTrackingComponent);
    return StockTrackingComponent;
}());



/***/ }),

/***/ "./src/app/super-admin/add-device/add-device.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/super-admin/add-device/add-device.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    background:none;\r\n}\r\nlabel {\r\n   \r\n    font-weight: 100;\r\n}\r\n.form-control {\r\n    border-radius: 0px;\r\n    padding: 20px 12px;\r\n    box-shadow: none;\r\n    /* width: 30% */\r\n   }\r\n.center {\r\n    margin: auto;\r\n    width: 40%;\r\n  \r\n  }\r\n.bg{\r\n    background-image: url('form-bg-image.png')\r\n   \r\n   \r\n     }"

/***/ }),

/***/ "./src/app/super-admin/add-device/add-device.component.html":
/*!******************************************************************!*\
  !*** ./src/app/super-admin/add-device/add-device.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"bg\" style=\"background-size: cover\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\" style=\"padding-top: 19px;\">\r\n          \r\n           <div class=\"center\">\r\n                 <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label for=\"inputEmail4\">Device Name</label>\r\n                        <input type=\"text\" class=\"form-control transparent-input\" id=\"organizationname\">\r\n                    </div>\r\n    \r\n                </div>\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-12\" style=\"background: none\">\r\n                        <label for=\"inputEmail4\">Device Type</label>\r\n                        <input type=\"text\" class=\"form-control transparent-input\" id=\"organizationname\">\r\n                    </div>\r\n    \r\n                </div>\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label for=\"inputEmail4\">Identity</label>\r\n                        <select id=\"inputState\" class=\"form-control\" style=\"background: none\">\r\n                                <option selected>Choose...</option>\r\n                                <option>...</option>\r\n                            </select>\r\n                    </div>\r\n    \r\n                </div>\r\n             \r\n             <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-12\" style=\"text-align: center\">\r\n                        <!-- <button type=\"button\" class=\"btn btn-primary btn-block\">Button 1</button> -->\r\n                        <button type=\"button\" class=\"btn btn-primary\" style=\"width: 28%; height: 49px;background-color: #5D474A;  border: none; text-align: center\">Submit</button>\r\n                    </div>\r\n    \r\n                </div>\r\n    \r\n            </div>\r\n            ...\r\n    \r\n        </div>\r\n    \r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/super-admin/add-device/add-device.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/super-admin/add-device/add-device.component.ts ***!
  \****************************************************************/
/*! exports provided: AddDeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDeviceComponent", function() { return AddDeviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddDeviceComponent = /** @class */ (function () {
    function AddDeviceComponent() {
    }
    AddDeviceComponent.prototype.ngOnInit = function () {
    };
    AddDeviceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-device',
            template: __webpack_require__(/*! ./add-device.component.html */ "./src/app/super-admin/add-device/add-device.component.html"),
            styles: [__webpack_require__(/*! ./add-device.component.css */ "./src/app/super-admin/add-device/add-device.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddDeviceComponent);
    return AddDeviceComponent;
}());



/***/ }),

/***/ "./src/app/super-admin/add-tenant/add-tenant.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/super-admin/add-tenant/add-tenant.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.bg{\r\n  background-image: url('form-bg-image.png')\r\n \r\n \r\n   }\r\n .form-control {\r\n     border-radius: 0px;\r\n     padding: 20px 12px;\r\n     box-shadow: none;\r\n \r\n    }\r\n .circle-text {\r\n     display: table-cell;\r\n     height: 200px;\r\n  /*change this and the width for the size of your initial circle*/\r\n     width: 200px;\r\n     text-align: center;\r\n     vertical-align: middle;\r\n     border-radius: 50%;\r\n   /*make it pretty*/\r\n     background:#5D474A;\r\n     color: #fff;\r\n     font: 28px \"josefin sans\", arial;\r\n   /*change this for font-size and font-family*/\r\n }\r\n input {\r\n     background:none;\r\n }\r\n label {\r\n \r\n     font-weight: 100;\r\n }\r\n .error {\r\n   color: red;\r\n   text-align: left;\r\n }\r\n \r\n"

/***/ }),

/***/ "./src/app/super-admin/add-tenant/add-tenant.component.html":
/*!******************************************************************!*\
  !*** ./src/app/super-admin/add-tenant/add-tenant.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"bg\" style=\"background-size: cover\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\" style=\"padding-top: 23px;\">\r\n        <div class=\"circle-text\">\r\n          Add<br />\r\n          Client\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\" style=\"padding-top:23px\">\r\n        <form [formGroup]=\"clientForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"organizationName\">Organization Name</label>\r\n              <input type=\"text\" class=\"form-control transparent-input\" formControlName=\"organizationName\"\r\n                placeholder=\"Organization Name\" />\r\n\r\n              <!-- <div *ngIf=\"( clientForm.get('organizationName').hasError('minlength') || clientForm.get('organizationName').hasError('required') ) && clientForm.get('organizationName').touched\"> -->\r\n\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('organizationName').hasError('required') &&\r\n                  clientForm.get('organizationName').touched\">\r\n                Organization Name is required\r\n              </span>\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('organizationName').hasError('minlength') &&\r\n                  clientForm.get('organizationName').touched\">\r\n                Minimum of 4 characters\r\n              </span>\r\n              <!-- </div> -->\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"contactNumber\">Contact Number</label>\r\n              <input type=\"number\" class=\"form-control\" formControlName=\"contactNumber\" placeholder=\"Contact Number\" />\r\n              <!-- <div *ngIf=\"( clientForm.get('contactNumber').hasError('minlength') || clientForm.get('contactNumber').hasError('required') ) && clientForm.get('contactNumber').touched\"> -->\r\n\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('contactNumber').hasError('required') &&\r\n                  clientForm.get('contactNumber').touched\r\n                \">\r\n                Contact Number is required\r\n              </span>\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('contactNumber').hasError('minlength') &&\r\n                  clientForm.get('contactNumber').touched\r\n                \">\r\n                Minimum of 4 characters\r\n              </span>\r\n              <!-- </div> -->\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"clearfix\"></div>\r\n\r\n\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\" style=\"background: none\">\r\n              <label for=\"IndustriesCategory\">Industries</label>\r\n              <select id=\"inputIndustries\" class=\"form-control selectpicker\" (change)=\"changeIndustry($event)\"\r\n                style=\"background: none;height: 44px;padding: 0px 12px;\" formControlName=\"industries\">\r\n              <option>-- Select Industry --</option>\r\n                <option *ngFor=\"let category of organizationCategories;\">{{ category }}\r\n\r\n                </option>\r\n              </select>\r\n\r\n              <!-- <div *ngIf=\"( clientForm.get('organizationCategory').hasError('minlength') || clientForm.get('organizationCategory').hasError('required') ) && clientForm.get('organizationCategory').touched\"> -->\r\n\r\n              <!-- <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('organizationCategory').hasError('required') &&\r\n                  clientForm.get('organizationCategory').touched\r\n                \">\r\n                Organization Category is required\r\n              </span> -->\r\n              <!-- </div> -->\r\n            </div>\r\n\r\n            <!--Orgation Use Case-->\r\n            <div class=\"form-group col-md-6\" style=\"background: none\">\r\n              <label for=\"industriesUsecase\">Industries Use Case</label>\r\n              <select id=\"inputIndustriesUsecase\" class=\"form-control\"\r\n                style=\"background: none;height: 44px;padding: 0px 12px;\" formControlName=\"industriesUseCase\">\r\n                <option *ngFor=\"let useCaseTypes of useCaseType;\">{{ useCaseTypes }}\r\n                </option>\r\n              </select>\r\n\r\n              <!-- <div *ngIf=\"( clientForm.get('organizationCategory').hasError('minlength') || clientForm.get('organizationCategory').hasError('required') ) && clientForm.get('organizationCategory').touched\"> -->\r\n\r\n              <!-- <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('organizationCategory').hasError('required') &&\r\n                  clientForm.get('organizationCategory').touched\r\n                \">\r\n                Organization Category is required\r\n              </span> -->\r\n              <!-- </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n\r\n\r\n\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"adminName\">Admin Name</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"adminName\" placeholder=\"Admin Name\" />\r\n\r\n              <!-- <div *ngIf=\"( clientForm.get('adminName').hasError('minlength') || clientForm.get('adminName').hasError('required') ) && clientForm.get('adminName').touched\"> -->\r\n\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('adminName').hasError('required') &&\r\n                  clientForm.get('adminName').touched\r\n                \">\r\n                Admin Name is required\r\n              </span>\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('adminName').hasError('minlength') &&\r\n                  clientForm.get('adminName').touched\r\n                \">\r\n                Minimum of 4 characters\r\n              </span>\r\n              <!-- </div> -->\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" />\r\n\r\n              <!-- <div *ngIf=\"( clientForm.get('password').hasError('minlength') || clientForm.get('password').hasError('required') ) && clientForm.get('password').touched\"> -->\r\n\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('password').hasError('required') &&\r\n                  clientForm.get('password').touched\r\n                \">\r\n                Password is required\r\n              </span>\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('password').hasError('minlength') &&\r\n                  clientForm.get('password').touched\r\n                \">\r\n                Must be at least 8 characters!\r\n              </span>\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('password').hasError('hasNumber') &&\r\n                  clientForm.get('password').touched\r\n                \">\r\n                Must contain at least 1 number!\r\n              </span>\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('password').hasError('hasCapitalCase') &&\r\n                  clientForm.get('password').touched\r\n                \">\r\n                Must contain at least 1 capital letter!\r\n              </span>\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('password').hasError('hasSmallCase') &&\r\n                  clientForm.get('password').touched\r\n                \">\r\n                Must contain at least 1 small letter!\r\n              </span>\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('password').hasError('hasSpecialCharacters') &&\r\n                  clientForm.get('password').touched\r\n                \">\r\n                Must contain at least 1 special character!\r\n              </span>\r\n\r\n              <!-- </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <!--Official Email Id-->\r\n          <div class=\"form-row\">\r\n\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"officialMailId\">Official Email ID</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"officialMailId\" placeholder=\"Official Email\" />\r\n\r\n              <!-- <div *ngIf=\"( clientForm.get('officialMailId').hasError('minlength') || clientForm.get('officialMailId').hasError('required') ) && clientForm.get('officialMailId').touched\"> -->\r\n\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('officialMailId').hasError('required') &&\r\n                  clientForm.get('officialMailId').touched\r\n                \">\r\n                Email is required\r\n              </span>\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('officialMailId').hasError('pattern') &&\r\n                  clientForm.get('officialMailId').touched\r\n                \">\r\n                Please check the format of mail entered\r\n              </span>\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('officialMailId').hasError('invalid_domain') &&\r\n                  clientForm.get('officialMailId').touched\r\n                \">\r\n                Please enter business email\r\n              </span>\r\n              <!-- </div> -->\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"inputPassword4\">Confirm Password</label>\r\n              <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\"\r\n                placeholder=\"Confirm Password\" />\r\n\r\n              <!-- <div *ngIf=\"( clientForm.get('confirmPassword').hasError('minlength') || clientForm.get('confirmPassword').hasError('required') ) && clientForm.get('confirmPassword').touched\"> -->\r\n\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('confirmPassword').hasError('required') &&\r\n                  clientForm.get('confirmPassword').touched\r\n                \">\r\n                Confirm Password is required\r\n              </span>\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm\r\n                    .get('confirmPassword')\r\n                    .hasError('NoPassswordMatch') &&\r\n                  clientForm.get('confirmPassword').touched\r\n                \">\r\n                Confirm Password is not matched\r\n              </span>\r\n              <!-- </div> -->\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <!--Official Email Id-->\r\n\r\n          <!--Alternative Email Id-->\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label for=\"alternativeEmail\">Alternative Email ID</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"alternativeEmail\"\r\n                placeholder=\"Alternate Email\" />\r\n\r\n              <!-- <div *ngIf=\"( clientForm.get('alternativeEmail').hasError('minlength') || clientForm.get('alternativeEmail').hasError('required') ) && clientForm.get('alternativeEmail').touched\"> -->\r\n\r\n              <span class=\"error\" *ngIf=\"\r\n        clientForm.get('alternativeEmail').hasError('required') &&\r\n        clientForm.get('alternativeEmail').touched\r\n      \">\r\n                Alternative Email is required\r\n              </span>\r\n              <span class=\"error\" *ngIf=\"\r\n        clientForm.get('alternativeEmail').hasError('minlength') &&\r\n        clientForm.get('alternativeEmail').touched\">\r\n                Minimum of 4 characters\r\n              </span>\r\n              <!-- </div> -->\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"clearfix\"></div>\r\n\r\n\r\n\r\n          <!--Alternative Email Id-->\r\n\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label for=\"inputEmail4\">User Name</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"userName\" placeholder=\"User Name\" />\r\n\r\n              <!-- <div *ngIf=\"( clientForm.get('userName').hasError('minlength') || clientForm.get('userName').hasError('required') ) && clientForm.get('userName').touched\"> -->\r\n\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('userName').hasError('required') &&\r\n                  clientForm.get('userName').touched\r\n                \">\r\n                User Name is required\r\n              </span>\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('userName').hasError('minlength') &&\r\n                  clientForm.get('userName').touched\r\n                \">\r\n                Minimum of 4 characters\r\n              </span>\r\n              <!-- </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label for=\"inputEmail4\">Security Question 1</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"secQues1\" placeholder=\"Security Question1\" />\r\n\r\n              <!-- <div *ngIf=\"( clientForm.get('secQues1').hasError('minlength') || clientForm.get('secQues1').hasError('required') ) && clientForm.get('secQues1').touched\"> -->\r\n\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('secQues1').hasError('required') &&\r\n                  clientForm.get('secQues1').touched\r\n                \">\r\n                Security Question1 is required\r\n              </span>\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('secQues1').hasError('minlength') &&\r\n                  clientForm.get('secQues1').touched\r\n                \">\r\n                Minimum of 4 characters\r\n              </span>\r\n              <!-- </div> -->\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"clearfix\"></div>\r\n\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label for=\"inputEmail4\">Answer 1</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"answer1\" placeholder=\"Answer1\" />\r\n\r\n              <!-- <div *ngIf=\"( clientForm.get('answer1').hasError('minlength') || clientForm.get('answer1').hasError('required') ) && clientForm.get('answer1').touched\"> -->\r\n\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('answer1').hasError('required') &&\r\n                  clientForm.get('answer1').touched\r\n                \">\r\n                Answer1 is required\r\n              </span>\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('answer1').hasError('minlength') &&\r\n                  clientForm.get('answer1').touched\r\n                \">\r\n                Minimum of 4 characters\r\n              </span>\r\n              <!-- </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label for=\"inputEmail4\">Security Question 2</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"secQues2\" placeholder=\"Security Question2\" />\r\n\r\n              <!-- <div *ngIf=\"( clientForm.get('secQues2').hasError('minlength') || clientForm.get('secQues2').hasError('required') ) && clientForm.get('secQues2').touched\"> -->\r\n\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('secQues2').hasError('required') &&\r\n                  clientForm.get('secQues2').touched\r\n                \">\r\n                Security Question2 is required\r\n              </span>\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('secQues2').hasError('minlength') &&\r\n                  clientForm.get('secQues2').touched\r\n                \">\r\n                Minimum of 4 characters\r\n              </span>\r\n              <!-- </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label for=\"inputEmail4\">Answer 2</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"answer2\" placeholder=\"Answer2\" />\r\n\r\n              <!-- <div *ngIf=\"( clientForm.get('answer2').hasError('minlength') || clientForm.get('answer2').hasError('required') ) && clientForm.get('answer2').touched\"> -->\r\n\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('answer2').hasError('required') &&\r\n                  clientForm.get('answer2').touched\r\n                \">\r\n                Answer 2 is required\r\n              </span>\r\n              <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('answer2').hasError('minlength') &&\r\n                  clientForm.get('answer2').touched\r\n                \">\r\n                Minimum of 4 characters\r\n              </span>\r\n              <!-- </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\" style=\"text-align: center\">\r\n              <!-- <button type=\"button\" class=\"btn btn-primary btn-block\">Button 1</button> -->\r\n              <button type=\"submit\" class=\"btn btn-primary\"\r\n                style=\"width: 15%; height: 49px;background-color: #5D474A;  border: none\"\r\n                [disabled]=\"!clientForm.valid\">\r\n                Submit\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"clearfix\"></div>\r\n\r\n        </form>\r\n      </div>\r\n      <div class=\"col-md-1\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--Model-->\r\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button> -->\r\n        <!-- <h4 class=\"modal-title\">Modal Header</h4> -->\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p style=\"text-align: center\">{{modelText}}</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\">\r\n <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/super-admin/add-tenant/add-tenant.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/super-admin/add-tenant/add-tenant.component.ts ***!
  \****************************************************************/
/*! exports provided: AddTenantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTenantComponent", function() { return AddTenantComponent; });
/* harmony import */ var _core_databot_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/databot.service */ "./src/app/core/databot.service.ts");
/* harmony import */ var _validators_customvalidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../validators/customvalidator */ "./src/validators/customvalidator.ts");
/* harmony import */ var _validators_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../validators/email */ "./src/validators/email.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddTenantComponent = /** @class */ (function () {
    function AddTenantComponent(formBuilder, databotService, spinner) {
        this.formBuilder = formBuilder;
        this.databotService = databotService;
        this.spinner = spinner;
        this.usecaseName = [];
        this.useCaseType = [];
        this.organizationCategories = [];
        this.industryusecasearr = [];
        this.clientRegister = {};
    }
    AddTenantComponent.prototype.ngOnInit = function () {
        this.clientForm = this.formBuilder.group({
            organizationName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)])],
            contactNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)])],
            industries: [''],
            industriesUseCase: [''],
            officialMailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i), _validators_email__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"].checkEmail])],
            adminName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _validators_customvalidator__WEBPACK_IMPORTED_MODULE_1__["CustomValidators"].patternValidator(/\d/, {
                        hasNumber: true
                    }),
                    // check whether the entered password has upper case letter
                    _validators_customvalidator__WEBPACK_IMPORTED_MODULE_1__["CustomValidators"].patternValidator(/[A-Z]/, {
                        hasCapitalCase: true
                    }),
                    // check whether the entered password has a lower case letter
                    _validators_customvalidator__WEBPACK_IMPORTED_MODULE_1__["CustomValidators"].patternValidator(/[a-z]/, {
                        hasSmallCase: true
                    }),
                    // check whether the entered password has a special character
                    _validators_customvalidator__WEBPACK_IMPORTED_MODULE_1__["CustomValidators"].patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
                        hasSpecialCharacters: true
                    }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)])],
            alternativeEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)])],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)])],
            secQues1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)])],
            answer1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)])],
            secQues2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)])],
            answer2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)])]
        }, {
            // check whether our password and confirm password match
            validator: _validators_customvalidator__WEBPACK_IMPORTED_MODULE_1__["CustomValidators"].passwordMatchValidator
        });
        this.loaduseCase();
    };
    AddTenantComponent.prototype.loaduseCase = function () {
        var _this = this;
        this.databotService.loadUseCase().subscribe(function (data) {
            _this.usecasejsonData = data;
            var index;
            for (index in _this.usecasejsonData) {
                if (_this.organizationCategories.indexOf(_this.usecasejsonData[index].Industry) < 0) {
                    _this.organizationCategories.push(_this.usecasejsonData[index].Industry);
                }
            }
        });
    };
    AddTenantComponent.prototype.changeIndustry = function (usecase) {
        this.useCaseType = [];
        var index;
        this.usecaseName = usecase.currentTarget.value;
        console.log(this.usecaseName);
        for (index in this.usecasejsonData) {
            if (this.usecasejsonData[index].Industry === this.usecaseName) {
                if (this.useCaseType.indexOf(this.usecasejsonData[index].UseCase) < 0) {
                    this.useCaseType = this.usecasejsonData[index].UseCase;
                }
            }
        }
    };
    AddTenantComponent.prototype.onSubmit = function () {
        var _this = this;
        this.spinner.show();
        //   setTimeout(() => {
        //     /** spinner ends after 5 seconds */
        //     this.spinner.hide();
        // }, 5000);
        var industries = [];
        var industriesUseCase = [];
        var usecases = [];
        industries.push(this.clientForm.value.industries);
        usecases.push(this.clientForm.value.industriesUseCase);
        industriesUseCase.push({ "industryName": this.clientForm.value.industries,
            "industriesUsecase": usecases });
        this.clientRegister.adminId = localStorage.getItem('userId');
        this.clientRegister.adminName = this.clientForm.value.adminName;
        this.clientRegister.organizationName = this.clientForm.value.organizationName;
        this.clientRegister.industries = industries;
        this.clientRegister.industriesUsecase = industriesUseCase;
        this.clientRegister.contactNumber = this.clientForm.value.contactNumber;
        this.clientRegister.adminRole = 'Business';
        this.clientRegister.role = 'Client';
        this.clientRegister.emailId = this.clientForm.value.officialMailId;
        this.clientRegister.alternativeEmailId = this.clientForm.value.alternativeEmail;
        this.clientRegister.userName = this.clientForm.value.userName;
        this.clientRegister.password = this.clientForm.value.confirmPassword;
        this.clientRegister.securityQuestions = [
            { question: this.clientForm.value.secQues1, answer: this.clientForm.value.answer1 },
            { question: this.clientForm.value.secQues2, answer: this.clientForm.value.answer2 }
        ];
        console.log(this.clientRegister);
        this.databotService.clientRegistration(this.clientRegister).subscribe(function (data) {
            console.log(data['message']);
            _this.modelText = data['message'];
            $('#myModal').modal('show');
            _this.spinner.hide();
        }, function (err) {
            console.log(JSON.stringify(err['error']['message']) + "this is error");
            _this.modelText = err['error']['message'];
            $('#myModal').modal('show');
            _this.spinner.hide();
        });
        // this.modelText = "Registration Successful";
        // $('#myModal').modal('show');
    };
    AddTenantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-tenant',
            template: __webpack_require__(/*! ./add-tenant.component.html */ "./src/app/super-admin/add-tenant/add-tenant.component.html"),
            styles: [__webpack_require__(/*! ./add-tenant.component.css */ "./src/app/super-admin/add-tenant/add-tenant.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _core_databot_service__WEBPACK_IMPORTED_MODULE_0__["DatabotService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], AddTenantComponent);
    return AddTenantComponent;
}());



/***/ }),

/***/ "./src/app/super-admin/add-user/add-user.component.css":
/*!*************************************************************!*\
  !*** ./src/app/super-admin/add-user/add-user.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg{\r\n  background-image: url('form-bg-image.png')\r\n\r\n\r\n   }\r\n .form-control {\r\n     border-radius: 0px;\r\n     padding: 20px 12px;\r\n     box-shadow: none;\r\n\r\n    }\r\n .circle-text {\r\n     display: table-cell;\r\n     height: 200px;\r\n  /*change this and the width for the size of your initial circle*/\r\n     width: 200px;\r\n     text-align: center;\r\n     vertical-align: middle;\r\n     border-radius: 50%;\r\n   /*make it pretty*/\r\n     background:#5D474A;\r\n     color: #fff;\r\n     font: 28px \"josefin sans\", arial;\r\n   /*change this for font-size and font-family*/\r\n }\r\n input {\r\n     background:none;\r\n }\r\n label {\r\n\r\n     font-weight: 100;\r\n }\r\n .error {\r\n  color: red;\r\n  text-align: left;\r\n}\r\n"

/***/ }),

/***/ "./src/app/super-admin/add-user/add-user.component.html":
/*!**************************************************************!*\
  !*** ./src/app/super-admin/add-user/add-user.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"bg\" style=\"background-size: cover\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\" style=\"padding-top: 23px;\">\r\n        <div class=\"circle-text\">\r\n          Add<br>\r\n          User\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\" style=\"padding-top:23px\">\r\n        <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"validateFirstName\">First Name</label>\r\n              <input type=\"text\" class=\"form-control transparent-input\" id=\"validateFirstName\" placeholder=\"First Name\"\r\n                formControlName=\"firstName\">\r\n\r\n              <!-- <div *ngIf=\"( userForm.get('firstName').hasError('minlength') || userForm.get('firstName').hasError('required') ) && userForm.get('firstName').touched\"> -->\r\n\r\n              <span class=\"error\"\r\n                *ngIf=\"userForm.get('firstName').hasError('required') && userForm.get('firstName').touched\">\r\n                First Name is required\r\n              </span>\r\n              <span class=\"error\"\r\n                *ngIf=\"userForm.get('firstName').hasError('minlength') && userForm.get('firstName').touched\">\r\n                Minimum of 4 characters\r\n              </span>\r\n              <!-- </div> -->\r\n\r\n            </div>\r\n          \r\n\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"lastName\">Last Name</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" placeholder=\"Last Name\">\r\n\r\n              <!-- <div *ngIf=\"( userForm.get('lastName').hasError('minlength') || userForm.get('lastName').hasError('required') ) && userForm.get('lastName').touched\"> -->\r\n\r\n              <span class=\"error\"\r\n                *ngIf=\"userForm.get('lastName').hasError('required') && userForm.get('lastName').touched\">\r\n                Last Name is required\r\n              </span>\r\n              <span class=\"error\"\r\n                *ngIf=\"userForm.get('lastName').hasError('minlength') && userForm.get('lastName').touched\">\r\n                Minimum of 4 characters\r\n              </span>\r\n              <!-- </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <!--Industries-->\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\" style=\"background: none\">\r\n              <label for=\"IndustriesCategory\">Industries</label>\r\n              <select  id=\"inputIndustries\"  class=\"form-control selectpicker\" (change)=\"changeIndustry($event)\"  style=\"background: none;height: 44px;padding: 0px 12px;\"\r\n              formControlName=\"industries\">\r\n              <option>-- Select Industry --</option>\r\n              <option *ngFor=\"let category of organizationCategories;\">{{ category }}\r\n                 \r\n              </option>\r\n            </select>\r\n\r\n              <!-- <div *ngIf=\"( clientForm.get('organizationCategory').hasError('minlength') || clientForm.get('organizationCategory').hasError('required') ) && clientForm.get('organizationCategory').touched\"> -->\r\n\r\n              <!-- <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('organizationCategory').hasError('required') &&\r\n                  clientForm.get('organizationCategory').touched\r\n                \">\r\n                Organization Category is required\r\n              </span> -->\r\n              <!-- </div> -->\r\n            </div>\r\n        \r\n            <!--Orgation Use Case-->\r\n            <div class=\"form-group col-md-6\" style=\"background: none\">\r\n              <label for=\"industriesUsecase\">Industries Use Case</label>\r\n              <select id=\"inputIndustriesUsecase\" class=\"form-control\" style=\"background: none;height: 44px;padding: 0px 12px;\"\r\n                formControlName=\"industriesUseCase\">\r\n                <option *ngFor=\"let useCaseTypes of useCaseType;\">{{ useCaseTypes }}\r\n                </option>\r\n              </select>\r\n\r\n              <!-- <div *ngIf=\"( clientForm.get('organizationCategory').hasError('minlength') || clientForm.get('organizationCategory').hasError('required') ) && clientForm.get('organizationCategory').touched\"> -->\r\n\r\n              <!-- <span class=\"error\" *ngIf=\"\r\n                  clientForm.get('organizationCategory').hasError('required') &&\r\n                  clientForm.get('organizationCategory').touched\r\n                \">\r\n                Organization Category is required\r\n              </span> -->\r\n              <!-- </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n\r\n\r\n          <!--Industries-->\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\" style=\"background: none\">\r\n              <label for=\"emailId\">Email</label>\r\n              <input type=\"email\" class=\"form-control\" formControlName=\"emailId\" placeholder=\"Email Id\">\r\n\r\n              <!-- <div *ngIf=\"( userForm.get('emailId').hasError('minlength') || userForm.get('emailId').hasError('required') ) && userForm.get('emailId').touched\"> -->\r\n\r\n              <span class=\"error\"\r\n                *ngIf=\"userForm.get('emailId').hasError('required') && userForm.get('emailId').touched\">\r\n                Email Id is required\r\n              </span>\r\n              <span class=\"error\"\r\n                *ngIf=\"userForm.get('emailId').hasError('pattern') && userForm.get('emailId').touched\">\r\n                Please check the email entered\r\n              </span>\r\n              <!-- </div> -->\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"alternateEmailId\">Alternative Email</label>\r\n              <input type=\"email\" class=\"form-control\" formControlName=\"alternateEmailId\" placeholder=\"Alternate EmailId\">\r\n\r\n              <!-- <div *ngIf=\"( userForm.get('alternateEmailId').hasError('minlength') || userForm.get('alternateEmailId').hasError('required') ) && userForm.get('alternateEmailId').touched\"> -->\r\n\r\n              <span class=\"error\"\r\n                *ngIf=\"userForm.get('alternateEmailId').hasError('required') && userForm.get('alternateEmailId').touched\">\r\n                Alternate Email is required\r\n              </span>\r\n              <!-- </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"userName\">User Name</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"userName\" placeholder=\"User Name\">\r\n\r\n              <!-- <div *ngIf=\"( userForm.get('userName').hasError('minlength') || userForm.get('userName').hasError('required') ) && userForm.get('userName').touched\"> -->\r\n\r\n              <span class=\"error\"\r\n                *ngIf=\"userForm.get('userName').hasError('required') && userForm.get('userName').touched\">\r\n                User Name is required\r\n              </span>\r\n              <span class=\"error\"\r\n                *ngIf=\"userForm.get('userName').hasError('minlength') && userForm.get('userName').touched\">\r\n                Minimum of 4 characters\r\n              </span>\r\n              <!-- </div> -->\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"password\"> Password</label>\r\n              <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\r\n\r\n              <!-- <div *ngIf=\"( userForm.get('password').hasError('minlength') || userForm.get('password').hasError('required') ) && userForm.get('password').touched\"> -->\r\n\r\n              <span class=\"error\"\r\n                *ngIf=\"userForm.get('password').hasError('required') && userForm.get('password').touched\">\r\n                Password is required\r\n              </span>\r\n              <span class=\"error\"\r\n                *ngIf=\"userForm.get('password').hasError('minlength') && userForm.get('password').touched\">\r\n                Minimum of 8 characters\r\n              </span>\r\n              <!-- </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"designation\">Desigation</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"designation\" placeholder=\"Designation\">\r\n              <!-- <div *ngIf=\"( userForm.get('designation').hasError('minlength') || userForm.get('designation').hasError('required') ) && userForm.get('designation').touched\"> -->\r\n\r\n              <span class=\"error\"\r\n                *ngIf=\"userForm.get('designation').hasError('required') && userForm.get('designation').touched\">\r\n                Designation is required\r\n              </span>\r\n              <span class=\"error\"\r\n                *ngIf=\"userForm.get('designation').hasError('minlength') && userForm.get('designation').touched\">\r\n                Minimum of 4 characters\r\n              </span>\r\n              <!-- </div> -->\r\n\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"location\">Location</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"location\" placeholder=\"Location\">\r\n\r\n              <!-- <div *ngIf=\"( userForm.get('location').hasError('minlength') || userForm.get('location').hasError('required') ) && userForm.get('location').touched\"> -->\r\n\r\n              <span class=\"error\"\r\n                *ngIf=\"userForm.get('location').hasError('required') && userForm.get('location').touched\">\r\n                Location is required\r\n              </span>\r\n              <span class=\"error\"\r\n                *ngIf=\"userForm.get('location').hasError('minlength') && userForm.get('location').touched\">\r\n                Minimum of 4 characters\r\n              </span>\r\n              <!-- </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n\r\n\r\n          <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"contactNumber\">Contact Number</label>\r\n                <input type=\"number\" class=\"form-control\" formControlName=\"contactNumber\" placeholder=\"Contact Number\">\r\n                <!-- <div *ngIf=\"( userForm.get('contactNumber').hasError('minlength') || userForm.get('contactNumber').hasError('required') ) && userForm.get('contactNumber').touched\"> -->\r\n\r\n                <span class=\"error\"\r\n                  *ngIf=\"userForm.get('contactNumber').hasError('required') && userForm.get('contactNumber').touched\">\r\n                  Contact Number is required\r\n                </span>\r\n                <span class=\"error\"\r\n                  *ngIf=\"userForm.get('contactNumber').hasError('minlength') && userForm.get('contactNumber').touched\">\r\n                  Minimum of 4 characters\r\n                </span>\r\n                <!-- </div> -->\r\n\r\n              </div>\r\n            </div>\r\n\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\" style=\"text-align: center\">\r\n              <!-- <button type=\"button\" class=\"btn btn-primary btn-block\">Button 1</button> -->\r\n              <button type=\"submit\" class=\"btn btn-primary\"\r\n                style=\"width: 15%; height: 49px;background-color: #5D474A;  border: none\" [disabled]=\"!userForm.valid\">Submit</button>\r\n            </div>\r\n\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n      <div class=\"col-md-1\">\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--Model-->\r\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button> -->\r\n        <!-- <h4 class=\"modal-title\">Modal Header</h4> -->\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p style=\"text-align: center\">{{modelText}}</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\">\r\n <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/super-admin/add-user/add-user.component.ts":
/*!************************************************************!*\
  !*** ./src/app/super-admin/add-user/add-user.component.ts ***!
  \************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _core_databot_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/databot.service */ "./src/app/core/databot.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(formBuilder, databotService, spinner) {
        this.formBuilder = formBuilder;
        this.databotService = databotService;
        this.spinner = spinner;
        this.submitted = false;
        this.userRegister = {};
        this.usecaseName = [];
        this.useCaseType = [];
        this.organizationCategories = [];
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.userForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])],
            industries: [''],
            industriesUseCase: [''],
            emailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
            alternateEmailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])],
            designation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])],
            contactNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])]
        });
        this.loaduseCase();
    };
    AddUserComponent.prototype.loaduseCase = function () {
        var _this = this;
        this.databotService.loadUseCase().subscribe(function (data) {
            _this.usecasejsonData = data;
            var index;
            for (index in _this.usecasejsonData) {
                if (_this.organizationCategories.indexOf(_this.usecasejsonData[index].Industry) < 0) {
                    _this.organizationCategories.push(_this.usecasejsonData[index].Industry);
                }
            }
        });
    };
    AddUserComponent.prototype.changeIndustry = function (usecase) {
        this.useCaseType = [];
        var index;
        this.usecaseName = usecase.currentTarget.value;
        console.log(this.usecaseName);
        for (index in this.usecasejsonData) {
            if (this.usecasejsonData[index].Industry === this.usecaseName) {
                if (this.useCaseType.indexOf(this.usecasejsonData[index].UseCase) < 0) {
                    this.useCaseType = this.usecasejsonData[index].UseCase;
                }
            }
        }
    };
    AddUserComponent.prototype.onSubmit = function () {
        var _this = this;
        // console.log(this.userForm.value);
        this.spinner.show();
        var industries = [];
        var industriesUseCase = [];
        var usecases = [];
        industries.push(this.userForm.value.industries);
        usecases.push(this.userForm.value.industriesUseCase);
        industriesUseCase.push({ "industryName": this.userForm.value.industries,
            "industriesUsecase": usecases });
        this.userRegister.clientId = localStorage.getItem('userId');
        this.userRegister.userName = this.userForm.value.userName;
        this.userRegister.firstName = this.userForm.value.firstName;
        this.userRegister.lastName = this.userForm.value.lastName;
        this.userRegister.emailId = this.userForm.value.emailId;
        this.userRegister.role = "User";
        this.userRegister.industries = industries;
        this.userRegister.industriesUsecase = industriesUseCase;
        this.userRegister.alternateEmail = this.userForm.value.alternateEmailId;
        this.userRegister.password = this.userForm.value.password;
        this.userRegister.designation = this.userForm.value.designation;
        this.userRegister.phone = this.userForm.value.contactNumber;
        this.userRegister.location = this.userForm.value.location;
        console.log(this.userRegister);
        this.databotService.userRegistration(this.userRegister).subscribe(function (data) {
            console.log(data['message']);
            _this.modelText = data['message'];
            $('#myModal').modal('show');
            _this.spinner.hide();
        }, function (err) {
            console.log(JSON.stringify(err['error']['message']) + "this is error");
            _this.modelText = err['error']['message'];
            $('#myModal').modal('show');
            _this.spinner.hide();
        });
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/super-admin/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/super-admin/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _core_databot_service__WEBPACK_IMPORTED_MODULE_0__["DatabotService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/textile/textile.component.css":
/*!***********************************************!*\
  !*** ./src/app/textile/textile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/textile/textile.component.html":
/*!************************************************!*\
  !*** ./src/app/textile/textile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  textile works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/textile/textile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/textile/textile.component.ts ***!
  \**********************************************/
/*! exports provided: TextileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextileComponent", function() { return TextileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextileComponent = /** @class */ (function () {
    function TextileComponent() {
    }
    TextileComponent.prototype.ngOnInit = function () {
    };
    TextileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-textile',
            template: __webpack_require__(/*! ./textile.component.html */ "./src/app/textile/textile.component.html"),
            styles: [__webpack_require__(/*! ./textile.component.css */ "./src/app/textile/textile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TextileComponent);
    return TextileComponent;
}());



/***/ }),

/***/ "./src/app/usecase/usecase.component.css":
/*!***********************************************!*\
  !*** ./src/app/usecase/usecase.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.panel-heading {\r\n    padding:0px;\r\n    border-bottom: 0px;\r\n     border-top-left-radius: 0px;\r\n     border-top-right-radius: 0px;\r\n}\r\n.panel {\r\n     margin-bottom: 0px; \r\n     border-radius: 4px;\r\n    box-shadow: 0 1px 1px rgba(0,0,0,.05);\r\n    border: 0px solid transparent;\r\n}\r\n.panel-body {\r\n    padding: 4px;\r\n}\r\n/* .panelclass{\r\n\r\n   text-align: right; \r\n   background-color:#267872\"\r\n} */\r\n.container-fluid {\r\n    padding-right: 7px;\r\n    padding-left: 7px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n.vl {\r\n    border-left: 1px solid #6c950f;\r\n    height: 194px;\r\n    position: absolute;\r\n    left: 39%;\r\n    margin-left: 74px;\r\n    margin-top: 18px;\r\n    top: 0;\r\n}\r\n.img-center {\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n.talkbubble {\r\n    border-right:1px solid #3d4e7b;\r\n    padding:15px;\r\n}\r\n.talkbubble:hover {\r\n    /* width: 120px; */\r\n   padding:15px;\r\n    background: #3d4e7b;\r\n    position: relative;\r\n    border-bottom-left-radius: 25px;\r\n    border-bottom-right-radius: 25px; \r\n  \r\n  }\r\n.talkbubble:hover p {\r\n      color:#fff !important;\r\n  }\r\n.talkbubble:hover:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    right: -14px;\r\n    top: -24px;\r\n    left: -14px;\r\n    border-top: 24px solid #3d4e7b;\r\n    border-left: 14px solid transparent;\r\n    border-right: 13px solid transparent;\r\n    height: 0;\r\n    /* width: 100%; */\r\n  }\r\n.talkbubble1 {\r\n    /* width: 120px; */\r\n   padding:15px;\r\n    background: #3d4e7b;\r\n    position: relative;\r\n    border-bottom-left-radius: 25px;\r\n    border-bottom-right-radius: 25px; \r\n  }\r\n.talkbubble1:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    right: -14px;\r\n    top: -23px;\r\n    left: -14px;\r\n    border-top: 24px solid #3d4e7b;\r\n    border-left: 14px solid transparent;\r\n    border-right: 14px solid transparent;\r\n    height: 0;\r\n    /* width: 100%; */\r\n  }\r\n.imgmargin{\r\n    margin-top:13px\r\n }\r\n \r\n "

/***/ }),

/***/ "./src/app/usecase/usecase.component.html":
/*!************************************************!*\
  !*** ./src/app/usecase/usecase.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding: 0px\">\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-body\" style=\"text-align: right; background-color:#3d4e7b;margin-top:20px;\"><strong\r\n        style=\"color:white;\">USECASE</strong></div>\r\n  </div>\r\n\r\n  <div class=\"col-md-12 padding:0px\" *ngIf='UseCaseType==1'>\r\n    <div class=\"row\">\r\n      <div *ngIf=\"telematics\">\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"redirect(1)\" *ngIf='!showfleetManagment'>\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/22.png\" class=\"img-center img-responsive\">\r\n\r\n            <p style=\"text-align: center; color:#267872;font-weight:bold;\">Telematics</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 imgmargin\" *ngIf='showfleetManagment'>\r\n\r\n          <div class=\"talkbubble1\">\r\n            <img src=\"../../assets/22.png\" class=\"img-center img-responsive\">\r\n\r\n            <p style=\"text-align: center; color:#fff;font-weight:bold;\">Telematics</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Fleet Track-->\r\n      <div *ngIf=\"fleettrack\">\r\n        <div class=\"col-md-2 imgmargin\">\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/22.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#267872;font-weight:bold;\">Fleet Track</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Fleet Track-->\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div *ngIf='UseCaseType==2'>\r\n\r\n    <div class=\"col-md-12 padding:0px\">\r\n      <div class=\"row\">\r\n        <div *ngIf=\"reporting\">\r\n          <div class=\"col-md-2 imgmargin\" (click)=\"redirect(2)\">\r\n            <div class=\"talkbubble\">\r\n              <img src=\"../../assets/HospitalIcon.png\" class=\"img-center img-responsive\">\r\n\r\n              <p style=\"text-align: center; color:#267872;font-weight:bold;\">Reporting</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"forecasting\">\r\n          <div class=\"col-md-2 imgmargin\">\r\n            <div class=\"talkbubble\">\r\n              <img src=\"../../assets/HospitalIcon.png\" class=\"img-center img-responsive\">\r\n              <p style=\"text-align: center;color:#267872 ;font-weight:bold;\">Forecasting</p>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div *ngIf='UseCaseType==3'>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row\">\r\n        <!--Production-->\r\n        <div *ngIf =\"production\">\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"redirect(8)\" *ngIf='!showProduction'>\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/3.png\" class=\"img-center img-responsive\">\r\n\r\n            <p style=\"text-align: center; color:#267872;font-weight:bold;\">Production</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 imgmargin\" *ngIf='showProduction'>\r\n\r\n          <div class=\"talkbubble1\">\r\n            <img src=\"../../assets/3.png\" class=\"img-center img-responsive\">\r\n\r\n            <p style=\"text-align: center; color:#fff;font-weight:bold;\">Production</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n        <!--Production-->\r\n\r\n        <!--Inventory-->\r\n        <div *ngIf =\"inventorymanagement\">\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"redirect(3)\" *ngIf='!showmanufacturing'>\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/3.png\" class=\"img-center img-responsive\">\r\n\r\n            <p style=\"text-align: center; color:#267872;font-weight:bold;\">Inventory Management</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 imgmargin\" *ngIf='showmanufacturing'>\r\n\r\n          <div class=\"talkbubble1\">\r\n            <img src=\"../../assets/3.png\" class=\"img-center img-responsive\">\r\n\r\n            <p style=\"text-align: center; color:#fff;font-weight:bold;\">Inventory Management</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf =\"performance\">\r\n        <div class=\"col-md-2 imgmargin\">\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/3.png\" class=\"img-center img-responsive\">\r\n\r\n            <p style=\"text-align: center; color:#267872;font-weight:bold;\">Performance</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n        <!--Forecasting-->\r\n        <div *ngIf =\"invforecasting\">\r\n        <div class=\"col-md-2 imgmargin\">\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/3.png\" class=\"img-center img-responsive\">\r\n\r\n            <p style=\"text-align: center; color:#267872;font-weight:bold;\">Forecasting</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n        <!--Forecasting-->\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n    <!--Inventory-->\r\n    <!--Performance-->\r\n\r\n  </div>\r\n\r\n  <div *ngIf='UseCaseType==4'>\r\n    <div class=\"col-md-12 padding:0px\">\r\n      <div class=\"row\">\r\n        <div *ngIf =\"workforce\">\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"redirect(4)\" *ngIf='!showHrms'>\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/4.png\" class=\"img-center img-responsive\">\r\n\r\n            <p style=\"text-align: center; color:#267872;font-weight:bold;\">Work Force</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 imgmargin\" *ngIf='showHrms'>\r\n          <div class=\"talkbubble1\">\r\n            <img src=\"../../assets/4.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center; color:#fff;font-weight:bold;\">Work Force</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf =\"statistics\">\r\n        <div class=\"col-md-2 imgmargin\">\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/4.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#267872 ;font-weight:bold;\">Statistics</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div *ngIf='UseCaseType==5'>\r\n    <div class=\"col-md-12 padding:0px\">\r\n      <div class=\"row\">\r\n        <div *ngIf =\"supplies\">\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"redirect(5)\" *ngIf='!showHealthAnalysis'>\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n\r\n            <p style=\"text-align: center; color:#267872;font-weight:bold;\">Supplies</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 imgmargin\" *ngIf='showHealthAnalysis'>\r\n\r\n          <div class=\"talkbubble1\">\r\n            <img src=\"../../assets/22.png\" class=\"img-center img-responsive\">\r\n\r\n            <p style=\"text-align: center; color:#fff;font-weight:bold;\">Supplies</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n        <div *ngIf =\"billing\">\r\n          <div class=\"col-md-2 imgmargin\">\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n            <p style=\"text-align: center;color:#267872 ;font-weight:bold;\">Billing</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!--Assembly-->\r\n  <div *ngIf='UseCaseType==6'>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"redirect(6)\" *ngIf='!showAssembly'>\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n\r\n            <p style=\"text-align: center; color:#267872;font-weight:bold;\">Assembly</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-2 imgmargin\" *ngIf='showAssembly'>\r\n      <div class=\"talkbubble1\">\r\n        <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n        <p style=\"text-align: center; color:#fff;font-weight:bold;\">Assembly</p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <!--Energy-->\r\n  <div *ngIf='UseCaseType==7'>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row\">\r\n        <div *ngIf =\"consumption\">\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"redirect(7)\">\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n\r\n            <p style=\"text-align: center; color:#267872;font-weight:bold;\">Consumption</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf =\"Management\" >\r\n        <div class=\"col-md-2 imgmargin\" (click)=\"redirect(7)\">\r\n          <div class=\"talkbubble\">\r\n            <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n\r\n            <p style=\"text-align: center; color:#267872;font-weight:bold;\">Management</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n<!--Energy-->\r\n\r\n<!--Super Admin-->\r\n\r\n<div *ngIf =\"superadmin\">\r\n    <div class=\"col-md-12 padding:0px\" *ngIf='UseCaseType==1'>\r\n        <div class=\"row\">\r\n          <div>\r\n            <div class=\"col-md-2 imgmargin\" (click)=\"redirect(1)\" *ngIf='!showfleetManagment'>\r\n              <div class=\"talkbubble\">\r\n                <img src=\"../../assets/22.png\" class=\"img-center img-responsive\">\r\n    \r\n                <p style=\"text-align: center; color:#267872;font-weight:bold;\">Telematics</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2 imgmargin\" *ngIf='showfleetManagment'>\r\n    \r\n              <div class=\"talkbubble1\">\r\n                <img src=\"../../assets/22.png\" class=\"img-center img-responsive\">\r\n    \r\n                <p style=\"text-align: center; color:#fff;font-weight:bold;\">Telematics</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n    \r\n          <!--Fleet Track-->\r\n          <div>\r\n            <div class=\"col-md-2 imgmargin\">\r\n              <div class=\"talkbubble\">\r\n                <img src=\"../../assets/22.png\" class=\"img-center img-responsive\">\r\n                <p style=\"text-align: center;color:#267872;font-weight:bold;\">Fleet Track</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--Fleet Track-->\r\n    \r\n    \r\n        </div>\r\n    \r\n      </div>\r\n      <div *ngIf='UseCaseType==2'>\r\n\r\n          <div class=\"col-md-12 padding:0px\">\r\n            <div class=\"row\">\r\n              <div>\r\n                <div class=\"col-md-2 imgmargin\" (click)=\"redirect(2)\">\r\n                  <div class=\"talkbubble\">\r\n                    <img src=\"../../assets/HospitalIcon.png\" class=\"img-center img-responsive\">\r\n      \r\n                    <p style=\"text-align: center; color:#267872;font-weight:bold;\">Reporting</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n      \r\n              <div>\r\n                <div class=\"col-md-2 imgmargin\">\r\n                  <div class=\"talkbubble\">\r\n                    <img src=\"../../assets/HospitalIcon.png\" class=\"img-center img-responsive\">\r\n                    <p style=\"text-align: center;color:#267872 ;font-weight:bold;\">Forecasting</p>\r\n                  </div>\r\n      \r\n                </div>\r\n              </div>\r\n            </div>\r\n      \r\n          </div>\r\n      \r\n        </div>\r\n        <div *ngIf='UseCaseType==3'>\r\n            <div class=\"col-md-12\">\r\n              <div class=\"row\">\r\n                <!--Production-->\r\n                <div>\r\n                <div class=\"col-md-2 imgmargin\" (click)=\"redirect(8)\" *ngIf='!showProduction'>\r\n                  <div class=\"talkbubble\">\r\n                    <img src=\"../../assets/3.png\" class=\"img-center img-responsive\">\r\n        \r\n                    <p style=\"text-align: center; color:#267872;font-weight:bold;\">Production</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-2 imgmargin\" *ngIf='showProduction'>\r\n        \r\n                  <div class=\"talkbubble1\">\r\n                    <img src=\"../../assets/3.png\" class=\"img-center img-responsive\">\r\n        \r\n                    <p style=\"text-align: center; color:#fff;font-weight:bold;\">Production</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n        \r\n                <!--Production-->\r\n        \r\n                <!--Inventory-->\r\n                <div>\r\n                <div class=\"col-md-2 imgmargin\" (click)=\"redirect(3)\" *ngIf='!showmanufacturing'>\r\n                  <div class=\"talkbubble\">\r\n                    <img src=\"../../assets/3.png\" class=\"img-center img-responsive\">\r\n        \r\n                    <p style=\"text-align: center; color:#267872;font-weight:bold;\">Inventory Management</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-2 imgmargin\" *ngIf='showmanufacturing'>\r\n        \r\n                  <div class=\"talkbubble1\">\r\n                    <img src=\"../../assets/3.png\" class=\"img-center img-responsive\">\r\n        \r\n                    <p style=\"text-align: center; color:#fff;font-weight:bold;\">Inventory Management</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div>\r\n                <div class=\"col-md-2 imgmargin\">\r\n                  <div class=\"talkbubble\">\r\n                    <img src=\"../../assets/3.png\" class=\"img-center img-responsive\">\r\n        \r\n                    <p style=\"text-align: center; color:#267872;font-weight:bold;\">Performance</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n                <!--Forecasting-->\r\n                <div>\r\n                <div class=\"col-md-2 imgmargin\">\r\n                  <div class=\"talkbubble\">\r\n                    <img src=\"../../assets/3.png\" class=\"img-center img-responsive\">\r\n        \r\n                    <p style=\"text-align: center; color:#267872;font-weight:bold;\">Forecasting</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n                <!--Forecasting-->\r\n        \r\n        \r\n        \r\n              </div>\r\n            </div>\r\n            <!--Inventory-->\r\n            <!--Performance-->\r\n        \r\n          </div>\r\n\r\n          <div *ngIf='UseCaseType==4'>\r\n              <div class=\"col-md-12 padding:0px\">\r\n                <div class=\"row\">\r\n                  <div>\r\n                  <div class=\"col-md-2 imgmargin\" (click)=\"redirect(4)\" *ngIf='!showHrms'>\r\n                    <div class=\"talkbubble\">\r\n                      <img src=\"../../assets/4.png\" class=\"img-center img-responsive\">\r\n          \r\n                      <p style=\"text-align: center; color:#267872;font-weight:bold;\">Work Force</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-2 imgmargin\" *ngIf='showHrms'>\r\n                    <div class=\"talkbubble1\">\r\n                      <img src=\"../../assets/4.png\" class=\"img-center img-responsive\">\r\n                      <p style=\"text-align: center; color:#fff;font-weight:bold;\">Work Force</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n          \r\n                <div>\r\n                  <div class=\"col-md-2 imgmargin\">\r\n                    <div class=\"talkbubble\">\r\n                      <img src=\"../../assets/4.png\" class=\"img-center img-responsive\">\r\n                      <p style=\"text-align: center;color:#267872 ;font-weight:bold;\">Statistics</p>\r\n                    </div>\r\n          \r\n                  </div>\r\n                </div>\r\n                </div>\r\n          \r\n              </div>\r\n            </div>\r\n            <div *ngIf='UseCaseType==5'>\r\n                <div class=\"col-md-12 padding:0px\">\r\n                  <div class=\"row\">\r\n                    <div>\r\n                    <div class=\"col-md-2 imgmargin\" (click)=\"redirect(5)\" *ngIf='!showHealthAnalysis'>\r\n                      <div class=\"talkbubble\">\r\n                        <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n            \r\n                        <p style=\"text-align: center; color:#267872;font-weight:bold;\">Supplies</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-2 imgmargin\" *ngIf='showHealthAnalysis'>\r\n            \r\n                      <div class=\"talkbubble1\">\r\n                        <img src=\"../../assets/22.png\" class=\"img-center img-responsive\">\r\n            \r\n                        <p style=\"text-align: center; color:#fff;font-weight:bold;\">Supplies</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n            \r\n                    <div>\r\n                      <div class=\"col-md-2 imgmargin\">\r\n                      <div class=\"talkbubble\">\r\n                        <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n                        <p style=\"text-align: center;color:#267872 ;font-weight:bold;\">Billing</p>\r\n                      </div>\r\n            \r\n                    </div>\r\n                  </div>\r\n                  </div>\r\n            \r\n                </div>\r\n              </div>\r\n              <div *ngIf='UseCaseType==7'>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                      <div>\r\n                      <div class=\"col-md-2 imgmargin\" (click)=\"redirect(7)\">\r\n                        <div class=\"talkbubble\">\r\n                          <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n              \r\n                          <p style=\"text-align: center; color:#267872;font-weight:bold;\">Consumption</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n              \r\n                    <div>\r\n                      <div class=\"col-md-2 imgmargin\" (click)=\"redirect(7)\">\r\n                        <div class=\"talkbubble\">\r\n                          <img src=\"../../assets/5.png\" class=\"img-center img-responsive\">\r\n              \r\n                          <p style=\"text-align: center; color:#267872;font-weight:bold;\">Management</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    </div>\r\n                  </div>\r\n              \r\n                </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n<!--Super Admin-->\r\n</div>\r\n<!--Assembly-->\r\n\r\n\r\n<app-reports [ReportUseCaseType]=\"reportUseCaseTypeValue\" *ngIf=\"reportusecase\"></app-reports>\r\n<router-outlet></router-outlet>\r\n<!-- <app-reports></app-reports> -->\r\n<!-- <app-vehicledata *ngIf=\"showVechile\"></app-vehicledata> -->"

/***/ }),

/***/ "./src/app/usecase/usecase.component.ts":
/*!**********************************************!*\
  !*** ./src/app/usecase/usecase.component.ts ***!
  \**********************************************/
/*! exports provided: UsecaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsecaseComponent", function() { return UsecaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_databot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/databot.service */ "./src/app/core/databot.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsecaseComponent = /** @class */ (function () {
    function UsecaseComponent(router, databotservice) {
        this.router = router;
        this.databotservice = databotservice;
        // showChild=false;
        this.UseCaseType = 0;
        this.showfleetManagment = false;
        this.fleetMaintaince = false;
        this.vehiclerouteTracking = false;
        this.showmanufacturing = false;
        this.showVechile = false;
        this.reportusecase = false;
        this.reportUseCaseTypeValue = 0;
        this.showReport = false;
        this.showAssembly = false;
        this.showHrms = false;
        this.showEng = false;
        this.showHealth = false;
        this.showProduction = false;
        this.showHealthAnalysis = false;
        this.telematics = false;
        this.fleettrack = false;
        this.reporting = false;
        this.forecasting = false;
        this.production = false;
        this.inventorymanagement = false;
        this.performance = false;
        this.invforecasting = false;
        this.workforce = false;
        this.statistics = false;
        this.supplies = false;
        this.billing = false;
        this.consumption = false;
        this.management = false;
        this.superadmin = false;
    }
    UsecaseComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('userRole') == "superadmin") {
            this.superadmin = true;
            // this.noindustry = false;
        }
        else {
            this.superadmin = false;
        }
        var userData = {
            role: localStorage.getItem('userRole'),
            userid: localStorage.getItem('userId')
        };
        console.log(userData);
        this.databotservice.getUserDetails(userData).subscribe(function (data) {
            var userdata = data;
            var industries = userdata['user_data']['industriesUsecase'];
            console.log(industries);
            // this.displayIndustriesusecase(industries);
        }, function (err) {
            console.log(JSON.stringify(err) + "this is error");
        });
    };
    UsecaseComponent.prototype.ngOnChanges = function () {
        console.log(this.IndustryType);
        console.log(this.usecaseslist);
        this.loadUsecases(this.usecaseslist);
        // console.log("Destroy");
        this.showfleetManagment = false;
        this.fleetMaintaince = false;
        this.vehiclerouteTracking = false;
        this.showmanufacturing = false;
        this.showVechile = false;
        this.reportUseCaseTypeValue = 0;
        this.showReport = false;
        this.showAssembly = false;
        this.showHrms = false;
        this.showEng = false;
        this.showHealth = false;
        this.showProduction = false;
        this.showHealthAnalysis = false;
    };
    UsecaseComponent.prototype.loadUsecases = function (usecaseslist) {
        var index;
        for (index in usecaseslist) {
            switch (usecaseslist[index]) {
                case 'Production':
                    this.production = true;
                    break;
                case 'Inventory Management':
                    this.inventorymanagement = true;
                    break;
                case 'Performance':
                    this.performance = true;
                    break;
                case 'Inventory Forecasting':
                    this.invforecasting = true;
                    break;
                case 'Telematics':
                    this.telematics = true;
                    break;
                case 'Fleet Track':
                    this.fleettrack = true;
                    break;
                case 'Reporting':
                    this.reporting = true;
                    break;
                case 'Forecasting':
                    this.forecasting = true;
                    break;
                case 'Work Force':
                    this.workforce = true;
                    break;
                case 'Statistics':
                    this.statistics = true;
                    break;
                case 'Supplies':
                    this.supplies = true;
                    break;
                case 'Billing':
                    this.billing = true;
                    break;
                case 'Consumption':
                    this.consumption = true;
                    break;
                case 'Management':
                    this.management = true;
                    break;
            }
        }
    };
    UsecaseComponent.prototype.redirect = function (useCaseType) {
        this.reportusecase = true;
        this.reportUseCaseTypeValue = useCaseType;
        if (useCaseType == 1) {
            this.showfleetManagment = true;
            this.fleetMaintaince = false;
            this.showVechile = false;
            this.showAssembly = false;
            this.showEng = false;
            this.showProduction = false;
            // this.reportusecase=true;
        }
        else if (useCaseType == 2) {
            //   this.showVechile = true;
            this.fleetMaintaince = true;
            this.showfleetManagment = false;
            this.showAssembly = false;
            this.showEng = false;
            this.showProduction = false;
        }
        else if (useCaseType == 3) {
            //   this.showVechile = true;
            this.showmanufacturing = true;
            this.fleetMaintaince = false;
            this.showfleetManagment = false;
            this.showAssembly = false;
            this.showEng = false;
            this.showHrms = false;
            this.showProduction = false;
        }
        else if (useCaseType == 4) {
            this.showHrms = true;
            this.showmanufacturing = false;
            this.fleetMaintaince = false;
            this.showfleetManagment = false;
            this.showAssembly = false;
            this.showEng = false;
            this.showProduction = false;
        }
        else if (useCaseType == 5) {
            this.showHealthAnalysis = true;
            this.showHrms = false;
            this.showmanufacturing = false;
            this.fleetMaintaince = false;
            this.showfleetManagment = false;
            this.showAssembly = false;
            this.showEng = false;
            this.showProduction = false;
        }
        else if (useCaseType == 6) {
            //   this.showVechile = true;
            this.showAssembly = true;
            this.showmanufacturing = true;
            this.fleetMaintaince = false;
            this.showfleetManagment = false;
            this.showEng = false;
            this.showHrms = false;
            this.showProduction = false;
        }
        else if (useCaseType == 7) {
            //   this.showVechile = true;
            this.showEng = true;
            this.showAssembly = true;
            this.showmanufacturing = true;
            this.fleetMaintaince = false;
            this.showfleetManagment = false;
            this.showHrms = false;
            this.showProduction = false;
        }
        else if (useCaseType == 8) {
            this.showProduction = true;
            this.showEng = false;
            this.showAssembly = false;
            this.showmanufacturing = false;
            this.fleetMaintaince = false;
            this.showfleetManagment = false;
            this.showHrms = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('UseCaseType'),
        __metadata("design:type", Number)
    ], UsecaseComponent.prototype, "UseCaseType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UsecaseComponent.prototype, "IndustryType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UsecaseComponent.prototype, "usecaseslist", void 0);
    UsecaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usecase',
            template: __webpack_require__(/*! ./usecase.component.html */ "./src/app/usecase/usecase.component.html"),
            styles: [__webpack_require__(/*! ./usecase.component.css */ "./src/app/usecase/usecase.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_databot_service__WEBPACK_IMPORTED_MODULE_2__["DatabotService"]])
    ], UsecaseComponent);
    return UsecaseComponent;
}());



/***/ }),

/***/ "./src/app/vehicledata/vehicledata.component.css":
/*!*******************************************************!*\
  !*** ./src/app/vehicledata/vehicledata.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.panel-heading {\r\n    padding:0px;\r\n    border-bottom: 0px;\r\n     border-top-left-radius: 0px;\r\n     border-top-right-radius: 0px;\r\n}\r\n.panel {\r\n     margin-bottom: 0px; \r\n     border-radius: 4px;\r\n    box-shadow: 0 1px 1px rgba(0,0,0,.05);\r\n    border: 0px solid transparent;\r\n}\r\n.panel-body {\r\n    padding: 4px;\r\n}\r\n.container-fluid {\r\n    padding-right: 7px;\r\n    padding-left: 7px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n.vl {\r\n    border-left: 1px solid #6c950f;\r\n    height: 194px;\r\n    position: absolute;\r\n    left: 39%;\r\n    margin-left: 74px;\r\n    margin-top: 18px;\r\n    top: 0;\r\n}\r\n.img-center {\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n.img-Radius{\r\nborder-radius: 22px;\r\n}\r\n#fleet_hover:hover{\r\n    background-color:#E69800\r\n}"

/***/ }),

/***/ "./src/app/vehicledata/vehicledata.component.html":
/*!********************************************************!*\
  !*** ./src/app/vehicledata/vehicledata.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"panel panel-default\">\r\n      <div class=\"panel-body\" style=\"text-align: right;background-color:#E69800\"><strong style=\"color:white;\">Reports</strong></div>\r\n    </div>\r\n  \r\n    <div class=\"col-md-12 padding:0px\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2\" id=\"fleet_hover\">\r\n    \r\n          <img src=\"../../assets/hero_Image.jpg\" class=\"img-center img-responsive img-Radius\">\r\n           <p style=\"text-align: center; color:#267872\">Route Tracking</p>\r\n  \r\n        </div>\r\n        \r\n  \r\n        <div class=\"col-md-2\" id=\"fleet_hover\">  \r\n          <img src=\"../../assets/hero_Image.jpg\" class=\"img-center img-responsive img-Radius\">\r\n          <p style=\"text-align: center;color:#267872 \">Vehicle Data</p>\r\n  \r\n  \r\n        </div>\r\n        <div class=\"col-md-2\" id=\"fleet_hover\">  \r\n          <img src=\"../../assets/hero_Image.jpg\" class=\"img-center img-responsive img-Radius\">\r\n          <p style=\"text-align: center;color:#267872\">Tire Data</p>\r\n  \r\n        </div>\r\n     \r\n        \r\n       \r\n       \r\n      </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/vehicledata/vehicledata.component.ts":
/*!******************************************************!*\
  !*** ./src/app/vehicledata/vehicledata.component.ts ***!
  \******************************************************/
/*! exports provided: VehicledataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicledataComponent", function() { return VehicledataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VehicledataComponent = /** @class */ (function () {
    function VehicledataComponent() {
    }
    VehicledataComponent.prototype.ngOnInit = function () {
    };
    VehicledataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicledata',
            template: __webpack_require__(/*! ./vehicledata.component.html */ "./src/app/vehicledata/vehicledata.component.html"),
            styles: [__webpack_require__(/*! ./vehicledata.component.css */ "./src/app/vehicledata/vehicledata.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VehicledataComponent);
    return VehicledataComponent;
}());



/***/ }),

/***/ "./src/app/vehiclelive-metric/vehiclelive-metric.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/vehiclelive-metric/vehiclelive-metric.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n /*Padding*/\r\n .pd-0{\r\n  padding: 0px\r\n }\r\n .pt-0{\r\n  padding-top: 2px\r\n }\r\n .plr-2{\r\n  padding-left: 2px;\r\n  padding-right: 2px;\r\n }\r\n .pl-2{\r\n      padding-left: 2px\r\n }\r\n .pr-2{\r\n  padding-left: 2px\r\n}\r\n .pt-15{\r\n  padding-top:7px\r\n}\r\n .pt-22{\r\n padding-top: 22px\r\n}\r\n .pl-54{\r\n  padding-left: 54px\r\n}\r\n .pt-6{\r\npadding-top: 6px\r\n}\r\n .pt-10{\r\npadding-top: 10px\r\n}\r\n .pt-2{\r\n  padding-top: 2px\r\n}\r\n /*Padding*/\r\n /*Margin*/\r\n .mt-3{\r\nmargin-top: 3px;\r\n}\r\n .mt-17{\r\nmargin-top: 2px\r\n}\r\n .mt-3{\r\n  margin-top: 3px\r\n}\r\n .mlt-37{\r\n  margin-top: 6px;\r\n}\r\n /*Margin*/\r\n .bg-color{\r\n  background-color: #273048\r\n}\r\n /*font-size*/\r\n .fs-19{\r\n  font-size: 15px\r\n}\r\n /*font-size*/\r\n /*text-align*/\r\n .txt-align{\r\n  text-align: center;\r\n  }\r\n /*text-align*/\r\n .dropdown-wrapper{\r\nwidth: 100%;\r\nheight: 35px;\r\n/* padding: 0px 30px; */\r\nborder: 0px;\r\nborder-radius: 6px;\r\nbackground-color:#273048;\r\ncolor: white;\r\n}\r\n /* .body{\r\nbackground-color: #267872 !important;\r\n} */\r\n .my-container{\r\n   background-color: #EEF1EF\r\n}\r\n .main-header{\r\nheight: auto;\r\nbackground-color: #267872\r\n}\r\n .form-group {\r\n  margin-bottom:1px;\r\n}\r\n .avatar {\r\n  vertical-align: middle;\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 50%;\r\n  margin-top: 11px;\r\n  margin-left: 36px;\r\n\r\n}\r\n .icon-color{\r\n    color: #ff7675\r\n}\r\n .default-icon-color{\r\n color: #ccc\r\n}\r\n .list-group-item {\r\n      color: #333;\r\n      background:none;\r\n   border: 0px solid #ddd;\r\n}\r\n .list-group {\r\n  padding-left: 0;\r\n  margin-bottom: 0px;\r\n  line-height: 27px;\r\n}\r\n /*box*/\r\n .box{\r\n  border-radius: 5px;\r\n  padding-top: 1px;\r\n}\r\n .box-background-color{\r\n  background-color: #fff;\r\n  padding-bottom: 24px;\r\n  border-radius: 6px;\r\n  padding-top: 24px;\r\n}\r\n .paragraph{\r\n font-size: 18px;\r\n padding-top: 5px;\r\n color: #333;;\r\n text-align: center;\r\n}\r\n .header{\r\n  font-size: 29px;\r\n  text-align: center;\r\n  color: #333;;\r\n}\r\n #map {\r\n  height:300px;\r\n  width: 100%\r\n}\r\n .box-icon{\r\n  padding: 0px;\r\n  margin-left: 37px;\r\n  margin-top: -40px;\r\n\r\n}\r\n .img-icon-fuel\r\n{\r\n  width: 38%\r\n}\r\n .img-icon-temp\r\n{\r\n  width: 20%;\r\n  margin-top: -5px;\r\n}\r\n .img-icon-battery\r\n{\r\n  width: 22%;\r\n  margin-top: -3px;\r\n}\r\n .fs-18{\r\n    font-size: 18px\r\n}\r\n .gauge-needle{\r\n  width: 44%;\r\n  -webkit-transform-origin: center center 0px;\r\n          transform-origin: center center 0px;\r\n  transition: transform 0.3s ease-out;\r\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\r\n  transition: -webkit-transform 0.3s ease-out;\r\n  margin-top: -139px;\r\n  margin-left: 51px;\r\n\r\n}\r\n .activeclass{\r\n      color:yellow\r\n  /* border-bottom: 3px solid palevioletred; */\r\n\r\n\r\n}\r\n .alert_msg {\r\n  color: white;\r\n  font-size: 9px;\r\n  border-radius: 10px;\r\n  padding: 3px 5px;\r\n  background-color: green;\r\n}\r\n .alert_msg_one{\r\n  color: white;\r\n  font-size: 9px;\r\n  border-radius: 10px;\r\n  padding: 3px 5px;\r\n  background-color: red;\r\n}\r\n .box-background-alert{\r\n  background-color: red;\r\n  padding-bottom: 24px;\r\n  border-radius: 6px;\r\n  padding-top: 24px;\r\n}\r\n .tooltip-inner {\r\n  max-width: 100% !important;\r\n}\r\n /**/\r\n .btn-group-sm>.btn, .btn-sm {\r\n  padding: 4px 7px;\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/vehiclelive-metric/vehiclelive-metric.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/vehiclelive-metric/vehiclelive-metric.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"my-container\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"col-md-9\">\r\n      <div class=\"row pt-0\">\r\n        <div class=\"col-md-10 pd-0\">\r\n          <div class=\"col-md-2 plr-2\">\r\n            <div class=\"form-group\">\r\n              <select id=\"region\" name=\"region\" [(ngModel)]=\"regiondefaultname\" class=\"form-control dropdown-wrapper\"\r\n                (change)=\"changeRegion($event)\">\r\n                <option>Region</option>\r\n                <option *ngFor=\"let regions of region\" [selected]=\"regiondefaultname == regions\">{{regions}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-2 plr-2\">\r\n            <div class=\"form-group\">\r\n              <select id=\"state\" name=\"state\" [(ngModel)]=\"statedefaultname\" class=\"form-control dropdown-wrapper\"\r\n                (change)=\"changeState($event)\">\r\n                <option>State</option>\r\n                <option *ngFor=\"let states of state\" [selected]=\"statedefaultname == states\">{{states}}</option>\r\n              </select>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-md-2 plr-2\">\r\n            <div class=\"form-group\">\r\n              <select id=\"category\" name=\"category\" [(ngModel)]=\"categorydefaultname\"\r\n                class=\"form-control dropdown-wrapper\" (change)=\"changeCategory($event)\">\r\n                <option>Category</option>\r\n                <option *ngFor=\"let catg of categories\" [selected]=\"categorydefaultname == catg\">{{catg}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-2 plr-2\">\r\n            <div class=\"form-group\">\r\n              <select id=\"rating\" name=\"Rating\" [(ngModel)]=\"ratingdefaultvalue\" class=\"form-control dropdown-wrapper\"\r\n                (change)=\"changeRating($event)\">\r\n                <option>Rating</option>\r\n                <option *ngFor=\"let driverratings of driverrating\" [selected]=\"ratingdefaultvalue == driverratings\">\r\n                  {{driverratings}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-2 plr-2\">\r\n            <div class=\"form-group\">\r\n              <select id=\"vehicleid\" name=\"vehicleid\" [(ngModel)]=\"vehicledefaultname\"\r\n                class=\"form-control dropdown-wrapper\" (change)=\"changeVehicle($event)\">\r\n                <option>vehicle</option>\r\n                <option *ngFor=\"let vehicleidnos of vehicleidno\" [selected]=\"vehicledefaultname == vehicleidnos\">\r\n                  {{vehicleidnos}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!--DropDown-->\r\n\r\n      <div class=\"row\">\r\n        <!--trip info-->\r\n        <div class=\"col-md-5 pd-0\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"col-md-4 plr-2 box\">\r\n                <div class=\"box-background-color\">\r\n                  <p class=\"paragraph\">Trip Distance</p><br>\r\n                  <h5 class=\"header\">{{trip}}</h5>\r\n                  <!-- <span style=\"font-size: 25px\">5678</span> -->\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"col-md-4 plr-2 box\">\r\n                <div class=\"box-background-color\">\r\n                  <p class=\"paragraph\">Deliveries</p><br>\r\n                  <h5 class=\"header\">{{deliveries}}</h5>\r\n\r\n                  <!-- <span style=\"font-size: 25px\">5678</span> -->\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"col-md-4 plr-2 box\">\r\n                <div class=\"box-background-color\">\r\n                  <p class=\"paragraph\">Trip Duration</p><br>\r\n                  <h5 class=\"header\">{{tripduration}} hrs</h5>\r\n                  <!-- <span style=\"font-size: 25px\">5678</span> -->\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"col-md-4 plr-2 box\">\r\n                <div [ngClass]=\" mpgalert ? 'box-background-alert': 'box-background-color'\">\r\n                  <p class=\"paragraph\">Trip Mpg</p><br>\r\n                  <h5 class=\"header\">{{tripmileage}}</h5>\r\n                  <!-- <span style=\"font-size: 25px\">5678</span> -->\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"col-md-4 plr-2 box\">\r\n                <div class=\"box-background-color\">\r\n                  <p class=\"paragraph\">Engine Offline</p><br>\r\n                  <h5 class=\"header\">{{engineoffline}} min</h5>\r\n                  <!-- <span style=\"font-size: 25px\">5678</span> -->\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"col-md-4 plr-2 box\">\r\n                <div class=\"box-background-color\">\r\n                  <p class=\"paragraph\">Engine IDLE</p><br>\r\n                  <h5 class=\"header\">{{engineedletime}} min</h5>\r\n                  <!-- <span style=\"font-size: 25px\">5678</span> -->\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <!--trip info-->\r\n\r\n        <!--chart-->\r\n\r\n        <div class=\"col-md-7\">\r\n          <div class=\"row\" style=\"padding-top:11px;text-align: center; color: white\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"col-md-6\">\r\n                <span style=\"color:darkblue\">Fuel</span><br>\r\n                <span class=\"fs-18\" style=\"color:darkblue\">\r\n                  {{fuel}}%\r\n                </span>\r\n              </div>\r\n              <div class=\"col-md-6 box-icon\">\r\n                <img [src]=\"fuelalert ? '../../assets/iconss/lowfuel.png' : '../../assets/iconss/Fuel.png'\"\r\n                  class=\"img-icon-fuel\">\r\n              </div>\r\n              <span class=\"alert_msg_one\" *ngIf=\"fuelalert\">\r\n                Empty in 50 miles\r\n              </span>\r\n\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"col-md-6\">\r\n                <span style=\"color:darkblue\">Temp</span><br>\r\n                <span class=\"fs-18\" style=\"color:darkblue\">\r\n                  {{temperature}} <sup>o</sup>F\r\n                </span>\r\n              </div>\r\n              <div class=\"col-md-6 box-icon\">\r\n                <img [src]=\"tempalert ? '../../assets/iconss/overtemp.png' : '../../assets/iconss/Temp.png'\"\r\n                  class=\"img-icon-temp\">\r\n              </div>\r\n              <span class=\"alert_msg_one\" *ngIf=\"tempalert\">\r\n                Engine Overheating\r\n              </span>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"col-md-6\">\r\n                <span style=\"color:darkblue\">Battery</span><br>\r\n                <span class=\"fs-18\" style=\"color:darkblue\">\r\n                  55%\r\n                </span>\r\n              </div>\r\n              <div class=\"col-md-6 box-icon\">\r\n                <img src=\"../../assets/iconss/Battery.png\" class=\"img-icon-battery\">\r\n              </div>\r\n              <span class=\"alert_msg\" *ngIf=\"batteryalert\">\r\n                Battery looks good\r\n              </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-6\" style=\"height: 200px;margin-top: -56px;\">\r\n            <div [chart]=\"chartRpm\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\" style=\"height: 200px;margin-top: -56px;\">\r\n            <div [chart]=\"chartSpeed\"></div>\r\n          </div>\r\n        </div>\r\n        <!--chart-->\r\n\r\n      </div>\r\n      <!-- <div class=\"row\">\r\n      <div class=\"col-md-9 plr-2\" style=\"margin-top: 11px\" >\r\n        <div id=\"map\"></div>\r\n\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n\r\n      </div>\r\n    </div> -->\r\n    </div>\r\n\r\n    <div class=\"col-md-3\" style=\"margin-top: 2px;padding-bottom:3px;border-radius: 6px;padding-left: 2px\">\r\n      <div class=\"row\" style=\"background-color:#fff;padding-bottom: 12px;\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n\r\n            <div>\r\n              <span style=\"font-size:17px; color:#333;padding-left: 12px\"> Driver Name : {{drivername}}</span><br>\r\n              <div *ngIf=\"rating ==5\">\r\n                <span style=\"padding-left: 12px\">\r\n                  <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                    aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                    class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\"\r\n                    aria-hidden=\"true\"></i>\r\n                </span>\r\n              </div>\r\n              <div *ngIf=\"rating ==4\">\r\n                <span style=\"padding-left: 12px\">\r\n                  <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                    aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                    class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i\r\n                    class=\"fa fa-star default-icon-color\" aria-hidden=\"true\"></i>\r\n                </span>\r\n              </div>\r\n              <div *ngIf=\"rating ==3\">\r\n                <span style=\"padding-left: 12px\">\r\n                  <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                    aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star icon-color\" aria-hidden=\"true\">&nbsp;</i><i\r\n                    class=\"fa fa-star default-icon-color\" aria-hidden=\"true\">&nbsp;</i>&nbsp;<i\r\n                    class=\"fa fa-star default-icon-color\" aria-hidden=\"true\"></i>\r\n                </span>\r\n              </div>\r\n\r\n              <div *ngIf=\"rating ==2\">\r\n                <span style=\"padding-left: 12px\">\r\n                  <i class=\"fa fa-star icon-color\" aria-hidden=\"true\"></i> &nbsp;<i class=\"fa fa-star icon-color\"\r\n                    aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\"\r\n                    aria-hidden=\"true\">&nbsp;</i><i class=\"fa fa-star default-icon-color\"\r\n                    aria-hidden=\"true\">&nbsp;</i>&nbsp;<i class=\"fa fa-star default-icon-color\" aria-hidden=\"true\"></i>\r\n                </span>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 2px\">\r\n        <div class=\"card-header\" style=\"font-size:20px;text-align:center;color: white;background-color:#fff;\">\r\n          <!-- <h5 style=\"text-align:center ;background-color: #1C6561\">Fleet Sheet</h5> -->\r\n          </div>\r\n        <div class=\"card-body\" style=\"background-color: #fff;padding-bottom: 12px;height:238px;overflow: overlay\">\r\n          <!-- <ul class=\"list-group\" *ngFor=\"let item of address\">\r\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\" style=\"padding-right: 36px;\">\r\n              {{item.Location}}\r\n              <i style=\"font-size:24px; float:right;\" class=\"fa\"\r\n                [ngStyle]=\"{'color':item.Status === 'Yes' ? 'green' : 'red' }\">&#xf05d;</i>\r\n            </li>\r\n          </ul> -->\r\n\r\n          <!-- <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Address</th>\r\n                <th scope=\"col\">Status</th>\r\n                <th scope=\"col\">Delivery</th>\r\n              </tr>\r\n            </thead>\r\n            <tr>\r\n              <td>Delhi</td>\r\n              <td><button type=\"button\" class=\"btn btn-primary btn-sm\">Delivered</button></td>\r\n              <td>Ontime</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Delhi</td>\r\n              <td><button type=\"button\" class=\"btn btn-primary btn-sm\">Delay</button></td>\r\n              <td>Ontime</td>\r\n            </tr>\r\n          </table> -->\r\n          <div class=\"col-md-6\">\r\n            <table>\r\n              <tr>\r\n                <th>Address</th>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <table>\r\n              <tr>\r\n                <th>Status</th>\r\n              </tr>\r\n            </table>\r\n\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <table>\r\n              <tr>\r\n                <th>Delivery</th>\r\n              </tr>\r\n            </table>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-md-6\" style=\"padding-top: 4px;font-size: 12px\">\r\n            <Span> {{locationone}}</Span><br>\r\n\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <button type=\"button\" class=\"btn btn-primary btn-sm\">Delivered</button>\r\n\r\n\r\n          </div>\r\n          <div class=\"col-md-3 pt-6\">\r\n            <span>{{schtimeone}}</span>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-md-6\" style=\"padding-top: 4px;font-size: 12px\">\r\n            <Span> {{locationtwo}}</Span>\r\n\r\n          </div>\r\n          <div class=\"col-md-3 mt-3\">\r\n            <button type=\"button\" class=\"btn btn-primary btn-sm\">Delivered</button>\r\n\r\n          </div>\r\n          <div class=\"col-md-3 pt-6\">\r\n            <span>{{schtimetwo}}</span>\r\n          </div>\r\n\r\n          <div class=\"col-md-6\" style=\"padding-top: 4px;font-size: 12px\">\r\n              <Span> {{locationthree}}</Span>\r\n\r\n            </div>\r\n            <div class=\"col-md-3 mt-3\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm\">Delivered</button>\r\n\r\n            </div>\r\n            <div class=\"col-md-3 pt-6\">\r\n              <span>{{schtimethree}}</span>\r\n            </div>\r\n\r\n\r\n          <div class=\"col-md-6\" style=\"padding-top: 4px;font-size: 12px\">\r\n            <Span> {{locationfour}}</Span>\r\n\r\n          </div>\r\n          <div class=\"col-md-3 mt-3\">\r\n            <button type=\"button\" class=\"btn btn-primary btn-sm\">Delivered</button>\r\n\r\n          </div>\r\n          <div class=\"col-md-3 pt-6\">\r\n            <span>{{schtimefour}}</span>\r\n          </div>\r\n          <div class=\"col-md-6\" style=\"padding-top: 4px;font-size: 12px\">\r\n            <Span> {{locationfive}}</Span>\r\n\r\n          </div>\r\n          <div class=\"col-md-3 mt-3\">\r\n            <button type=\"button\" class=\"btn btn-primary btn-sm\">Delivered</button>\r\n\r\n          </div>\r\n          <div class=\"col-md-3 pt-6\">\r\n            <span>{{schtimefive}}</span>\r\n          </div>\r\n\r\n          <div class=\"col-md-6\" style=\"padding-top: 4px;font-size: 12px\">\r\n            <Span> {{locationsix}}</Span>\r\n         </div>\r\n          <div class=\"col-md-3 mt-3\">\r\n            <button type=\"button\" class=\"btn btn-primary btn-sm\">Delivered</button>\r\n\r\n          </div>\r\n          <div class=\"col-md-3 pt-6\">\r\n            <span>{{schtimesix}}</span>\r\n          </div>\r\n          <div class=\"col-md-6\" style=\"padding-top: 4px;font-size: 12px\">\r\n            <Span> {{locationseven}}</Span>\r\n\r\n          </div>\r\n          <div class=\"col-md-3 mt-3\">\r\n            <button type=\"button\" class=\"btn btn-primary btn-sm\">Delivered</button>\r\n\r\n          </div>\r\n          <div class=\"col-md-3 pt-6\">\r\n            <span>{{schtimeseven}}</span>\r\n          </div>\r\n\r\n          <div class=\"col-md-6\" style=\"padding-top: 4px;font-size: 12px\">\r\n              <Span> {{locationeight}}</Span>\r\n\r\n            </div>\r\n            <div class=\"col-md-3 mt-3\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm\">Delivered</button>\r\n\r\n            </div>\r\n            <div class=\"col-md-3 pt-6\">\r\n              <span>{{schtimeeight}}</span>\r\n            </div>\r\n\r\n\r\n          <div class=\"col-md-6\" style=\"padding-top: 4px;font-size: 12px\">\r\n              <Span> {{locationnine}}</Span>\r\n\r\n            </div>\r\n            <div class=\"col-md-3 mt-3\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm\">Delivered</button>\r\n\r\n            </div>\r\n            <div class=\"col-md-3 pt-6\">\r\n              <span>{{schtimenine}}</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\" style=\"padding-top: 4px;font-size: 12px\">\r\n                <Span> {{locationten}}</Span>\r\n\r\n              </div>\r\n              <div class=\"col-md-3 mt-3\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\">Delivered</button>\r\n\r\n              </div>\r\n              <div class=\"col-md-3 pt-6\">\r\n                <span>{{schtimeten}}</span>\r\n              </div>\r\n\r\n\r\n\r\n          <div class=\"col-md-6\" style=\"padding-top: 4px;font-size: 12px\">\r\n                <Span> New York</Span>\r\n              </div>\r\n              <div class=\"col-md-3\" style=\"padding-top: 3px\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" style=\"width:100%\">Delayed</button>\r\n\r\n              </div>\r\n              <div class=\"col-md-3 pt-10\">\r\n                <span>10 Min</span>\r\n              </div>\r\n\r\n\r\n             <div class=\"col-md-6\" style=\"padding-top: 4px;font-size: 12px\">\r\n                <Span> New York</Span>\r\n              </div>\r\n              <div class=\"col-md-3\" style=\"padding-top: 3px\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" style=\"width:100%\">Missed</button>\r\n\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n                    (click)=\"deliveryReschedule($event)\" data-toggle=\"tooltip\"  data-placement=\"top\" title=\"{{result | date:'medium' }}\">{{result}}</button>\r\n              </div>\r\n\r\n            </div>\r\n      </div>\r\n\r\n      <!--Preventive Maintenance-->\r\n      <div class=\"row mt-3 bg-color\" style=\"margin-top:10px;border-radius: 23px;\">\r\n        <div class=\"col-md-4\">\r\n          <span class=\"fs-19\" style=\"padding-left: 27px; color: white\">Preventive</span><br>\r\n          <span class=\"fs-19\" style=\"padding-left: 21px; color: white\">Maintenance</span>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <span  style=\"color: white;font-size: 12px;text-align: center\">{{prementiveMaintenancearrsort[0].part}}</span><br>\r\n          <span  style=\"color: white;font-size: 12px;text-align: center\">{{prementiveMaintenancearrsort[0].date_main}} </span>\r\n         </div>\r\n         <div class=\"col-md-2\">\r\n\r\n            <button type=\"button\" class=\"btn btn-primary btn-sm mlt-37\" (click) =\"prementiveMaintenance()\" style=\"border-radius: 17px;background-color:#EEF1EF\"><span style=\"color:black\">more</span></button>\r\n\r\n         </div>\r\n      </div>\r\n\r\n\r\n  <!--close Preventive Maintenance-->\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 pr pt-15\" style=\"padding-right: 2px;\">\r\n        <!-- <div id=\"map\"></div> -->\r\n        <div class=\"card-header\" style=\"font-size:18px; color:  white;background-color: #273048;\">\r\n          <!-- <h5 style=\"text-align:center ;background-color: #1C6561\">Route Map</h5> -->\r\n          <span class=\"pl-54\">Route Map</span>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div id=\"map\"></div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-md-2 plr-2 pt-15\">\r\n        <div class=\"card-header\" style=\"font-size:18px;color: white;background-color:#273048;\">\r\n\r\n          <span>Driver Behaviour</span>\r\n        </div>\r\n        <div class=\"card-body\" style=\"background-color:#fff;padding-bottom:22px;\">\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n              Driver Attendance\r\n              <span style=\"color: #333; float: right;\">95%</span>\r\n            </li>\r\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n              High Speed Events\r\n              <span style=\"color:#333; float: right;\">6</span>\r\n            </li>\r\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n              Harsh Braking Events\r\n              <span style=\"color:#333; float: right;\">2</span>\r\n            </li>\r\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n              Misrouting\r\n              <span style=\"color:#333; float: right;\">1</span>\r\n            </li>\r\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n              Total Engine offline\r\n              <span style=\"color:#333; float: right;\">.52 Hours</span>\r\n            </li>\r\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n              Harsh Acceleration\r\n              <span style=\"color:#333; float: right;\">{{rapidacceleration}}</span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-md-2 pl-2 pt-15\">\r\n        <div class=\"card-header\" style=\"font-size:18px;color: white;background-color:#273048;\">\r\n          <span>Vehicle</span>\r\n        </div>\r\n        <div class=\"card-body\" style=\"background-color:#fff; padding-bottom: 43px\">\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n              Total Miles Completed\r\n              <span style=\"color:#333; float: right;\">{{totalmilesrun}}</span>\r\n            </li>\r\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n              No of Breakdowns\r\n              <span style=\"color:#333; float: right;\">2</span>\r\n            </li>\r\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n              Flat Tire Events\r\n              <span style=\"color:#333; float: right;\">{{flattireevents}}</span>\r\n            </li>\r\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n              Last Services\r\n              <span style=\"color:#333; float: right;\">{{lastservicedate | date}}</span>\r\n            </li>\r\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n              Last Breakdown <br>at 123456.25 miles\r\n              <span style=\"color:#333; float: right;margin-top: -16px;\">{{lastbreakdown | date}}</span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--Modal-->\r\n<div class=\"modal fade\" id=\"calendarModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Schedule Calendar</h4>\r\n      </div>\r\n      <div class=\"modal-body\" style=\"height: 200px\">\r\n        <div class=\"form-group\">\r\n          <angular2-date-picker class=\"form-control\" id=\"datetimepicker\" [(ngModel)]=\"date\" [settings]=\"settings\"\r\n            style=\"padding: 0.2rem 0.1rem\"></angular2-date-picker>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"setDate()\">Set</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--Message Delivery-->\r\n<div class=\"modal fade\" id=\"messageeModel\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Prementive Maintenance</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <span>Your Order Successfully Reschedule For Delivery\":{{result | date:'medium' }}</span>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Message Delivery-->\r\n\r\n<!--Prementive Maintenance-->\r\n<div class=\"modal fade\" id=\"maintenanceModel\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\" style=\"width:74%\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Preventive Maintenance</h4>\r\n      </div>\r\n      <div class=\"modal-body\" style=\"height: 250px\">\r\n        <div class=\"form-group\">\r\n          <div class=\"row\" *ngFor=\"let item of prementiveMaintenancearrsort; let i= index\" style=\"padding: 2px\">\r\n              <div class=\"col-md-4\">\r\n                  <span>{{item.part}}</span>\r\n                 </div>\r\n                 <div class=\"col-md-4\">\r\n                    <span>{{item.date_main}}</span>\r\n                </div>\r\n\r\n                 <div class=\"col-md-4\">\r\n                  <button type=\"button\" class=\"btn btn-primary active\" (click) =\"scheduleActivity(i,item)\" > {{selectedButton[i] ? 'Scheduled' : 'Schedule Activity'}}</button>\r\n                </div>\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <!-- <button type=\"button\" class=\"btn btn-default\">Set</button> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--Prementive Maintenance-->\r\n"

/***/ }),

/***/ "./src/app/vehiclelive-metric/vehiclelive-metric.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/vehiclelive-metric/vehiclelive-metric.component.ts ***!
  \********************************************************************/
/*! exports provided: VehicleliveMetricComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleliveMetricComponent", function() { return VehicleliveMetricComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehicleliveMetricComponent = /** @class */ (function () {
    function VehicleliveMetricComponent(http) {
        this.http = http;
        this.categories = [];
        this.state = [];
        this.region = [];
        this.driverrating = [];
        this.vehicleidno = [];
        this.driverinformation = [];
        /**Map */
        this.location = [];
        this.fuel = 70;
        this.temperature = 195;
        this.fuelalert = false;
        this.tempalert = false;
        this.batteryalert = true;
        this.mpgalert = false;
        // value:string;
        /**Date and time picker */
        this.date = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: true,
            format: 'dd-MM-yyyy hh:mm a',
            defaultOpen: false,
            closeOnSelect: false
        };
        this.prementiveMaintenancearr = [];
        this.prementiveMaintenancearrsort = [];
        this.selectedButton = {};
        // this.result = this.value
    }
    VehicleliveMetricComponent.prototype.ngAfterViewInit = function () {
    };
    VehicleliveMetricComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.result = 'reshedule';
        var $this = this;
        this.regiondefaultname = 'Midwest';
        this.statedefaultname = 'Ohio';
        this.categorydefaultname = '91-100', this.ratingdefaultvalue = 4;
        this.vehicledefaultname = 'CAT6257';
        this.http.get('../../assets/data/vehiclemetric.json').subscribe(function (data) {
            _this.jsondata = data;
            var index;
            for (index in _this.jsondata) {
                if (_this.region.indexOf(_this.jsondata[index].Region) < 0) {
                    _this.region.push(_this.jsondata[index].Region);
                }
            }
            _this.loadDefaultRegion(_this.region, _this.jsondata);
            // this.distributors = data['LOCATIONS'];
        });
        setInterval(function () {
            var val = 10;
            var tempval = 1;
            $this.batteryalert = false;
            if ($this.fuel) {
                $this.fuel -= val;
                if ($this.fuel == 0) {
                    $this.fuel = 70;
                }
                else if ($this.fuel == 30) {
                    $this.fuelalert = true;
                }
                else {
                    $this.fuelalert = false;
                }
            }
            if ($this.temperature) {
                $this.temperature += tempval;
                if ($this.temperature == 202) {
                    $this.temperature = 195;
                }
                else if ($this.temperature == 200) {
                    $this.tempalert = true;
                }
                else {
                    $this.tempalert = false;
                }
            }
        }, 5000);
        // this.routeMap();
    };
    VehicleliveMetricComponent.prototype.loadDefaultRegion = function (region, jsondata) {
        var index;
        this.state = [];
        this.categories = [];
        this.driverrating = [];
        this.vehicleidno = [];
        for (index in jsondata) {
            if (jsondata[index].Region === this.regiondefaultname) {
                if (this.state.indexOf(jsondata[index].State) < 0) {
                    this.state.push(jsondata[index].State);
                }
            }
        }
        this.loadDefaultCategory(this.regiondefaultname, this.statedefaultname, this.jsondata);
    };
    VehicleliveMetricComponent.prototype.loadDefaultCategory = function (regiondefaultname, statedefaultname, jsondata) {
        var index;
        this.categories = [];
        this.driverrating = [];
        this.vehicleidno = [];
        for (index in this.jsondata) {
            if (jsondata[index].Region === regiondefaultname && this.jsondata[index].State === statedefaultname) {
                if (this.categories.indexOf(jsondata[index].Category) < 0) {
                    this.categories.push(jsondata[index].Category);
                    // alert(this.categories)
                }
            }
        }
        this.loadDefaultRating(this.regiondefaultname, this.statedefaultname, this.categorydefaultname, jsondata);
    };
    VehicleliveMetricComponent.prototype.loadDefaultRating = function (regiondefaultname, statedefaultname, categorydefaultname, jsondata) {
        this.driverrating = [];
        this.vehicleidno = [];
        var index;
        for (index in this.jsondata) {
            if (jsondata[index].Region === regiondefaultname && jsondata[index].State === statedefaultname &&
                this.jsondata[index].Category === categorydefaultname) {
                if (this.driverrating.indexOf(this.jsondata[index].Rating) < 0) {
                    this.driverrating.push(this.jsondata[index].Rating);
                }
            }
        }
        this.loadDefaultVehicle(this.regiondefaultname, this.statedefaultname, this.categorydefaultname, jsondata, this.ratingdefaultvalue);
    };
    VehicleliveMetricComponent.prototype.loadDefaultVehicle = function (regiondefaultname, statedefaultname, categorydefaultname, jsondata, ratingdefaultvalue) {
        var index;
        for (index in jsondata) {
            if (jsondata[index].Region === regiondefaultname && jsondata[index].State === statedefaultname &&
                jsondata[index].Category === categorydefaultname && jsondata[index].Rating == ratingdefaultvalue) {
                if (this.vehicleidno.indexOf(jsondata[index]['Truck ID']) < 0) {
                    this.vehicleidno.push(jsondata[index]['Truck ID']);
                    console.log(this.vehicledefaultname);
                }
            }
        }
        this.loadDefaultDriverData(this.regiondefaultname, this.statedefaultname, this.categorydefaultname, jsondata, this.ratingdefaultvalue, this.vehicledefaultname);
    };
    VehicleliveMetricComponent.prototype.loadDefaultDriverData = function (regiondefaultname, statedefaultname, categorydefaultname, jsondata, ratingdefaultvalue, vehicledefaultname) {
        var $this = this;
        var index;
        for (index in this.jsondata) {
            if (jsondata[index].Region === regiondefaultname && jsondata[index].State === statedefaultname &&
                this.jsondata[index].Category === categorydefaultname && this.jsondata[index].Rating == ratingdefaultvalue && this.jsondata[index]['Truck ID'] === vehicledefaultname) {
                this.drivername = this.jsondata[index]['Name'];
                this.licenceno = this.jsondata[index]['Vehicle Licence ID'];
                this.rating = this.jsondata[index]['Rating'];
                this.trip = this.jsondata[index]['Trip Miles'];
                this.deliveries = this.jsondata[index]['Deliveries Completed'];
                this.tripduration = this.jsondata[index]['Trip Duration'];
                this.tripmileage = this.jsondata[index]['Trip Mileage'];
                this.engineoffline = this.jsondata[index]['Engine Offline'];
                this.engineedletime = this.jsondata[index]['Engine Idle Time'];
                this.totalmilesrun = this.jsondata[index]['Total Miles Run'];
                this.lastservicedate = this.jsondata[index]['Last Service Date'];
                this.milesrunssinceservice = this.jsondata[index]['Miles Run since Serviced'];
                this.flattireevents = this.jsondata[index]['Flat Tire Events'];
                this.lastbreakdown = this.jsondata[index]['Last Breakdown On'];
                this.planneddeliveries = this.jsondata[index]['Planned Deliveries'];
                this.deliverescompleted = this.jsondata[index]['Deliveries Completed'];
                this.rapidacceleration = this.jsondata[index]['Rapid Acceleration'];
                this.address = this.jsondata[index].Address;
                this.location = this.jsondata[index].Locations;
                this.speed = this.jsondata[index].Speed;
                this.rpm = this.jsondata[index].Rpm;
                this.loadMap();
                this.loadGuage(this.speed);
                this.loadGaugerpm(this.rpm);
            }
        }
        setInterval(function () {
            var value = 1;
            $this.tripmileage = $this.tripmileage;
            $this.tripmileage -= value;
            console.log($this.tripmileage);
            if ($this.tripmileage == 11) {
                $this.mpgalert = true;
            }
            else if ($this.tripmileage == 10) {
                $this.tripmileage = 15;
                $this.mpgalert = false;
            }
        }, 2000);
    };
    VehicleliveMetricComponent.prototype.loadMap = function () {
        var _this = this;
        this.http.get('../../assets/data/location.json').subscribe(function (res) {
            var newmapdata = res;
            console.log(newmapdata);
            _this.routeMap(newmapdata);
        });
    };
    VehicleliveMetricComponent.prototype.routeMap = function (newmapdata) {
        var lat_lng = new Array();
        // let that;
        for (var i = 0; i < newmapdata.length; i++) {
            var lat = newmapdata[i].Latitude;
            var long = newmapdata[i].Longitude;
            var myLatlng = new google.maps.LatLng(lat, long);
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 5,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false,
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.LEFT_BOTTOM
                },
                fullscreenControl: true,
                fullscreenControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_CENTER
                }
            });
            lat_lng.push(myLatlng);
            var image = {
                url: '../../assets/images/warehouse.png',
                // This marker is 50 pixels wide by 50 pixels high.
                scaledSize: new google.maps.Size(50, 50),
            };
            var imagetruck = {
                url: '../../assets/images/truck_top.png',
                // This marker is 50 pixels wide by 50 pixels high.
                scaledSize: new google.maps.Size(30, 30),
            };
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, long),
                map: map,
                icon: imagetruck,
            });
            var marker1 = new google.maps.Marker({
                position: new google.maps.LatLng(32.542, -93.604),
                map: map,
                icon: image,
            });
            // var infowindow = new google.maps.InfoWindow({
            //   content: '<b><p style="color:red;text-weight:bold">Tire Position:' + JSON.stringify(tirepos) + '</p></b>' +
            //     '<b><p style="color:red;text-weight:bold">Tire Pressure:' + JSON.stringify(tirepsi) + '</p></b>'
            // });
            // var infowindow1 = new google.maps.InfoWindow({
            //   // content: '<b><p style="color:black">1</p>'
            // });
            // // infowindow.open(map, marker);
            // infowindow1.open(map, marker1);
            setInterval(function () {
                map.panTo(marker.getPosition());
            }, 5000);
        }
        var service = new google.maps.DirectionsService();
        var delayFactor = 0;
        function m_get_directions_route(request, latlong) {
            service.route(request, function (result, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    //Process you route here
                    var path = new google.maps.MVCArray();
                    var polylineoptns = {
                        strokeOpacity: 0.8,
                        strokeWeight: 3,
                        strokeColor: "blue",
                        map: map,
                    };
                    var poly = new google.maps.Polyline(polylineoptns);
                    poly.setPath(path);
                    var infowindow_polygon_1 = new google.maps.InfoWindow({ content: 'Stock' });
                    google.maps.event.addListener(poly, "mouseover", function (event) {
                        this.setOptions({ fillColor: "#00FF00" });
                        infowindow_polygon_1.setPosition(event.latLng);
                        infowindow_polygon_1.open(map);
                    });
                    google.maps.event.addListener(poly, "mouseout", function (event) {
                        this.setOptions({ fillColor: "#00FF00" });
                        //infowindow_polygon_1.setPosition(event.latLng);
                        infowindow_polygon_1.close(map);
                    });
                    for (var i = 0, len = result.routes[0].overview_path.length; i < len; i++) {
                        path.push(result.routes[0].overview_path[i]);
                        marker.setPosition(result.routes[0].overview_path[i]);
                    }
                }
                else if (status === google.maps.DirectionsStatus.OVER_QUERY_LIMIT) {
                    delayFactor++;
                    setTimeout(function () {
                        m_get_directions_route(request, latlong);
                    }, delayFactor * 1000);
                }
                else {
                    //console.log("Route: " + status);
                }
            });
        }
        for (i = 0; i < lat_lng.length; i++) {
            if ((i + 1) < lat_lng.length) {
                var src = lat_lng[i];
                var des = lat_lng[i + 1];
                var request = {
                    origin: src,
                    destination: des,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };
                m_get_directions_route(request, lat_lng);
            }
        }
    };
    VehicleliveMetricComponent.prototype.loadGuage = function (speed) {
        var $this = this;
        this.options = {
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
                // spacing: [0, 0, 0, 0],
                backgroundColor: null,
            },
            credits: {
                enabled: false
            },
            title: {
                text: ''
            },
            pane: {
                startAngle: -150,
                endAngle: 150,
                background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#333'],
                                [1, '#FFF']
                            ]
                        },
                        borderWidth: 1,
                        outerRadius: '107%'
                    }, {}, {
                        backgroundColor: '#DDD',
                        borderWidth: 0,
                        outerRadius: '105%',
                        innerRadius: '103%'
                    }]
            },
            // the value axis
            yAxis: {
                min: 0,
                max: 180,
                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',
                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                title: {
                    text: 'mph'
                },
                plotBands: [{
                        from: 0,
                        to: 120,
                        color: '#55BF3B' // green
                    }, {
                        from: 120,
                        to: 160,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 160,
                        to: 200,
                        color: '#DF5353' // red
                    }]
            },
            series: [{
                    name: 'Speed',
                    data: [60]
                }]
        };
        $this.chartSpeed = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.options);
        setInterval(function () {
            // Speed
            var point, newVal, inc;
            if ($this.chartSpeed) {
                point = $this.chartSpeed.ref.series[0].points[0];
                inc = Math.round((Math.random() - 0.5) * 100);
                newVal = point.y + inc;
                if (newVal < 0 || newVal > 160) {
                    newVal = point.y - inc;
                }
                point.update(newVal);
            }
            // RPM
            if ($this.chartRpm) {
                point = $this.chartRpm.ref.series[0].points[0];
                inc = Math.round((Math.random() - 0.5) * 10);
                newVal = point.y + inc;
                if (newVal < 0 || newVal > 10) {
                    newVal = point.y - inc;
                }
                point.update(newVal);
            }
        }, 2000);
    };
    VehicleliveMetricComponent.prototype.loadGaugerpm = function (rpm) {
        this.options = {
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
                // spacing: [50, 50, 50, 50],
                backgroundColor: null,
            },
            credits: {
                enabled: false
            },
            title: {
                text: ''
            },
            pane: {
                startAngle: -150,
                endAngle: 150,
                background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#333'],
                                [1, '#FFF']
                            ]
                        },
                        borderWidth: 1,
                        outerRadius: '107%'
                    }, {}, {
                        backgroundColor: '#DDD',
                        borderWidth: 0,
                        outerRadius: '105%',
                        innerRadius: '103%'
                    }]
            },
            // the value axis
            yAxis: {
                min: 0,
                max: 12,
                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',
                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                title: {
                    text: 'rpm'
                },
                plotBands: [{
                        from: 0,
                        to: 4,
                        color: '#55BF3B' // green
                    }, {
                        from: 4,
                        to: 8,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 8,
                        to: 12,
                        color: '#DF5353' // red
                    }]
            },
            series: [{
                    name: 'Rpm',
                    data: [4]
                }]
        };
        this.chartRpm = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.options);
    };
    /**Drop down */
    VehicleliveMetricComponent.prototype.changeRegion = function (region) {
        this.regionname = this.regiondefaultname = region.currentTarget.value;
        var index;
        this.state = [];
        this.categories = [];
        this.driverrating = [];
        this.vehicleidno = [];
        for (index in this.jsondata) {
            if (this.jsondata[index].Region === this.regionname) {
                if (this.state.indexOf(this.jsondata[index].State) < 0) {
                    this.state.push(this.jsondata[index].State);
                }
            }
        }
    };
    VehicleliveMetricComponent.prototype.changeState = function (state) {
        this.statename = this.statedefaultname = state.currentTarget.value;
        // console.log(this.categories);
        var index;
        this.categories = [];
        this.driverrating = [];
        this.vehicleidno = [];
        for (index in this.jsondata) {
            if (this.jsondata[index].Region === this.regiondefaultname && this.jsondata[index].State === this.statename) {
                if (this.categories.indexOf(this.jsondata[index].Category) < 0) {
                    this.categories.push(this.jsondata[index].Category);
                    // alert(this.categories)
                    // console.log(this.categories+"ihhi");
                }
            }
        }
    };
    VehicleliveMetricComponent.prototype.changeCategory = function (category) {
        this.categoryname = this.categorydefaultname = category.currentTarget.value;
        this.driverrating = [];
        this.vehicleidno = [];
        var index;
        for (index in this.jsondata) {
            if (this.jsondata[index].Region === this.regiondefaultname && this.jsondata[index].State === this.statedefaultname && this.jsondata[index].Category === this.categoryname) {
                if (this.driverrating.indexOf(this.jsondata[index].Rating) < 0) {
                    this.driverrating.push(this.jsondata[index].Rating);
                }
            }
        }
    };
    VehicleliveMetricComponent.prototype.changeRating = function (rating) {
        this.performanc = this.ratingdefaultvalue = rating.currentTarget.value;
        this.vehicleidno = [];
        var index;
        for (index in this.jsondata) {
            if (this.jsondata[index].Region === this.regiondefaultname && this.jsondata[index].State === this.statedefaultname &&
                this.jsondata[index].Category === this.categorydefaultname && this.jsondata[index].Rating == this.performanc) {
                if (this.vehicleidno.indexOf(this.jsondata[index]['Truck ID']) < 0) {
                    this.vehicleidno.push(this.jsondata[index]['Truck ID']);
                }
            }
        }
    };
    VehicleliveMetricComponent.prototype.changeVehicle = function (name, axelcheckup) {
        this.vehiclename = this.vehicledefaultname = name.currentTarget.value;
        this.result = 'Reschedule';
        var index;
        for (index in this.jsondata) {
            if (this.jsondata[index].Region === this.regiondefaultname && this.jsondata[index].State === this.statedefaultname &&
                this.jsondata[index].Category === this.categorydefaultname && this.jsondata[index].Rating == this.ratingdefaultvalue && this.jsondata[index]['Truck ID'] === this.vehiclename) {
                this.drivername = this.jsondata[index]['Name'];
                this.licenceno = this.jsondata[index]['Vehicle Licence ID'];
                this.rating = this.jsondata[index]['Rating'];
                this.trip = this.jsondata[index]['Trip Miles'];
                this.deliveries = this.jsondata[index]['Deliveries Completed'];
                this.tripduration = this.jsondata[index]['Trip Duration'];
                this.tripmileage = this.jsondata[index]['Trip Mileage'];
                this.engineoffline = this.jsondata[index]['Engine Offline'];
                this.engineedletime = this.jsondata[index]['Engine Idle Time'];
                this.totalmilesrun = this.jsondata[index]['Total Miles Run'];
                this.lastservicedate = this.jsondata[index]['Last Service Date'];
                this.milesrunssinceservice = this.jsondata[index]['Miles Run since Serviced'];
                this.flattireevents = this.jsondata[index]['Flat Tire Events'];
                this.lastbreakdown = this.jsondata[index]['Last Breakdown On'];
                this.planneddeliveries = this.jsondata[index]['Planned Deliveries'];
                this.deliverescompleted = this.jsondata[index]['Deliveries Completed'];
                this.rapidacceleration = this.jsondata[index]['Rapid Acceleration'];
                this.address = this.jsondata[index].Address;
                this.location = this.jsondata[index].Locations;
                this.speed = this.jsondata[index].Speed;
                this.rpm = this.jsondata[index].Rpm;
                this.loadMap();
                this.loadGuage(this.speed);
                this.loadGaugerpm(this.rpm);
                // this.routeMap(this.location)
            }
        }
        this.getSchedule(this.drivername);
        this.getPreventiveMaintanence(this.vehiclename);
    };
    VehicleliveMetricComponent.prototype.getPreventiveMaintanence = function (vehiclename) {
        var _this = this;
        var index;
        this.prementiveMaintenancearr = [];
        this.http.get('../../assets/data/preventivemaintenance.json').subscribe(function (data) {
            _this.preventivemaintenancejson = data;
            for (index in _this.preventivemaintenancejson) {
                if (_this.preventivemaintenancejson[index]['Truck ID'] === vehiclename) {
                    _this.prementiveMaintenancearr.push({ "date_main": _this.preventivemaintenancejson[index]['Axle Checkup'], "part": 'Axle Checkup' }, { "date_main": _this.preventivemaintenancejson[index]['Next Break Change Date'], "part": 'Next Break Change Date' }, { "date_main": _this.preventivemaintenancejson[index]['Next Oil Change Date'], "part": 'Next Oil Change Date' }, { "date_main": _this.preventivemaintenancejson[index]['Axel Alignment & Wheel Balancing'], "part": 'Axel Alignment & Wheel Balancing' }, { "date_main": _this.preventivemaintenancejson[index]['Pollution Check'], "part": 'Pollution Check' }, { "date_main": _this.preventivemaintenancejson[index]['Battery Check up'], "part": 'Battery Check up' });
                }
            }
            _this.filterMaintanenceData(_this.prementiveMaintenancearr);
        });
    };
    VehicleliveMetricComponent.prototype.getSchedule = function (drivernmae) {
        var _this = this;
        this.http.get('../../assets/data/driver-schedule.json').subscribe(function (data) {
            _this.driverschedulejsondata = data;
            for (var i = 0; i <= _this.driverschedulejsondata.length; i++) {
                if (_this.driverschedulejsondata[i].Name === drivernmae) {
                    _this.locationone = _this.driverschedulejsondata[i]['Location 1'];
                    _this.locationtwo = _this.driverschedulejsondata[i]['Location 2'];
                    _this.locationthree = _this.driverschedulejsondata[i]['Location 3'];
                    _this.locationfour = _this.driverschedulejsondata[i]['Location 4'];
                    _this.locationfive = _this.driverschedulejsondata[i]['Location 5'];
                    _this.locationsix = _this.driverschedulejsondata[i]['Location 6'];
                    _this.locationseven = _this.driverschedulejsondata[i]['Location 7'];
                    _this.locationeight = _this.driverschedulejsondata[i]['Location 8'];
                    _this.locationnine = _this.driverschedulejsondata[i]['Location 9'];
                    _this.locationten = _this.driverschedulejsondata[i]['Location 10'];
                    _this.schtimeone = _this.driverschedulejsondata[i]['Scheduled Time 1'];
                    _this.schtimetwo = _this.driverschedulejsondata[i]['Scheduled Time 2'];
                    _this.schtimethree = _this.driverschedulejsondata[i]['Scheduled Time 3'];
                    _this.schtimefour = _this.driverschedulejsondata[i]['Scheduled Time 4'];
                    _this.schtimefive = _this.driverschedulejsondata[i]['Scheduled Time 5'];
                    _this.schtimesix = _this.driverschedulejsondata[i]['Scheduled Time 6'];
                    _this.schtimeseven = _this.driverschedulejsondata[i]['Scheduled Time 7'];
                    _this.schtimeeight = _this.driverschedulejsondata[i]['Scheduled Time 8'];
                    _this.schtimenine = _this.driverschedulejsondata[i]['Scheduled Time 9'];
                    _this.schtimeten = _this.driverschedulejsondata[i]['Scheduled Time 10'];
                }
            }
            // this.distributors = data['LOCATIONS'];
        });
    };
    VehicleliveMetricComponent.prototype.deliveryReschedule = function (event) {
        $(".modal-header .modal-title").text();
        $('#calendarModal').modal('show');
    };
    VehicleliveMetricComponent.prototype.setDate = function () {
        this.result = this.date.toLocaleString();
        $('#calendarModal').modal('hide');
        // $('#messageeModel').modal('show');
        alert("Your Activity has been scheduled");
    };
    VehicleliveMetricComponent.prototype.scheduleActivity = function (id, item) {
        // this.selectedItem = id;
        this.selectedButton[id] = !this.selectedButton[id];
        $('#calendarModal').modal('show');
        $('#maintenanceModel').modal('hide');
    };
    VehicleliveMetricComponent.prototype.prementiveMaintenance = function () {
        $(".modal-header .modal-title").text();
        $('#maintenanceModel').modal('show');
    };
    VehicleliveMetricComponent.prototype.filterMaintanenceData = function (preventive) {
        preventive.sort(function (a, b) {
            // convert date object into number to resolve issue in typescript
            return +new Date(a.date_main) - +new Date(b.date_main);
        });
        this.prementiveMaintenancearrsort = preventive;
    };
    VehicleliveMetricComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehiclelive-metric',
            template: __webpack_require__(/*! ./vehiclelive-metric.component.html */ "./src/app/vehiclelive-metric/vehiclelive-metric.component.html"),
            styles: [__webpack_require__(/*! ./vehiclelive-metric.component.css */ "./src/app/vehiclelive-metric/vehiclelive-metric.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VehicleliveMetricComponent);
    return VehicleliveMetricComponent;
}());



/***/ }),

/***/ "./src/app/warehouse-overview/warehouse-overview.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/warehouse-overview/warehouse-overview.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel_wrapper{\r\n  margin-top: 5px;\r\n  border: 0px;\r\n  margin-bottom: -8px;\r\n  /* background-color: #d4d4d4 */\r\n\r\n}\r\n.panel-body {\r\n  padding: 5px;\r\n}\r\n.panel-body .form-control {\r\npadding: 2px;\r\nborder-radius: 0px;\r\nbox-shadow:none\r\n}\r\n.dropdown_wrapper{\r\n  width: 80%;\r\nheight: 25px;\r\npadding: 0px 30px;\r\nborder: 0px;\r\nborder-bottom: 1px solid grey;\r\n}\r\n.middle{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n}\r\n/* .card{\r\n  cursor: pointer;\r\n  width: 340px;\r\n  height: 380px;\r\n \r\n} */\r\n.front,.back{\r\n  width: 50%;\r\n  height: 50%;\r\n  border-radius: 50%;\r\n  border: 2px solid palevioletred;\r\n  overflow: hidden;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  position: absolute;\r\n  background: #fff;\r\n  transition: -webkit-transform .6s linear;\r\n  transition: transform .6s linear;\r\n  transition: transform .6s linear, -webkit-transform .6s linear;\r\n  box-shadow: 2px 3px 3px 3px;\r\n}\r\n.front{\r\n  -webkit-transform: perspective(600px) rotateY(0deg);\r\n          transform: perspective(600px) rotateY(0deg);\r\n\r\n}\r\n.back{\r\n  background: #fff;\r\n  -webkit-transform: perspective(600px) rotateY(180deg);\r\n          transform: perspective(600px) rotateY(180deg);\r\n}\r\n.back-content{\r\n  color: #2c3e50;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.sm{\r\n  margin: 20px 0;\r\n}\r\n.sm a{\r\n  display: inline-flex;\r\n  width: 40px;\r\n  height: 40px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #2c3e50;\r\n  font-size: 18px;\r\n  transition: 0.4s;\r\n  border-radius: 50%\r\n}\r\n.sm a:hover{\r\n  background: #2c3e50;\r\n  color: white;\r\n}\r\n.card:hover > .front{\r\n  -webkit-transform: perspective(600px) rotateY(-180deg);\r\n          transform: perspective(600px) rotateY(-180deg);\r\n}\r\n.card:hover > .back{\r\n  -webkit-transform: perspective(600px) rotateY(0deg);\r\n          transform: perspective(600px) rotateY(0deg);\r\n}\r\n.padding_left{\r\n\r\n  padding-left: 50px\r\n}\r\n/*Button*/\r\n.btn{\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  background: #ff8181;\r\n  color: #FFF;\r\n  width: 180px;\r\n  height: 180px;\r\n  line-height: 120px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  vertical-align: middle;\r\n  overflow: hidden;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);\r\n  border-bottom: solid 3px #bd6565;\r\n  transition: .4s;\r\n}\r\n.btn:active{\r\n  -webkit-transform: translateY(2px);\r\n  transform: translateY(2px);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.15);\r\n  border-bottom: none;\r\n}\r\n.btn-position{\r\n  position: absolute;\r\n  left: 32%;\r\n  top: 37%;\r\n  padding-top: 27px;\r\n}\r\n.watch-number-wrapper{\r\n  position: absolute;\r\n    top: 56%;\r\n    left: 37%;\r\n    /* color: white; */\r\n    font-size: 48px;\r\n   \r\n}\r\n.watch-text-wrapper{\r\nposition: absolute;\r\ntop:39%;left:32%;\r\nfont-size: 15px;\r\ntext-align: center;\r\n}\r\n.image-width{\r\n  width:71%\r\n}\r\n"

/***/ }),

/***/ "./src/app/warehouse-overview/warehouse-overview.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/warehouse-overview/warehouse-overview.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n\r\n  <div class=\"panel panel-default panel_wrapper\">\r\n    <div class=\"panel-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n\r\n            <select id=\"region\" name=\"region\" placeholder=\"Region\" [(ngModel)]=\"regionname\" class=\"form-control dropdown_wrapper\"\r\n              (change)=\"changeRegion($event)\">\r\n              <option>Select Region</option>\r\n              <option *ngFor=\"let region of regions\" [selected]=\"regionname == region\">{{region}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <select id=\"state\" name=\"state\" [(ngModel)]=\"statename\" class=\"form-control dropdown_wrapper\"\r\n              (change)=\"changeState($event)\">\r\n              <option>Select State</option>\r\n              <option *ngFor=\"let state of states\" [selected]=\"statename == state\">{{state}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n\r\n          <div class=\"form-group\">\r\n            <select id=\"warehouse\" name=\"warehouse\" [(ngModel)]=\"warehousename\" class=\"form-control dropdown_wrapper\"\r\n              (change)=\"changeWarehouse($event)\">\r\n              <option>Select Warehouse</option>\r\n              <option *ngFor=\"let warehouse of warehouses\" [selected]=\"warehousename == warehouse\">{{warehouse}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n         </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--Times-->\r\n  <div class=\"row\" style=\"margin-top:11px;\">\r\n    <div class=\"col-md-3\">\r\n    <div class=\"card padding_left\">\r\n      <img src =\"../../assets/images//watch-image.png\" class=\"image-width\">\r\n      <!-- <a href=\"#\" class=\"btn btn-position\">Days</a> -->\r\n        <span>\r\n          <h4 class=\"watch-text-wrapper\">Cash to Cash<br> Cycle time</h4>\r\n        </span>\r\n     \r\n        <span>\r\n          <h4 class=\"watch-number-wrapper\">{{cashtocashtime}}</h4></span>\r\n   \r\n     \r\n   </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-3\">\r\n      <div class=\"card padding_left\">\r\n          <img src =\"../../assets/images//watch-image.png\" class=\"image-width\">\r\n          <!-- <a href=\"#\" class=\"btn btn-position\">Days</a> -->\r\n            <span>\r\n              <h4 class=\"watch-text-wrapper\">Customer Order<br> Cycle time</h4>\r\n            </span>\r\n         \r\n            <span>\r\n              <h4 class=\"watch-number-wrapper\">{{customerordertime}}</h4></span>\r\n     </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-3\">\r\n        <div class=\"card padding_left\">\r\n            <img src =\"../../assets/images//watch-image.png\" class=\"image-width\">\r\n            <!-- <a href=\"#\" class=\"btn btn-position\">Days</a> -->\r\n              <span>\r\n                <h4 class=\"watch-text-wrapper\">Supply Chain<br> Cycle time</h4>\r\n              </span>\r\n           \r\n              <span>\r\n                <h4 class=\"watch-number-wrapper\">{{supplychaintime}}</h4></span>\r\n       </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-3\">\r\n          <div class=\"card padding_left\">\r\n              <img src =\"../../assets/images//watch-image.png\" class=\"image-width\">\r\n              <!-- <a href=\"#\" class=\"btn btn-position\">Days</a> -->\r\n                <span>\r\n                  <h4 class=\"watch-text-wrapper\">Inventory Days<br>of Supply</h4>\r\n                </span>\r\n             \r\n                <span>\r\n                  <h4 class=\"watch-number-wrapper\">{{inventorydays}}</h4></span>\r\n         </div>\r\n        </div>\r\n  </div>\r\n\r\n  <!--Vlaue of cycle time-->\r\n  <div class=\"row\">\r\n      <!-- <h4>{{cashtocashtime}}</h4>\r\n      <h4>{{customerordertime}}</h4>\r\n      <h4>{{supplychaintime}}</h4>\r\n      <h4>{{inventorydays}}</h4> -->\r\n      <img src =\"../../assets/images/supply-chain-management.gif\" style=\"width:100%;\">\r\n   \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/warehouse-overview/warehouse-overview.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/warehouse-overview/warehouse-overview.component.ts ***!
  \********************************************************************/
/*! exports provided: WarehouseOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseOverviewComponent", function() { return WarehouseOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WarehouseOverviewComponent = /** @class */ (function () {
    function WarehouseOverviewComponent(http) {
        this.http = http;
        this.regions = [];
        this.regionname = "South";
        this.statename = "Florida";
        this.warehousename = "Warehouse 100143";
    }
    WarehouseOverviewComponent.prototype.ngOnInit = function () {
        this.getDropdownData();
    };
    WarehouseOverviewComponent.prototype.getDropdownData = function () {
        var _this = this;
        this.http.get('../../assets/data/warehouse.json').subscribe(function (data) {
            // console.log(data);
            _this.jsondata = data;
            // console.log(this.jsondata)
            var index;
            for (index in _this.jsondata) {
                if (_this.regions.indexOf(_this.jsondata[index].Region) < 0) {
                    _this.regions.push(_this.jsondata[index].Region);
                }
            }
            _this.loaddefaultstate(_this.jsondata, _this.regionname);
        });
    };
    WarehouseOverviewComponent.prototype.loaddefaultstate = function (jsondata, regionname) {
        var index;
        this.states = [];
        for (index in jsondata) {
            if (jsondata[index].Region === regionname) {
                if (this.states.indexOf(jsondata[index].State) < 0) {
                    this.states.push(jsondata[index].State);
                }
            }
        }
        this.loaddefaultwarehouse(jsondata, regionname, this.statename);
    };
    WarehouseOverviewComponent.prototype.loaddefaultwarehouse = function (jsondata, regionname, statename) {
        var index;
        this.warehouses = [];
        for (index in jsondata) {
            if (jsondata[index].State === statename && jsondata[index].Region === regionname) {
                if (this.warehouses.indexOf(jsondata[index].WareHouse) < 0) {
                    this.warehouses.push(jsondata[index].WareHouse);
                }
            }
        }
        this.loaddefaultdata(jsondata, regionname, statename, this.warehousename);
    };
    WarehouseOverviewComponent.prototype.loaddefaultdata = function (jsondata, regionname, statename, warehousename) {
        var index;
        var $this = this;
        for (index in jsondata) {
            if (jsondata[index].State === statename && jsondata[index].Region === regionname &&
                jsondata[index].WareHouse === warehousename) {
                $this.cashtocashtime = jsondata[index]['Cash to Cash Cycle Time'];
                $this.supplychaintime = jsondata[index]['Supply Chain cycle Time'];
                $this.customerordertime = jsondata[index]['Customer Order Cycle Time'];
                $this.inventorydays = jsondata[index]['Inventory Days of Supply'];
                console.log($this.cashtocashtime + '' + $this.supplychaintime + '' + $this.customerordertime + '' + $this.inventorydays);
            }
            else {
                // console.log('hihiohi');
            }
        }
    };
    WarehouseOverviewComponent.prototype.changeRegion = function (region) {
        var regionname = this.selectedRegion = region.currentTarget.value;
        var index;
        this.states = [];
        for (index in this.jsondata) {
            if (this.jsondata[index].Region === regionname) {
                if (this.states.indexOf(this.jsondata[index].State) < 0) {
                    this.states.push(this.jsondata[index].State);
                    console.log(this.jsondata[index].State);
                }
            }
        }
    };
    WarehouseOverviewComponent.prototype.changeState = function (state) {
        var statename = this.selectedState = state.currentTarget.value;
        var index;
        this.warehouses = [];
        for (index in this.jsondata) {
            if (this.jsondata[index].State === statename && this.jsondata[index].Region === this.selectedRegion) {
                if (this.warehouses.indexOf(this.jsondata[index].WareHouse) < 0) {
                    this.warehouses.push(this.jsondata[index].WareHouse);
                    console.log(this.jsondata[index].WareHouse);
                }
            }
        }
    };
    WarehouseOverviewComponent.prototype.changeWarehouse = function (warehouse) {
        var warehousename = warehouse.currentTarget.value;
        var index;
        var $this = this;
        for (index in this.jsondata) {
            if (this.jsondata[index].State === this.selectedState && this.jsondata[index].Region === this.selectedRegion &&
                this.jsondata[index].WareHouse === warehousename) {
                $this.cashtocashtime = this.jsondata[index]['Cash to Cash Cycle Time'];
                $this.supplychaintime = this.jsondata[index]['Supply Chain cycle Time'];
                $this.customerordertime = this.jsondata[index]['Customer Order Cycle Time'];
                $this.inventorydays = this.jsondata[index]['Inventory Days of Supply'];
                console.log($this.cashtocashtime + '' + $this.supplychaintime + '' + $this.customerordertime + '' + $this.inventorydays);
            }
            else {
                // console.log('hihiohi');
            }
        }
    };
    WarehouseOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-warehouse-overview',
            template: __webpack_require__(/*! ./warehouse-overview.component.html */ "./src/app/warehouse-overview/warehouse-overview.component.html"),
            styles: [__webpack_require__(/*! ./warehouse-overview.component.css */ "./src/app/warehouse-overview/warehouse-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WarehouseOverviewComponent);
    return WarehouseOverviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // apiEndPoint: "http://localhost:4000",
    apiEndPoint: "http://ec2-54-175-125-60.compute-1.amazonaws.com:4000",
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/models/publicmails.model.ts":
/*!*****************************************!*\
  !*** ./src/models/publicmails.model.ts ***!
  \*****************************************/
/*! exports provided: MAILS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAILS", function() { return MAILS; });
var MAILS = [
    "gmail.com",
    "outlook.com",
    "ymail.com",
    "yahoo.co.in",
    "hotmail.com",
    "yahoo.com",
    "aol.com",
    "hotmail.co.uk",
    "hotmail.fr",
    "msn.com",
    "yahoo.fr",
    "wanadoo.fr",
    "orange.fr",
    "comcast.net",
    "yahoo.co.uk",
    "yahoo.com.br",
    "live.com",
    "rediffmail.com",
    "free.fr",
    "gmx.de",
    "web.de",
    "yandex.ru",
    "libero.it",
    "uol.com.br",
    "bol.com.br",
    "mail.ru",
    "cox.net",
    "hotmail.it",
    "sbcglobal.net",
    "sfr.fr",
    "live.fr",
    "verizon.net",
    "live.co.uk",
    "googlemail.com",
    "yahoo.es",
    "ig.com.br",
    "live.nl",
    "bigpond.com",
    "terra.com.br",
    "yahoo.it",
    "neuf.fr",
    "yahoo.de",
    "alice.it",
    "rocketmail.com",
    "att.net",
    "laposte.net",
    "facebook.com",
    "bellsouth.net",
    "yahoo.in",
    "hotmail.es",
    "charter.net",
    "yahoo.ca",
    "yahoo.com.au",
    "rambler.ru",
    "hotmail.de",
    "tiscali.it",
    "shaw.ca",
    "yahoo.co.jp",
    "sky.com",
    "earthlink.net",
    "optonline.net",
    "freenet.de",
    "t-online.de",
    "aliceadsl.fr",
    "virgilio.it",
    "home.nl",
    "qq.com",
    "telenet.be",
    "me.com",
    "yahoo.com.ar",
    "tiscali.co.uk",
    "yahoo.com.mx",
    "voila.fr",
    "gmx.net",
    "mail.com",
    "planet.nl",
    "tin.it",
    "live.it",
    "ntlworld.com",
    "arcor.de",
    "yahoo.co.id",
    "frontiernet.net",
    "hetnet.nl",
    "live.com.au",
    "yahoo.com.sg",
    "zonnet.nl",
    "club-internet.fr",
    "juno.com",
    "optusnet.com.au",
    "blueyonder.co.uk",
    "bluewin.ch",
    "skynet.be",
    "sympatico.ca",
    "windstream.net",
    "mac.com",
    "centurytel.net",
    "chello.nl",
    "live.ca",
    "aim.com",
    "bigpond.net.au",
];


/***/ }),

/***/ "./src/validators/customvalidator.ts":
/*!*******************************************!*\
  !*** ./src/validators/customvalidator.ts ***!
  \*******************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    CustomValidators.patternValidator = function (regex, error) {
        return function (control) {
            if (!control.value) {
                // if control is empty return no error
                return null;
            }
            // test the value of the control against the regexp supplied
            var valid = regex.test(control.value);
            // if true, return no error (no error), else return error passed in the second parameter
            return valid ? null : error;
        };
    };
    CustomValidators.passwordMatchValidator = function (control) {
        var password = control.get('password').value; // get password from our password form control
        var confirmPassword = control.get('confirmPassword').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirmPassword) {
            // if they don't match, set an error in our confirmPassword form control
            control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
        }
    };
    return CustomValidators;
}());



/***/ }),

/***/ "./src/validators/email.ts":
/*!*********************************!*\
  !*** ./src/validators/email.ts ***!
  \*********************************/
/*! exports provided: EmailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony import */ var _models_publicmails_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/publicmails.model */ "./src/models/publicmails.model.ts");

var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.checkEmail = function (control) {
        console.log("e-mail check");
        var requiredDomains = _models_publicmails_model__WEBPACK_IMPORTED_MODULE_0__["MAILS"];
        var lowercaseValue = control.value.toLowerCase();
        var providedDomain = lowercaseValue.substr(lowercaseValue.indexOf('@') + 1);
        var returnVal;
        for (var i = 0; i < requiredDomains.length; i++) {
            if (requiredDomains[i] == providedDomain) {
                returnVal = { "invalid_domain": true };
                i = requiredDomains.length;
            }
        }
        return returnVal;
    };
    return EmailValidator;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Development\Development\DataBot_Working\DataBot\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map