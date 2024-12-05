import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Disputesubject } from '../models/disputesubject.model';


//add api Url
const baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DisputesubjectService {

  constructor(private http: HttpClient) {}

   //add model
   Dispute: Disputesubject = new Disputesubject();  

    //get Active Dispute Subject list
    ActivelistTaxhead() {
           
    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminDisputeSubject/ActiveList'}`, {
      headers: httpheaders,
    });
  }

   //get Dispute Subject list
  listDisSubject() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminDisputeSubject/List'}`, {
      headers: httpheaders,
    });
  }

  //post Dispute Subject api
  createDisSubject() {
    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.post(baseURL + 'AdminDisputeSubject/Add', this.Dispute, {
      headers: httpheaders,
    });
  }

   //get  Dispute Subject api with Id
   getDisSubject(id: any) {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });

    return this.http.get(`${baseURL + 'AdminDisputeSubject/Details?id='}${id}`, {
      headers: httpheaders,
    });
  }

  //edit Dispute Subject api with Id
  editDisSubject() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.post(baseURL + 'AdminDisputeSubject/Edit', this.Dispute, {
      headers: httpheaders,
    });
  }

   //delete Dispute Subject api with Id
   deleteDispSubject(id: any) {
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers':
        "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    this.Dispute.id = id
    return this.http.post(baseURL + 'AdminDisputeSubject/Delete?Id=', this.Dispute, {
      headers: httpheaders,
    });
  }
}
