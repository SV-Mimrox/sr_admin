import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { CountryService } from 'src/app/services/country.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subscription-create',
  templateUrl: './subscription-create.component.html',
  styleUrls: ['./subscription-create.component.css']
})
export class SubscriptionCreateComponent {

  subscriptionlisturl = "/" + environment.subscriptionList

  adminId: any
  spmTitle: any;
  spmDurationType: any;
  spmDuration: any;
  spmAmount: any;
  spmFeatures: any;
  spmSupport: any;
  spmType: any;
  spmSeqNo: any
  spmIsActive = true
  DurationTypeDD: any = [{ "Name": "Day" }, { "Name": "Month" }, { "Name": "Year" }];
  TypeDD: any = [{ "Name": "Free" }, { "Name": "Paid" }];


  spmloading = false;
  spmTitleMessage: any;
  spmAmountMessage: any;
  spmDurationMessage: any;
  cntCurrencyMessage: any;
  spmSeqNoMessage: any
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
  default: any = [];

  constructor(
    public subscriptionservice: SubscriptionService, public CountryService: CountryService,
    private router: Router
  ) {

    this.getCountrylist();

  }

  /*dropdown Duration Type */
  durationtypeDD(event: any) {
    this.spmDurationType = event.target.value;
  }
  /*dropdown Type */
  typeDD(event: any) {

    this.spmType = event.target.value;

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
    this.result =[];
    this.isItem.forEach((e: any, i: any) => {
      this.amount.forEach((e1: any, i1: any) => {
        if (e.check == true) {
          if (i == i1) {
          
            this.result.push({ id: e.id, name:e.title, currency:e.currency, amount: e1 })
          }
        }
        else {
          this.result.forEach((e2: any) => {
            if (e2.id == e.id) {
              this.result.pop({ id: e.id, name:e.title, currency:e.currency, amount: e1})
            }
          });
        }
      });
    });
  
   var items:any=[];
   this.result.forEach(function(elem:any, index:any) {
   if(items.length==0){
    items.push(elem);
   }
   else{
    var chk=items.find((a:any)=>{
      return a.id==elem.id
    })
    if(chk==undefined){
      items.push(elem);
    }
   }

});


   

    //title validation
    if (this.spmTitle == undefined ) {
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

    //amount validation
    // if (this.spmAmount == undefined) {
    //   this.errorCount++;
    //   this.spmAmountMessage = 'Please enter amount';
    // }else {       
    //       this.spmAmountMessage = '';       
    // }

     //Duration  validation
     if (this.spmDuration == undefined) {
      this.errorCount++;
      this.spmDurationMessage = 'Please enter duration';
    }else {       
          this.spmDurationMessage = '';       
    }

    //SeqNo  validation
    if (this.spmSeqNo == undefined ) {
      this.errorCount++;
      this.spmSeqNoMessage = 'Please enter seqNo';
    } else {
      if (this.spmSeqNo.trim() == '') {
        this.errorCount++;
        this.spmSeqNoMessage = 'Please enter valid seqNo';
      } else {       
          this.spmSeqNoMessage = '';       
      }
    }



    if (this.errorCount == 0) {
      this.subscriptionservice.subscription.id = "000000000000000000000000";
      this.adminId = localStorage.getItem('userId');

      this.subscriptionservice.subscription.adminId = this.adminId;
      this.subscriptionservice.subscription.spmTitle = this.spmTitle;
      if(this.spmDurationType == undefined){
        this.subscriptionservice.subscription.spmDurationType = "Day";    
      }else{
        this.subscriptionservice.subscription.spmDurationType = this.spmDurationType;    
      }


      this.subscriptionservice.subscription.spmDuration = parseInt(this.spmDuration);

      if(this.spmAmount == undefined){
        this.subscriptionservice.subscription.spmAmount = '0';
      }
      else{
        this.subscriptionservice.subscription.spmAmount = this.spmAmount;
      }
      


      if(this.spmFeatures == undefined){
        this.subscriptionservice.subscription.spmFeatures = "-";
      }else{
        this.subscriptionservice.subscription.spmFeatures = this.spmFeatures;
      }
      if(this.spmSupport == undefined){
        this.subscriptionservice.subscription.spmSupport = "-";
      }else{
        this.subscriptionservice.subscription.spmSupport = this.spmSupport;
      }

      if(this.spmType == undefined){
        this.subscriptionservice.subscription.spmType = "Free";
      }else{
        this.subscriptionservice.subscription.spmType = this.spmType;
      }

      this.subscriptionservice.subscription.spmSeqNo = parseInt(this.spmSeqNo);
      this.subscriptionservice.subscription.spmIsActive = this.spmIsActive;
      this.subscriptionservice.subscription.countryAmounts=JSON.stringify(items);
      //loading condition start
      if (this.spmloading == false) {
        this.spmloading = true;

        //start subscription create service
        this.subscriptionservice.createSubscription().subscribe((res) => {
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
