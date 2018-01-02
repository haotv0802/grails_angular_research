import {Component, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {ModalComponent} from "../../common/modal/modal.component";
import {FormBuilder, FormGroup} from "@angular/forms";
import {IMyDateModel, INgxMyDpOptions} from "ngx-mydatepicker";

@Component({
  moduleId: module.id,
  templateUrl: 'items.component.html'
})
export class ItemsComponent implements OnInit {
  pageTitle: string;
  // paymentMethods: PaymentMethod[];
  // expensesDetails: ExpensesDetailsPresenter;
  loaderOpen: boolean = true;
  expenseForm: FormGroup;
  // editHidden: boolean = false;
  // expenseEdit: Expense = new Expense();
  @ViewChild(ModalComponent) modal: ModalComponent;
  idUpdate: number;
  private myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
  };
  public model: Object = { date: { year: 2018, month: 10, day: 9 } };

  constructor(
    // private _expensesService: ExpensesService,
    // private _eventExpenseService: EventExpenseService,
    private _router: Router,
    private fb: FormBuilder,
  ) {
    this.pageTitle = 'Items';
  }
  onDateChanged(event: IMyDateModel): void {
    // date selected
  }
  ngOnInit(): void {

  }

}