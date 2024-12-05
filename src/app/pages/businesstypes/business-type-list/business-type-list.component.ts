import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TypesService } from 'src/app/services/types.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-business-type-list',
  templateUrl: './business-type-list.component.html',
  styleUrls: ['./business-type-list.component.css']
})
export class BusinessTypeListComponent {

  businesstypecreateurl = "/" +environment.businesstypeCreate
  businesstypeediturl  = "/"+environment.businesstypeEdit

  typelist: any;
  typelistloading = true;
  isdel = false;

  constructor(
    public typeservice: TypesService,
    private router : Router
    ) {
    this.typeslist();
  }

  //get the list from BusinessType
  private typeslist() {
    this.typelist = null;
    this.typelistloading = true;
    this.typeservice.listtype().subscribe({
      next: (data: any) => {
        this.typelist = data;
        this.typelistloading = false;
              
      },
    });
  }
   //delete the BusinessType data 
   deletetype(id: any) {
    this.typeservice.deleteType(id).subscribe({
      next: (res) => {   
        this.typeslist();      
        this.isdel = false;
      },      
    });
  }
}
