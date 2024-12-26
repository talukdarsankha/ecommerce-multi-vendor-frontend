


export interface Coupon{
    id?:number
    code:string;
    discountedPercent:number
    validityStartDate:Date;
    validityEndDate:Date;
    minimumOrderValue:number;
    active:boolean;
}


