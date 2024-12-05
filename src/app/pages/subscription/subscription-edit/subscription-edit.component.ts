import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { environment } from 'src/environments/environment';
import { CountryService } from 'src/app/services/country.service';


@Component({
  selector: 'app-subscription-edit',
  templateUrl: './subscription-edit.component.html',
  styleUrls: ['./subscription-edit.component.css']
})
export class SubscriptionEditComponent {

  subscriptionlisturl = "/" + environment.subscriptionList

  Id: any
  adminId: any
  spmTitle: any;
  spmDurationType: any;
  spmDuration: any;
  spmAmount: any;
  spmFeatures: any;
  spmSupport: any;
  spmType: any;
  spmSeqNo: any
  spmIsActive: any
  DurationTypeDD: any = [{ "Name": "Day" }, { "Name": "Month" }, { "Name": "Year" }];
  TypeDD: any = [{ "Name": "Free" }, { "Name": "Paid" }];


  spmloading = false;
  spmTitleMessage: any;
  spmAmountMessage: any;
  cntCurrencyMessage: any;
  spmSeqNoMessage: any
  spmDurationMessage: any
  mes: any;
  response: any;
  errorCount = 0;
  @Input() Isshowinput = true;
  @Input() Isshowlabeluploadfile = true;
  @Input() Isshowfileupload = true;

  countrylist: any;
  isAllcheck = true;
  isItem: any = [];
  ischeck: any = [];
  amount: any = [];
  result: any = [];
  result1: any = [];

  constructor(
    public subscriptionservice: SubscriptionService, public CountryService: CountryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getSpm(this.route.snapshot.params['id']);
    this.getCountrylist();
  }

  /*dropdown Duration Type */
  durationtypeDD(event: any) {
    if (event.target.value == "-") {
      this.spmDurationType = "All"
    } else {
      this.spmDurationType = event.target.value;
    }
  }
  /*dropdown Type */
  typeDD(event: any) {
    if (event.target.value == "-") {
      this.spmType = "All"
    } else {
      this.spmType = event.target.value;
    }
  }

  // get the record particular country
  getSpm(id: any) {
    this.spmloading = true;
    this.Id = id;
    this.subscriptionservice.getSubscription(id).subscribe({
      next: (data: any) => {        
        this.spmTitle = data.spmTitle,
          this.spmAmount = data.spmAmount,
          this.spmDurationType = data.spmDurationType,
          this.spmDuration = data.spmDuration,
          this.spmSeqNo = data.spmSeqNo,
          this.spmType = data.spmType,
          this.spmSupport = data.spmSupport,
          this.spmFeatures = data.spmFeatures,
          this.spmIsActive = data.spmIsActive;
        this.result = data.countryAmounts;        
        if (this.result != null) {
          this.result.forEach((e: any, i: any) => {
            this.amount[i] = e.amount
          });
        }


        this.spmloading = false;
      },
    });
  }



  //countrylist

  getCountrylist() {
    this.countrylist = null;
    this.CountryService.listCountry().subscribe({
      next: (data: any) => {
        this.countrylist = data;
        this.countrylist.forEach((e: any) => {
          e.check = true;
          this.isItem.push(e);
        });
      },
    });
  }

  // country wise price data set

  Countrywiseprice($e: any, i: any, id: any) {
    let isBreak = true;
    if ($e.target.checked == true) {
      this.isItem.filter((e: any) => {
        if (e.id == id) {
          this.isItem.pop(e);
          e.check = true;
          this.isItem.push(e);
        }
      }
      )
    } else {
      this.isItem.filter((e: any) => {
        if (e.id == id) {
          this.isItem.pop(e);
          e.check = false;
          this.isItem.push(e);
        }
      }
      )
    }
  }


  //post for subscription Create
  onSubmit(form: NgForm) {
    this.errorCount = 0;

    this.result = [];
    this.isItem.forEach((e: any, i: any) => {
      this.amount.forEach((e1: any, i1: any) => {
        if (e.check == true) {
          if (i == i1) {

            this.result.push({ id: e.id, name: e.title, currency: e.currency, amount: e1 })
          }
        }
        else {
          this.result.forEach((e2: any) => {
            if (e2.id == e.id) {
              this.result.pop({ id: e.id, name: e.title, currency: e.currency, amount: e1 })
            }
          });
        }
      });
    });
    
    var items: any = [];
    this.result.forEach(function (elem: any, index: any) {
      if (items.length == 0) {
        items.push(elem);
      }
      else {
        var chk = items.find((a: any) => {
          return a.id == elem.id
        })
        if (chk == undefined) {
          items.push(elem);
        }
      }

    });

    //title validation
    if (this.spmTitle == undefined) {
      this.errorCount++;
      this.spmTitleMessage = 'Please enter title';
    } else {
      if (this.spmTitle.trim() == '') {
        this.errorCount++;
        this.spmTitleMessage = 'Please enter valid title';
      } else {
        this.spmTitleMessage = '';
      }
    }

    // //amount validation
    // if (this.spmAmount == undefined || this.spmAmount == "" || this.spmAmount == null) {
    //   this.errorCount++;
    //   this.spmAmountMessage = 'Please enter amount';
    // }
    // else {
    //   this.spmAmountMessage = '';
    // }

    //Duration  validation
    if (this.spmDuration == undefined || this.spmDuration == "" || this.spmDuration == null) {
      this.errorCount++;
      this.spmDurationMessage = 'Please enter duration';
    } else {
      this.spmDurationMessage = '';
    }

    //SeqNo  validation
    if (this.spmSeqNo == undefined) {
      this.errorCount++;
      this.spmSeqNoMessage = 'Please enter seqNo';
    } else {
      this.spmSeqNoMessage = '';
    }



    if (this.errorCount == 0) {
      this.subscriptionservice.subscription.id = this.Id;
      this.adminId = localStorage.getItem('userId');
      this.subscriptionservice.subscription.adminId = this.adminId;
      this.subscriptionservice.subscription.spmTitle = this.spmTitle;
      this.subscriptionservice.subscription.spmDurationType = this.spmDurationType;
      this.subscriptionservice.subscription.spmDuration = parseInt(this.spmDuration);
      this.subscriptionservice.subscription.spmAmount = this.spmAmount;
      this.subscriptionservice.subscription.spmFeatures = this.spmFeatures;
      this.subscriptionservice.subscription.spmSupport = this.spmSupport;
      this.subscriptionservice.subscription.spmType = this.spmType;
      this.subscriptionservice.subscription.spmSeqNo = parseInt(this.spmSeqNo);
      this.subscriptionservice.subscription.spmIsActive = this.spmIsActive;
      this.subscriptionservice.subscription.countryAmounts = JSON.stringify(items);
      //loading condition start
      if (this.spmloading == false) {
        this.spmloading = true;

        //start subscription create service
        this.subscriptionservice.editSubscription().subscribe((res) => {
          this.response = res;

          if (this.response != 'Success') {
            this.mes = this.response;
            this.spmloading = false;
          } else {
            this.spmloading = false;
            this.subscriptionservice.subscription.spmTitle = '';

            this.router.navigate([environment.subscriptionList]);
          }
        });
      }
    }
  }

}
