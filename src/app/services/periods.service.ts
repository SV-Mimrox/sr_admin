import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Periods } from '../models/periods.model';

//add api Url
const baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PeriodsService {

  constructor(private http: HttpClient) {}

  //add model
  prd: Periods = new Periods();

   //get Period SeqNo 
   getSeqno() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminBusinessPeriod/GetSeqNo'}`, {
      headers: httpheaders,
    });
  }

  //get Period list
  listperiod() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminBusinessPeriod/CommonList'}`, {
      headers: httpheaders,
    });
  }

  //post Period api
  createPeriod() {
    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.post(baseURL + 'AdminBusinessPeriod/Create', this.prd, {
      headers: httpheaders,
    });
  }

   //get  Period api with Id
   getPeriod(id: any) {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });

    return this.http.get(`${baseURL + 'AdminBusinessPeriod/GetDetail?id='}${id}`, {
      headers: httpheaders,
    });
  }

  //edit Period api with Id
  editPeriod() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.post(baseURL + 'AdminBusinessPeriod/Edit', this.prd, {
      headers: httpheaders,
    });
  }

   //delete Period api with Id
   deletePeriod(id: any) {
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers':
        "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    this.prd.Id = id
    return this.http.post(baseURL + 'AdminBusinessPeriod/Delete?Id=', this.prd, {
      headers: httpheaders,
    });
  }


}
