import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagetitlecomponent',
  templateUrl: './pagetitlecomponent.component.html',
  styleUrls: ['./pagetitlecomponent.component.css']
})
export class PagetitlecomponentComponent {
  @Input() pagetitle="";
  @Input() count=0;
  @Input() counts=false;
  @Input() pagebreadcrumb="";
  @Input() class= "";
}
