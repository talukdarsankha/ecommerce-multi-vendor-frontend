import { Product } from "./ProductType";
import { user } from "./UserType";

export interface WishList{
    id?:number;
    user:user;
    products:Product[]
}