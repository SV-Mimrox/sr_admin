import { Component, Input } from '@angular/core';
import { SellersService } from 'src/app/services/sellers.service';
import { environment } from 'src/environments/environment';

//add api Url
const baseURL = environment.apiUrl;

@Component({
  selector: 'app-sellers-categories',
  templateUrl: './sellers-categories.component.html',
  styleUrls: ['./sellers-categories.component.css']
})
export class SellersCategoriesComponent {
  
  categorieslist:any
  categoriesloading:any
  imgeUrl = environment.cdnUrl + 'Catalogue';
  no=0;
  
 
  //serach
  sellerlist:any  
  slrId="All";  
  @Input() Isshowselectbox = true;
  
  constructor(
    public slrservice:SellersService,
    public commenservice:SellersService
  ){
    this.seller();
    this.catlist();
  }

   //onchange serch
   onchange(name:any){
    if(name=="-")                            
    {
      this.slrId="All";
    }
    else{
      this.slrId=name;
    }      
  }

  //onserch button click
  onsearch(){             
    if(this.slrId=="All")
    {
      this.catlist();
    }
    else if(this.slrId=="-")
    {
      alert("Please select seller for search categories ");
    }
    else{
      this.catlist();
    }
    
  }

   //scroll
   onScroll(){    
    setTimeout(()=>{
      //this.slrlistloading=true;
      this.no=this.no+1;      
      const apiUrl = `${baseURL + 'AdminSeller/CategoriesList?id='}${this.slrId}&no=${this.no}`;
      this.commenservice.commenDataList(apiUrl).subscribe({
      next: (data:any) => {
        this.categorieslist = [...this.categorieslist,...data];              
        this.categoriesloading=false;
      },     
    });
    }, 0);    
  }

  //get the list from Sellers by Categories 
 private catlist() {
  let n=0;
  this.no=0;
  this.categorieslist = null;
  this.categoriesloading = true;  
  const apiUrl = `${baseURL + 'AdminSeller/CategoriesList?id='}${this.slrId}&no=${n}`;
  this.commenservice.commenDataList(apiUrl).subscribe({
    next: (data) => {
      this.categorieslist = data;                
      this.onScroll();           
      this.categoriesloading = false;
    },   
  });
}



 //get the list from seller dropdown(serch)
 private seller() {
  this.sellerlist = null;
  this.slrservice.listslr().subscribe({
    next: (data) => {
      this.sellerlist = data;      
    },     
  });
}


  //delete the category data 
  deletecategory(id: any) {
    this.slrservice.deleteCategory(id).subscribe({
      next: (res) => {   
        this.catlist();
        //this.isdel=false;     
      },      
    });
  }


  // //get the list from Sellers by Categories  
  // private catlist() {
  //   this.categorieslist = null;
  //   this.categoriesloading = true;
  //   this.catservice.slrCategorieslist().subscribe({
  //     next: (data: any) => {
  //       this.categorieslist = data;            
  //       this.categoriesloading = false;              
  //     },
  //   });
  // }

}
