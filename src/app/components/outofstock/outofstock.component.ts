import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-outofstock',
  templateUrl: './outofstock.component.html',
  styleUrls: ['./outofstock.component.css']
})
export class OutofstockComponent {
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
