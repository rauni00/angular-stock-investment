import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-stock-item",
  templateUrl: "./stock-item.component.html",
  styleUrls: ["./stock-item.component.css"],
})
export class StockItemComponent implements OnInit {
  @Input() items;
  @Output() onDelete: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  showId(id) {
    this.onDelete.emit(id);
  }
}
