import { Component } from "@angular/core";
import stocksArray from "./model/StockArray";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  stocksArray = stocksArray;
  title = "stock-invest-tracker-in-ng";
  constructor() {}
  AddToArray(data) {
    stocksArray.push(data);
  }
}
