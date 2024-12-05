import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-countryloader',
  templateUrl: './countryloader.component.html',
  styleUrls: ['./countryloader.component.css']
})
export class CountryloaderComponent {

  @Input() loadercol2Text:any
}
