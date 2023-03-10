import { AccountSummaryComponent } from '@bfi/feature/account-summary';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { flush } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

// TODO: 2. We've setup these routes and have them on the page but they aren't working (Completed)
const routes: Routes = [
  { path: '', redirectTo: 'accountSummary', pathMatch: 'full' },
  { path: 'accountSummary', component: AccountSummaryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account/:id', component: AccountDetailsComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
