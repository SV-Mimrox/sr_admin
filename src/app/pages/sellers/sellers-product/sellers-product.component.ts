import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SellersService } from 'src/app/services/sellers.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sellers-product',
  templateUrl: './sellers-product.component.html',
  styleUrls: ['./sellers-product.component.css']
})
export class SellersProductComponent {

  loading = false;
  prdslrList:any
  slrname:any
  imgeUrl = environment.cdnUrl + 'Product';

  constructor(
    public sellerservice:SellersService,
    private router: Router,
    private route: ActivatedRoute){
    this.getprdslr(this.route.snapshot.params['id']);
  }

   // get the record particular product
   getprdslr(id: any) {
    this.loading = true 
    
    this.sellerservice.prdSeller(id).subscribe({
      next: (data: any) => {
        this.prdslrList = data
        this.slrname = data[0].catalogueSlug         
          this.loading = false      
      },      
    });
  }

    //delete the category data 
  deletecategory(id: any) {
    this.sellerservice.deleteProduct(id).subscribe({
      next: (res) => {   
        this.getprdslr(this.route.snapshot.params['id']);
        //this.isdel=false;     
      },      
    });
  }
}
