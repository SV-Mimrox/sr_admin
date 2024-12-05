import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tableloader',
  templateUrl: './tableloader.component.html',
  styleUrls: ['./tableloader.component.css']
})
export class TableloaderComponent {

  @Input() loadercol2Text:any
}
