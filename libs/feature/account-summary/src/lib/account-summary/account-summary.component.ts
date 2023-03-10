/**
 * TODO: 10. Asynchronous Programming (RxJS)
 * TODO: 13. Angular (NX) Architecture
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Account } from 'libs/shared/services/src/lib/account';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AccountService } from 'libs/shared/services/src/lib/account.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'sum-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
})
export class AccountSummaryComponent implements OnInit {

  accounts$: Observable<Account[]> = of([]);
  isSubmitted: boolean | undefined;

  constructor(private accountService: AccountService,private router: Router, public fb: FormBuilder) {}
  accounts: Account[] = [];
  filteredAcoounts: Account[] = [];
  accountsFilter = '';
  currency: string[] = ['ALL', 'USD', 'CAD'];
  default = 'ALL';
  currencyForm: any = this.fb.group({
    currencyName: ['', [Validators.required]]
  })

  ngOnInit(): void {

    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
      this.filteredAcoounts = accounts;

    });
    this.currencyForm.controls['currencyName'].setValue(this.default, {onlySelf: true});
  }
  changeCurrency(e: any) {
    console.log("e",e)
    this.currencyForm.get('currencyName').setValue(e.target.value, {
      onlySelf: true
    })
    console.log(this.currencyForm.value.currencyName)
    this.filterAccounts(this.currencyForm.value.currencyName)
  }


  filterAccounts(currency: string) {
    if(currency==="ALL"){
      this.filteredAcoounts=this.accounts;
      return;
    }
    this.filteredAcoounts= this.accounts.filter(acc => acc.currency == currency.toLowerCase());
  }

  getAccount(id: unknown){
    this.router.navigateByUrl(`/account/${id}`)
     this.accountService.data.next(id);

  //    this.accountService.data.subscribe((data) => {
  //     console.log(data)
  // })
}
trackByMethod(index:number, el:any): number {
  return el.id;
}
// onSubmit() {
//   this.isSubmitted = true;
//   if (!this.currencyForm.valid) {
//     return false;
//   } else {
//     alert(JSON.stringify(this.currencyForm.value))
//   }
//     return null;
// }

}
