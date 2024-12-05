export const environment = {
    production: true,
  
    //add donet api path
    //apiUrl: 'https://localhost:44318/api/',
  
    //live donet api path 
    //apiUrl: 'https://api.shopirox.com/api/',
    apiUrl:'https://shopiroxapilocal.onrender.com/',
    
    cdnUrl: 'https://cdn.shopirox.com/Images/',
    //domainUrl:"https://theautocool.in/p/",
    
    //add  captcha secret key
    recaptcha: {
      siteKey: '6LcjuGYcAAAAABbfKeVEEoOk9IfMr36mD28RD27_',
    },
  
    //Set URL
    login			            :	"login",
    // forgotPassword	    :	"forgot-password",
    // resetPassword		    :	"reset-password/:resetId",
    dashboard		          :	"dashboard",

    categoryList		      :	"category",
    categoryCreate	      :	"category/create",
    categoryEdit		      :	"category/edit", 

    businessperiodList		:	"business-period",
    businessperiodCreate	:	"business-period/create",
    businessperiodEdit		:	"business-period/edit",

    businesstypeList		  :	"business-type",
    businesstypeCreate		:	"business-type/create",
    businesstypeEdit		  :	"business-type/edit",

    selloptionList		    :	"selloption",
    selloptionCreate		  :	"selloption/create",
    selloptionEdit		    :	"selloption/edit",

    countryList           : "country",
    countryCreate         : "country/create",
    countryEdit           : "country/edit",

    taxheadList           : "taxhead",
    taxheadCreate         : "taxhead/create",
    taxheadEdit           : "taxhead/edit",

    taxheadDetailsList    : "taxheaddetails",
    taxheadDetailsCreate  : "taxheaddetails/create",
    taxheadDetailsEdit    : "taxheaddetails/edit",

    DisputeSubjectList    : "disputesubject",
    DisputeSubjectCreate  : "disputesubject/create",
    DisputeSubjectEdit    : "disputesubject/edit",

    DisputeList           : "dispute",
    DisputeCreate         : "dispute/create",
    DisputeEdit           : "dispute/edit",    
    DisputeDetails        : "dispute/details",
    
    subscriptionList      : "subscription",
    subscriptionCreate    : "subscription/create",
    subscriptionEdit      : "subscription/edit",    
    //DisputeDetails        : "dispute/details",

    paymentList           : "paymentGateway",
    paymentCreate         : "paymentGateway/create",
    paymentEdit           : "paymentGateway/edit",

    sellersubList         : "sellersubscription",

    sellersList           : "sellers",
    sellersEdit           : "sellers/edit",
    sellersCategoriesList : "categories",
    sellersProductList    : "products",
    sellersOrderList      : "orders",
    sellersCategory       : "sellers/category",
    sellersProduct        : "sellers/product",
    sellerCustomer        : "sellers/customer",

    customerOrdersList    : "customer/order",
    customerOrdersDetail  : "customer/orderdetail",
    customerList          : "customers",    
    
    logout			          :	"logout"  

    
    
  };
  