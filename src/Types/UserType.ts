export interface address{
    id?:number
    name:string;
    locality:string;
    address:string;
    city:string;
    state:string;
    pinCode:string;
    mobile:string;
}


export interface userRole{
    ROLE_ADMIN:"ROLE_ADMIN"
	ROLE_CUSTOMER:"ROLE_CUSTOMER",
	ROLE_SELLER:"ROLE_SELLER"
}


export interface user{
    id?:number
    password?:string;
    email:string;
    fullname:string;
    mobile?:string;
    role:userRole;
    address?:address[];
}






