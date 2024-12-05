import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TexheaddetailsService } from 'src/app/services/texheaddetails.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-texheaddetails-list',
  templateUrl: './texheaddetails-list.component.html',
  styleUrls: ['./texheaddetails-list.component.css']
})
export class TexheaddetailsListComponent {

  taxheadDetailscreateurl = "/" + environment.taxheadDetailsCreate
  taxheadDetailsediturl = "/"+environment.taxheadDetailsEdit;

  taxHeadDetailslist: any;
  taxDetailslistloading = true;
  isdel = false;

  constructor(
    public taxheadDetailsService: TexheaddetailsService,
    private router : Router
    ) {
    this.taxDetailslist();
  }

  //get the list from tax head Details
  private taxDetailslist() {
    this.taxHeadDetailslist = null;
    this.taxDetailslistloading = true;
    this.taxheadDetailsService.listTaxheadDetails().subscribe({
      next: (data: any) => {
        this.taxHeadDetailslist = data;
        this.taxDetailslistloading = false;
      },
    });
  }

   //delete the tax Head Details data 
   deletetexHeadDetails(id: any) {
    this.taxheadDetailsService.deleteTaxheadDetails(id).subscribe({
      next: (res) => {
        this.taxDetailslist();
        this.isdel = false;
      },
    });
  }
}
