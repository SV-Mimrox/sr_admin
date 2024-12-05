import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaymantgetawayservicesService } from 'src/app/services/paymantgetawayservices.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sellersebscrtionlist',
  templateUrl: './sellersebscrtionlist.component.html',
  styleUrls: ['./sellersebscrtionlist.component.css']
})
export class SellersebscrtionlistComponent {
  Sublist: any;
  subloading = true;

  constructor(
    public PaymantgetawayservicesService: PaymantgetawayservicesService,
    private router : Router
    ) {
    this.spmlist();
  }


   //get the list from Subscription
   private spmlist() {
    this.Sublist = null;
    this.subloading = true;
    this.PaymantgetawayservicesService.listsellersubscrtion().subscribe({
      next: (data: any) => {        
        this.Sublist = data;       
        this.subloading = false;
              
      },
    });
  }
}
