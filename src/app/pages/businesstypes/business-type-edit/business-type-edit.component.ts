import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypesService } from 'src/app/services/types.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-business-type-edit',
  templateUrl: './business-type-edit.component.html',
  styleUrls: ['./business-type-edit.component.css']
})
export class BusinessTypeEditComponent {

  businesstypelisturl = "/"+environment.businesstypeList
  
  Id: any;
  adminId: any;
  btmTitle :any
  btmSeqNo :any
  btmActive :any

  errorCount = 0;
  nameMessage: any;
  seqnoMessage: any;
  
  mes: any;
  response: any;
  loading = false;
  

  constructor(
    public typeservice: TypesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.gettype(this.route.snapshot.params['id']);
  }

 

  // get the record particular BusinessType
  gettype(id: any) {
    this.loading = true;
    this.Id = id;
    this.typeservice.getType(id).subscribe({
      next: (data: any) => {
          this.btmTitle = data.btmTitle,
          this.btmSeqNo = data.btmSeqNo,          
          this.btmActive = data.btmActive  
          this.loading =false;       
      },      
    });
  }

  //post for BusinessType edit
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
    } else {
      if (this.btmSeqNo <= 0) {
        this.errorCount++;
        this.seqnoMessage = 'Invalid seq no';
      }else {
        this.seqnoMessage = '';
      }
    }   

    if (this.errorCount == 0) {
      this.adminId = localStorage.getItem('userId');
      this.typeservice.type.Id = this.Id;
      this.typeservice.type.adminId = this.adminId;
      this.typeservice.type.btmTitle = this.btmTitle;
      this.typeservice.type.btmSeqNo = this.btmSeqNo;      
      this.typeservice.type.btmActive = this.btmActive;      
      
      //loading condition start
      if (this.loading == false) {
        this.loading = true;

        //start BusinessType edit service
        this.typeservice.editType().subscribe((res) => {          
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
