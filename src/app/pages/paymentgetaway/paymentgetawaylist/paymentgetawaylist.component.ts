import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaymantgetawayservicesService } from 'src/app/services/paymantgetawayservices.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-paymentgetawaylist',
  templateUrl: './paymentgetawaylist.component.html',
  styleUrls: ['./paymentgetawaylist.component.css']
})
export class PaymentgetawaylistComponent {

  paymentcreateurl = "/" +environment.paymentCreate;
  paymentediturl  = "/"+environment.paymentEdit;


  Paymentlist: any;
  paymentloading = true;
  isdel = false;


  constructor(
    public PaymantgetawayservicesService: PaymantgetawayservicesService,
    private router : Router
    ) {
    this.spmlist();
  }


  //get the list from Subscription
  private spmlist() {
    this.Paymentlist = null;
    this.paymentloading = true;
    this.PaymantgetawayservicesService.listPaymentgateway().subscribe({
      next: (data: any) => {        
        this.Paymentlist = data;       
        this.paymentloading = false;
              
      },
    });
  }
   //delete the Subscription data 
   deletespm(id: any) {
    this.PaymantgetawayservicesService.deleteSubscription(id).subscribe({
      next: (res) => {   
        this.spmlist();      
        this.isdel = false;
      },      
    });
  }
}
