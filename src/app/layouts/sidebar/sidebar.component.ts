import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor() { }
  sellerslisturl    = "/" + environment.sellersList
  categorieslisturl = "/" + environment.sellersCategoriesList
  productslisturl   = "/" + environment.sellersProductList
  orderlisturl      = "/" + environment.sellersOrderList
  customerslisturl  = "/" + environment.customerList
  subscriptionlisturl = "/"+ environment.subscriptionList
  paymenturl = "/"+ environment.paymentList

  
  menuItems: any[] = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon:'bi-grid',
      children: []
    },
    {
      label: 'Business Categories',
      href: '/category',
      icon:'bi-list-check',
      children: [
        {
          label: 'News',
          href: '/articles/news',
        },
        {
          label: 'Entertainment',
          href: '/articles/entertain',
        },
      ],
    },
    {
      label: 'Business Period',
      href: '/business-period',
      icon:'bi-calendar3',
      children: []
    },
    {
      label: 'Business Type',
      href: '/business-type',
      icon:'bi-box-seam',
      children: []
    },
    {
      label: 'Sell Option',
      href: '/selloption',
      icon:'bi-cart',
      children: []
    },
    {
      label: 'Country',
      href: '/country',
      icon:'bi-globe',
      children: []
    },
    // {
    //   label: 'Tax Head',
    //   href: '/taxhead',
    //   icon:'bi-fonts',
    //   children: []
    // },
    // {
    //   label: 'Tax Head Details',
    //   href: '/taxheaddetails',
    //   icon:'bi-list-ul',
    //   children: []
    // },
    {
      label: 'Dispute Subject',
      href: '/disputesubject',
      icon:'bi bi-border-style',
      children: []
    },
    {
      label: 'Dispute',
      href: '/dispute',
      icon:'bi bi-send',
      children: []
    },
  ];
}
