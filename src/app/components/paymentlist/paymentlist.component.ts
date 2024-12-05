import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent {
  searchString ="" 
  @Input() spmlist:any[] = []  
  @Input() editurl:any  
  @Input() isdelete =true;
  @Output() onDelete = new EventEmitter<any>();  
  
  delete(id:any){    
    this.onDelete.emit(id);
  }
}
