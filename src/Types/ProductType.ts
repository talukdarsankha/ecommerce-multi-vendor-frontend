import { Seller } from "./SellerType";


export interface Product{
    id?:number;
    title:string;
    description:string;
    mrpPrice:number;
    sellingPrice:number;
    quantity:number;
    discountedPercent:number;
    color:string;
    images:string[];
    numRatings?:number;
    category?: Category;
    seller:Seller;
    sizes:string;
    stock:string;


}




export interface Category{
    id?:number;
    name:string;
    categoryId:string;
    parentCategory?:Category;
    lavel:number;
}
