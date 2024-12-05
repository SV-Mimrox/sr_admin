import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SellOptions } from '../models/sell-options.model';

//add api Url
const baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class SellOptionsService {

  constructor(private http: HttpClient) {}

  //add model
  som: SellOptions = new SellOptions();

   //get SellOption SeqNo 
   getSeqno() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminSellOption/GetSeqNo'}`, {
      headers: httpheaders,
    });
  }

  //get SellOption list
  listselloption() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminSellOption/CommonList'}`, {
      headers: httpheaders,
    });
  }

  //post SellOption api
  createSellOption() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.post(baseURL + 'AdminSellOption/Create', this.som, {
      headers: httpheaders,
    });
  }

   //get  SellOption api with Id
   getSellOption(id: any) {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });

    return this.http.get(`${baseURL + 'AdminSellOption/GetDetail?id='}${id}`, {
      headers: httpheaders,
    });
  }

  //edit SellOption api with Id
  editSellOption() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.post(baseURL + 'AdminSellOption/Edit', this.som, {
      headers: httpheaders,
    });
  }

   //delete SellOption api with Id
   deleteSellOption(id: any) {
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers':
        "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    this.som.Id = id
    return this.http.post(baseURL + 'AdminSellOption/Delete?Id=', this.som, {
      headers: httpheaders,
    });
  }
}
