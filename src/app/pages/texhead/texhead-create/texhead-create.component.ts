import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TexheadService } from 'src/app/services/texhead.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-texhead-create',
  templateUrl: './texhead-create.component.html',
  styleUrls: ['./texhead-create.component.css']
})
export class TexheadCreateComponent {

  taxheadlisturl = "/"+environment.taxheadList

  adminId:any
  thmTitle:any
  
  taxHeadloading = false;
  taxHeadnameMessage: any;  
  mes: any;
  response: any;
  errorCount = 0;      
  @Input() Isshowinput = true;
  @Input() Isshowlabeluploadfile = true;
  @Input() Isshowfileupload = true;

  constructor(
    public taxHeadservice: TexheadService,
    private router: Router
  ) {
   
  }
  

  //post for Tax Head Create
  onSubmit(form: NgForm) {
    this.errorCount = 0;

    //Name validation
    if (this.thmTitle == undefined) {
      this.errorCount++;
      this.taxHeadnameMessage = 'Please enter name';
    } else {
      if (this.thmTitle.trim() == '') {
        this.errorCount++;
        this.taxHeadnameMessage = 'Please enter valid name';
      } else {       
          this.taxHeadnameMessage = '';       
      }
    }

    if (this.errorCount == 0) {
      this.adminId = localStorage.getItem('userId');
      this.taxHeadservice.tax.adminId = this.adminId;
      this.taxHeadservice.tax.thmTitle = this.thmTitle;
      
      //loading condition start
      if (this.taxHeadloading == false) {
        this.taxHeadloading = true;

        //start Tax Head create service
        this.taxHeadservice.createTaxhead().subscribe((res) => {
          this.response = res;
          if (this.response != 'Success') {
            this.mes = this.response;
            this.taxHeadloading = false;
          } else {
            this.taxHeadloading = false;
            this.taxHeadservice.tax.thmTitle = '';           
            this.router.navigate([environment.taxheadList]);
          }
        });
      }
    }
  }
  
}
