import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Dispute } from '../models/dispute.model';

//add api Url
const baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DisputeService {

  constructor(private http: HttpClient) {}

   //add model
   Disp: Dispute = new Dispute();      

  //get Dispute list
  listDisp() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminDispute/List'}`, {
      headers: httpheaders,
    });
  }
   //get  Dispute  api with Id
   getDisp(id: any) {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });

    return this.http.get(`${baseURL + 'AdminDispute/DetailList?id='}${id}`, {
      headers: httpheaders,
    });
  }
    

    //get  Dispute HeadDetails api with Id
    getDispHead(id: any) {

      //add httpheaders
      const httpheaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
      });
  
      return this.http.get(`${baseURL + 'AdminDispute/HeadDetails?id='}${id}`, {
        headers: httpheaders,
      });
    }

   //Msg post Dispute api
   sendMsgDisp() {
    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.post(baseURL + 'AdminDispute/Reply', this.Disp, {
      headers: httpheaders,
    });
  }

  //Dispute CancelTicket api with Id
  dispCancelTicket(id: any) {
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers':
        "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    this.Disp.headId = id
    this.Disp.adminId = localStorage.getItem('userId');
    return this.http.post(baseURL + 'AdminDispute/CancelTicket?Id=', this.Disp, {
      headers: httpheaders,
    });
  }
}
