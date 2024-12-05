import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CountryService } from 'src/app/services/country.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {

  countrycreateurl = "/" +environment.countryCreate
  countryediturl  = "/"+environment.countryEdit

  countrylist: any;
  cntlistloading = true;
  isdel = false;

  constructor(
    public countryservice: CountryService,
    private router : Router
    ) {
    this.cntlist();
  }

  //get the list from country
  private cntlist() {
    this.countrylist = null;
    this.cntlistloading = true;
    this.countryservice.listCountry().subscribe({
      next: (data: any) => {
        
        this.countrylist = data;        
        this.cntlistloading = false;
              
      },
    });
  }
   //delete the country data 
   deletecountry(id: any) {
    this.countryservice.deleteCountry(id).subscribe({
      next: (res) => {   
        this.cntlist();      
        this.isdel = false;
      },      
    });
  }
}
