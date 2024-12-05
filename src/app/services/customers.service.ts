import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

//add api Url
const baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) {}

   //get Customers list 
   commenDataList(apiUrl:any) {
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
       Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });    
    return this.http.get(apiUrl, {
      headers: httpheaders,
    });
  }

   //get Customers orderDetail  list
   detailOrder(id:any) {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminCustomer/OrderDetails?id='}${id}`, {
      headers: httpheaders,
    });
  }
}
