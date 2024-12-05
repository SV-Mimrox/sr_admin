import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DisputesubjectService } from 'src/app/services/disputesubject.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-disputesubject-create',
  templateUrl: './disputesubject-create.component.html',
  styleUrls: ['./disputesubject-create.component.css']
})
export class DisputesubjectCreateComponent {

  disSubjectlisturl = "/"+environment.DisputeSubjectList

  adminId:any
  dsmTitle:any
  
  dsmloading = false;
  dsmnameMessage: any;  
  mes: any;
  response: any;
  errorCount = 0;      
  @Input() Isshowinput = true;
  @Input() Isshowlabeluploadfile = true;
  @Input() Isshowfileupload = true;

  constructor(
    public disSubService: DisputesubjectService,
    private router: Router
  ) {
   
  }
  

  //post for Dispute Subject Create
  onSubmit(form: NgForm) {
    this.errorCount = 0;

    //Name validation
    if (this.dsmTitle == undefined) {
      this.errorCount++;
      this.dsmnameMessage = 'Please enter dispute subject';
    } else {
      if (this.dsmTitle.trim() == '') {
        this.errorCount++;
        this.dsmnameMessage = 'Please enter valid dispute subject';
      } else {       
          this.dsmnameMessage = '';       
      }
    }

    if (this.errorCount == 0) {
      this.adminId = localStorage.getItem('userId');
      this.disSubService.Dispute.adminId = this.adminId;
      this.disSubService.Dispute.dsmTitle = this.dsmTitle;
      
      //loading condition start
      if (this.dsmloading == false) {
        this.dsmloading = true;

        //start Dispute Subject create service
        this.disSubService.createDisSubject().subscribe((res) => {
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
