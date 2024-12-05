import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Types } from '../models/types.model';

//add api Url
const baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(private http: HttpClient) {}

  //add model
  type: Types = new Types();

   //get Type SeqNo 
   getSeqno() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminBusinessType/GetSeqNo'}`, {
      headers: httpheaders,
    });
  }

  //get Type list
  listtype() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminBusinessType/CommonList'}`, {
      headers: httpheaders,
    });
  }

  //post type api
  createType() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.post(baseURL + 'AdminBusinessType/Create', this.type, {
      headers: httpheaders,
    });
  }

   //get  Type api with Id
   getType(id: any) {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });

    return this.http.get(`${baseURL + 'AdminBusinessType/GetDetail?id='}${id}`, {
      headers: httpheaders,
    });
  }

  //edit Type api with Id
  editType() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.post(baseURL + 'AdminBusinessType/Edit', this.type, {
      headers: httpheaders,
    });
  }

   //delete Type api with Id
   deleteType(id: any) {
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers':
        "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    this.type.Id = id
    return this.http.post(baseURL + 'AdminBusinessType/Delete?Id=', this.type, {
      headers: httpheaders,
    });
  }
}
