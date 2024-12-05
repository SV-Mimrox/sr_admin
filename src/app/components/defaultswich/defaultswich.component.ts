import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-defaultswich',
  templateUrl: './defaultswich.component.html',
  styleUrls: ['./defaultswich.component.css']
})
export class DefaultswichComponent {
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
