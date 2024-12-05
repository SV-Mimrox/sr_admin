import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DisputesubjectService } from 'src/app/services/disputesubject.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-disputesubject-list',
  templateUrl: './disputesubject-list.component.html',
  styleUrls: ['./disputesubject-list.component.css']
})
export class DisputesubjectListComponent {

   
   disSubjectcreateurl = "/"+ environment.DisputeSubjectCreate;
   disSubjectediturl = "/"+environment.DisputeSubjectEdit;

   dsmlist: any;
   dsmlistloading = true;
   isdel = false;
 
   constructor(
     public disSubService: DisputesubjectService,
     private router : Router
     ) {
     this.dsmSublist();
   }
 
   //get the list from Dispute Subject
   private dsmSublist() {
     this.dsmlist = null;
     this.dsmlistloading = true;
     this.disSubService.listDisSubject().subscribe({
       next: (data: any) => {        
         this.dsmlist = data;                      
         this.dsmlistloading = false;              
       },
     });
   }
 
    //delete the Dispute Subject data 
    deletedisSubject(id: any) {
     this.disSubService.deleteDispSubject(id).subscribe({
       next: (res) => {   
         this.dsmSublist();      
         this.isdel = false;
       },      
     });
   }
  

}
