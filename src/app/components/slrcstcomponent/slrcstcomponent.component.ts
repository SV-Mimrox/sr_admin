import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SellersService } from 'src/app/services/sellers.service';

@Component({
  selector: 'app-slrcstcomponent',
  templateUrl: './slrcstcomponent.component.html',
  styleUrls: ['./slrcstcomponent.component.css']
})
export class SlrcstcomponentComponent {

  cstorderlisturl = "/"+ environment.customerOrdersList
  
  searchString ="" 
  @Input() column0Text:any
  @Input() column1Text:any
  @Input() column2Text:any
  @Input() column3Text:any
  @Input() tablelist:any[] = []  
  @Input() editurl:any
  @Input() imagePath="";
  
  @Input() isdelete =true;
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
         this.sellerservice.sellerCustomeractivedeactive(id, $event.target.checked).subscribe({
           next: (data) => {
          
           },
         });
       }
     
     
}
