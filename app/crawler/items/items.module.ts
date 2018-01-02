import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {HTCommonModule} from "../../common/htCommon.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ItemsComponent} from "./items.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'items', component: ItemsComponent},
      // {path: 'items/:id', canActivate: [EventExpenseGuard], component: EventExpenseComponent}
    ]),
    CommonModule,
    Ng2SmartTableModule,
    HTCommonModule,
    ReactiveFormsModule
  ],
  declarations: [
      ItemsComponent
  ],
  providers: [
    // ExpensesService,
  ]
})
export class ItemsModule {
}