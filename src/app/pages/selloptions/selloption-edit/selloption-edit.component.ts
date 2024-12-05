import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SellOptionsService } from 'src/app/services/sell-options.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-selloption-edit',
  templateUrl: './selloption-edit.component.html',
  styleUrls: ['./selloption-edit.component.css']
})
export class SelloptionEditComponent {

  selloptionlisturl = "/"+environment.selloptionList
  
  Id: any;
  adminId: any;
  somTitle:any 
  somSeqNo :any   
  somActive  :any 

  errorCount = 0;
  nameMessage: any;
  seqnoMessage: any;
  
  mes: any;
  response: any;
  loading = false;
  

  constructor(
    public selloptionservice: SellOptionsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getsom(this.route.snapshot.params['id']);
  }

 

  // get the record particular SellOption
  getsom(id: any) {
    this.loading =true;
    this.Id = id;
    this.selloptionservice.getSellOption(id).subscribe({
      next: (data: any) => {
          this.somTitle = data.somTitle,
          this.somSeqNo = data.somSeqNo,          
          this.somActive = data.somActive    
          this.loading = false;     
      },      
    });
  }

  //post for SellOption edit
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
    } else {
      if (this.somSeqNo <= 0) {
        this.errorCount++;
        this.seqnoMessage = 'Invalid seq no';
      }else {
        this.seqnoMessage = '';
      }
    }   

    if (this.errorCount == 0) {
      this.adminId = localStorage.getItem('userId');
      this.selloptionservice.som.Id = this.Id;
      this.selloptionservice.som.adminId = this.adminId;
      this.selloptionservice.som.somTitle = this.somTitle;
      this.selloptionservice.som.somSeqNo = this.somSeqNo;      
      this.selloptionservice.som.somActive = this.somActive;      
      
      //loading condition start
      if (this.loading == false) {
        this.loading = true;

        //start SellOption edit service
        this.selloptionservice.editSellOption().subscribe((res) => {          
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
