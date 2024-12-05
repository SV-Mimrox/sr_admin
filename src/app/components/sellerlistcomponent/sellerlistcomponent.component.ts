import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SellersService } from 'src/app/services/sellers.service';


@Component({
  selector: 'app-sellerlistcomponent',
  templateUrl: './sellerlistcomponent.component.html',
  styleUrls: ['./sellerlistcomponent.component.css']
})
export class SellerlistcomponentComponent {

  slrCategoryurl = "/"+environment.sellersCategory
  slrProducturl = "/"+ environment.sellersProduct
  slrCustomerurl = "/"+ environment.sellerCustomer
 
  searchString ="" 
  @Input() slrtablelist:any[] = []  
  @Input() editurl:any
  @Input() isdelete =true;
  btmActive:any;
  @Output() onDelete = new EventEmitter<any>(); 
   //scroll
   @Output() onscroll=new EventEmitter<any>();

   constructor(public sellerservice:SellersService ){
    
  }
   
   scroll(){
    this.onscroll.emit();
  }
  
  delete(id:any){    
    this.onDelete.emit(id);
  }

  ActiveS($event: any, id: any){
    this.sellerservice.selleractivedeactive(id, $event.target.checked).subscribe({
      next: (data) => {
      //this.toastr.success("Whatsapp setup saved successfully !")
      },
    });

  }
}
