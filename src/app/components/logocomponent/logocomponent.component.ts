import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logocomponent',
  templateUrl: './logocomponent.component.html',
  styleUrls: ['./logocomponent.component.css']
})
export class LogocomponentComponent {
  @Input() logo = "assets/images/logo.png";
  @Input() logostyle = "";
}
