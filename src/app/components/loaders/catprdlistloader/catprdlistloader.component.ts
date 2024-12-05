import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catprdlistloader',
  templateUrl: './catprdlistloader.component.html',
  styleUrls: ['./catprdlistloader.component.css']
})
export class CatprdlistloaderComponent {
  @Input() loderarry:any[] = [{name:1},{name:2},{name:3},{name:4},{name:5}]
}
