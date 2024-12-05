import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})
export class SubscriptionListComponent {

  subscriptioncreateurl = "/" +environment.subscriptionCreate
  subscriptionediturl  = "/"+environment.subscriptionEdit

  Subscriptionlist: any;
  Subscriptionloading = true;
  isdel = false;

  constructor(
    public subscriptionservice: SubscriptionService,
    private router : Router
    ) {
    this.spmlist();
  }

  //get the list from Subscription
  private spmlist() {
    this.Subscriptionlist = null;
    this.Subscriptionloading = true;
    this.subscriptionservice.listSubscription().subscribe({
      next: (data: any) => {        
        this.Subscriptionlist = data;        
        this.Subscriptionloading = false;
              
      },
    });
  }
   //delete the Subscription data 
   deletespm(id: any) {
    this.subscriptionservice.deleteSubscription(id).subscribe({
      next: (res) => {   
        this.spmlist();      
        this.isdel = false;
      },      
    });
  }

}
