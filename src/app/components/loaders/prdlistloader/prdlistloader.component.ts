import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prdlistloader',
  templateUrl: './prdlistloader.component.html',
  styleUrls: ['./prdlistloader.component.css']
})
export class PrdlistloaderComponent {
  @Input() loderarry:any[] = [{name:1},{name:2},{name:3},{name:4},{name:5},{name:6}]
}
