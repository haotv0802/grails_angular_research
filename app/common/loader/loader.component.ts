import {Component, Input, OnChanges, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'loader',
  moduleId: module.id,
  templateUrl: 'loader.component.html',
  styleUrls: ['fountain.component.css', 'bubbling.component.css']
})
export class LoaderComponent implements OnChanges {

  @Input() opening: boolean = false;
  @Output() loaderClicked: EventEmitter<string> = new EventEmitter<string>();
  ngOnChanges(): void {
    // console.log("LoaderComponent, ngOnChanges " + this.opening);
  }

  onClick(): void {
    // this.loaderClicked.emit(`The rating ${this.isShown} was clicked!`);
    console.log(this.opening);
  }
}