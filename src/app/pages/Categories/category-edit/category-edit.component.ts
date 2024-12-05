import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent {

  categorylisturl = "/"+environment.categoryList
  
  Id: any;
  adminId: any;
  bcmTitle: any;      
  bcmSeqNo: any; 
  bcmActive: any;

  errorCount = 0;
  nameMessage: any;
  seqnoMessage: any;
  
  mes: any;
  response: any;
  loading = false;
  

  constructor(
    public categoryervice: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getcat(this.route.snapshot.params['id']);
  }

 

  // get the record particular category
  getcat(id: any) {
    this.loading = true 
    this.Id = id;
    this.categoryervice.getCategory(id).subscribe({
      next: (data: any) => {
          this.bcmTitle = data.bcmTitle,
          this.bcmSeqNo = data.bcmSeqNo,          
          this.bcmActive = data.bcmActive   
          this.loading = false      
      },      
    });
  }

  //post for category edit
  onSubmit(form: NgForm) {
    this.errorCount = 0;
    
    //Name validation
    if (this.bcmTitle == undefined) {
      this.errorCount++;
      this.nameMessage = 'Please enter name';
    } else {
      if (this.bcmTitle.trim() == '') {
        this.errorCount++;
        this.nameMessage = 'Please enter valid name';
      } else {        
          this.nameMessage = '';        
      }
    }

    //Seq No validation
    if (this.bcmSeqNo == undefined) {
      this.errorCount++;
      this.seqnoMessage = 'Please enter seq no';
    } else {
      if (this.bcmSeqNo <= 0) {
        this.errorCount++;
        this.seqnoMessage = 'Invalid seq no';
      }else {
        this.seqnoMessage = '';
      }
    }   

    if (this.errorCount == 0) {
      this.adminId = localStorage.getItem('userId');
      this.categoryervice.cat.Id = this.Id;
      this.categoryervice.cat.adminId = this.adminId;
      this.categoryervice.cat.bcmTitle = this.bcmTitle;
      this.categoryervice.cat.bcmSeqNo = this.bcmSeqNo;      
      this.categoryervice.cat.bcmActive = this.bcmActive;      
      
      //loading condition start
      if (this.loading == false) {
        this.loading = true;

        //start category edit service
        this.categoryervice.editCategory().subscribe((res) => {          
          this.response = res;
          if (this.response != 'Success') {
            this.mes = this.response;
            this.loading = false;
          } else {
            this.loading = false;
            this.categoryervice.cat.bcmTitle = '';
            this.categoryervice.cat.bcmSeqNo = '';            
            this.router.navigate([environment.categoryList]);
          }
        });
      }
    }
  }
}
