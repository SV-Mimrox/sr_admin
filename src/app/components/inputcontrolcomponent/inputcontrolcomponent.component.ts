import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inputcontrolcomponent',
  templateUrl: './inputcontrolcomponent.component.html',
  styleUrls: ['./inputcontrolcomponent.component.css']
})
export class InputcontrolcomponentComponent {

  @Input() type="";
  @Input() class="";
  @Input() placeholder="";
  @Input() value="";
  @Input() grid="";
  @Input() inputModel: any; 
  @Output() inputModelChange = new EventEmitter<string>();
  @Input() errmsg="";
  @Input() minVal:any;

  textChange(){  
    this.inputModelChange.emit(this.inputModel);  
   
  }  
}
