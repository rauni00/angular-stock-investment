(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_StockArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/StockArray */ "./src/app/model/StockArray.ts");
/* harmony import */ var _new_stock_new_stock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-stock/new-stock.component */ "./src/app/new-stock/new-stock.component.ts");
/* harmony import */ var _stocks_stocks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stocks/stocks.component */ "./src/app/stocks/stocks.component.ts");





class AppComponent {
    constructor() {
        this.stocksArray = _model_StockArray__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.title = "stock-invest-tracker-in-ng";
    }
    AddToArray(data) {
        _model_StockArray__WEBPACK_IMPORTED_MODULE_1__["default"].push(data);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[3, "DataToApp"], [3, "items"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-new-stock", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("DataToApp", function AppComponent_Template_app_new_stock_DataToApp_0_listener($event) { return ctx.AddToArray($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-stocks", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.stocksArray);
    } }, directives: [_new_stock_new_stock_component__WEBPACK_IMPORTED_MODULE_2__["NewStockComponent"], _stocks_stocks_component__WEBPACK_IMPORTED_MODULE_3__["StocksComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"],
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _investment_date_investment_date_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./investment-date/investment-date.component */ "./src/app/investment-date/investment-date.component.ts");
/* harmony import */ var _new_stock_new_stock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-stock/new-stock.component */ "./src/app/new-stock/new-stock.component.ts");
/* harmony import */ var _stock_filter_stock_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock-filter/stock-filter.component */ "./src/app/stock-filter/stock-filter.component.ts");
/* harmony import */ var _stock_form_stock_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stock-form/stock-form.component */ "./src/app/stock-form/stock-form.component.ts");
/* harmony import */ var _stock_item_stock_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stock-item/stock-item.component */ "./src/app/stock-item/stock-item.component.ts");
/* harmony import */ var _stocks_stocks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stocks/stocks.component */ "./src/app/stocks/stocks.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _investment_date_investment_date_component__WEBPACK_IMPORTED_MODULE_4__["InvestmentDateComponent"],
        _new_stock_new_stock_component__WEBPACK_IMPORTED_MODULE_5__["NewStockComponent"],
        _stock_filter_stock_filter_component__WEBPACK_IMPORTED_MODULE_6__["StockFilterComponent"],
        _stock_form_stock_form_component__WEBPACK_IMPORTED_MODULE_7__["StockFormComponent"],
        _stock_item_stock_item_component__WEBPACK_IMPORTED_MODULE_8__["StockItemComponent"],
        _stocks_stocks_component__WEBPACK_IMPORTED_MODULE_9__["StocksComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _investment_date_investment_date_component__WEBPACK_IMPORTED_MODULE_4__["InvestmentDateComponent"],
                    _new_stock_new_stock_component__WEBPACK_IMPORTED_MODULE_5__["NewStockComponent"],
                    _stock_filter_stock_filter_component__WEBPACK_IMPORTED_MODULE_6__["StockFilterComponent"],
                    _stock_form_stock_form_component__WEBPACK_IMPORTED_MODULE_7__["StockFormComponent"],
                    _stock_item_stock_item_component__WEBPACK_IMPORTED_MODULE_8__["StockItemComponent"],
                    _stocks_stocks_component__WEBPACK_IMPORTED_MODULE_9__["StocksComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/investment-date/investment-date.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/investment-date/investment-date.component.ts ***!
  \**************************************************************/
/*! exports provided: InvestmentDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentDateComponent", function() { return InvestmentDateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InvestmentDateComponent {
    constructor() {
    }
    ngOnInit() {
        this.month = this.date.toLocaleString("en-US", { month: "long" });
        this.day = this.date.toLocaleString("en-US", { day: "2-digit" });
        this.year = this.date.getFullYear();
    }
}
InvestmentDateComponent.ɵfac = function InvestmentDateComponent_Factory(t) { return new (t || InvestmentDateComponent)(); };
InvestmentDateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvestmentDateComponent, selectors: [["app-investment-date"]], inputs: { date: "date" }, decls: 7, vars: 3, consts: [[1, "investment-date"], [1, "investment-date__month"], [1, "investment-date__year"], [1, "investment-date__day"]], template: function InvestmentDateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.month);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.day);
    } }, styles: [".investment-date[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 5.5rem;\r\n    height: 5.5rem;\r\n    border: 1px solid #ececec;\r\n    background-color: #2a2a2a;\r\n    color: white;\r\n    border-radius: 12px;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.investment-date__month[_ngcontent-%COMP%] {\r\n    font-size: 0.75rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.investment-date__year[_ngcontent-%COMP%] {\r\n    font-size: 0.75rem;\r\n}\r\n\r\n.investment-date__day[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZXN0bWVudC1kYXRlL2ludmVzdG1lbnQtZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsY0FBYztJQUNkLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9pbnZlc3RtZW50LWRhdGUvaW52ZXN0bWVudC1kYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52ZXN0bWVudC1kYXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDUuNXJlbTtcclxuICAgIGhlaWdodDogNS41cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWNlYztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTJhMmE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW52ZXN0bWVudC1kYXRlX19tb250aCB7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmludmVzdG1lbnQtZGF0ZV9feWVhciB7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5pbnZlc3RtZW50LWRhdGVfX2RheSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvestmentDateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-investment-date",
                templateUrl: "./investment-date.component.html",
                styleUrls: ["./investment-date.component.css"],
            }]
    }], function () { return []; }, { date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/model/StockArray.ts":
/*!*************************************!*\
  !*** ./src/app/model/StockArray.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const stocksArray = [
    {
        id: "s1",
        title: "TCS",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: "s2",
        title: "NYL",
        amount: 799.49,
        date: new Date(2020, 2, 12),
    },
    {
        id: "s3",
        title: "TESLA",
        amount: 294.67,
        date: new Date(2021, 5, 12),
    },
    {
        id: "s4",
        title: "NDW",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];
/* harmony default export */ __webpack_exports__["default"] = (stocksArray);


/***/ }),

