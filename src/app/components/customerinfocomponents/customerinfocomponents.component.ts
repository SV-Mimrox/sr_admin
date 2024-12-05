import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customerinfocomponents',
  templateUrl: './customerinfocomponents.component.html',
  styleUrls: ['./customerinfocomponents.component.css']
})
export class CustomerinfocomponentsComponent {

  @Input() class="";
  @Input() cusinfo:any
}
