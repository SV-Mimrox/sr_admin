import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './auth.guard';
import { BusinessPeriodCreateComponent } from './pages/businessperiods/business-period-create/business-period-create.component';
import { BusinessPeriodEditComponent } from './pages/businessperiods/business-period-edit/business-period-edit.component';
import { BusinessPeriodListComponent } from './pages/businessperiods/business-period-list/business-period-list.component';
import { BusinessTypeCreateComponent } from './pages/businesstypes/business-type-create/business-type-create.component';
import { BusinessTypeEditComponent } from './pages/businesstypes/business-type-edit/business-type-edit.component';
import { BusinessTypeListComponent } from './pages/businesstypes/business-type-list/business-type-list.component';
import { CategoryCreateComponent } from './pages/Categories/category-create/category-create.component';
import { CategoryEditComponent } from './pages/Categories/category-edit/category-edit.component';
import { CategoryListComponent } from './pages/Categories/category-list/category-list.component';
import { CountryCreateComponent } from './pages/country/country-create/country-create.component';
import { CountryEditComponent } from './pages/country/country-edit/country-edit.component';
import { CountryListComponent } from './pages/country/country-list/country-list.component';
import { CustomerListComponent } from './pages/customers/customer-list/customer-list.component';
import { CustomerOrderComponent } from './pages/customers/customer-order/customer-order.component';
import { CustomerOrderdetailComponent } from './pages/customers/customer-orderdetail/customer-orderdetail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DisputeCreateComponent } from './pages/dispute/dispute-create/dispute-create.component';
import { DisputeDetailsComponent } from './pages/dispute/dispute-details/dispute-details.component';
import { DisputeEditComponent } from './pages/dispute/dispute-edit/dispute-edit.component';
import { DisputeListComponent } from './pages/dispute/dispute-list/dispute-list.component';
import { DisputesubjectCreateComponent } from './pages/disputesubject/disputesubject-create/disputesubject-create.component';
import { DisputesubjectEditComponent } from './pages/disputesubject/disputesubject-edit/disputesubject-edit.component';
import { DisputesubjectListComponent } from './pages/disputesubject/disputesubject-list/disputesubject-list.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { SellersCategoriesComponent } from './pages/sellers/sellers-categories/sellers-categories.component';
import { SellersCategoryComponent } from './pages/sellers/sellers-category/sellers-category.component';
import { SellersCustomerComponent } from './pages/sellers/sellers-customer/sellers-customer.component';
import { SellersListComponent } from './pages/sellers/sellers-list/sellers-list.component';
import { SellersOrdersComponent } from './pages/sellers/sellers-orders/sellers-orders.component';
import { SellersProductComponent } from './pages/sellers/sellers-product/sellers-product.component';
import { SellersProductsComponent } from './pages/sellers/sellers-products/sellers-products.component';
import { SelloptionCreateComponent } from './pages/selloptions/selloption-create/selloption-create.component';
import { SelloptionEditComponent } from './pages/selloptions/selloption-edit/selloption-edit.component';
import { SelloptionListComponent } from './pages/selloptions/selloption-list/selloption-list.component';
import { SubscriptionCreateComponent } from './pages/subscription/subscription-create/subscription-create.component';
import { SubscriptionEditComponent } from './pages/subscription/subscription-edit/subscription-edit.component';
import { SubscriptionListComponent } from './pages/subscription/subscription-list/subscription-list.component';
import { TexheadCreateComponent } from './pages/texhead/texhead-create/texhead-create.component';
import { TexheadEditComponent } from './pages/texhead/texhead-edit/texhead-edit.component';
import { TexheadListComponent } from './pages/texhead/texhead-list/texhead-list.component';
import { TexheaddetailsCreateComponent } from './pages/texheaddetails/texheaddetails-create/texheaddetails-create.component';
import { TexheaddetailsEditComponent } from './pages/texheaddetails/texheaddetails-edit/texheaddetails-edit.component';
import { TexheaddetailsListComponent } from './pages/texheaddetails/texheaddetails-list/texheaddetails-list.component';
import { PaymentgetawaylistComponent } from './pages/paymentgetaway/paymentgetawaylist/paymentgetawaylist.component';
import { PaymentgetawaycreateComponent } from './pages/paymentgetaway/paymentgetawaycreate/paymentgetawaycreate.component';
import { PaymentgetawayeditComponent } from './pages/paymentgetaway/paymentgetawayedit/paymentgetawayedit.component';
import { SellersebscrtionlistComponent } from './pages/sellersubscrtion/sellersebscrtionlist/sellersebscrtionlist.component';
import { SellersEditComponent } from './pages/sellers/sellers-edit/sellers-edit.component';

