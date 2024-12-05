import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subscription } from '../models/subscription.model';

//add api Url
const baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) {}

   //add model
   subscription: Subscription = new Subscription();  
   

    //get Active Subscription list
    ActivelistSubscription() {
    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminSubscriptionPlan/ActiveList'}`, {
      headers: httpheaders,
    });
  }

  //get Subscription list
  listSubscription() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminSubscriptionPlan/List'}`, {
      headers: httpheaders,
    });
  }

  //post Subscription api
  createSubscription() {
    
    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });    
    return this.http.post(baseURL + 'AdminSubscriptionPlan/Create', this.subscription, {
      headers: httpheaders,
    });
  }
 

   //get  Subscription api with Id
   getSubscription(id: any) {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });

    return this.http.get(`${baseURL + 'AdminSubscriptionPlan/Details?id='}${id}`, {
      headers: httpheaders,
    });
  }

  //edit Subscription api with Id
  editSubscription() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.post(baseURL + 'AdminSubscriptionPlan/Edit', this.subscription, {
      headers: httpheaders,
    });
  }

   //delete Subscription api with Id
   deleteSubscription(id: any) {
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers':
        "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    this.subscription.id = id
    return this.http.post(baseURL + 'AdminSubscriptionPlan/Delete?Id=', this.subscription, {
      headers: httpheaders,
    });
  }

  
}
