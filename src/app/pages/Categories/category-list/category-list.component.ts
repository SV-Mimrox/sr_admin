import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categorycreateurl = "/" +environment.categoryCreate
  categoryediturl  = "/"+environment.categoryEdit

  categorylist: any;
  catlistloading = true;
  isdel = false;
 

  constructor(
    public categoryservice: CategoriesService,
    private router : Router
    ) {
    this.catlist();
  }

 

  //get the list from category
  private catlist() {
    this.categorylist = null;
    this.catlistloading = true;
    this.categoryservice.listcategory().subscribe({
      next: (data: any) => {
        this.categorylist = data;        
        this.catlistloading = false;
              
      },
    });
  }
   //delete the category data 
   deletecategory(id: any) {
    this.categoryservice.deleteCategory(id).subscribe({
      next: (res) => {   
        this.catlist();      
        this.isdel = false;
      },      
    });
  }
}
