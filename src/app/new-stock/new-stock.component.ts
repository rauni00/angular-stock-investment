import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-new-stock",
  templateUrl: "./new-stock.component.html",
  styleUrls: ["./new-stock.component.css"],
})
export class NewStockComponent implements OnInit {
  constructor() {}
  toggle = true;
  toggleCBtn;
  @Output() DataToApp: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

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
