import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-isonline',
  templateUrl: './isonline.component.html',
  styleUrls: ['./isonline.component.css']
})
export class IsonlineComponent {
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
