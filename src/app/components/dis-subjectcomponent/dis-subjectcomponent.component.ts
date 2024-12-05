import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dis-subjectcomponent',
  templateUrl: './dis-subjectcomponent.component.html',
  styleUrls: ['./dis-subjectcomponent.component.css']
})
export class DisSubjectcomponentComponent {

  searchString ="" 
  @Input() DisSubjectlist:any[] = []  
  @Input() editurl:any  
  @Input() isdelete =true;
  @Output() onDelete = new EventEmitter<any>();  
  
  delete(id:any){    
    this.onDelete.emit(id);
  }
}
