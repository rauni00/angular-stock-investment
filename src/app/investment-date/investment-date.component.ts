import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-investment-date",
  templateUrl: "./investment-date.component.html",
  styleUrls: ["./investment-date.component.css"],
})
export class InvestmentDateComponent implements OnInit {
  @Input() date: any;
  month;
  day;
  year;
  constructor() {}

  ngOnInit(): void {
    this.month = this.date.toLocaleString("en-US", { month: "long" });
    this.day = this.date.toLocaleString("en-US", { day: "2-digit" });
    this.year = this.date.getFullYear();
  }
}
