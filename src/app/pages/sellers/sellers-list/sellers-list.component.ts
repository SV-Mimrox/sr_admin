import { Component } from '@angular/core';
import { SellersService } from 'src/app/services/sellers.service';
import { environment } from 'src/environments/environment';

//add api Url
const baseURL = environment.apiUrl;

@Component({
  selector: 'app-sellers-list',
  templateUrl: './sellers-list.component.html',
  styleUrls: ['./sellers-list.component.css']
})
export class SellersListComponent {


  sellerlist:any
  slrlistloading:any
  no=0;
  editurl=environment.sellersEdit;
  isdel = false;
  constructor(public sellerservice:SellersService,public commenservice:SellersService ){
    this.slrlist();
  }

   //scroll
   onScroll(){
    
    setTimeout(()=>{
      //this.slrlistloading=true;
      this.no=this.no+1;      
      const apiUrl = `${baseURL + 'AdminSeller/List?no='}${this.no}`;
    this.commenservice.commenDataList(apiUrl).subscribe({
      next: (data:any) => {
        this.sellerlist = [...this.sellerlist,...data];       
        //this.totalCount = this.sellerlist.length;         
        this.slrlistloading=false;
      },     
    });
    }, 0);    
  }

  //get the list from list from sellers
 private slrlist() {
  let n=0;
  this.sellerlist = null;
  this.slrlistloading = true;  
  const apiUrl = `${baseURL + 'AdminSeller/List?no='}${n}`;
  this.commenservice.commenDataList(apiUrl).subscribe({
    next: (data) => {
      this.sellerlist = data;  
     // console.log('seller',this.sellerlist)    
      //this.totalCount = this.totalCount+this.sellerlist.length;
      this.onScroll();      
      this.slrlistloading = false;
    },   
  });
  
}

    //get the list from sellers
    // private slrlist() {
    //   this.sellerlist = null;
    //   this.slrlistloading = true;
    //   this.sellerservice.listSellers().subscribe({
    //     next: (data: any) => {
    //       this.sellerlist = data;              
    //       this.slrlistloading = false;              
    //     },
    //   });
    // }

     //delete the seller data 
   deleteseller(id: any) {
    this.sellerservice.deleteSeller(id).subscribe({
      next: (res) => {   
        this.slrlist();
       // this.isdel=false;     
      },      
    });
  }
}