/***/ "./src/app/new-stock/new-stock.component.ts":
/*!**************************************************!*\
  !*** ./src/app/new-stock/new-stock.component.ts ***!
  \**************************************************/
/*! exports provided: NewStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewStockComponent", function() { return NewStockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _stock_form_stock_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stock-form/stock-form.component */ "./src/app/stock-form/stock-form.component.ts");




function NewStockComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewStockComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.startEditingHandler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add to Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewStockComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-stock-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("FormData", function NewStockComponent_div_1_Template_app_stock_form_FormData_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.formData($event); })("myOutput", function NewStockComponent_div_1_Template_app_stock_form_myOutput_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.ToggleCancel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toggle", ctx_r1.toggle);
} }
class NewStockComponent {
    constructor() {
        this.toggle = true;
        this.DataToApp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    startEditingHandler() {
        this.toggle = false;
        this.toggleCBtn = true;
    }
    ToggleCancel(data) {
        this.toggleCBtn = !data;
        this.toggle = true;
    }
    formData(FormData) {
        this.DataToApp.emit(FormData);
    }
}
NewStockComponent.ɵfac = function NewStockComponent_Factory(t) { return new (t || NewStockComponent)(); };
NewStockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewStockComponent, selectors: [["app-new-stock"]], outputs: { DataToApp: "DataToApp" }, decls: 2, vars: 2, consts: [["class", "add-stock", 4, "ngIf"], ["class", "new-stock", 4, "ngIf"], [1, "add-stock"], [3, "click"], [1, "new-stock"], [3, "toggle", "FormData", "myOutput"]], template: function NewStockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewStockComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewStockComponent_div_1_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleCBtn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _stock_form_stock_form_component__WEBPACK_IMPORTED_MODULE_2__["StockFormComponent"]], styles: [".add-stock[_ngcontent-%COMP%] {\r\n    background-color: #a892ee;\r\n    padding: 1rem;\r\n    margin: 2rem auto;\r\n    width: 50rem;\r\n    max-width: 95%;\r\n    border-radius: 12px;\r\n    text-align: center;\r\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.add-stock[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n    color: white;\r\n    width: 180px;\r\n    height: 50px;\r\n    border-radius: 15px;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    padding: 0px;\r\n    \r\n    border: solid;\r\n    \r\n    border-radius: 50px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    \r\n    font-weight: bold;\r\n}\r\n\r\nselect[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    border-radius: 15px;\r\n    width: 150px;\r\n    background-color: white;\r\n    font-size: 18px;\r\n}\r\n\r\n.new-stock[_ngcontent-%COMP%] {\r\n    background-color: #a892ee;\r\n    padding: 1rem;\r\n    margin: 2rem auto;\r\n    width: 50rem;\r\n    max-width: 95%;\r\n    border-radius: 12px;\r\n    text-align: center;\r\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.new-date[_ngcontent-%COMP%] {\r\n    background-color: #da9e4f;\r\n    padding: 1rem;\r\n    margin: 2rem auto;\r\n    width: 50rem;\r\n    max-width: 95%;\r\n    border-radius: 12px;\r\n    text-align: center;\r\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.new-stock[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    font: inherit;\r\n    cursor: pointer;\r\n    padding: 1rem 2rem;\r\n    border: 1px solid #40005d;\r\n    background-color: #40005d;\r\n    color: white;\r\n    border-radius: 12px;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.new-stock[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .new-stock[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\r\n    background-color: #510674;\r\n    border-color: #510674;\r\n}\r\n\r\n.new-stock[_ngcontent-%COMP%]   button.alternative[_ngcontent-%COMP%] {\r\n    color: #220131;\r\n    border-color: transparent;\r\n    background-color: transparent;\r\n}\r\n\r\n.new-stock[_ngcontent-%COMP%]   button.alternative[_ngcontent-%COMP%]:hover, .new-stock[_ngcontent-%COMP%]   button.alternative[_ngcontent-%COMP%]:active {\r\n    background-color: #ddb3f8;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXN0b2NrL25ldy1zdG9jay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSx5QkFBeUI7QUFDN0I7O0FBR0EsZ0RBQWdEOztBQUdoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtDRyIsImZpbGUiOiJzcmMvYXBwL25ldy1zdG9jay9uZXctc3RvY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtc3RvY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E4OTJlZTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgIHdpZHRoOiA1MHJlbTtcclxuICAgIG1heC13aWR0aDogOTUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcblxyXG4uYWRkLXN0b2NrIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLyogbWFyZ2luOiAxMHB4OyAqL1xyXG4gICAgYm9yZGVyOiBzb2xpZDtcclxuICAgIC8qIGJvcmRlci13aWR0aDogMTBweDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIC8qIHBhZGRpbmc6IDE1cHg7ICovXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLm5ldy1zdG9jayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTg5MmVlO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgd2lkdGg6IDUwcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuXHJcbi5uZXctZGF0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGE5ZTRmO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgd2lkdGg6IDUwcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuXHJcbi5uZXctc3RvY2sgYnV0dG9uIHtcclxuICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDAwMDVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwMDA1ZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5uZXctc3RvY2sgYnV0dG9uOmhvdmVyLFxyXG4ubmV3LXN0b2NrIGJ1dHRvbjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxMDY3NDtcclxuICAgIGJvcmRlci1jb2xvcjogIzUxMDY3NDtcclxufVxyXG5cclxuLm5ldy1zdG9jayBidXR0b24uYWx0ZXJuYXRpdmUge1xyXG4gICAgY29sb3I6ICMyMjAxMzE7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5uZXctc3RvY2sgYnV0dG9uLmFsdGVybmF0aXZlOmhvdmVyLFxyXG4ubmV3LXN0b2NrIGJ1dHRvbi5hbHRlcm5hdGl2ZTphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkYjNmODtcclxufVxyXG5cclxuXHJcbi8qICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEgKi9cclxuXHJcblxyXG4vKiAubmV3U3RvY2sge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXHJcbiAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgIHdpZHRoOiA4MzBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLm5ld1N0b2NrIGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiBhdXRvO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG59ICovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewStockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-new-stock",
                templateUrl: "./new-stock.component.html",
                styleUrls: ["./new-stock.component.css"],
            }]
    }], function () { return []; }, { DataToApp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/stock-filter/stock-filter.component.ts":
/*!********************************************************!*\
  !*** ./src/app/stock-filter/stock-filter.component.ts ***!
  \********************************************************/
/*! exports provided: StockFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockFilterComponent", function() { return StockFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class StockFilterComponent {
    constructor() {
        this.SearchText = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    FilterDate(event) {
        this.SearchText.emit(event.target.value);
        this.searchStock();
    }
    searchStock() {
        this.onClick.emit();
    }
}
StockFilterComponent.ɵfac = function StockFilterComponent_Factory(t) { return new (t || StockFilterComponent)(); };
StockFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StockFilterComponent, selectors: [["app-stock-filter"]], outputs: { SearchText: "SearchText", onClick: "onClick" }, decls: 13, vars: 0, consts: [[1, "stock-filter"], [1, "stock-filter__control"], [3, "change"], ["value", "2022"], ["value", "2021"], ["value", "2020"], ["value", "2019"]], template: function StockFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filter by year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StockFilterComponent_Template_select_change_4_listener($event) { return ctx.FilterDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".stock-filter[_ngcontent-%COMP%] {\r\n    color: white;\r\n    padding: 0 1rem;\r\n}\r\n\r\n.stock-filter__control[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin: 1rem 0;\r\n}\r\n\r\n.stock-filter[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.stock-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n    font: inherit;\r\n    padding: 0.5rem 2.5rem;\r\n    font-weight: bold;\r\n    border-radius: 6px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2stZmlsdGVyL3N0b2NrLWZpbHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc3RvY2stZmlsdGVyL3N0b2NrLWZpbHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0b2NrLWZpbHRlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbn1cclxuXHJcbi5zdG9jay1maWx0ZXJfX2NvbnRyb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcblxyXG4uc3RvY2stZmlsdGVyIGxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4uc3RvY2stZmlsdGVyIHNlbGVjdCB7XHJcbiAgICBmb250OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMC41cmVtIDIuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgLyogZm9udC1zaXplOiBweDsgKi9cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-stock-filter",
                templateUrl: "./stock-filter.component.html",
                styleUrls: ["./stock-filter.component.css"],
            }]
    }], function () { return []; }, { SearchText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/stock-form/stock-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/stock-form/stock-form.component.ts ***!
  \****************************************************/
/*! exports provided: StockFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockFormComponent", function() { return StockFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class StockFormComponent {
    constructor() {
        this.myOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.FormData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleC = true;
    }
    ngOnInit() { }
    onCancel(event) {
        event.preventDefault();
        this.toggle = false;
        this.myOutput.emit(this.toggleC);
    }
    submitHandler(event) {
        event.preventDefault();
        const data = {
            id: Math.random().toString(),
            title: this.title,
            amount: this.amount,
            date: new Date(this.date),
        };
        this.FormData.emit(data);
    }
}
StockFormComponent.ɵfac = function StockFormComponent_Factory(t) { return new (t || StockFormComponent)(); };
StockFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StockFormComponent, selectors: [["app-stock-form"]], inputs: { toggle: "toggle" }, outputs: { myOutput: "myOutput", FormData: "FormData" }, decls: 21, vars: 3, consts: [[3, "ngSubmit"], [1, "new-stock__controls"], [1, "new-stock__control"], ["for", "title"], ["type", "text", "name", "title", 3, "ngModel", "ngModelChange"], ["for", "amount"], ["type", "number", "min", "0.01", "step", "0.01", "name", "amount", 3, "ngModel", "ngModelChange"], ["for", "date"], ["type", "date", "min", "2019-01-01", "max", "2022-12-31", "name", "date", 3, "ngModel", "ngModelChange"], [1, "new-stock__actions"], ["type", "submit"], [1, "cancel", 3, "click"]], template: function StockFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StockFormComponent_Template_form_ngSubmit_0_listener($event) { return ctx.submitHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create New stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StockFormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StockFormComponent_Template_input_ngModelChange_11_listener($event) { return ctx.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StockFormComponent_Template_input_ngModelChange_15_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockFormComponent_Template_button_click_19_listener($event) { return ctx.onCancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    padding: 0px;\r\n    \r\n    border: solid;\r\n    \r\n    border-radius: 50px;\r\n}\r\n\r\n.new-stock__controls[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 1rem;\r\n    margin-bottom: 1rem;\r\n    text-align: left;\r\n}\r\n\r\n.new-stock__control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    margin-bottom: 0.5rem;\r\n    display: block;\r\n}\r\n\r\n.new-stock__control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    font: inherit;\r\n    padding: 0.5rem;\r\n    border-radius: 6px;\r\n    border: 1px solid #ccc;\r\n    width: 20rem;\r\n    max-width: 100%;\r\n}\r\n\r\n.new-stock__actions[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n}\r\n\r\n.new-stock__actions[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\r\n    background-color: red;\r\n}\r\n\r\n\r\n\r\n.new-stock__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    font: inherit;\r\n    cursor: pointer;\r\n    padding: 1rem 2rem;\r\n    border: 1px solid #40005d;\r\n    background-color: #40005d;\r\n    color: white;\r\n    border-radius: 12px;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.new-stock__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .new-stock__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\r\n    background-color: #510674;\r\n    border-color: #510674;\r\n}\r\n\r\n.new-stock__actions[_ngcontent-%COMP%]   button.alternative[_ngcontent-%COMP%] {\r\n    color: #220131;\r\n    border-color: transparent;\r\n    background-color: transparent;\r\n}\r\n\r\n.new-stock__actions[_ngcontent-%COMP%]   button.alternative[_ngcontent-%COMP%]:hover, .new-stock__actions[_ngcontent-%COMP%]   button.alternative[_ngcontent-%COMP%]:active {\r\n    background-color: #ddb3f8;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2stZm9ybS9zdG9jay1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBR0EsbURBQW1EOztBQUVuRDtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrLWZvcm0vc3RvY2stZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLyogbWFyZ2luOiAxMHB4OyAqL1xyXG4gICAgYm9yZGVyOiBzb2xpZDtcclxuICAgIC8qIGJvcmRlci13aWR0aDogMTBweDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbi5uZXctc3RvY2tfX2NvbnRyb2xzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLm5ldy1zdG9ja19fY29udHJvbCBsYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubmV3LXN0b2NrX19jb250cm9sIGlucHV0IHtcclxuICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmV3LXN0b2NrX19hY3Rpb25zIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubmV3LXN0b2NrX19hY3Rpb25zIC5jYW5jZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLyogISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISAqL1xyXG5cclxuLm5ldy1zdG9ja19fYWN0aW9ucyBidXR0b24ge1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MDAwNWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDAwMDVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLm5ldy1zdG9ja19fYWN0aW9ucyBidXR0b246aG92ZXIsXHJcbi5uZXctc3RvY2tfX2FjdGlvbnMgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTEwNjc0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNTEwNjc0O1xyXG59XHJcblxyXG4ubmV3LXN0b2NrX19hY3Rpb25zIGJ1dHRvbi5hbHRlcm5hdGl2ZSB7XHJcbiAgICBjb2xvcjogIzIyMDEzMTtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm5ldy1zdG9ja19fYWN0aW9ucyBidXR0b24uYWx0ZXJuYXRpdmU6aG92ZXIsXHJcbi5uZXctc3RvY2tfX2FjdGlvbnMgYnV0dG9uLmFsdGVybmF0aXZlOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRiM2Y4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-stock-form",
                templateUrl: "./stock-form.component.html",
                styleUrls: ["./stock-form.component.css"],
            }]
    }], function () { return []; }, { toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], myOutput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], FormData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/stock-item/stock-item.component.ts":
/*!****************************************************!*\
  !*** ./src/app/stock-item/stock-item.component.ts ***!
  \****************************************************/
/*! exports provided: StockItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockItemComponent", function() { return StockItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _investment_date_investment_date_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../investment-date/investment-date.component */ "./src/app/investment-date/investment-date.component.ts");




function StockItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-investment-date", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockItemComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.showId(item_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", item_r8.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", item_r8.amount, "");
} }
class StockItemComponent {
    constructor() {
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    showId(id) {
        this.onDelete.emit(id);
    }
}
StockItemComponent.ɵfac = function StockItemComponent_Factory(t) { return new (t || StockItemComponent)(); };
StockItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StockItemComponent, selectors: [["app-stock-item"]], inputs: { items: "items" }, outputs: { onDelete: "onDelete" }, decls: 1, vars: 1, consts: [["class", "stock-item", 4, "ngFor", "ngForOf"], [1, "stock-item"], [3, "date"], [1, "stock-item__description"], [1, "stock-item__price"], [1, "delete", 3, "click"]], template: function StockItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StockItemComponent_div_0_Template, 9, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _investment_date_investment_date_component__WEBPACK_IMPORTED_MODULE_2__["InvestmentDateComponent"]], styles: [".delete[_ngcontent-%COMP%] {\r\n    background-color: red;\r\n    width: 105px;\r\n    height: 42px;\r\n    border-radius: 6px;\r\n    color: white;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.stock-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem;\r\n    margin: 1rem 0;\r\n    background-color: #7eaf67;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.stock-item[_ngcontent-%COMP%]   .stock-item__description[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\n.stock-item__description[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    align-items: flex-end;\r\n    flex-flow: column-reverse;\r\n    justify-content: flex-start;\r\n    flex: 1;\r\n    font-weight: bold;\r\n}\r\n\r\n.stock-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    color: #3a3a3a;\r\n    font-size: 1rem;\r\n    flex: 1;\r\n    margin: 0 1rem;\r\n    color: white;\r\n}\r\n\r\n.stock-item__price[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    color: white;\r\n    background-color: #40005d;\r\n    border: 1px solid white;\r\n    padding: 0.5rem;\r\n    border-radius: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 580px) {\r\n    .stock-item__description[_ngcontent-%COMP%] {\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: flex-start;\r\n        flex: 1;\r\n    }\r\n    .stock-item__description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 1.25rem;\r\n    }\r\n    .stock-item__price[_ngcontent-%COMP%] {\r\n        font-size: 1.25rem;\r\n        padding: 0.5rem 1.5rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2staXRlbS9zdG9jay1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsT0FBTztJQUNQLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsT0FBTztJQUNQLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBR0E7Ozs7R0FJRzs7QUFFSDtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0IsT0FBTztJQUNYO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixzQkFBc0I7SUFDMUI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrLWl0ZW0vc3RvY2staXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbGV0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICB3aWR0aDogMTA1cHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3RvY2staXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdlYWY2NztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuLnN0b2NrLWl0ZW0gLnN0b2NrLWl0ZW1fX2Rlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc3RvY2staXRlbV9fZGVzY3JpcHRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleDogMTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc3RvY2staXRlbSBoMiB7XHJcbiAgICBjb2xvcjogIzNhM2EzYTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnN0b2NrLWl0ZW1fX3ByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwMDA1ZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi8qIC5zdG9jay1pdGVtX19wcmljZTpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59ICovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTgwcHgpIHtcclxuICAgIC5zdG9jay1pdGVtX19kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gICAgLnN0b2NrLWl0ZW1fX2Rlc2NyaXB0aW9uIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICB9XHJcbiAgICAuc3RvY2staXRlbV9fcHJpY2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-stock-item",
                templateUrl: "./stock-item.component.html",
                styleUrls: ["./stock-item.component.css"],
            }]
    }], function () { return []; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onDelete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/stocks/stocks.component.ts":
/*!********************************************!*\
  !*** ./src/app/stocks/stocks.component.ts ***!
  \********************************************/
/*! exports provided: StocksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksComponent", function() { return StocksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _stock_filter_stock_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stock-filter/stock-filter.component */ "./src/app/stock-filter/stock-filter.component.ts");
/* harmony import */ var _stock_item_stock_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stock-item/stock-item.component */ "./src/app/stock-item/stock-item.component.ts");




