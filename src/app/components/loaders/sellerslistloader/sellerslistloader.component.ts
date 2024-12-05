import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sellerslistloader',
  templateUrl: './sellerslistloader.component.html',
  styleUrls: ['./sellerslistloader.component.css']
})
export class SellerslistloaderComponent {
  @Input() loderarry:any[] = [{name:1},{name:2},{name:3},{name:4},{name:5},{name:6},{name:7},{name:8},{name:9},{name:10},{name:11},{name:12}]
}
