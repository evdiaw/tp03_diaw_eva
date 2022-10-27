import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { OnlyLettersDirective } from './only-letters.directive';
import { OnlyNumbersDirective } from './only-numbers.directive';
import { TelephonePipe } from './telephone.pipe';
import { CompCatalogueComponent } from './comp-catalogue/comp-catalogue.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    OnlyLettersDirective,
    OnlyNumbersDirective,
    TelephonePipe,
    CompCatalogueComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
