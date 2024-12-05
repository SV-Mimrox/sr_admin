import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DisputeService } from 'src/app/services/dispute.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dispute-list',
  templateUrl: './dispute-list.component.html',
  styleUrls: ['./dispute-list.component.css']
})
export class DisputeListComponent {

  
  dispediturl = "/"+environment.DisputeEdit;
  dispdetailsurl = "/"+environment.DisputeDetails;

  displist: any;
  displistloading = true;
  isdel = false;

  constructor(
    public dispService: DisputeService,
    private router : Router
    ) {
    this.disPList();
  }

  //get the list from Dispute 
  private disPList() {
    this.displist = null;
    this.displistloading = true;
    this.dispService.listDisp().subscribe({
      next: (data: any) => {        
        this.displist = data;                        
        this.displistloading = false;              
      },
    });
  }

  
}
