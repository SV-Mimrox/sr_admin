import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sellersublist',
  templateUrl: './sellersublist.component.html',
  styleUrls: ['./sellersublist.component.css']
})
export class SellersublistComponent {
  searchString ="" 
  @Input() spmlist:any[] = []  
  @Input() editurl:any  
  @Input() isdelete =true;
  @Output() onDelete = new EventEmitter<any>();  
  
  delete(id:any){    
    this.onDelete.emit(id);
  }
}
