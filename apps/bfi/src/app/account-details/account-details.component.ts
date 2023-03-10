import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AccountService } from 'libs/shared/services/src/lib/account.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'bfi-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent implements OnInit {
  data: any;
  account:any;

  constructor(private accountService: AccountService, private activatedRoute : ActivatedRoute) {
    console.log("I am here")
    this.accountService.data.subscribe((data) => {
      this.data = data;
      console.log("account Service",this.data)
  })
  }

  accountsFilter = '';
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      const id = params['id'];
      console.log(id);
      this.accountService.getAccount(id).subscribe((data=>{
        this.account=data;
        console.log("account id",this.account);
      }))
    });


}
}
