import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent {

  categorylisturl = "/"+environment.categoryList
  adminId: any;
  bcmTitle: any;      
  bcmSeqNo: any;  
  
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
    public categoryservice: CategoriesService,
    private router: Router
  ) {
           
    this.seqnolist();
   
  }
 

  //get Seq no   
   seqnolist() {    
    this.categoryservice.getSeqno().subscribe({
      next: (data: any) => {    
        this.bcmSeqNo = data               
      },      
    });
  } 

  //post for catalogues Create
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
    }else {
        if (this.bcmSeqNo <= 0 )  {
          this.errorCount++;
          this.seqnoMessage = 'Invalid seq no';
        }else {
          this.seqnoMessage = '';
        }      
    }
        
    if (this.errorCount == 0) {
      this.adminId = localStorage.getItem('userId');

      this.categoryservice.cat.adminId = this.adminId;
      this.categoryservice.cat.bcmTitle = this.bcmTitle;
      this.categoryservice.cat.bcmSeqNo = this.bcmSeqNo;      

      //loading condition start
      if (this.loading == false) {
        this.loading = true;

        //start category create service
        this.categoryservice.createCategory().subscribe((res) => {
          this.response = res;

          if (this.response != 'Success') {
            this.mes = this.response;
            this.loading = false;
          } else {
            this.loading = false;
            this.categoryservice.cat.bcmTitle = '';
            this.categoryservice.cat.bcmSeqNo = '';           
            this.router.navigate([environment.categoryList]);
          }
        });
      }
    }
  }
}
