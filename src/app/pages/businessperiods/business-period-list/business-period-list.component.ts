import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeriodsService } from 'src/app/services/periods.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-business-period-list',
  templateUrl: './business-period-list.component.html',
  styleUrls: ['./business-period-list.component.css']
})
export class BusinessPeriodListComponent {

  businessperiodcreateurl = "/" +environment.businessperiodCreate
  businessperiodediturl  = "/"+environment.businessperiodEdit

  periodlist: any;
  prdlistloading = true;
  isdel = false;

  constructor(
    public periodservice: PeriodsService,
    private router : Router
    ) {
    this.prdlist();
  }

  //get the list from businessperiod
  private prdlist() {
    this.periodlist = null;
    this.prdlistloading = true;
    this.periodservice.listperiod().subscribe({
      next: (data: any) => {
        this.periodlist = data;        
        this.prdlistloading = false;              
      },
    });
  }

   //delete the businessperiod data 
   deleteperiod(id: any) {
    this.periodservice.deletePeriod(id).subscribe({
      next: (res) => {   
        this.prdlist();      
        this.isdel = false;
      },      
    });
  }
}
