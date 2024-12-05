import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  cstorderDetailurl = "/"+ environment.customerOrdersDetail
  @Input() column1Text:any
  @Input() column2Text:any
  @Input() column3Text:any
  @Input() orderType:any
  @Input() tablelist:any[] = []  
  @Input() editurl:any
  @Input() imagePath="";
  
  @Input() isdelete =true;
  @Output() onDelete = new EventEmitter<any>(); 
  
   //scroll
   @Output() onscroll=new EventEmitter<any>();
   
   scroll(){
    this.onscroll.emit();
  }
  
  delete(id:any){    
    this.onDelete.emit(id);
  }
}
