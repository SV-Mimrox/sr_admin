import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-searchdropdowncontrolconcomponent',
  templateUrl: './searchdropdowncontrolconcomponent.component.html',
  styleUrls: ['./searchdropdowncontrolconcomponent.component.css']
})
export class SearchdropdowncontrolconcomponentComponent {

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
  @Input() defaultValue="-";




  //get dropdown id onchange event
    onchange(){    
    this.selectedvalue.emit(this.defaultValue);    
  }
}