const routes: Routes = [
  {path: '', component:LoginComponent,data: { showHeader: false, showSidebar: false,showFooter:false }},
  {path: environment.login ,component:LoginComponent,data: { showHeader: false, showSidebar: false,showFooter:false }},
  {path: environment.dashboard,canActivate:[AuthGuard],component:DashboardComponent,title:'Dashboard'},
  
  {path: environment.categoryList,canActivate:[AuthGuard],component:CategoryListComponent,title:'Business Categories'},
  {path: environment.categoryCreate,canActivate:[AuthGuard],component: CategoryCreateComponent ,title:'Create Business Category'},
  {path: environment.categoryEdit + "/:id",canActivate:[AuthGuard], component: CategoryEditComponent ,title:'Edit Business Category'},
  
  {path: environment.businessperiodList,canActivate:[AuthGuard],component:BusinessPeriodListComponent,title:'Business Periods'},
  {path: environment.businessperiodCreate,canActivate:[AuthGuard],component: BusinessPeriodCreateComponent ,title:'Create Business Period'},
  {path: environment.businessperiodEdit + "/:id",canActivate:[AuthGuard] ,component: BusinessPeriodEditComponent ,title:'Edit Business Period'},
  
  {path: environment.businesstypeList,canActivate:[AuthGuard],component:BusinessTypeListComponent,title:'Business Types'},
  {path: environment.businesstypeCreate,canActivate:[AuthGuard],component:BusinessTypeCreateComponent ,title:'Create Business Type'},
  {path: environment.businesstypeEdit + "/:id",canActivate:[AuthGuard],component: BusinessTypeEditComponent ,title:'Edit Business Type'},
  
  {path: environment.selloptionList,canActivate:[AuthGuard],component:SelloptionListComponent,title:'Business Sell Options'},
  {path: environment.selloptionCreate,canActivate:[AuthGuard],component:SelloptionCreateComponent ,title:'Create Business Sell Option'},
  {path: environment.selloptionEdit + "/:id",canActivate:[AuthGuard],component: SelloptionEditComponent ,title:'Edit Business Sell Option'},
 
  {path: environment.countryList,canActivate:[AuthGuard],component:CountryListComponent,title:'Country'},
  {path: environment.countryCreate,canActivate:[AuthGuard],component:CountryCreateComponent ,title:'Create Country'},
  {path: environment.countryEdit + "/:id",canActivate:[AuthGuard],component: CountryEditComponent ,title:'Edit Country'},
  
  {path: environment.taxheadList,canActivate:[AuthGuard],component:TexheadListComponent,title:'Tax Head'},
  {path: environment.taxheadCreate,canActivate:[AuthGuard],component:TexheadCreateComponent ,title:'Create Tax Head'},
  {path: environment.taxheadEdit + "/:id",canActivate:[AuthGuard],component: TexheadEditComponent ,title:'Edit Tax Head'},
 
  {path: environment.taxheadDetailsList,canActivate:[AuthGuard],component:TexheaddetailsListComponent,title:'Tax Head Details'},
  {path: environment.taxheadDetailsCreate,canActivate:[AuthGuard],component:TexheaddetailsCreateComponent ,title:'Create Tax Head Details'},
  {path: environment.taxheadDetailsEdit + "/:id",canActivate:[AuthGuard],component: TexheaddetailsEditComponent ,title:'Edit Tax Head Details'},
  
  {path: environment.DisputeSubjectList,canActivate:[AuthGuard],component:DisputesubjectListComponent,title:'Dispute Subject'},
  {path: environment.DisputeSubjectCreate,canActivate:[AuthGuard],component:DisputesubjectCreateComponent ,title:'Create Dispute Subject'},
  {path: environment.DisputeSubjectEdit + "/:id",canActivate:[AuthGuard],component: DisputesubjectEditComponent ,title:'Edit Dispute Subject'},
  
  {path: environment.DisputeList,canActivate:[AuthGuard],component:DisputeListComponent,title:'Dispute'},
  {path: environment.DisputeCreate,canActivate:[AuthGuard],component:DisputeCreateComponent ,title:'Create Dispute'},
  {path: environment.DisputeEdit + "/:id",canActivate:[AuthGuard],component: DisputeEditComponent ,title:'Edit Dispute'},
  {path: environment.DisputeDetails + "/:id",canActivate:[AuthGuard],component: DisputeDetailsComponent ,title:'Details Dispute'},

  {path: environment.subscriptionList,canActivate:[AuthGuard],component:SubscriptionListComponent,title:'Subscription'},
  {path: environment.subscriptionCreate,canActivate:[AuthGuard],component:SubscriptionCreateComponent ,title:'Create Subscription'},
  {path: environment.subscriptionEdit + "/:id",canActivate:[AuthGuard],component: SubscriptionEditComponent ,title:'Edit Subscription'},

  {path: environment.sellersubList,canActivate:[AuthGuard],component:SellersebscrtionlistComponent,title:'Seller Subscription'},
  
  {path: environment.paymentCreate,canActivate:[AuthGuard],component:PaymentgetawaycreateComponent ,title:'Create Payment Getaway'},
  {path: environment.paymentList,canActivate:[AuthGuard],component:PaymentgetawaylistComponent ,title:'Payment Getaway'},
  {path: environment.paymentEdit +"/:id",canActivate:[AuthGuard],component:PaymentgetawayeditComponent ,title:'Payment Getaway Edit'},


  {path: environment.sellersList,canActivate:[AuthGuard],component:SellersListComponent,title:'Seller'},
  {path: environment.sellersEdit + "/:id",canActivate:[AuthGuard],component: SellersEditComponent ,title:'Edit Seller'},
  {path: environment.sellersCategoriesList,canActivate:[AuthGuard],component:SellersCategoriesComponent,title:'Categories'},
  {path: environment.sellersProductList,canActivate:[AuthGuard],component:SellersProductsComponent,title:'Products'},
  {path: environment.sellersOrderList,canActivate:[AuthGuard],component:SellersOrdersComponent,title:'Orders'},
  {path: environment.sellersCategory + "/:id",canActivate:[AuthGuard],component:SellersCategoryComponent,title:'Category'},
  {path: environment.sellersProduct + "/:id",canActivate:[AuthGuard],component:SellersProductComponent,title:'Product'},
  {path: environment.sellerCustomer + "/:id",canActivate:[AuthGuard],component:SellersCustomerComponent,title:'Customer'},
 
  {path: environment.customerList,canActivate:[AuthGuard],component:CustomerListComponent,title:'Customers'},
  {path: environment.customerOrdersList + "/:id",canActivate:[AuthGuard],component:CustomerOrderComponent,title:'Customer/order'},
  {path: environment.customerOrdersDetail + "/:id",canActivate:[AuthGuard],component:CustomerOrderdetailComponent,title:'Customer/orderDetail'},
 
  {path: 'logout',component:LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
