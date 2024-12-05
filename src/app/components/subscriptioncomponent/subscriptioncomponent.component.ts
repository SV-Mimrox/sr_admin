import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-subscriptioncomponent',
  templateUrl: './subscriptioncomponent.component.html',
  styleUrls: ['./subscriptioncomponent.component.css']
})
export class SubscriptioncomponentComponent {

  searchString ="" 
  @Input() spmlist:any[] = []  
  @Input() editurl:any  
  @Input() isdelete =true;
  @Output() onDelete = new EventEmitter<any>();  
  
  delete(id:any){    
    this.onDelete.emit(id);
  }

}
