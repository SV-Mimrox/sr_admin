import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slrcstloader',
  templateUrl: './slrcstloader.component.html',
  styleUrls: ['./slrcstloader.component.css']
})
export class SlrcstloaderComponent {
  @Input() loderarry:any[] = [{name:1},{name:2},{name:3},{name:4},{name:5},{name:6}]
}
