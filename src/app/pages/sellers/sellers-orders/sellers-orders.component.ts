import { Component, Input } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { SellersService } from 'src/app/services/sellers.service';
import { environment } from 'src/environments/environment';

//add api Url
const baseURL = environment.apiUrl;

@Component({
  selector: 'app-sellers-orders',
  templateUrl: './sellers-orders.component.html',
  styleUrls: ['./sellers-orders.component.css']
  
})
export class SellersOrdersComponent {

  
  orderlist:any
  orderlistloading:any
  no=0;

   //serach
   @Input() Isshowselectbox = true;
   @Input() Isshowinput = true;
   sellerlist:any;  
   id:any
   categorieslist:any;
   categorieslistAll:any;
   slrId="All";  
   catId="-"
   prdId="-"
   productlist:any
   productlistAll:any

   catalogueactivelist:any;   
   catalogueId:any   
   productId:any
   prdN="-";
   fromDate="-";
   toDate="-";         
   orderStatusDD:any = [{"Name":"Pending"},{"Name":"Confirmed"},{"Name":"Out for Delivery"},{"Name":"Delivered"},{"Name":"Rejected"},{"Name":"Cancel"}];
   status:any

  constructor(
    public sellerservice:SellersService,
    public slrservice:SellersService,
    public commenservice:SellersService,
    public orderservice: OrdersService, ){
    this.seller();
    this.catlist();
    this.prdlist();
    this.ordlist();
  }

  //onchange Seller serch
  onchange(name:any){   
    this.catId="-";
    this.prdId="-";
    if(name!="-")
    {
      this.slrId=name;
      let cList = this.categorieslistAll.filter((a:any)=>a.sellerId==name);

      this.categorieslist=cList;
      if(this.catId=="-" || this.catId=="All"){
        cList=this.productlistAll.filter((a:any)=>a.sellerId==this.slrId)     
        this.productlist=cList;  
      }
      else{
        cList=this.productlistAll.filter((a:any)=>a.catalogueId==this.catId && a.sellerId==this.slrId)     
        this.productlist=cList;  
      }
          
    }
    else{
      this.slrId="All";
      this.categorieslist=this.categorieslistAll;
      if(this.catId=="-" || this.catId=="All"){
        this.productlist=this.productlistAll;
      }
      else{
        this.productlist=this.productlistAll.filter((a:any)=>a.catalogueId==this.catId);
      }
      
    } 
    
  }   
  
      //onchange1 Categories serch
    onchange1($event:any){  
      
      if($event.target.value=="-"){
        this.catId="All";
      }
      else{
        this.catId=$event.target.value;        
      }  
      let cList:any=[];   
      if(this.catId=="All"){
        this.prdId="-";
        this.productlist=this.productlistAll;
        
      }
      else{
      this.prdId="-";      
      cList=this.productlistAll.filter((a:any)=>a.catalogueId==this.catId && a.sellerId==this.slrId)     
      this.productlist=cList;      
      } 
  
    }
       //onchange2 Products serch
       onchange2($event:any){          
        if($event.target.value=="-"){
          this.prdId="All";          
        }
        else{
         this.prdId=$event.target.value;         
        }      
       }

       /*dropdown*/
     ordstatusDD(event:any){   
      if(event.target.value == "-"){
        this.status = "All"
      } else{
        this.status=event.target.value;
      }   
     
      }
       //onserch button click
     onsearch(){ 
      this.orderservice.ordSearch.sellerId =this.slrId
      this.orderservice.ordSearch.catalogueId=this.catId;
      this.orderservice.ordSearch.productId=this.prdId;     
      this.orderservice.ordSearch.fromDate=this.fromDate;
      this.orderservice.ordSearch.toDate=this.toDate;
      this.orderservice.ordSearch.status = this.status
      this.orderservice.ordsearch().subscribe({
        next:(data:any)=>{
          this.orderlist = data          
        }
      })
      }

   //scroll
   onScroll(){    
    setTimeout(()=>{      
      this.no=this.no+1;      
      const apiUrl = `${baseURL + 'AdminSeller/GetOrders?no='}${this.no}`;
    this.commenservice.commenDataList(apiUrl).subscribe({
      next: (data:any) => {
        this.orderlist = [...this.orderlist,...data];               
        //this.totalCount = this.orderlist.length;         
        this.orderlistloading=false;
      },     
    });
    }, 0);    
  }

  //get the list from Orderlist
 private ordlist() {
  let n=0;
  this.orderlist = null;
  this.orderlistloading = true;  
  const apiUrl = `${baseURL + 'AdminSeller/GetOrders?no='}${n}`;
  this.commenservice.commenDataList(apiUrl).subscribe({
    next: (data) => {
      this.orderlist = data;  
            
      //this.totalCount = this.totalCount+this.orderlist.length;
      this.onScroll();      
      this.orderlistloading = false;
    },
   // error: (e) => console.log(e),
  });
  
}

    //get the list from seller dropdown(search)
 private seller() {
  this.sellerlist = null;
  this.slrservice.listslr().subscribe({
    next: (data) => {
      this.sellerlist = data;        
    },     
  });
}

  //get the list from categories dropdown(search)
  private catlist() {
    this.categorieslist = null;
    this.slrservice.listcategories().subscribe({
      next: (data) => {
        this.categorieslist = data;   
        this.categorieslistAll =data;  
        
      },     
    });
  }

   //get the list from products dropdown(search)
   private prdlist() {
    this.productlist = null;
    this.slrservice.listproducts().subscribe({
      next: (data) => {
        this.productlist = data;          
        this.productlistAll =data;  
        
      },     
    });
  }

}
