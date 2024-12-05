import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TaxHeaddetails } from '../models/tex-headdetails.model';

//add api Url
const baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TexheaddetailsService {

  constructor(private http: HttpClient) {}

   //add model
   taxDetails: TaxHeaddetails = new TaxHeaddetails();  

   //get Tax Head-Details list
  listTaxheadDetails() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminTaxHeadDetails/List'}`, {
      headers: httpheaders,
    });
  }

  //post Tax Head-Details api
  createTaxheadDetails() {
    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.post(baseURL + 'AdminTaxHeadDetails/Add', this.taxDetails, {
      headers: httpheaders,
    });
  }

   //get  Tax-Head-Details api with Id
   getTaxheadDetails(id: any) {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });

    return this.http.get(`${baseURL + 'AdminTaxHeadDetails/Details?id='}${id}`, {
      headers: httpheaders,
    });
  }

  //edit Tax-Head-Details api with Id
  editTaxheadDetails() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.post(baseURL + 'AdminTaxHeadDetails/Edit', this.taxDetails, {
      headers: httpheaders,
    });
  }

   //delete Tax-Head-Details api with Id
   deleteTaxheadDetails(id: any) {
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers':
        "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    this.taxDetails.id = id
    this.taxDetails.adminId = localStorage.getItem('userId');
    return this.http.post(baseURL + 'AdminTaxHeadDetails/Delete?Id=', this.taxDetails, {
      headers: httpheaders,
    });
  }
}
