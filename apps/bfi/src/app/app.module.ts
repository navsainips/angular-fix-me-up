import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FeaturePresentationalModule } from '@bfi/shared/presentational';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { FeatureAccountSummaryModule } from '@bfi/feature/account-summary';
import { SharedStoreModule } from '@bfi/shared/store';
import { StoreModule } from '@ngrx/store';
import { AccountDetailsComponent } from './account-details/account-details.component';

@NgModule({
  declarations: [AppComponent, AboutComponent,AccountDetailsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FeaturePresentationalModule,
    FeatureAccountSummaryModule,
    SharedStoreModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
