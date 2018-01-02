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
var items_service_1 = require("./items.service");
var ItemsComponent = (function () {
    function ItemsComponent(_itemsService, 
        // private _eventExpenseService: EventExpenseService,
        _router, fb) {
        this._itemsService = _itemsService;
        this._router = _router;
        this.fb = fb;
        // paymentMethods: PaymentMethod[];
        // expensesDetails: ExpensesDetailsPresenter;
        this.loaderOpen = true;
        this.myOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
        };
        this.pageTitle = 'Items';
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._itemsService.getItems().subscribe(function (items) {
            _this.items = items;
        }, function (error) {
            console.log(error);
        });
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
        __metadata("design:paramtypes", [items_service_1.ItemsService,
            router_1.Router,
            forms_1.FormBuilder])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=items.component.js.map