import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-texheadcomponent',
  templateUrl: './texheadcomponent.component.html',
  styleUrls: ['./texheadcomponent.component.css']
})
export class TexheadcomponentComponent {

  searchString ="" 
  @Input() texheadlist:any[] = []  
  @Input() editurl:any  
  @Input() isdelete =true;
  @Output() onDelete = new EventEmitter<any>();  
  
  delete(id:any){    
    this.onDelete.emit(id);
  }
}
