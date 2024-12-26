

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";
import { Product } from "../../Types/ProductType";
import { Order, orderItem } from "../../Types/Order";
import { address } from "../../Types/UserType";






export const fetchUserAllOrder = createAsyncThunk< Order[], string>("/order/fetchUserAllOrder", 
    async (jwt ,{rejectWithValue})=> {
   try {
       const response = await api.get("/api/order/user",{
        headers:{
            Authorization:`Bearer ${jwt}`
        }
       });
       console.log("fetchUserAllOrder ...", response.data);
       return response.data; 
   } catch (error:any) {
       console.log("failed to fetchUserAllOrder error ...", error);
       return rejectWithValue(error.response.data.error || "failed to fetchUserAllOrder error ...")
   }
})




export const fetchOrderById = createAsyncThunk< Order, {jwt:string, orderId:number}>("/order/fetchOrderById", 
    async ({jwt, orderId} ,{rejectWithValue})=> {
   try {
       const response = await api.get(`/api/order/${orderId}`,{
        headers:{
            Authorization:`Bearer ${jwt}`
        }
       });
       console.log("fetchOrderById ...", response.data);
       return response.data;
   } catch (error:any) {
       console.log("failed to fetchOrderById error ...", error);
       return rejectWithValue(error.response.data.error || "failed to fetchOrderById error ...")
   }
})





export const createOrder = createAsyncThunk<any, { jwt: string; addressId: number; paymentMethod:string }>("/order/createOrder",
  async ({ jwt, addressId, paymentMethod }, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/order/create", {}, // Leave the body empty if not required
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          },
          params: {
            paymentMethod: paymentMethod,
            addressId: addressId
          }
        }
      );
      console.log("createOrder ...", response.data);

      if (response.data.paymentLinkUrl) {
        window.location.href = response.data.paymentLinkUrl;
      }

      return response.data;
    } catch (error: any) {
      console.log("failed to createOrder error ...", error);
      return rejectWithValue(
        error.response?.data?.error || "failed to createOrder error ..."
      );
    }
  }
);




export const fetchOrderItemById = createAsyncThunk< orderItem, {jwt:string, orderItemId:number}>("/order/fetchOrderItemById", 
    async ({jwt, orderItemId} ,{rejectWithValue})=> {
   try {
       const response = await api.get(`/api/order/orderItem/${orderItemId}`,{
        headers:{
            Authorization:`Bearer ${jwt}`
        }
       });
       console.log("fetchOrderItemById ...", response.data);
       return response.data;
   } catch (error:any) {
       console.log("failed to fetchOrderItemById error ...", error);
       return rejectWithValue(error.response.data.error || "failed to fetchOrderItemById error ...")
   }
})



export const proceedPaymentSuccessOrFailure = createAsyncThunk< any, {jwt:string, orderId:number, razorpayPaymentId:string}>("/order/proceedPaymentSuccessOrFailure", 
    async ({jwt, orderId, razorpayPaymentId} ,{rejectWithValue})=> {
   try {
       const response = await api.get(`/api/payment/${orderId}`,{
        headers:{
            Authorization:`Bearer ${jwt}`
        },
        params:{
            razorpayPaymentId:razorpayPaymentId
        }
       });
       console.log("paymentSuccess form proceedPaymentSuccessOrFailure ...", response.data);
       return response.data;
   } catch (error:any) {
       console.log("failed error form proceedPaymentSuccessOrFailure ...", error.response);
       return rejectWithValue(error.response.data.error || "failed to paymentSuccess error ...")
   }
})





export const cancelOrder = createAsyncThunk< Order, {jwt:string, orderId:string}>("/order/cancelOrder", 
    async ({jwt, orderId} ,{rejectWithValue})=> {
   try {
       const response = await api.get(`/api/order/4{orderId}/cancel`,{
        headers:{
            Authorization:`Bearer ${jwt}`
        }
       });
       console.log("cancelOrder ...", response.data);
       return response.data;
   } catch (error:any) {
       console.log("failed to cancelOrder error ...", error.response);
       return rejectWithValue(error.response.data.error || "failed to cancelOrder error ...")
   }
})



interface OrderState{
    orders:Order[],
    orderItem:orderItem | null;
    currentOrder:Order | null;
    loading:boolean,
    error:string | null,
    orderCanceled:boolean
}


const initialState:OrderState = {
    orders:[],
    orderItem:null,
    currentOrder: null,
    loading:false,
    error:"",
    orderCanceled:false
}




const userOrderSlice = createSlice({
    name:"order",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUserAllOrder.pending,(state)=>{
            state.loading = true;
            state.error = null
            state.orderCanceled=false
        })
        .addCase(fetchUserAllOrder.fulfilled,(state,action)=>{
            state.loading = false;
            state.orders = action.payload;   

         })
        .addCase(fetchUserAllOrder.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string
        })


        builder.addCase(fetchOrderById.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchOrderById.fulfilled,(state,action)=>{
            state.loading = false;
            state.currentOrder = action.payload;   
         })
        .addCase(fetchOrderById.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string
        })



        builder.addCase(createOrder.pending,(state)=>{
            state.loading = true;
            state.error = null
        })
        .addCase(createOrder.fulfilled,(state,action)=>{
            state.loading = false;
                
         })
        .addCase(createOrder.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string
        })



        builder.addCase(fetchOrderItemById.pending,(state)=>{
            state.loading = true;
            state.error = null
        })
        .addCase(fetchOrderItemById.fulfilled,(state,action)=>{
            state.loading = false;
            state.orderItem = action.payload;          
         })
        .addCase(fetchOrderItemById.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string
        })


        builder.addCase(proceedPaymentSuccessOrFailure.pending,(state)=>{
            state.loading = true;
            state.error = null
        })
        .addCase(proceedPaymentSuccessOrFailure.fulfilled,(state,action)=>{
            state.loading = false;

         })
        .addCase(proceedPaymentSuccessOrFailure.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string
        })


        builder.addCase(cancelOrder.pending,(state)=>{
            state.loading = true;
            state.error = null
            state.orderCanceled= false
        })
        .addCase(cancelOrder.fulfilled,(state,action)=>{
            state.loading = false;
            state.orders = state.orders.map((order)=> order.id === action.payload.id ? action.payload : order )   // if order canceled that means order status is updated so we nedd to store updated order in orders array 
            state.orderCanceled=true
            state.currentOrder = action.payload
         })
        .addCase(cancelOrder.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string
        })
        
    }
})


export default userOrderSlice.reducer;

