import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SellOptionsService } from 'src/app/services/sell-options.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-selloption-create',
  templateUrl: './selloption-create.component.html',
  styleUrls: ['./selloption-create.component.css']
})
export class SelloptionCreateComponent {

  selloptionlisturl = "/"+environment.selloptionList
  adminId: any;
  somTitle: any;      
  somSeqNo: any;  
  
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
    public selloptionservice: SellOptionsService,
    private router: Router
  ) {           
    this.seqnolist();   
  }
 

  //get Seq no   
   seqnolist() {    
    this.selloptionservice.getSeqno().subscribe({
      next: (data: any) => {    
        this.somSeqNo = data               
      },      
    });
  } 

  //post for SellOption Create
  onSubmit(form: NgForm) {
    this.errorCount = 0;

    //Name validation
    if (this.somTitle == undefined) {
      this.errorCount++;
      this.nameMessage = 'Please enter name';
    } else {
      if (this.somTitle.trim() == '') {
        this.errorCount++;
        this.nameMessage = 'Please enter valid name';
      } else {       
          this.nameMessage = '';       
      }
    }

    //Seq No validation
    if (this.somSeqNo == undefined) {
      this.errorCount++;
      this.seqnoMessage = 'Please enter seq no';
    }else {
        if (this.somSeqNo <= 0 )  {
          this.errorCount++;
          this.seqnoMessage = 'Invalid seq no';
        }else {
          this.seqnoMessage = '';
        }      
    }
        
    if (this.errorCount == 0) {
      this.adminId = localStorage.getItem('userId');

      this.selloptionservice.som.adminId = this.adminId;
      this.selloptionservice.som.somTitle = this.somTitle;
      this.selloptionservice.som.somSeqNo = this.somSeqNo;      

      //loading condition start
      if (this.loading == false) {
        this.loading = true;

        //start SellOption create service
        this.selloptionservice.createSellOption().subscribe((res) => {
          this.response = res;

          if (this.response != 'Success') {
            this.mes = this.response;
            this.loading = false;
          } else {
            this.loading = false;
            this.selloptionservice.som.somTitle = '';
            this.selloptionservice.som.somSeqNo = '';           
            this.router.navigate([environment.selloptionList]);
          }
        });
      }
    }
  }
}
