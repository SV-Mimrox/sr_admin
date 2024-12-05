import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DisputesubjectService } from 'src/app/services/disputesubject.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-disputesubject-edit',
  templateUrl: './disputesubject-edit.component.html',
  styleUrls: ['./disputesubject-edit.component.css']
})
export class DisputesubjectEditComponent {

  disSubjectlisturl = "/"+environment.DisputeSubjectList
  
  id: any;
  adminId:any
  dsmTitle:any
  dsmIsActive:any

  errorCount = 0;
  edidsmnameMessage: any;  
  mes: any;
  response: any;
  dsmloading = false;
  

  constructor(
    public disSubService: DisputesubjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getDsm(this.route.snapshot.params['id']);
  }

 

  // get the record particular Dispute Subject
  getDsm(id: any) {
    this.dsmloading = true;
    this.id = id;
    this.disSubService.getDisSubject(id).subscribe({
      next: (data: any) => {
        
          this.dsmTitle = data.dsmTitle,          
          this.dsmIsActive = data.dsmIsActive   
          this.dsmloading =false;      
      },      
    });
  }

  //post for Dispute Subject edit
  onSubmit(form: NgForm) {
    this.errorCount = 0;
    
    //Name validation
    if (this.dsmTitle == undefined) {
      this.errorCount++;
      this.edidsmnameMessage = 'Please enter dispute subject';
    } else {
      if (this.dsmTitle.trim() == '') {
        this.errorCount++;
        this.edidsmnameMessage = 'Please enter valid dispute subject';
      } else {        
          this.edidsmnameMessage = '';        
      }
    }
   

    if (this.errorCount == 0) {
      this.adminId = localStorage.getItem('userId');
      this.disSubService.Dispute.id = this.id;
      this.disSubService.Dispute.adminId = this.adminId;
      this.disSubService.Dispute.dsmTitle = this.dsmTitle;
      this.disSubService.Dispute.dsmIsActive = this.dsmIsActive;      
      
      //loading condition start
      if (this.dsmloading == false) {
        this.dsmloading = true;

        //start Dispute Subject edit service
        this.disSubService.editDisSubject().subscribe((res) => {                    
          this.response = res;
          if (this.response != 'Success') {
            this.mes = this.response;
            this.dsmloading = false;
          } else {
            this.dsmloading = false;
            this.disSubService.Dispute.dsmTitle = '';            
            this.router.navigate([environment.DisputeSubjectList]);
          }
        });
      }
    }
  }
}
