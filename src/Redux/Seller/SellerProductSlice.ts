import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";
import { Product } from "../../Types/ProductType";



export const fetchSellerProduct= createAsyncThunk<Product[], any>("/sellerProducts/fetchSellerProduct", 
    async (jwt ,{rejectWithValue})=> {
   try {
       const response = await api.get("/api/seller/product/",{
        headers:{
            Authorization:`Bearer ${jwt}`
        }
       });
       console.log("fetchSellerProduct ...", response.data);
       return response.data;
   } catch (error:any) {
       console.log("fetchSellerProduct error ...", error);
       rejectWithValue(error.message)
   }
})



export const createSellerProduct= createAsyncThunk<Product, {productRequest:any,jwt:string | null}>("/sellerProducts/createSellerProduct", 
    async (data ,{rejectWithValue})=> {
        const {productRequest,jwt} = data;
   try {
       const response = await api.post("/api/seller/product/create",productRequest, {
        headers:{
            Authorization:`Bearer ${jwt}`
        }
       });
       console.log("createSellerProduct ...", response.data);
       return response.data;
   } catch (error:any) {
       console.log("createSellerProduct error ...", error);
       rejectWithValue(error.message)

   }
})




interface sellerProductState{
    products:Product[];
    loading:boolean;
    error:string | null | undefined
}


const initialState:sellerProductState = {
    products:[],
    loading:false,
    error:null
}


const sellerProductSlice = createSlice({
   name:"sellerProducts",
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
    builder.addCase(fetchSellerProduct.pending,(state)=>{
        state.loading=true;
    })
    .addCase(fetchSellerProduct.fulfilled,(state,action)=>{
        state.loading = false;
        state.products = action.payload;          
     })
    .addCase(fetchSellerProduct.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.error.message
    })



    builder.addCase(createSellerProduct.pending,(state)=>{
        state.loading=true;
    })
    .addCase(createSellerProduct.fulfilled,(state,action)=>{
        state.loading = false;
        state.products.push(action.payload);  
     })
    .addCase(createSellerProduct.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.error.message
    })

   }

})


export default sellerProductSlice.reducer;