import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Paymentgetaway } from '../models/paymentgetaway.model';

//add api Url
const baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PaymantgetawayservicesService {

  constructor(private http: HttpClient) { }

//add model
Paymentgetaway: Paymentgetaway = new Paymentgetaway(); 

 //get paymentgateway list
 listPaymentgateway() {
  //add httpheaders
  const httpheaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
  });
  
  return this.http.get(`${baseURL + 'AdminPaymentGetaway/List'}`, {
    headers: httpheaders,
  });
}

//post paymentgateway api
createPaymenygetway() {
  
  //add httpheaders
  const httpheaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
  });    
  return this.http.post(baseURL + 'AdminPaymentGetaway/Create', this.Paymentgetaway, {
    headers: httpheaders,
  });
}

//post paymentgateway api
updatePaymenygetway() {
  
  //add httpheaders
  const httpheaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
  });    
  return this.http.post(baseURL + 'AdminPaymentGetaway/Edit', this.Paymentgetaway, {
    headers: httpheaders,
  });
}


//get  paymenygateway api with Id
getPaymenygateway(id: any) {

  //add httpheaders
  const httpheaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
  });

  return this.http.get(`${baseURL + 'AdminPaymentGetaway/Details?id='}${id}`, {
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
  this.Paymentgetaway.PGMId = id
  this.Paymentgetaway.adminId=localStorage.getItem('userId');
  
  return this.http.post(baseURL + 'AdminPaymentGetaway/Delete', this.Paymentgetaway, {
    headers: httpheaders,
  });
}



//get sellersubcrtion list
listsellersubscrtion() {
  //add httpheaders
  const httpheaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
  });
  
  return this.http.get(`${baseURL + 'AdminSubscriptionPlan/UserSubscrition'}`, {
    headers: httpheaders,
  });
}
}

