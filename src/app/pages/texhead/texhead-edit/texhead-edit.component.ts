import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TexheadService } from 'src/app/services/texhead.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-texhead-edit',
  templateUrl: './texhead-edit.component.html',
  styleUrls: ['./texhead-edit.component.css']
})
export class TexheadEditComponent {

  taxheadlisturl = "/"+environment.taxheadList
  
  id: any;
  adminId:any
  thmTitle:any
  thmIsActive:any  

  errorCount = 0;
  editaxnameMessage: any;  
  mes: any;
  response: any;
  taxloading = false;
  

  constructor(
    public taxHeadService: TexheadService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.gettax(this.route.snapshot.params['id']);
  }

 

  // get the record particular Tax Head
  gettax(id: any) {
    this.taxloading = true;
    this.id = id;
    this.taxHeadService.getTaxhead(id).subscribe({
      next: (data: any) => {
        
          this.thmTitle = data.thmTitle,          
          this.thmIsActive = data.thmIsActive   
          this.taxloading =false;      
      },      
    });
  }

  //post for Tax Head edit
  onSubmit(form: NgForm) {
    this.errorCount = 0;
    
    //Name validation
    if (this.thmTitle == undefined) {
      this.errorCount++;
      this.editaxnameMessage = 'Please enter name';
    } else {
      if (this.thmTitle.trim() == '') {
        this.errorCount++;
        this.editaxnameMessage = 'Please enter valid name';
      } else {        
          this.editaxnameMessage = '';        
      }
    }
   

    if (this.errorCount == 0) {
      this.adminId = localStorage.getItem('userId');
      this.taxHeadService.tax.id = this.id;
      this.taxHeadService.tax.adminId = this.adminId;
      this.taxHeadService.tax.thmTitle = this.thmTitle;
      this.taxHeadService.tax.thmIsActive = this.thmIsActive;      
      
      //loading condition start
      if (this.taxloading == false) {
        this.taxloading = true;

        //start Tax Head edit service
        this.taxHeadService.editTaxhead().subscribe((res) => {    
                
          this.response = res;
          if (this.response != 'Success') {
            this.mes = this.response;
            this.taxloading = false;
          } else {
            this.taxloading = false;
            this.taxHeadService.tax.thmTitle = '';            
            this.router.navigate([environment.taxheadList]);
          }
        });
      }
    }
  }
}
