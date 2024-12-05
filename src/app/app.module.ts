import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { LogocomponentComponent } from './components/logocomponent/logocomponent.component';
import { InputcontrolcomponentComponent } from './components/inputcontrolcomponent/inputcontrolcomponent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountbuttoncomponentComponent } from './components/accountbuttoncomponent/accountbuttoncomponent.component';
import { HeaderdropdowncomponentComponent } from './components/headerdropdowncomponent/headerdropdowncomponent.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagetitlecomponentComponent } from './components/pagetitlecomponent/pagetitlecomponent.component';
import { DashboardloadercomponentsComponent } from './components/dashboardloadercomponents/dashboardloadercomponents.component';
import { LabelcontrolconcomponentComponent } from './components/labelcontrolconcomponent/labelcontrolconcomponent.component';
import { DashcountcontrolconcomponentComponent } from './components/dashcountcontrolconcomponent/dashcountcontrolconcomponent.component';
import { RecaptchaFormsModule, RecaptchaModule ,RECAPTCHA_SETTINGS,RecaptchaSettings} from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { LogoutComponent } from './pages/logout/logout.component';
import { CategoryListComponent } from './pages/Categories/category-list/category-list.component';
import { CategoryEditComponent } from './pages/Categories/category-edit/category-edit.component';
import { CategoryCreateComponent } from './pages/Categories/category-create/category-create.component';
import { CategoryDetailsComponent } from './pages/Categories/category-details/category-details.component';
import { CreateiconcomponentComponent } from './components/createiconcomponent/createiconcomponent.component';
import { ButtoncontrolconcomponentComponent } from './components/buttoncontrolconcomponent/buttoncontrolconcomponent.component';
import { TablecomponentComponent } from './components/tablecomponent/tablecomponent.component';
import { ActiveswitchcontrolconcomponentComponent } from './components/activeswitchcontrolconcomponent/activeswitchcontrolconcomponent.component';
import { BusinessPeriodListComponent } from './pages/businessperiods/business-period-list/business-period-list.component';
import { BusinessPeriodEditComponent } from './pages/businessperiods/business-period-edit/business-period-edit.component';
import { BusinessPeriodCreateComponent } from './pages/businessperiods/business-period-create/business-period-create.component';
import { BusinessTypeListComponent } from './pages/businesstypes/business-type-list/business-type-list.component';
import { BusinessTypeCreateComponent } from './pages/businesstypes/business-type-create/business-type-create.component';
import { BusinessTypeEditComponent } from './pages/businesstypes/business-type-edit/business-type-edit.component';
import { SelloptionListComponent } from './pages/selloptions/selloption-list/selloption-list.component';
import { SelloptionCreateComponent } from './pages/selloptions/selloption-create/selloption-create.component';
import { SelloptionEditComponent } from './pages/selloptions/selloption-edit/selloption-edit.component';
import { TableloaderComponent } from './components/loaders/tableloader/tableloader.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CountryListComponent } from './pages/country/country-list/country-list.component';
import { CountryCreateComponent } from './pages/country/country-create/country-create.component';
import { CountryEditComponent } from './pages/country/country-edit/country-edit.component';

