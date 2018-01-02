"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modal_component_1 = require("../../common/modal/modal.component");
var forms_1 = require("@angular/forms");
var ItemsComponent = (function () {
    function ItemsComponent(
        // private _expensesService: ExpensesService,
        // private _eventExpenseService: EventExpenseService,
        _router, fb) {
        this._router = _router;
        this.fb = fb;
        // paymentMethods: PaymentMethod[];
        // expensesDetails: ExpensesDetailsPresenter;
        this.loaderOpen = true;
        this.myOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
        };
        this.model = { date: { year: 2018, month: 10, day: 9 } };
        this.pageTitle = 'Items';
    }
    ItemsComponent.prototype.onDateChanged = function (event) {
        // date selected
    };
    ItemsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.ViewChild(modal_component_1.ModalComponent),
        __metadata("design:type", modal_component_1.ModalComponent)
    ], ItemsComponent.prototype, "modal", void 0);
    ItemsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'items.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            forms_1.FormBuilder])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=items.component.js.map