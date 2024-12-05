import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';
import { TexheadService } from 'src/app/services/texhead.service';
import { TexheaddetailsService } from 'src/app/services/texheaddetails.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-texheaddetails-create',
  templateUrl: './texheaddetails-create.component.html',
  styleUrls: ['./texheaddetails-create.component.css']
})
export class TexheaddetailsCreateComponent {

  taxheadDetailslisturl = "/"+environment.taxheadDetailsList

  adminId:any
  countryId="-"
  taxId="-";
  thdTitle:any;
  thdValue:any;  
  
  taxHeadDloading = false;
  taxHeadDnameMessage: any;  
  taxHeadDvalueMessage: any; 
  cntdropdownMessage:any;
  taxdropdownMessage:any; 
  mes: any;
  response: any;
  errorCount = 0;      
  @Input() Isshowinput = true;
  @Input() Isshowlabeluploadfile = true;
  @Input() Isshowfileupload = true;
  @Input() Isshowselectbox = true;
  taxHeadlist:any
  countrylist:any

  constructor(
    public countryService:CountryService,
    public taxHeadDetailsService: TexheaddetailsService,
    public taxHeadService:TexheadService,
    private router: Router
  ) {
    this.cntActivelist();
    this.taxlist()
  }
  
  //country onchange
  onchange1(id: any) {
    this.taxHeadDetailsService.taxDetails.countryId = id;
    this.countryId = this.taxHeadDetailsService.taxDetails.countryId
  }

  //tax onchange
  onchange(id: any) {
    this.taxHeadDetailsService.taxDetails.taxId = id;
    this.taxId = this.taxHeadDetailsService.taxDetails.taxId
  }

  //post for Tax-Head-Details Create
  onSubmit(form: NgForm) {
    this.errorCount = 0;

     //Country dropdown validation
     if (this.countryId == '-') {
      this.errorCount++;
      this.cntdropdownMessage = 'Please select country';
    } else {
      this.cntdropdownMessage = '';
    }

     //Tax dropdown validation
     if (this.taxId == '-') {
      this.errorCount++;
      this.taxdropdownMessage = 'Please select tax head';
    } else {
      this.taxdropdownMessage = '';
    }

    //Name validation
    if (this.thdTitle == undefined) {
      this.errorCount++;
      this.taxHeadDnameMessage = 'Please enter name';
    } else {
      if (this.thdTitle.trim() == '') {
        this.errorCount++;
        this.taxHeadDnameMessage = 'Please enter valid name';
      } else {       
          this.taxHeadDnameMessage = '';       
      }
    }

    //Value validation
    if (this.thdValue == undefined) {
      this.errorCount++;
      this.taxHeadDvalueMessage = 'Please enter value';
    } else {
      if (this.thdValue.trim() == '') {
        this.errorCount++;
        this.taxHeadDvalueMessage = 'Please enter valid value';
      } else {       
          this.taxHeadDvalueMessage = '';       
      }
    }

    if (this.errorCount == 0) {
      this.adminId = localStorage.getItem('userId');
      this.taxHeadDetailsService.taxDetails.adminId = this.adminId;      
      this.taxHeadDetailsService.taxDetails.thdTitle = this.thdTitle;
      this.taxHeadDetailsService.taxDetails.thdValue = this.thdValue;
      
      //loading condition start
      if (this.taxHeadDloading == false) {
        this.taxHeadDloading = true;

        //start Tax-Head-Details create service
        this.taxHeadDetailsService.createTaxheadDetails().subscribe((res) => {
          this.response = res;
          if (this.response != 'Success') {
            this.mes = this.response;
            this.taxHeadDloading = false;
          } else {
            this.taxHeadDloading = false;
            this.taxHeadDetailsService.taxDetails.thdTitle = '';
            this.taxHeadDetailsService.taxDetails.thdValue = '';           
            this.router.navigate([environment.taxheadDetailsList]);
          }
        });
      }
    }
  }

   //get the Active list from Country  dropdown
   private cntActivelist() {
    this.countrylist = null;
    this.countryService.ActivelistCountry().subscribe({
      next: (data) => {
        this.countrylist = data;        
      },     
    });
  }

  //get the Active list from tax Head  dropdown
  private taxlist() {
    this.taxHeadlist = null;
    this.taxHeadService.ActivelistTaxhead().subscribe({
      next: (data) => {
        this.taxHeadlist = data;            
      },     
    });
  }
}
