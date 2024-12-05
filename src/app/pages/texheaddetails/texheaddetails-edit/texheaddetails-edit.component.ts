import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';
import { TexheadService } from 'src/app/services/texhead.service';
import { TexheaddetailsService } from 'src/app/services/texheaddetails.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-texheaddetails-edit',
  templateUrl: './texheaddetails-edit.component.html',
  styleUrls: ['./texheaddetails-edit.component.css']
})
export class TexheaddetailsEditComponent {

  taxheadDetailslisturl = "/"+environment.taxheadDetailsList
  
  id: any;
  adminId:any;
  countryId="-";
  taxId="-";
  thdTitle:any;
  thdValue:any;
  thdIsActive:any 

  errorCount = 0;
  taxdropdownMessage:any
  editaxDnameMessage: any;  
  editaxDvalueMessage: any;  
  cntdropdownMessage:any;
  mes: any;
  response: any;
  taxDloading = false;
  @Input() Isshowselectbox = true;
  taxHeadlist:any
  countrylist:any

  constructor(
    public countryService:CountryService,
    public taxHeadService: TexheadService,
    public taxHeadDetailsService: TexheaddetailsService,
    private router: Router,
    private route: ActivatedRoute
  ) {    
    this.gettaxDetails(this.route.snapshot.params['id']);
    this.cntActivelist();
    this.taxlist();
  }

  //Country onchange
  onchange1(id: any) {
    this.taxHeadDetailsService.taxDetails.countryId = id;
    this.countryId = this.taxHeadDetailsService.taxDetails.countryId
  }

  //Tax onchange
  onchange(id: any) {
    this.taxHeadDetailsService.taxDetails.taxId = id;
    this.taxId = this.taxHeadDetailsService.taxDetails.taxId
  }
 

  // get the record particular Tex-Head-Details
  gettaxDetails(id: any) {
    this.taxDloading = true;
    this.id = id;
    this.taxHeadDetailsService.getTaxheadDetails(id).subscribe({
      next: (data: any) => {
          this.countryId = data.countryId
          this.taxId = data.taxId
          this.thdTitle = data.thdTitle;  
          this.thdValue   =data.thdValue;
          this.thdIsActive = data.thdIsActive;
          this.taxDloading =false;      
      },      
    });
  }

  //post for Tex-Head-Details edit
  onSubmit(form: NgForm) {
    this.errorCount = 0;

     //Country dropdown validation
     if (this.countryId == '-') {
      this.errorCount++;
      this.cntdropdownMessage = 'Please select country';
    } else {
      this.cntdropdownMessage = '';
    }

     //tax dropdown validation
     if (this.taxId == '-') {
      this.errorCount++;
      this.taxdropdownMessage = 'Please select Tax Head';
    } else {
      this.taxdropdownMessage = '';
    }
    
    //Name validation
    if (this.thdTitle == undefined) {
      this.errorCount++;
      this.editaxDnameMessage = 'Please enter name';
    } else {
      if (this.thdTitle.trim() == '') {
        this.errorCount++;
        this.editaxDnameMessage = 'Please enter valid name';
      } else {        
          this.editaxDnameMessage = '';        
      }
    }

     //Value validation
     if (this.thdValue == undefined) {
      this.errorCount++;
      this.editaxDvalueMessage = 'Please enter value';
    } else {             
          this.editaxDvalueMessage = '';             
    }
   

    if (this.errorCount == 0) {
      this.adminId = localStorage.getItem('userId');
      this.taxHeadDetailsService.taxDetails.id = this.id;
      this.taxHeadDetailsService.taxDetails.adminId = this.adminId;
      this.taxHeadDetailsService.taxDetails.countryId = this.countryId;
      this.taxHeadDetailsService.taxDetails.taxId = this.taxId;
      this.taxHeadDetailsService.taxDetails.thdTitle = this.thdTitle;
      this.taxHeadDetailsService.taxDetails.thdValue = this.thdValue;
      this.taxHeadDetailsService.taxDetails.thdIsActive = this.thdIsActive;      
      
      //loading condition start
      if (this.taxDloading == false) {
        this.taxDloading = true;

        //start Tex-Head-Details edit service
        this.taxHeadDetailsService.editTaxheadDetails().subscribe((res) => {          
          this.response = res;
          if (this.response != 'Success') {
            this.mes = this.response;
            this.taxDloading = false;
          } else {
            this.taxDloading = false;
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

   //get the Active list from tax-Head  dropdown
   private taxlist() {
    this.taxHeadlist = null;
    this.taxHeadService.ActivelistTaxhead().subscribe({
      next: (data) => {
        this.taxHeadlist = data;            
      },     
    });
  }
}
