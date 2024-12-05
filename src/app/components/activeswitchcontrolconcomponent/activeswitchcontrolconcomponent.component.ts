import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-activeswitchcontrolconcomponent',
  templateUrl: './activeswitchcontrolconcomponent.component.html',
  styleUrls: ['./activeswitchcontrolconcomponent.component.css']
})
export class ActiveswitchcontrolconcomponentComponent {

  @Input() inputModel:any;
  @Output() inputModelChange = new EventEmitter<string>();
  
  checkActive($event:any){
    this.inputModelChange.emit(this.inputModel);
    if($event.target.checked==true){      
      this.inputModel=true;      
    }
    else{      
      this.inputModel=false;      
    }    
  }
}
