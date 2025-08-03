import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ApplyLoanComponent } from './shared/component/apply-loan/apply-loan.component';
import { MaterialModule } from './shared/material/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ApplyLoanComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    NoopAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
