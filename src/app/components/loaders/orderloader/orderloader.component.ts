import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-orderloader',
  templateUrl: './orderloader.component.html',
  styleUrls: ['./orderloader.component.css']
})
export class OrderloaderComponent {
  @Input() loderarry:any[] = [{name:1},{name:2},{name:3},{name:4},{name:5},{name:6}]
  @Input() column1Text =false
}
