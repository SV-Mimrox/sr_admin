import { Component } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { environment } from 'src/environments/environment';
import { SellersService } from 'src/app/services/sellers.service';

//add api Url
const baseURL = environment.apiUrl;

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  customerlist:any
  customerloading:any
  imgeUrl = environment.cdnUrl + 'Catalogue';
  no=0;

  constructor(
    
    public commenservice:CustomersService, public sellerservice:SellersService,
  ){
    this.catlist();
  }

   //scroll
   onScroll(){
    
    setTimeout(()=>{
      //this.slrlistloading=true;
      this.no=this.no+1;      
      const apiUrl = `${baseURL + 'AdminCustomer/CustomerList?no='}${this.no}`;
    this.commenservice.commenDataList(apiUrl).subscribe({
      next: (data:any) => {
        this.customerlist = [...this.customerlist,...data];               
        //this.totalCount = this.categorieslist.length;         
        this.customerloading=false;
      },     
    });
    }, 0);    
  }

  //get the list from customer 
 private catlist() {
  let n=0;
  this.customerlist = null;
  this.customerloading = true;  
  const apiUrl = `${baseURL + 'AdminCustomer/CustomerList?no='}${n}`;
  this.commenservice.commenDataList(apiUrl).subscribe({
    next: (data) => {
      this.customerlist = data;         
      //this.totalCount = this.totalCount+this.categorieslist.length;
      this.onScroll();      
      this.customerloading = false;
    },   
  });
  
}


 //delete the customer 
 deletecategory(id: any) {
  this.sellerservice.deleteCustomer(id).subscribe({
    next: (res) => {   
      this.catlist();
      //this.isdel=false;     
    },      
  });
}

}
