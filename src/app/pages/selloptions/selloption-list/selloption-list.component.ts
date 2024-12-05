import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellOptionsService } from 'src/app/services/sell-options.service';
import { TypesService } from 'src/app/services/types.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-selloption-list',
  templateUrl: './selloption-list.component.html',
  styleUrls: ['./selloption-list.component.css']
})
export class SelloptionListComponent {

  
  selloptioncreateurl = "/" +environment.selloptionCreate
  selloptionediturl  = "/"+environment.selloptionEdit

  selloptionlist: any;
  selloptionlistloading = true;
  isdel = false;

  constructor(
    public tyservice:TypesService,
    public selloptionservice: SellOptionsService,
    private router : Router
    ) {     
    this.somlist();
  }
  

  //get the list from SellOption
  private somlist() {
    this.selloptionlist = null;
    this.selloptionlistloading = true;
    this.selloptionservice.listselloption().subscribe({
      next: (data: any) => {
        this.selloptionlist = data;        
        this.selloptionlistloading = false;              
      },
    });
  }

   //delete the SellOption data 
   deleteselloption(id: any) {
    this.selloptionservice.deleteSellOption(id).subscribe({
      next: (res) => {   
        this.somlist();      
        this.isdel = false;
      },      
    });
  }
}
