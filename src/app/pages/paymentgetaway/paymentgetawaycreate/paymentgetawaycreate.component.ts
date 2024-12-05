import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymantgetawayservicesService } from 'src/app/services/paymantgetawayservices.service';
import { CountryService } from 'src/app/services/country.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-paymentgetawaycreate',
  templateUrl: './paymentgetawaycreate.component.html',
  styleUrls: ['./paymentgetawaycreate.component.css']
})
export class PaymentgetawaycreateComponent {
  paymentlisturl = "/" + environment.paymentList

  PGMId: any;
  adminId = localStorage.getItem('userId');
  PGMName: any;
  PGMCountrys: any;
  PGMKeyId: any;
  PGMSecret: any;
  IsBanktransfar: any;
  IsOnline: any;
  IsActive = true;
  BankDetails: any;
  bankname: any;
  accountno: any;
  ifccode: any;
  accountholdername: any;


  loading = false;
  PGMNameMessage: any;
  PGMCountrysMessage: any;
  PGMKeyMessage: any;
  PGMSecretMessage: any;
  spmSeqNoMessage: any

  banknamemessage: any;
  accountnomessage: any;
  ifccodemessage: any;
  accountholdernamemessage: any;
  countrymessage: any;
  mes: any;
  response: any;
  errorCount = 0;
  @Input() Isshowinput = true;

  countrylist: any;
  isAllcheck = false;
  isItem: any = [];
  ischeck: any = [];
  amount: any = [];
  result: any = [];
  result1: any = [];
  default: any = [];
  BankDetails1: any = [];


  constructor(
    public PaymantgetawayservicesService: PaymantgetawayservicesService, public CountryService: CountryService,
    private router: Router
  ) {

    this.IsBanktransfar = false;
    this.IsOnline = false;
    this.getCountrylist();

  }

  //countrylist

  getCountrylist() {
    this.countrylist = null;
    this.CountryService.listCountry().subscribe({
      next: (data: any) => {
        this.countrylist = data;        
        // this.countrylist.forEach((e: any) => {
        //   e.check = true;
        //   this.isItem.push(e);
        // });
      },
    });
  }


  Countrywiseprice($e: any, i: any, id: any, title: any, currency: any) {
    let isBreak = true;
    if ($e.target.checked == true) {
      this.isItem.push({ id: id, name: title, currency: currency })
    } else {
      this.isItem.forEach((e: any, i1: any) => {
        if (i == i1) {
          this.isItem.pop({ id: id, name: title, currency: currency })
        }
      });
    }
  }


  //bank transfaer true false

  bankt() {
    console.log(this.IsBanktransfar)
  }
  online() {

  }

  onSubmit(form: NgForm) {

    this.errorCount = 0;

    if (this.PGMName == "Bank") {

      this.BankDetails1.push({ bankname: this.bankname, accountholdername: this.accountholdername, accountnumber: this.accountno, ifsccode: this.ifccode })

    }



    if (this.PGMName == 'Razorpay') {
      if (this.PGMKeyId == undefined) {
        this.errorCount++;
        this.PGMKeyMessage = 'Please enter key';
      } else {
        this.PGMKeyMessage = '';
      }


      if (this.PGMSecret == undefined) {
        this.errorCount++;
        this.PGMSecretMessage = 'Please enter secret';
      } else {
        this.PGMSecretMessage = '';
      }

    }

    if (this.PGMName == 'Bank') {

      if (this.bankname == undefined) {
        this.errorCount++;
        this.banknamemessage = 'Please enter bank name';
      } else {
        this.banknamemessage = '';
      }

      if (this.accountno == undefined) {
        this.errorCount++;
        this.accountnomessage = 'Please enter account number';
      } else {
        this.accountnomessage = '';
      }

      if (this.accountholdername == undefined) {
        this.errorCount++;
        this.accountholdernamemessage = 'Please enter account holder name';
      } else {
        this.accountholdernamemessage = '';
      }


      if (this.ifccode == undefined) {
        this.errorCount++;
        this.ifccodemessage = 'Please enter ifsc code';
      } else {
        this.ifccodemessage = '';
      }
    }


    if (this.errorCount == 0) {
      this.loading = true;
      this.PaymantgetawayservicesService.Paymentgetaway.IsActive = this.IsActive;
      // this.PaymantgetawayservicesService.Paymentgetaway.IsOnline = this.IsOnline;
      // this.PaymantgetawayservicesService.Paymentgetaway.IsBanktransfar = this.IsBanktransfar;
      if (this.PGMName == 'Bank') {
        this.PaymantgetawayservicesService.Paymentgetaway.BankDetails = JSON.stringify(this.BankDetails1);
      }
      else {
        this.PaymantgetawayservicesService.Paymentgetaway.BankDetails = "";
      }

      //this.PaymantgetawayservicesService.Paymentgetaway.PGMCountrys = JSON.stringify(this.isItem);

      if (this.PGMName == 'Razorpay') {
        this.PaymantgetawayservicesService.Paymentgetaway.PGMKeyId = this.PGMKeyId;
        this.PaymantgetawayservicesService.Paymentgetaway.PGMSecret = this.PGMSecret;
      }
      else {
        this.PaymantgetawayservicesService.Paymentgetaway.PGMKeyId = "-"
        this.PaymantgetawayservicesService.Paymentgetaway.PGMSecret = "-"
      }
      this.PaymantgetawayservicesService.Paymentgetaway.PGMId = '000000000000000000000000';
      this.PaymantgetawayservicesService.Paymentgetaway.PGMName = this.PGMName;
      this.PaymantgetawayservicesService.Paymentgetaway.adminId = this.adminId;

      //start subscription create service
      this.PaymantgetawayservicesService.createPaymenygetway().subscribe((res) => {
        this.response = res;

        if (this.response != 'Success') {
          this.mes = this.response;
          this.loading = false;
        } else {
          this.loading = false;
          this.PaymantgetawayservicesService.Paymentgetaway.PGMName = '';

          this.router.navigate([environment.paymentList]);
        }
      });
    }




  }
}
