import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customerloader',
  templateUrl: './customerloader.component.html',
  styleUrls: ['./customerloader.component.css']
})
export class CustomerloaderComponent {
  @Input() loderarry:any[] = [{name:1},{name:2},{name:3},{name:4},{name:5},{name:6}]
}
