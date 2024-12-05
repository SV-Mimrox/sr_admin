import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdownconcomponent',
  templateUrl: './dropdownconcomponent.component.html',
  styleUrls: ['./dropdownconcomponent.component.css']
})
export class DropdownconcomponentComponent {

  @Input()categories =[]
  @Input() filedName :any;
  @Input() fieldId :any;
  @Input() isSelected=true;

  @Output() selectedvalue=new EventEmitter<any>();
  @Input() inputModel=1;
  @Input() class="";
  @Input() catId="-";
  @Input() Isactive = true;
  @Input() dropdowntitle ="";
  @Input() dropdownerrmsg="";
  
  defaultValue="-";



  //get dropdown id onchange event
    onchange(){    
    this.selectedvalue.emit(this.catId);    
  }
}
