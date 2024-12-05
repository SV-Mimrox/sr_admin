import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tablecomponent',
  templateUrl: './tablecomponent.component.html',
  styleUrls: ['./tablecomponent.component.css']
})
export class TablecomponentComponent {

  searchString ="" 
  @Input() tablelist:any[] = []  
  @Input() editurl:any
  @Input() column2Text:any
  @Input() isdelete =true;
  @Output() onDelete = new EventEmitter<any>();  
  
  delete(id:any){    
    this.onDelete.emit(id);
  }
}
