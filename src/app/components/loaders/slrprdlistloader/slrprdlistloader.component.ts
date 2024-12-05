import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slrprdlistloader',
  templateUrl: './slrprdlistloader.component.html',
  styleUrls: ['./slrprdlistloader.component.css']
})
export class SlrprdlistloaderComponent {
  @Input() loderarry:any[] = [{name:1},{name:2},{name:3},{name:4},{name:5},{name:6}]
}
