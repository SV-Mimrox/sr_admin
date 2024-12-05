import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-headerdropdowncomponent',
  templateUrl: './headerdropdowncomponent.component.html',
  styleUrls: ['./headerdropdowncomponent.component.css']
})
export class HeaderdropdowncomponentComponent {
  userName = localStorage.getItem('user')
  //settingsurl = "/" +environment.settings
  
  data :any[] = [
    {
      username :'Bradd Haddin',
      userrole :'Super Admin',
      profile:'/assets/images/profile-img.jpg'},    
  ];
}
