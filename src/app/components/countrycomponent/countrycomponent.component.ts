import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-countrycomponent',
  templateUrl: './countrycomponent.component.html',
  styleUrls: ['./countrycomponent.component.css']
})
export class CountrycomponentComponent {

  searchString ="" 
  @Input() cntlist:any[] = []  
  @Input() editurl:any
  @Input() column2Text:any
  @Input() isdelete =true;
  @Output() onDelete = new EventEmitter<any>();  
  
  delete(id:any){    
    this.onDelete.emit(id);
  }
}
