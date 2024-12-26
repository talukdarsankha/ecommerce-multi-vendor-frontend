import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";
import { cart } from "../../Types/Cart";
import { Coupon } from "../../Types/CouponType";


export const applyRemoveCoupon = createAsyncThunk<cart, {jwt:string,apply:string,code:string,orderValue:number }>("/coupon/applyRemoveCoupon", 
    async ({jwt,apply,code,orderValue} ,{rejectWithValue})=> {
   try {
       const response = await api.post("/api/coupon/apply-remove",{
        headers:{
            Authorization:`Bearer ${jwt}`,
        },
        params:{
            jwt,
            apply, 
            code,
            orderValue
        }
       });
       console.log("applyRemoveCoupon ...", response);
       return response.data;
   } catch (error) {
       console.log("applyRemoveCoupon error ...", error);
       return rejectWithValue("Failed to applyRemoveCoupon...");
   }
})

interface CouponState{
    coupons:Coupon[]
    cart:cart | null;
    loading:boolean;
    error:string | null;
    couponCreated:boolean;
    couponApplied:boolean;
}

const initialState:CouponState = {
    coupons: [],
    cart: null,
    loading:false,
    error: "",
    couponCreated:false,
    couponApplied:false,
}

const CouponSlice = createSlice({
    name:"coupon",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(applyRemoveCoupon.pending,(state)=>{
            state.loading = true;
            state.couponApplied = false;  // Fixed trailing comma
            state.error = null;            // Fixed trailing comma
        })
        .addCase(applyRemoveCoupon.fulfilled,(state,action)=>{
            state.loading = false;
            state.cart = action.payload;

            if(action.meta.arg.apply === "true"){
                state.couponApplied = true;
            }else{
                state.couponApplied = false;
            }
        })
        .addCase(applyRemoveCoupon.rejected,(state,action)=>{
            state.loading = false;
            state.couponApplied = false;  // Fixed trailing comma
            state.error = action.payload as string;
        })
    }
})

export default CouponSlice.reducer;
