

export interface PickUpAddress{
	 name:string;
	 locality:string;
     address:string;
	 city:string;
	 state:string;
	 pinCode:string;
	 mobile:string;
}



export interface BankDetails{
    accountNumber:string;
    ifscCode:string;
    accountHolderName:string;
}


export interface BusinessDetails{
    businessName:string;
}


export interface Seller{
    id?:number;
    mobile:string;
    sellerName:string;
    email:string;
    password?:string;
    gstin:string;
    businessDetails:BusinessDetails;
    bankDetails:BankDetails;
    pickUpAddress:PickUpAddress;
    accountStatus?:string;
}



export interface SellerReport{
    id?:number;
    seller:Seller;
	totalEarnings:number;
	
	totalSales:number;
	
	
	totalRefunds:number;
	
	totalTax:number;
	
	netEarnings:number;
	
	totalOrders:number;
	
	totalCanceledOrders:number;
	
	totalTransactions:number;
}



