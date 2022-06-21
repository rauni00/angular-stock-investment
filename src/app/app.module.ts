import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InvestmentDateComponent } from "./investment-date/investment-date.component";
import { NewStockComponent } from "./new-stock/new-stock.component";
import { StockFilterComponent } from "./stock-filter/stock-filter.component";
import { StockFormComponent } from "./stock-form/stock-form.component";
import { StockItemComponent } from "./stock-item/stock-item.component";
import { StocksComponent } from "./stocks/stocks.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    InvestmentDateComponent,
    NewStockComponent,
    StockFilterComponent,
    StockFormComponent,
    StockItemComponent,
    StocksComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
