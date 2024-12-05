import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TypesService } from 'src/app/services/types.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-business-type-create',
  templateUrl: './business-type-create.component.html',
  styleUrls: ['./business-type-create.component.css']
})
export class BusinessTypeCreateComponent {

  businesstypelisturl = "/"+environment.businesstypeList
  
  adminId: any;
  btmTitle :any
  btmSeqNo :any   
  
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
    public typeservice: TypesService,
    private router: Router
  ) {
           
    this.seqnolist();
   
  }
 

  //get Seq no   
   seqnolist() {    
    this.typeservice.getSeqno().subscribe({
      next: (data: any) => {    
        this.btmSeqNo = data               
      },      
    });
  } 

  //post for BusinessType Create
  onSubmit(form: NgForm) {
    this.errorCount = 0;

    //Name validation
    if (this.btmTitle == undefined) {
      this.errorCount++;
      this.nameMessage = 'Please enter name';
    } else {
      if (this.btmTitle.trim() == '') {
        this.errorCount++;
        this.nameMessage = 'Please enter valid name';
      } else {       
          this.nameMessage = '';       
      }
    }

    //Seq No validation
    if (this.btmSeqNo == undefined) {
      this.errorCount++;
      this.seqnoMessage = 'Please enter seq no';
    }else {
        if (this.btmSeqNo <= 0 )  {
          this.errorCount++;
          this.seqnoMessage = 'Invalid seq no';
        }else {
          this.seqnoMessage = '';
        }      
    }
        
    if (this.errorCount == 0) {
      this.adminId = localStorage.getItem('userId');

      this.typeservice.type.adminId = this.adminId;
      this.typeservice.type.btmTitle = this.btmTitle;
      this.typeservice.type.btmSeqNo = this.btmSeqNo;      

      //loading condition start
      if (this.loading == false) {
        this.loading = true;

        //start BusinessType create service
        this.typeservice.createType().subscribe((res) => {
          this.response = res;

          if (this.response != 'Success') {
            this.mes = this.response;
            this.loading = false;
          } else {
            this.loading = false;
            this.typeservice.type.btmTitle = '';
            this.typeservice.type.btmSeqNo = '';           
            this.router.navigate([environment.businesstypeList]);
          }
        });
      }
    }
  }
}
