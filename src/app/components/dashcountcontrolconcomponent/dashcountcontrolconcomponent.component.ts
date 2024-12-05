import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashcountcontrolconcomponent',
  templateUrl: './dashcountcontrolconcomponent.component.html',
  styleUrls: ['./dashcountcontrolconcomponent.component.css']
})
export class DashcountcontrolconcomponentComponent {
  @Input() name="";
  @Input() count="";
}
