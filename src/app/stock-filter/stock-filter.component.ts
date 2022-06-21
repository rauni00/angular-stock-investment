import { MethodCall } from "@angular/compiler";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-stock-filter",
  templateUrl: "./stock-filter.component.html",
  styleUrls: ["./stock-filter.component.css"],
})
export class StockFilterComponent implements OnInit {
  constructor() {}
  @Output() SearchText: EventEmitter<String> = new EventEmitter();
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {}

  FilterDate(event) {
    this.SearchText.emit(event.target.value);
    this.searchStock();
  }
  searchStock() {
    this.onClick.emit();
  }
}
