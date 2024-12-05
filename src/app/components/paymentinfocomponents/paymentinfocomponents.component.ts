import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paymentinfocomponents',
  templateUrl: './paymentinfocomponents.component.html',
  styleUrls: ['./paymentinfocomponents.component.css']
})
export class PaymentinfocomponentsComponent {

  @Input() class="";
  @Input() payinfo:any
}
