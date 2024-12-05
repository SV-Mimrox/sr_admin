import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';
import { PaymantgetawayservicesService } from 'src/app/services/paymantgetawayservices.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-country-create',
  templateUrl: './country-create.component.html',
  styleUrls: ['./country-create.component.css']
})
export class CountryCreateComponent {

  countrylisturl = "/"+environment.countryList

  adminId:any
  ccmName:any
  ccmCode:any  
  ccmCurrency:any
  ccmIsDefault:any  
  payId:any;
  paymentname:any;
  
  cntloading = false;
  cntnameMessage: any;
  cntcodeMessage: any;
  cntCurrencyMessage: any;
  cntpaymentmessage:any;

  Paymentlist: any;
  mes: any;
  response: any;
  errorCount = 0;      
  @Input() Isshowinput = true;
  @Input() Isshowlabeluploadfile = true;
  @Input() Isshowfileupload = true;

  constructor(
    public countryservice: CountryService, public PaymantgetawayservicesService: PaymantgetawayservicesService,
    private router: Router
  ) {
           
    this.spmlist();
   
  }
  


   //get the list from Subscription
   private spmlist() {
    this.Paymentlist = null;
    this.PaymantgetawayservicesService.listPaymentgateway().subscribe({
      next: (data: any) => {        
        this.Paymentlist = data;            
      },
    });
  }



  payment(id:any,name:any){
    this.payId=id;
    this.paymentname=name;
  }

  //post for catalogues Create
  onSubmit(form: NgForm) {
    this.errorCount = 0;

    //Name validation
    if (this.ccmName == undefined ) {
      this.errorCount++;
      this.cntnameMessage = 'Please enter country name';
    } else {
      if (this.ccmName.trim() == '') {
        this.errorCount++;
        this.cntnameMessage = 'Please enter valid country name';
      } else {       
          this.cntnameMessage = '';       
      }
    }

     //Name validation
     if (this.payId == undefined ) {
      this.errorCount++;
      this.cntpaymentmessage = 'Please select payment getaway';
    } else {
    
        this.cntpaymentmessage = '';
      
    }

    //code validation
    if (this.ccmCode == undefined) {
      this.errorCount++;
      this.cntcodeMessage = 'Please enter country code';
    }else {
        if (this.ccmCode <= 0 )  {
          this.errorCount++;
          this.cntcodeMessage = 'Invalid country code';
        }else {
          this.cntcodeMessage = '';
        }      
    }
        
     //Currency validation
     if (this.ccmCurrency == undefined) {
      this.errorCount++;
      this.cntCurrencyMessage = 'Please enter currency';
    } else {
      if (this.ccmCurrency.trim() == '') {
        this.errorCount++;
        this.cntCurrencyMessage = 'Please enter valid currency';
      } else {       
          this.cntCurrencyMessage = '';       
      }
    }

    if (this.errorCount == 0) {
      this.adminId = localStorage.getItem('userId');

      this.countryservice.cnt.adminId = this.adminId;
      this.countryservice.cnt.ccmName = this.ccmName;
      this.countryservice.cnt.ccmCode = this.ccmCode;    
      this.countryservice.cnt.ccmCurrency = this.ccmCurrency;
      this.countryservice.cnt.CcmPaymentId=this.payId;
      this.countryservice.cnt.CcmPaymentName=this.paymentname;

      if(this.ccmIsDefault == undefined){
        this.countryservice.cnt.ccmIsDefault = false; 
      }
      else{
        this.countryservice.cnt.ccmIsDefault = this.ccmIsDefault;
      }
       
      
      //loading condition start
      if (this.cntloading == false) {
        this.cntloading = true;

        //start category create service
        this.countryservice.createCountry().subscribe((res) => {
          this.response = res;

          if (this.response != 'Success') {
            this.mes = this.response;
            this.cntloading = false;
          } else {
            this.cntloading = false;
            this.countryservice.cnt.ccmName = '';
            this.countryservice.cnt.ccmCode = '';  
            this.countryservice.cnt.ccmCurrency = '';         
            this.router.navigate([environment.countryList]);
          }
        });
      }
    }
  }
}
