import {Component, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {ModalComponent} from "../../common/modal/modal.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {INgxMyDpOptions} from "ngx-mydatepicker";
import {ItemsService} from "./items.service";
import {ItemPresenter} from "./itemPresenter";

@Component({
  moduleId: module.id,
  templateUrl: 'items.component.html'
})
export class ItemsComponent implements OnInit {
  pageTitle: string;
  items: ItemPresenter[];
  // paymentMethods: PaymentMethod[];
  // expensesDetails: ExpensesDetailsPresenter;
  loaderOpen: boolean = true;
  itemForm: FormGroup;
  // editHidden: boolean = false;
  // expenseEdit: Expense = new Expense();
  @ViewChild(ModalComponent) modal: ModalComponent;
  idUpdate: number;
  private myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
  };

  constructor(
    private _itemsService: ItemsService,
    // private _eventExpenseService: EventExpenseService,
    private _router: Router,
    private fb: FormBuilder,
  ) {
    this.pageTitle = 'Items';
  }

  search(): void {
    console.log(this.itemForm.value);
  }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      contactName: [''],
      contactNumber: [''],
      contactEmail: [''],
      acreage: [''],
      price: [''],
      district: [''],
      city: ['']
    });

    this._itemsService.getItems().subscribe(
      (items) => {
        this.items = items;
      }, (error) => {
        console.log(error);
      }
    );
  }

}