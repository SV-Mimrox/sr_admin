import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sellermodel } from '../models/sellermodel.model';
import { Categories } from '../models/categories.model';

//add api Url
const baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class SellersService {

  constructor(private http: HttpClient) {}

    //add model
    sellermodel: Sellermodel = new Sellermodel();
    category:Categories=new Categories();

   //get Sellers list
   listSellers() {
    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminSeller/List'}`, {
      headers: httpheaders,
    });
  }


    //get Sellers ACTIVE
    selleractivedeactive(id:any,active:any) {
      //add httpheaders
      const httpheaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
      });
      
      return this.http.get(`${baseURL + 'AdminSeller/activedeactive?id='+id+"&active="+active}`, {
        headers: httpheaders,
      });
    }


     //edit seller api with Id
  editSeller() {
    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    return this.http.post(baseURL + 'AdminSeller/SellerEdit', this.sellermodel, {
      headers: httpheaders,
    });
  }




       //get Sellers category ACTIVE
       sellerCategoryactivedeactive(id:any,active:any) {
        //add httpheaders
        const httpheaders = new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
        });
        
        return this.http.get(`${baseURL + 'AdminSeller/cateloguesActive?id='+id+"&active="+active}`, {
          headers: httpheaders,
        });
      }

         //get Sellers product ACTIVE
         sellerProductactivedeactive(id:any,active:any) {
          //add httpheaders
          const httpheaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
          });
          
          return this.http.get(`${baseURL + 'AdminSeller/productsActive?id='+id+"&active="+active}`, {
            headers: httpheaders,
          });
        }

          //get Sellers out of stock product
          sellerOutofStockProduct(id:any,active:any) {
            //add httpheaders
            const httpheaders = new HttpHeaders({
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
            });
            
            return this.http.get(`${baseURL + 'AdminSeller/productsOutofstock?id='+id+"&active="+active}`, {
              headers: httpheaders,
            });
          }


         //get Sellers cutomer ACTIVE
         sellerCustomeractivedeactive(id:any,active:any) {
          //add httpheaders
          const httpheaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
          });
          
          return this.http.get(`${baseURL + 'AdminSeller/customerActive?id='+id+"&active="+active}`, {
            headers: httpheaders,
          });
        }
  

   //get Sellers by CategoriesList  
   slrCategorieslist() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminSeller/CategoriesList'}`, {
      headers: httpheaders,
    });
  }



   //get Sellers details 
   SellerDetails(id:any) {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminSeller/SellerDetails?id='+id}`, {
      headers: httpheaders,
    });
  }

  //get Sellers by ProductsList  
  slrProductslist() {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    
    return this.http.get(`${baseURL + 'AdminSeller/ProductsList'}`, {
      headers: httpheaders,
    });
  }

   //get catalogue list of particular seller
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

  //get   CategoriesList By Seller api with Id
  catSeller(id: any) {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });

    return this.http.get(`${baseURL + 'AdminSeller/CategoriesListBySeller?id='}${id}`, {
      headers: httpheaders,
    });
  }

  //get   ProductList By Seller api with Id
  prdSeller(id: any) {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });

    return this.http.get(`${baseURL + 'AdminSeller/ProductsListBySeller?id='}${id}`, {
      headers: httpheaders,
    });
  }

   //get   customerList By Seller api with Id
   cstSeller(id: any) {

    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });

    return this.http.get(`${baseURL + 'AdminSeller/CustomerListBySeller?id='}${id}`, {
      headers: httpheaders,
    });
  }

   //get seller list in dropdown
   listslr() {
    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
   
    return this.http.get(`${baseURL + 'AdminSeller/List1'}`, {
      headers: httpheaders,
    });
  }

  //get categories list in dropdown
  listcategories() {
    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
   
    return this.http.get(`${baseURL + 'AdminSeller/CategoriesList1'}`, {
      headers: httpheaders,
    });
  }

   //get products list in dropdown
   listproducts() {
    //add httpheaders
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
   
    return this.http.get(`${baseURL + 'AdminSeller/ProductsList1'}`, {
      headers: httpheaders,
    });
  }


  //delete seller api with Id
  deleteSeller(id: any) {
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers':
        "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    this.sellermodel.Id = id
    return this.http.post(baseURL + 'AdminSeller/DeleteSeller?Id=', this.sellermodel, {
      headers: httpheaders,
    });
  }

  //delete category api with Id
  deleteCategory(id: any) {
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers':
        "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    this.category.Id = id
    return this.http.post(baseURL + 'AdminSeller/Deletecategory?Id=', this.category, {
      headers: httpheaders,
    });
  }

   //delete customer api with Id
   deleteCustomer(id: any) {
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers':
        "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    this.category.Id = id
    return this.http.post(baseURL + 'AdminSeller/DeleteCustomer?Id=', this.category, {
      headers: httpheaders,
    });
  }


  //delete product api with Id
  deleteProduct(id: any) {
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers':
        "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    });
    this.category.Id = id
    return this.http.post(baseURL + 'AdminSeller/DeleteProduct?Id=', this.category, {
      headers: httpheaders,
    });
  }
}

