import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-orderitemcomponents',
  templateUrl: './orderitemcomponents.component.html',
  styleUrls: ['./orderitemcomponents.component.css']
})
export class OrderitemcomponentsComponent {

  @Input() orditeminfo : any
  @Input() imagePath="";
  @Input() orditemcurrency:any
  @Input() class="";
}
