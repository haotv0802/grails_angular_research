"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var ng2_smart_table_1 = require("ng2-smart-table");
var htCommon_module_1 = require("../../common/htCommon.module");
var forms_1 = require("@angular/forms");
var items_component_1 = require("./items.component");
var ItemsModule = (function () {
    function ItemsModule() {
    }
    ItemsModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'items', component: items_component_1.ItemsComponent },
                ]),
                common_1.CommonModule,
                ng2_smart_table_1.Ng2SmartTableModule,
                htCommon_module_1.HTCommonModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                items_component_1.ItemsComponent
            ],
            providers: []
        })
    ], ItemsModule);
    return ItemsModule;
}());
exports.ItemsModule = ItemsModule;
//# sourceMappingURL=items.module.js.map