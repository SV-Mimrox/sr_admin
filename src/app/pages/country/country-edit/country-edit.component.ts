import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';
import { PaymantgetawayservicesService } from 'src/app/services/paymantgetawayservices.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.css']
})
export class CountryEditComponent {

  countrylisturl = "/"+environment.countryList
  
  Id: any;
  adminId:any
  ccmName:any
  ccmCode:any
  ccmCurrency:any
  ccmIsActive:any
  ccmIsDefault:any  
  payId:any;
  paymentname:any;
  Paymentlist: any;
  errorCount = 0;
  editnameMessage: any;
  editcodeMessage: any;
  editcurrencyMessage:any
  cntpaymentmessage:any;
  mes: any;
  response: any;
  loading = false;
  

  constructor(
    public countryervice: CountryService,public PaymantgetawayservicesService: PaymantgetawayservicesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.spmlist();
    this.getcnt(this.route.snapshot.params['id']);
  }

  //get the list from payment getway
  private spmlist() {
    this.Paymentlist = null;
    this.PaymantgetawayservicesService.listPaymentgateway().subscribe({
      next: (data: any) => {        
        this.Paymentlist = data;                  
      },
    });
  }

 

  // get the record particular country
  getcnt(id: any) {
    this.loading = true;
    this.Id = id;
    this.countryervice.getCountry(id).subscribe({
      next: (data: any) => {
         this.payId=data.ccmPaymentId;
         this.paymentname=data.ccmPaymentName;
          this.ccmName = data.ccmName,
          this.ccmCode = data.ccmCode,    
          this.ccmCurrency =data.ccmCurrency     
          this.ccmIsActive = data.ccmIsActive
          this.ccmIsDefault = data.ccmIsDefault     
          this.loading =false;      
      },      
    });
  }


  payment(id:any,name:any){
    this.payId=id;
    this.paymentname=name;
 
  }




  //post for country edit
  onSubmit(form: NgForm) {
    this.errorCount = 0;
    
    //Name validation
    if (this.ccmName == undefined) {
      this.errorCount++;
      this.editnameMessage = 'Please enter country name';
    } else {
      if (this.ccmName.trim() == '') {
        this.errorCount++;
        this.editnameMessage = 'Please enter valid country name';
      } else {        
          this.editnameMessage = '';        
      }
    }


     //Name validation
     if (this.payId == undefined ) {
      this.errorCount++;
      this.cntpaymentmessage = 'Please select payment getaway';
    } else {
    
        this.cntpaymentmessage = '';
      
    }

     //Name validation
     if (this.ccmCurrency == undefined) {
      this.errorCount++;
      this.editcurrencyMessage = 'Please enter currency';
    } else {
      if (this.ccmCurrency.trim() == '') {
        this.errorCount++;
        this.editcurrencyMessage = 'Please enter valid currency';
      } else {        
          this.editcurrencyMessage = '';        
      }
    }

    //Seq No validation
    if (this.ccmCode == undefined) {
      this.errorCount++;
      this.editcodeMessage = 'Please enter country code';
    } else {
      if (this.ccmCode <= 0) {
        this.errorCount++;
        this.editcodeMessage = 'Invalid country code';
      }else {
        this.editcodeMessage = '';
      }
    }   

    if (this.errorCount == 0) {
      this.adminId = localStorage.getItem('userId');
      this.countryervice.cnt.Id = this.Id;
      this.countryervice.cnt.adminId = this.adminId;
      this.countryervice.cnt.ccmName = this.ccmName;
      this.countryervice.cnt.ccmCode = this.ccmCode;      
      this.countryervice.cnt.ccmCurrency = this.ccmCurrency;
      this.countryervice.cnt.ccmIsActive = this.ccmIsActive; 
      this.countryervice.cnt.ccmIsDefault = this.ccmIsDefault;  
      this.countryervice.cnt.CcmPaymentId=this.payId;
      this.countryervice.cnt.CcmPaymentName=this.paymentname;    
      
      //loading condition start
      if (this.loading == false) {
        this.loading = true;

        //start country edit service
        this.countryervice.editCountry().subscribe((res) => {          
          this.response = res;
          if (this.response != 'Success') {
            this.mes = this.response;
            this.loading = false;
          } else {
            this.loading = false;
            this.countryervice.cnt.ccmName = '';
            this.countryervice.cnt.ccmCode = ''; 
            this.countryervice.cnt.ccmCurrency = '';           
            this.router.navigate([environment.countryList]);
          }
        });
      }
    }
  }
}
