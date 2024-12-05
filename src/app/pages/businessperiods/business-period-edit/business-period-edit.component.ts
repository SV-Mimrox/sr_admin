import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeriodsService } from 'src/app/services/periods.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-business-period-edit',
  templateUrl: './business-period-edit.component.html',
  styleUrls: ['./business-period-edit.component.css']
})
export class BusinessPeriodEditComponent {

  businessperiodlisturl = "/"+environment.businessperiodList
  
  Id: any;
  adminId: any;
  bpmTitle  :any
  bpmSeqNo  :any
  bpmActive :any

  errorCount = 0;
  nameMessage: any;
  seqnoMessage: any;
  
  mes: any;
  response: any;
  loading = false;
  

  constructor(
    public periodservice: PeriodsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getprd(this.route.snapshot.params['id']);
  }

 

  // get the record particular businessperiod
  getprd(id: any) {
    this.loading = true
    this.Id = id;
    this.periodservice.getPeriod(id).subscribe({
      next: (data: any) => {
          this.bpmTitle = data.bpmTitle,
          this.bpmSeqNo = data.bpmSeqNo,          
          this.bpmActive = data.bpmActive 
          this.loading = false        
      },      
    });
  }

  //post for businessperiod edit
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
    } else {
      if (this.bpmSeqNo <= 0) {
        this.errorCount++;
        this.seqnoMessage = 'Invalid seq no';
      }else {
        this.seqnoMessage = '';
      }
    }   

    if (this.errorCount == 0) {
      this.adminId = localStorage.getItem('userId');
      this.periodservice.prd.Id = this.Id;
      this.periodservice.prd.adminId = this.adminId;
      this.periodservice.prd.bpmTitle = this.bpmTitle;
      this.periodservice.prd.bpmSeqNo = this.bpmSeqNo;      
      this.periodservice.prd.bpmActive = this.bpmActive;      
      
      //loading condition start
      if (this.loading == false) {
        this.loading = true;

        //start businessperiod edit service
        this.periodservice.editPeriod().subscribe((res) => {          
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
