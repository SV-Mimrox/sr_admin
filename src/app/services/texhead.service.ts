import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TaxHead } from '../models/tex-head.model';

//add api Url
const baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TexheadService {

  constructor(private http: HttpClient) {}

   //add model
   tax: TaxHead = new TaxHead();  

    //get Active Tax Head list
    ActivelistTaxhead() {
           
    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminTaxHead/ActiveList'}`, {
      headers: httpheaders,
    });
  }

   //get Tax Head list
  listTaxhead() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminTaxHead/List'}`, {
      headers: httpheaders,
    });
  }

  //post Tex-Head api
  createTaxhead() {
    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.post(baseURL + 'AdminTaxHead/Add', this.tax, {
      headers: httpheaders,
    });
  }

   //get  Tex-Head api with Id
   getTaxhead(id: any) {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });

    return this.http.get(`${baseURL + 'AdminTaxHead/Details?id='}${id}`, {
      headers: httpheaders,
    });
  }

  //edit Tex-Head api with Id
  editTaxhead() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.post(baseURL + 'AdminTaxHead/Edit', this.tax, {
      headers: httpheaders,
    });
  }

   //delete Tex-Head api with Id
   deleteTaxhead(id: any) {
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers':
        "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    this.tax.id = id
    return this.http.post(baseURL + 'AdminTaxHead/Delete?Id=', this.tax, {
      headers: httpheaders,
    });
  }
}
