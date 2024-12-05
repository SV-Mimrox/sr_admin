import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SellersService } from 'src/app/services/sellers.service';

@Component({
  selector: 'app-catprdcomponent',
  templateUrl: './catprdcomponent.component.html',
  styleUrls: ['./catprdcomponent.component.css']
})
export class CatprdcomponentComponent {

  searchString ="" 
  @Input() column1Text:any
  @Input() column2Text:any
  @Input() outofproduct:any;
  @Input() column3Text:any
  @Input() tablelist:any[] = []  
  @Input() editurl:any
  @Input() imagePath="";
  
  @Input() isdelete =true;
  @Output() onDelete = new EventEmitter<any>();
  url:any;
  
  constructor(public sellerservice:SellersService ){
    this.url = window.location.pathname; 
  }
  
   //scroll
   @Output() onscroll=new EventEmitter<any>();
   
   scroll(){
    this.onscroll.emit();
  }
  
  delete(id:any){    
    this.onDelete.emit(id);
  }

  ActiveS($event: any, id: any){
    if(this.url== "/categories"){
      this.sellerservice.sellerCategoryactivedeactive(id, $event.target.checked).subscribe({
        next: (data) => {
        //this.toastr.success("Whatsapp setup saved successfully !")
        },
      });
    }
    else{
      this.sellerservice.sellerProductactivedeactive(id, $event.target.checked).subscribe({
        next: (data) => {
        //this.toastr.success("Whatsapp setup saved successfully !")
        },
      });
    }
  }

  OutOf($event: any, id: any){
    this.sellerservice.sellerOutofStockProduct(id, $event.target.checked).subscribe({
      next: (data) => {
      //this.toastr.success("Whatsapp setup saved successfully !")
      },
    });
  }
}