class StocksComponent {
    constructor() {
        this.onDelete = (id) => {
            var index = this.items.findIndex((o) => {
                return o.id === id;
            });
            if (index !== -1) {
                this.items.splice(index, 1);
            }
        };
    }
    ngOnInit() { }
    onSearch(text) {
        this.filterDate = text;
    }
    onFilterClick() {
        this.items = this.items.filter((stock) => {
            return stock.date.getFullYear().toString() === this.filterDate;
        });
    }
}
StocksComponent.ɵfac = function StocksComponent_Factory(t) { return new (t || StocksComponent)(); };
StocksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StocksComponent, selectors: [["app-stocks"]], inputs: { items: "items" }, decls: 5, vars: 1, consts: [[1, "stocks"], [1, "title"], [3, "SearchText", "onClick"], [3, "items", "onDelete"]], template: function StocksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Stock Investment Tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-stock-filter", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("SearchText", function StocksComponent_Template_app_stock_filter_SearchText_3_listener($event) { return ctx.onSearch($event); })("onClick", function StocksComponent_Template_app_stock_filter_onClick_3_listener() { return ctx.onFilterClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-stock-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDelete", function StocksComponent_Template_app_stock_item_onDelete_4_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items);
    } }, directives: [_stock_filter_stock_filter_component__WEBPACK_IMPORTED_MODULE_1__["StockFilterComponent"], _stock_item_stock_item_component__WEBPACK_IMPORTED_MODULE_2__["StockItemComponent"]], styles: [".stocks[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    background-color: rgb(70, 112, 151);\r\n    margin: 2rem auto;\r\n    width: 50rem;\r\n    max-width: 95%;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: black;\r\n    font-weight: bold;\r\n    padding: 10px;\r\n    margin: 10px;\r\n    border-radius: 15px;\r\n    font-size: 40px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2tzL3N0b2Nrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3N0b2Nrcy9zdG9ja3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9ja3Mge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgMTEyLCAxNTEpO1xyXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICB3aWR0aDogNTByZW07XHJcbiAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StocksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-stocks",
                templateUrl: "./stocks.component.html",
                styleUrls: ["./stocks.component.css"],
            }]
    }], function () { return []; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! R:\CODES\TO GITHUB\stock-invest-tracker-in-ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map