import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "app-stock-form",
  templateUrl: "./stock-form.component.html",
  styleUrls: ["./stock-form.component.css"],
})
export class StockFormComponent implements OnInit {
  // toggleForm = true;
  @Input() toggle;
  @Output() myOutput: EventEmitter<boolean> = new EventEmitter();
  @Output() FormData: EventEmitter<any> = new EventEmitter();
  toggleC = true;
  title: string;
  amount: number;
  date;
  constructor() {}

  ngOnInit(): void {}
  onCancel(event) {
    event.preventDefault();
    this.toggle = false;
    this.myOutput.emit(this.toggleC);
  }
  submitHandler(event) {
    event.preventDefault();
    const data = {
      id: Math.random().toString(),
      title: this.title,
      amount: this.amount,
      date: new Date(this.date),
    };
    this.FormData.emit(data);
  }
}
