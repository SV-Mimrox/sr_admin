import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DisputeService } from 'src/app/services/dispute.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dispute-details',
  templateUrl: './dispute-details.component.html',
  styleUrls: ['./dispute-details.component.css']
})

export class DisputeDetailsComponent {

  displisturl = "/"+environment.DisputeList
  
  headId:any;
  message:any;
  messageType="-";
  dispmsgList:any;
  dispHeadList:any;
  errorCount = 0;
  response:any;
  disploading = false;

  constructor(
    public dispService: DisputeService,
    private router: Router,
    private route: ActivatedRoute
    ){
      this.getDsmHead(this.route.snapshot.params['id']);
      this.getDsm(this.route.snapshot.params['id']);
    }

  //Close ticket for Dispute  
  cancelTicket(id:any){
    this.dispService.dispCancelTicket(id).subscribe({
      next: (res) => {
        this.getDsmHead(this.route.snapshot.params['id']);
        this.getDsm(this.route.snapshot.params['id']);
      },
    });
  }

  // get the record particular Dispute HeadDetails 
  getDsmHead(id: any) {
    this.disploading = true;
    this.headId = id;
    this.dispService.getDispHead(id).subscribe({
      next: (data: any) => {
        this.dispHeadList = data;
          this.disploading =false;      
      },      
    });
  }

   // get the record particular Dispute 
   getDsm(id: any) {
    this.disploading = true;
    this.headId = id;
    this.dispService.getDisp(id).subscribe({
      next: (data: any) => {
        this.dispmsgList = data;
        this.disploading =false;
      },
    });
  }

   //post for Dispute msg Create
   onSubmit(form: NgForm) {
    if(this.message != "" && this.message != undefined){
      this.errorCount = 0;
      if (this.errorCount == 0) {
        this.dispService.Disp.headId = this.headId;
        this.dispService.Disp.message = this.message;
        this.dispService.Disp.messageType = this.messageType;
        
        //loading condition start
        if (this.disploading == false) {
          this.disploading = true;
          
          //start Dispute msg create service
          this.dispService.sendMsgDisp().subscribe((res) => {
            this.response = res;
            if (this.response != 'Success') {
              this.disploading = false;
            }
            else
            {
              this.disploading = false;
              this.dispService.Disp.message = '';
              this.message = " ";
              this.getDsm(this.route.snapshot.params['id']);
            }
          });
        }
      }
    }
  }
}
