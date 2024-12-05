import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TexheadService } from 'src/app/services/texhead.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-texhead-list',
  templateUrl: './texhead-list.component.html',
  styleUrls: ['./texhead-list.component.css']
})
export class TexheadListComponent {

  taxheadcreateurl = "/"+ environment.taxheadCreate;
  taxheadediturl = "/"+environment.taxheadEdit;

  taxHeadlist: any;
  taxlistloading = true;
  isdel = false;

  constructor(
    public taxheadservice: TexheadService,
    private router : Router
    ) {
    this.taxlist();
  }

  //get the list from Tax Head
  private taxlist() {
    this.taxHeadlist = null;
    this.taxlistloading = true;
    this.taxheadservice.listTaxhead().subscribe({
      next: (data: any) => {        
        this.taxHeadlist = data;              
        this.taxlistloading = false;              
      },
    });
  }

   //delete the tax Head data 
   deletetaxHead(id: any) {
    this.taxheadservice.deleteTaxhead(id).subscribe({
      next: (res) => {   
        this.taxlist();      
        this.isdel = false;
      },      
    });
  }
}