import { SellersListComponent } from './pages/sellers/sellers-list/sellers-list.component';
import { SellerlistcomponentComponent } from './components/sellerlistcomponent/sellerlistcomponent.component';
import { SellerslistloaderComponent } from './components/loaders/sellerslistloader/sellerslistloader.component';
import { SellersCategoriesComponent } from './pages/sellers/sellers-categories/sellers-categories.component';
import { SellersProductsComponent } from './pages/sellers/sellers-products/sellers-products.component';
import { SellersOrdersComponent } from './pages/sellers/sellers-orders/sellers-orders.component';
import { CatprdcomponentComponent } from './components/catprdcomponent/catprdcomponent.component';
import { CatprdlistloaderComponent } from './components/loaders/catprdlistloader/catprdlistloader.component';
import { PrdlistloaderComponent } from './components/loaders/prdlistloader/prdlistloader.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SellersCategoryComponent } from './pages/sellers/sellers-category/sellers-category.component';
import { SlrcatprdcomponentComponent } from './components/slrcatprdcomponent/slrcatprdcomponent.component';
import { SellersProductComponent } from './pages/sellers/sellers-product/sellers-product.component';
import { SlrprdlistloaderComponent } from './components/loaders/slrprdlistloader/slrprdlistloader.component';
import { SlrcatlistloaderComponent } from './components/loaders/slrcatlistloader/slrcatlistloader.component';
import { AuthGuard } from './auth.guard';
import { CountryloaderComponent } from './components/loaders/countryloader/countryloader.component';
import { CountrycomponentComponent } from './components/countrycomponent/countrycomponent.component';
import { SellersCustomerComponent } from './pages/sellers/sellers-customer/sellers-customer.component';
import { SlrcstcomponentComponent } from './components/slrcstcomponent/slrcstcomponent.component';
import { SlrcstloaderComponent } from './components/loaders/slrcstloader/slrcstloader.component';
import { CustomerListComponent } from './pages/customers/customer-list/customer-list.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerloaderComponent } from './components/loaders/customerloader/customerloader.component';
import { DatanotfoundComponent } from './components/datanotfound/datanotfound.component';
import { OrderComponent } from './components/order/order.component';
import { TrimPipe } from './components/order/order.pipe';
import { OrderloaderComponent } from './components/loaders/orderloader/orderloader.component';
import { CustomerOrderComponent } from './pages/customers/customer-order/customer-order.component';
import { CustomerOrderdetailComponent } from './pages/customers/customer-orderdetail/customer-orderdetail.component';
import { CustomerinfocomponentsComponent } from './components/customerinfocomponents/customerinfocomponents.component';
import { PaymentinfocomponentsComponent } from './components/paymentinfocomponents/paymentinfocomponents.component';
import { OrderitemcomponentsComponent } from './components/orderitemcomponents/orderitemcomponents.component';
import { OrderdetailsloaderComponent } from './components/loaders/orderdetailsloader/orderdetailsloader.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { SearchdropdowncontrolconcomponentComponent } from './components/searchdropdowncontrolconcomponent/searchdropdowncontrolconcomponent.component';
import { TexheadListComponent } from './pages/texhead/texhead-list/texhead-list.component';
import { TexheadCreateComponent } from './pages/texhead/texhead-create/texhead-create.component';
import { TexheadEditComponent } from './pages/texhead/texhead-edit/texhead-edit.component';
import { TexheadcomponentComponent } from './components/texheadcomponent/texheadcomponent.component';
import { TexheadloaderComponent } from './components/loaders/texheadloader/texheadloader.component';
import { TexheaddetailsListComponent } from './pages/texheaddetails/texheaddetails-list/texheaddetails-list.component';
import { TexheaddetailsCreateComponent } from './pages/texheaddetails/texheaddetails-create/texheaddetails-create.component';
import { TexheaddetailsEditComponent } from './pages/texheaddetails/texheaddetails-edit/texheaddetails-edit.component';
import { TexheadDetailsloaderComponent } from './components/loaders/texhead-detailsloader/texhead-detailsloader.component';
import { TexheadDetailscomponentComponent } from './components/texhead-detailscomponent/texhead-detailscomponent.component';
import { DropdownconcomponentComponent } from './components/dropdownconcomponent/dropdownconcomponent.component';
import { DisputesubjectListComponent } from './pages/disputesubject/disputesubject-list/disputesubject-list.component';
import { DisputesubjectCreateComponent } from './pages/disputesubject/disputesubject-create/disputesubject-create.component';
import { DisputesubjectEditComponent } from './pages/disputesubject/disputesubject-edit/disputesubject-edit.component';
import { DisSubjectcomponentComponent } from './components/dis-subjectcomponent/dis-subjectcomponent.component';
import { DisSubjectloaderComponent } from './components/loaders/dis-subjectloader/dis-subjectloader.component';
import { DisputeListComponent } from './pages/dispute/dispute-list/dispute-list.component';
import { DisputeCreateComponent } from './pages/dispute/dispute-create/dispute-create.component';
import { DisputeEditComponent } from './pages/dispute/dispute-edit/dispute-edit.component';
import { DisputeDetailsComponent } from './pages/dispute/dispute-details/dispute-details.component';
import { DispcomponentComponent } from './components/dispcomponent/dispcomponent.component';
import { DisputeloaderComponent } from './components/loaders/disputeloader/disputeloader.component';
import { SubscriptionListComponent } from './pages/subscription/subscription-list/subscription-list.component';
import { SubscriptionCreateComponent } from './pages/subscription/subscription-create/subscription-create.component';
import { SubscriptionEditComponent } from './pages/subscription/subscription-edit/subscription-edit.component';
import { SubscriptionloaderComponent } from './components/loaders/subscriptionloader/subscriptionloader.component';
import { SubscriptioncomponentComponent } from './components/subscriptioncomponent/subscriptioncomponent.component';
import { TextareacontrolcontrolcomponentComponent } from './components/textareacontrolcontrolcomponent/textareacontrolcontrolcomponent.component';
import { DefaultswichComponent } from './components/defaultswich/defaultswich.component';
import { PaymentgetawaylistComponent } from './pages/paymentgetaway/paymentgetawaylist/paymentgetawaylist.component';
import { PaymentgetawaycreateComponent } from './pages/paymentgetaway/paymentgetawaycreate/paymentgetawaycreate.component';
import { PaymentgetawayeditComponent } from './pages/paymentgetaway/paymentgetawayedit/paymentgetawayedit.component';
import { PaymentswichComponent } from './components/paymentswich/paymentswich.component';
import { IsonlineComponent } from './components/isonline/isonline.component';
import { PaymentlistComponent } from './components/paymentlist/paymentlist.component';
import { SellersebscrtionlistComponent } from './pages/sellersubscrtion/sellersebscrtionlist/sellersebscrtionlist.component';
import { SellersublistComponent } from './components/sellersublist/sellersublist.component';
import { SellersubloaderComponent } from './components/loaders/sellersubloader/sellersubloader.component';
import { SellersEditComponent } from './pages/sellers/sellers-edit/sellers-edit.component';
import { OutofstockComponent } from './components/outofstock/outofstock.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    LogocomponentComponent,
    InputcontrolcomponentComponent,
    AccountbuttoncomponentComponent,
    HeaderdropdowncomponentComponent,
    DashboardComponent,
    PagetitlecomponentComponent,
    DashboardloadercomponentsComponent,
    LabelcontrolconcomponentComponent,
    DashcountcontrolconcomponentComponent,
    LogoutComponent,
    CategoryListComponent,
    CategoryEditComponent,
    CategoryCreateComponent,
    CategoryDetailsComponent,
    CreateiconcomponentComponent,
    ButtoncontrolconcomponentComponent,
    TablecomponentComponent,
    ActiveswitchcontrolconcomponentComponent,
    BusinessPeriodListComponent,
    BusinessPeriodEditComponent,
    BusinessPeriodCreateComponent,
    BusinessTypeListComponent,
    BusinessTypeCreateComponent,
    BusinessTypeEditComponent,
    SelloptionListComponent,
    SelloptionCreateComponent,
    SelloptionEditComponent,
    TableloaderComponent,
    CountryListComponent,
    CountryCreateComponent,
    CountryEditComponent,
    
    SellersListComponent,
    SellerlistcomponentComponent,
    SellerslistloaderComponent,
    SellersCategoriesComponent,
    SellersProductsComponent,
    SellersOrdersComponent,
    CatprdcomponentComponent,
    CatprdlistloaderComponent,
    PrdlistloaderComponent,
    SellersCategoryComponent,
    SlrcatprdcomponentComponent,
    SellersProductComponent,
    SlrprdlistloaderComponent,
    SlrcatlistloaderComponent,
    CountryloaderComponent,
    CountrycomponentComponent,
    SellersCustomerComponent,
    SlrcstcomponentComponent,
    SlrcstloaderComponent,
    CustomerListComponent,
    CustomersComponent,
    CustomerloaderComponent,
    DatanotfoundComponent,
    OrderComponent,
    TrimPipe,
    SearchFilterPipe,
    OrderloaderComponent,
    CustomerOrderComponent,
    CustomerOrderdetailComponent,
    CustomerinfocomponentsComponent,
    PaymentinfocomponentsComponent,
    OrderitemcomponentsComponent,
    OrderdetailsloaderComponent,
    SearchdropdowncontrolconcomponentComponent,
    TexheadListComponent,
    TexheadCreateComponent,
    TexheadEditComponent,
    TexheadcomponentComponent,
    TexheadloaderComponent,
    TexheaddetailsListComponent,
    TexheaddetailsCreateComponent,
    TexheaddetailsEditComponent,
    TexheadDetailsloaderComponent,
    TexheadDetailscomponentComponent,
    DropdownconcomponentComponent,
    DisputesubjectListComponent,
    DisputesubjectCreateComponent,
    DisputesubjectEditComponent,
    DisSubjectcomponentComponent,
    DisSubjectloaderComponent,
    DisputeListComponent,
    DisputeCreateComponent,
    DisputeEditComponent,
    DisputeDetailsComponent,
    DispcomponentComponent,
    DisputeloaderComponent,
    SubscriptionListComponent,
    SubscriptionCreateComponent,
    SubscriptionEditComponent,
    SubscriptionloaderComponent,
    SubscriptioncomponentComponent,
    TextareacontrolcontrolcomponentComponent,
    DefaultswichComponent,
    PaymentgetawaylistComponent,
    PaymentgetawaycreateComponent,
    PaymentgetawayeditComponent,
    PaymentswichComponent,
    IsonlineComponent,
    PaymentlistComponent,
    SellersebscrtionlistComponent,
    SellersublistComponent,
    SellersubloaderComponent,
    SellersEditComponent,
    OutofstockComponent
    

  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    NgxSkeletonLoaderModule,
    InfiniteScrollModule,
    
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
