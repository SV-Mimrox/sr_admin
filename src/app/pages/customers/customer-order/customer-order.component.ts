import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SellersService } from 'src/app/services/sellers.service';
import { environment } from 'src/environments/environment';

//add api Url
const baseURL = environment.apiUrl;

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent {

  cstorderlist:any
  cstorderlistloading:any
  cstname:any
  no=0;
  customerId:any;

  
  constructor(public sellerservice:SellersService,public commenservice:SellersService,private route:ActivatedRoute, ){
    this.customerId=this.route.snapshot.params['id'];
    this.ordlist(this.route.snapshot.params['id']);
  }

   //scroll
   onScroll(){    
    setTimeout(()=>{      
      this.no=this.no+1;      
      //return this.http.get(`${baseURL + 'WebSearch/Products?id='}${slrId}&text=${value}`);
      const apiUrl = `${baseURL + 'AdminCustomer/GetOrders?id='}${this.customerId}&no=${this.no}`;
    this.commenservice.commenDataList(apiUrl).subscribe({
      next: (data:any) => {
        this.cstorderlist = [...this.cstorderlist,...data];                    
        //this.totalCount = this.cstorderlist.length;         
        this.cstorderlistloading=false;
      },     
    });
    }, 0);    
  }

  //get the list from Orderlist
 private ordlist(id:any) {
  let n=0;
  this.cstorderlist = null;
  this.cstorderlistloading = true;  
  const apiUrl = `${baseURL + 'AdminCustomer/GetOrders?id='}${id}&no=${n}`;
  this.commenservice.commenDataList(apiUrl).subscribe({
    next: (data) => {
      this.cstorderlist = data;
      this.cstname = this.cstorderlist[0].customerName
      //this.cstname = cstorderlist[0].customerName     
           
      //this.totalCount = this.totalCount+this.cstorderlist.length;
      this.onScroll();      
      this.cstorderlistloading = false;
    },   
  });
  
}
}
