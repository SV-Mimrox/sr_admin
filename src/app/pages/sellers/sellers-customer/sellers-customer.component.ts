import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SellersService } from 'src/app/services/sellers.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sellers-customer',
  templateUrl: './sellers-customer.component.html',
  styleUrls: ['./sellers-customer.component.css']
})
export class SellersCustomerComponent {

  loading = false;
  cstslrList:any
  slrname:any
  imgeUrl = environment.cdnUrl + 'Product';

  constructor(
    public sellerservice:SellersService,
    private router: Router,
    private route: ActivatedRoute){
    this.getcstslr(this.route.snapshot.params['id']);
  }

   // get the record particular customer
   getcstslr(id: any) {
    this.loading = true 
    
    this.sellerservice.cstSeller(id).subscribe({
      next: (data: any) => {
        this.cstslrList = data        
        this.slrname = data[0].cstOtp         
          this.loading = false      
      },      
    });
  }


   //delete the customer 
   deletecategory(id: any) {
    this.sellerservice.deleteCustomer(id).subscribe({
      next: (res) => {   
        this.getcstslr(this.route.snapshot.params['id']);
        //this.isdel=false;     
      },      
    });
  }
}
