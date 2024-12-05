import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sellersubloader',
  templateUrl: './sellersubloader.component.html',
  styleUrls: ['./sellersubloader.component.css']
})
export class SellersubloaderComponent {
  @Input() loderarry:any[] = [{name:1},{name:2},{name:3},{name:4},{name:5},{name:6}]
}
