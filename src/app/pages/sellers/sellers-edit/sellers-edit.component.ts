import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SellersService } from 'src/app/services/sellers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sellers-edit',
  templateUrl: './sellers-edit.component.html',
  styleUrls: ['./sellers-edit.component.css']
})
export class SellersEditComponent {

  Id:any;
  adminId:any;
  Name:any;
  nameMessage:any;
  Email:any;
  emailMessage:any;
  Contact:any;
  ContactMessage:any;
  Active:any;
  mes:any;
  loading:any;
  sellerurl= "/"+ environment.sellersList;
  errorCount=0;
  response:any;

  constructor(public sellerservice:SellersService,  private router: Router,
    private route: ActivatedRoute){
    this.getselller(this.route.snapshot.params['id']);
  }


  getselller(id:any){
    this.loading = true 
    this.Id = id;
    this.sellerservice.SellerDetails(id).subscribe({
      next: (data: any) => {
          this.loading = false;
          this.Name=data.slrmName,
          this.Email=data.slrmEmail,
          this.Contact=data.slrmPhone,
          this.Active=data.slrActive      
      },      
    });
  }

  onSubmit(form:any){
    this.errorCount = 0;
    //Name validation
    if (this.Name == '') {
      this.errorCount++;
      this.nameMessage = 'Please enter name';
    } else {
      if (this.Name.trim() == '') {
        this.errorCount++;
        this.nameMessage = 'Please enter valid name';
      } else {        
          this.nameMessage = '';        
      }
    }

    //Contact No validation
    if (this.Contact == '') {
      this.errorCount++;
      this.ContactMessage = 'Please enter contact no';
    } else {
        this.ContactMessage = '';
    }   

    if (this.errorCount == 0) {
      this.adminId = localStorage.getItem('userId');
      this.sellerservice.sellermodel.Id = this.Id;
      //this.sellerservice.sellermodel.adminId = this.adminId;
      this.sellerservice.sellermodel.SlrmName = this.Name;
      this.sellerservice.sellermodel.SlrmEmail = this.Email;      
      this.sellerservice.sellermodel.SlrmPhone = this.Contact; 
      this.sellerservice.sellermodel.SlrActive = this.Active;      
      
      //loading condition start
      if (this.loading == false) {
        this.loading = true;
        //start seller edit service
        this.sellerservice.editSeller().subscribe((res) => {          
          this.response = res;
          if (this.response != 'Success') {
            this.mes = this.response;
            this.loading = false;
          } else {
            this.loading = false;
            this.sellerservice.sellermodel.SlrmName = '';
            this.sellerservice.sellermodel.SlrmEmail = '';            
            this.router.navigate([ "/"+environment.sellersList]);
          }
        });
      }
    }

  }
}
