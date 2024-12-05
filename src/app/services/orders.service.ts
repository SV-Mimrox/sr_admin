import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrderSearch } from '../models/orders.model';

//add api Url
const baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) {}

   //add model   
   ordSearch: OrderSearch = new OrderSearch();

   //Order Search api
  ordsearch() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });    
    
    return this.http.post(baseURL + 'AdminCustomer/Search', this.ordSearch, {
      headers: httpheaders,
    });
  }
   
}
