import { Product } from "./ProductType";
import { user } from "./UserType";



export interface cartItem{
    id?:number
    cart?:cart;
    product:Product
    quantity:number;
    size?:string;
    mrpPrice?:number;
    sellingPrice?:number;
    userId?: number ;
}

export interface cart{
    id?:number
    user:user;
    cartItems:cartItem[];
    totalSellingPrice?:number;
    totalMrpPrice?:number;
    totalItem?:number;
    totalDiscount?:number;
    couponCode?: string ;
}

