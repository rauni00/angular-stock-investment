import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-stocks",
  templateUrl: "./stocks.component.html",
  styleUrls: ["./stocks.component.css"],
})
export class StocksComponent implements OnInit {
  @Input() items: any;
  filterDate: null;
  isTrue: false;
  constructor() {}
  ngOnInit(): void {}

  onSearch(text) {
    this.filterDate = text;
  }

  onFilterClick() {
    this.items = this.items.filter((stock) => {
      return stock.date.getFullYear().toString() === this.filterDate;
    });
  }

  onDelete = (id) => {
    var index = this.items.findIndex((o) => {
      return o.id === id;
    });
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  };
}
