import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Constants} from "../../common/constant";
import {HTTPService} from "../../common/HTTP.service";
import {ItemPresenter} from "./itemPresenter";

@Injectable()
export class ItemsService {

  constructor(
    private _httpService: HTTPService,
    private _constants: Constants) {
  }

  getItems(): Observable<ItemPresenter[]> {
    return this._httpService.get(this._constants.ITEMS_LIST)
      .map((res) => { return <ItemPresenter[]> res.json(); })
      ;
  }
}
