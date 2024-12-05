import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-texhead-detailscomponent',
  templateUrl: './texhead-detailscomponent.component.html',
  styleUrls: ['./texhead-detailscomponent.component.css']
})
export class TexheadDetailscomponentComponent {

  searchString ="" 
  @Input() texheadDetailslist:any[] = []  
  @Input() editurl:any  
  @Input() isdelete =true;
  @Output() onDelete = new EventEmitter<any>();  
  
  delete(id:any){    
    this.onDelete.emit(id);
  }
}
