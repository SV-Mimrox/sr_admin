import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  categorylisturl        = "/" + environment.categoryList;
  businessperiodlisturl  = "/" + environment.businessperiodList;
  businesstypelisturl    = "/" + environment.businesstypeList;
  selloptionlisturl      = "/" + environment.selloptionList;
  countrylisturl         = "/" + environment.countryList;
  taxheadlisturl         = "/" + environment.taxheadList;
  taxheadDetailslisturl  = "/" + environment.taxheadDetailsList;
  customerslisturl       = "/" + environment.customerList;
  dispSublisturl         = "/" + environment.DisputeSubjectList;
  displisturl            = "/" + environment.DisputeList;
  subscriptionlisturl = "/"+ environment.subscriptionList
  boxloading = true 
}
