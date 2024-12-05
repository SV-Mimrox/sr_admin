import { Component, Input } from '@angular/core';
import { SellersService } from 'src/app/services/sellers.service';
import { environment } from 'src/environments/environment';

//add api Url
const baseURL = environment.apiUrl;

@Component({
  selector: 'app-sellers-products',
  templateUrl: './sellers-products.component.html',
  styleUrls: ['./sellers-products.component.css']
})
export class SellersProductsComponent {


  productslist:any
  productsloading:any
  imgeUrl = environment.cdnUrl + 'Product';
  no=0;

  //serach
  sellerlist:any;  
  id:any
  categorieslist:any;
  categorieslistAll:any;
  slrId="All";  
  catId="All"
  @Input() Isshowselectbox = true;
   
  constructor(
    public prdservice:SellersService,
    public slrservice:SellersService,
    public commenservice:SellersService
  ){
    this.seller();
    this.catlist();
    this.prdlist();
  }

   //onchange serch
   onchange(name:any){    
    if(name!="-")
    {
      this.slrId=name;
      let cList = this.categorieslistAll.filter((a:any)=>a.sellerId==name);
      this.categorieslist=cList;
    }
    else{
      this.slrId="All";
      this.categorieslist=this.categorieslistAll;
    }    
  }

   //onchange1 serch
   onchange1(name1:any){                                
    
    if(name1=="-"){
      this.catId="All";
    }
    else{
      this.catId=name1;
    }            
  }

  //onserch button click
  onsearch(){             
    if(this.slrId=="All" || this.slrId=="-")
    {
      this.prdlist();
    }
    else if(this.slrId=="-")
    {
      alert("Please select Seller for search Categories");
    }
    else{
      this.prdlist();
    }
    
  }

   //scroll
   onScroll(){
    
    setTimeout(()=>{
      //this.productsloading=true;
      this.no=this.no+1;      
      //const apiUrl = `${baseURL + 'AdminSeller/ProductsList?no='}${this.no}`;
      const apiUrl = `${baseURL + 'AdminSeller/ProductsList?s='}${this.slrId}&c=${this.catId}&no=${this.no}`;
    this.commenservice.commenDataList(apiUrl).subscribe({
      next: (data:any) => {
        this.productslist = [...this.productslist,...data];               
        //this.totalCount = this.productslist.length;         
        this.productsloading=false;
      },
    });
    }, 0);    
  }

  //get the list from Sellers by Products 
 private prdlist() {
  
  let n=0;
  this.no=0;
  this.productslist = null;
  this.productsloading = true;  
  const apiUrl = `${baseURL + 'AdminSeller/ProductsList?s='}${this.slrId}&c=${this.catId}&no=${n}`;
  this.commenservice.commenDataList(apiUrl).subscribe({
    next: (data) => {
      this.productslist = data;      
      //this.totalCount = this.totalCount+this.productslist.length;
      this.onScroll();      
      this.productsloading = false;
    },   
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

  //delete the category data 
  deletecategory(id: any) {
    this.slrservice.deleteProduct(id).subscribe({
      next: (res) => {   
        this.prdlist();
        //this.isdel=false;     
      },      
    });
  }
  
  //  //get the list from Sellers by Products  
  //  private prdlist() {
  //   this.productslist = null;
  //   this.productsloading = true;
  //   this.prdservice.slrProductslist().subscribe({
  //     next: (data: any) => {
  //       this.productslist = data;            
  //       this.productsloading = false;              
  //     },
  //   });
  // }
}

