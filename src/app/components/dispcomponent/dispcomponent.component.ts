import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dispcomponent',
  templateUrl: './dispcomponent.component.html',
  styleUrls: ['./dispcomponent.component.css']
})
export class DispcomponentComponent {

  searchString ="" 
  @Input() DisPlist:any[] = []    
  @Input() detailsturl:any 
  @Input() isdelete =true;
 
}
