import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SellersService } from 'src/app/services/sellers.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sellers-category',
  templateUrl: './sellers-category.component.html',
  styleUrls: ['./sellers-category.component.css']
})
export class SellersCategoryComponent {

  loading = false;
  catslrList:any
  catname:any;
  imgeUrl = environment.cdnUrl + 'Catalogue';

  constructor(
    public sellerservice:SellersService,
    private router: Router,
    private route: ActivatedRoute){
    this.getcatslr(this.route.snapshot.params['id']);
  }

   // get the record particular category
   getcatslr(id: any) {
    this.loading = true 
    
    this.sellerservice.catSeller(id).subscribe({
      next: (data: any) => {
        this.catslrList = data
        this.catname = data[0].catalogueSlug          
          this.loading = false      
      },      
    });
  }

   //delete the category data 
   deletecategory(id: any) {
    this.sellerservice.deleteCategory(id).subscribe({
      next: (res) => {   
        this.getcatslr(this.route.snapshot.params['id']);
        //this.isdel=false;     
      },      
    });
  }
}
