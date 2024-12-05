import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paymentswich',
  templateUrl: './paymentswich.component.html',
  styleUrls: ['./paymentswich.component.css']
})
export class PaymentswichComponent {
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
