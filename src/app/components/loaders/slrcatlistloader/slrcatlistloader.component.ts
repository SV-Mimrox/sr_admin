import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slrcatlistloader',
  templateUrl: './slrcatlistloader.component.html',
  styleUrls: ['./slrcatlistloader.component.css']
})
export class SlrcatlistloaderComponent {
  @Input() loderarry:any[] = [{name:1},{name:2},{name:3},{name:4},{name:5}]
}
