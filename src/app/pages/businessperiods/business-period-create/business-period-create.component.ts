import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PeriodsService } from 'src/app/services/periods.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-business-period-create',
  templateUrl: './business-period-create.component.html',
  styleUrls: ['./business-period-create.component.css']
})
export class BusinessPeriodCreateComponent {
  
  businessperiodlisturl = "/"+environment.businessperiodList
  adminId: any;
  bpmTitle: any;      
  bpmSeqNo: any;  
  loading = false;
  nameMessage: any;
  seqnoMessage: any;
  mes: any;
  response: any;
  errorCount = 0;      
  @Input() Isshowinput = true;
  @Input() Isshowlabeluploadfile = true;
  @Input() Isshowfileupload = true;
  constructor(
    public periodservice: PeriodsService,
    private router: Router
  ) {        
    this.seqnolist();
  }
 

  //get Seq no   
   seqnolist() {    
    this.periodservice.getSeqno().subscribe({
      next: (data: any) => {    
        this.bpmSeqNo = data               
      },      
    });
  } 

  //post for businessperiod Create
  onSubmit(form: NgForm) {
    this.errorCount = 0;
    //Name validation
    if (this.bpmTitle == undefined) {
      this.errorCount++;
      this.nameMessage = 'Please enter name';
    } else {
      if (this.bpmTitle.trim() == '') {
        this.errorCount++;
        this.nameMessage = 'Please enter valid name';
      } else {       
          this.nameMessage = '';       
      }
    }

    //Seq No validation
    if (this.bpmSeqNo == undefined) {
      this.errorCount++;
      this.seqnoMessage = 'Please enter seq no';
    }else {
        if (this.bpmSeqNo <= 0 )  {
          this.errorCount++;
          this.seqnoMessage = 'Invalid seq no';
        }else {
          this.seqnoMessage = '';
        }      
    }
        
    if (this.errorCount == 0) {
      this.adminId = localStorage.getItem('userId');
      this.periodservice.prd.adminId = this.adminId;
      this.periodservice.prd.bpmTitle = this.bpmTitle;
      this.periodservice.prd.bpmSeqNo = this.bpmSeqNo;      

      //loading condition start
      if (this.loading == false) {
        this.loading = true;
        //start businessperiod create service
        this.periodservice.createPeriod().subscribe((res) => {
          this.response = res;
          if (this.response != 'Success') {
            this.mes = this.response;
            this.loading = false;
          } else {
            this.loading = false;
            this.periodservice.prd.bpmTitle = '';
            this.periodservice.prd.bpmSeqNo = '';           
            this.router.navigate([environment.businessperiodList]);
          }
        });
      }
    }
  }
}
