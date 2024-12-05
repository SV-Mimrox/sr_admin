import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customer-orderdetail',
  templateUrl: './customer-orderdetail.component.html',
  styleUrls: ['./customer-orderdetail.component.css']
})
export class CustomerOrderdetailComponent {


  loading = false;
  orderNo:any;
  ordDetails:any;
  orditem:any;
  imageUrl = environment.cdnUrl + 'Product';
  discountAmount =0;
  deliveryCharge =0; 
  totalprice:any;
  ttprice =0
  qty:any
  currency:any
  
  constructor(
   public cstordDetailservice:CustomersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getordDetail(this.route.snapshot.params['id']);
  }

   // get the record particular category
   getordDetail(id: any) {
    this.loading = true     
    this.cstordDetailservice.detailOrder(id).subscribe({
      next: (data: any) => {
        this.ordDetails = data
        this.currency=data.currency
        this.qty = data.orderItems.length
        this.orderNo= data.orderNo
        this.totalprice =data.totalPrice
        this.orditem = data.orderItems
        this.ttprice = parseInt(data.totalPrice)
        this.deliveryCharge = parseInt(data.ormDeliveryCharge??0)
        this.discountAmount = parseInt(data.discountAmount??0)         
          this.loading = false      
      },      
    });
  }
}




