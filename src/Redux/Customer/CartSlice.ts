import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";
import { user } from "../../Types/UserType";
import CartItem from "../../customer/Pages/Cart/CartItem";
import { cart, cartItem } from "../../Types/Cart";
import { applyRemoveCoupon } from "./CouponSlice";






       //	in this backend cart api getusercart there is some issue in response.data cart.cartitem is empty array that's why in backend somewhere we manually find cartItems using user cart   

export const fetchUserCart = createAsyncThunk<cart,string>("/cart/fetchUserCart", 
    async (jwt:string ,{rejectWithValue})=> {
   try {
       const response = await api.get("/api/cart/",{
        headers:{
            Authorization:`Bearer ${jwt}`
        }
       });
       console.log("fetchUserCart ...", response);
       return response.data;
   } catch (error) {
       console.log("fetchUserCart error ...", error);
       return rejectWithValue("Failed to fetch user cart...");
   }
})



interface AddItemRequest{
    productId: number | undefined
    quantity: number
    size: string
}

export const addItemToCart = createAsyncThunk<cartItem,{jwt:string | null, request:AddItemRequest}>("/cart/addItemToCart", 
    async ({jwt, request} ,{rejectWithValue})=> {
   try {
       const response = await api.put("/api/cart/add",request, {
        headers:{
            Authorization:`Bearer ${jwt}`
        }
       });
       console.log("addItemToCart ...", response);
       return response.data;
   } catch (error) {
       console.log("addItemToCart error ...", error);
       return rejectWithValue("Failed to addItemToCart user cart...");
   }
})



export const deleteCartItemFromCart = createAsyncThunk<any,{jwt:string, cartItemId:number | undefined }>("/cart/deleteCartItemFromCart", 
    async ({jwt, cartItemId} ,{rejectWithValue})=> {
   try {
       const response = await api.delete(`/api/cart/cartitem/${cartItemId}`, {
        headers:{
            Authorization:`Bearer ${jwt}`
        }
       });
       console.log("deleteCartItemFromCart response ...", response);
       return response.data;
   } catch (error) {
       console.log("deleteCartItemFromCart error ...", error);
       return rejectWithValue("Failed to deleteCartItem From user cart...");
   }
})



export const updateCartItem = createAsyncThunk<any,{jwt:string, cartItemId:number | undefined, cartItem:any}>("/cart/updateCartItem", 
    async ({jwt,cartItemId, cartItem} ,{rejectWithValue})=> {
   try {
       const response = await api.put(`/api/cart/cartitem/${cartItemId}`, cartItem, {
        headers:{
            Authorization:`Bearer ${jwt}`
        }
       });
       console.log("updateCartItem response ...", response);
       return response.data;
   } catch (error) {
       console.log("updateCartItem error ...", error);
       return rejectWithValue("Failed to updateCartItem From user cart...");
   }
})





 interface cartState{
    userCart:cart | null,
    loading:boolean,
    error: string | null
}

const initialState:cartState = {

    userCart : null,
    loading : false,
    error : null,

}

      // when we add, update or delete cartitem from cart then it is better to call again get user cart instead of this we need to manage our state for not creating extra fetch usercart call again and again in useEffect()
   
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        resetcartState: (state)=>{
            state.userCart = null;
            state.loading=false;
            state.error=null;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUserCart.pending,(state)=>{
            state.loading = true;
            state.error=null;
        })
        .addCase(fetchUserCart.fulfilled,(state,action:PayloadAction<cart>)=>{
            state.loading = false;
            state.userCart = action.payload;  
         })
        .addCase(fetchUserCart.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string;
            state.userCart = null
        })


        builder.addCase(addItemToCart.pending,(state)=>{
            state.loading = true;
            state.error=null;
        })
        .addCase(addItemToCart.fulfilled,(state,action)=>{
            state.loading = false;
            state.error=null;
            if(state.userCart){
                state.userCart.cartItems.push(action.payload);
                //  state.userCart.cartItems = [ action.payload.cartItems , ...state.userCart.cartItems]
            }
         })
        .addCase(addItemToCart.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string;
        })


        builder.addCase(deleteCartItemFromCart.pending,(state)=>{
            state.loading = true;
            state.error=null;
        })
        .addCase(deleteCartItemFromCart.fulfilled,(state,action)=>{
            state.loading = false;

           if(state.userCart){
            state.userCart.cartItems= state.userCart.cartItems.filter((item:cartItem)=>item.id !== action.meta.arg.cartItemId)
           }
         })
        .addCase(deleteCartItemFromCart.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string;
        })



        builder.addCase(updateCartItem.pending,(state)=>{
            state.loading = true;
            state.error=null;
        })
        .addCase(updateCartItem.fulfilled,(state,action)=>{
            state.loading = false;
           if(state.userCart){
            state.userCart.cartItems = state.userCart.cartItems.map((item:cartItem)=> item.id === action.payload.id ? action.payload : item)
           }
         })
        .addCase(updateCartItem.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string;
        })



        
        builder.addCase(applyRemoveCoupon.fulfilled,(state,action)=>{
            state.loading = false;
            state.userCart=action.payload;
        })


    }
})


export default cartSlice.reducer;