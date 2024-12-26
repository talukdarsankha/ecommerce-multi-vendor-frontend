import { Product } from "./ProductType";
import { address, user } from "./UserType";




export interface orderItem{
    id?:number
    order:Order;
    product:Product
    size:string;
    quantity:number;
    mrpPrice:number;
    sellingPrice:any;
    userId:number;
    
}


export interface Order{
    id?:number
    orderId?:string;
    user:user
    sellerId:number;
    orderItems:orderItem[];
    shippingAddress:address;
    paymentDetails:any;
    totalMrpPrice:number;
    totalSellingPrice:number;
    discount?:number;
    orderStatus:OrderStatus;
    totalItem:number;
    orderDate:string;
    deliveryDate:string;

}

export interface OrderStatus{
    PENDING:"PENDING";
	PLACED:"PLACED";
	CONFIRMED:"CONFIRMED";
	SHIPPED:"SHIPPED";
	DELIVERED:"DELIVERED"
	CANCELED:"CANCELED"
}

