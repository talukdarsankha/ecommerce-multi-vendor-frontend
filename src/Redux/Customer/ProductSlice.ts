import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";
import { Product } from "../../Types/ProductType";



export const fetchProductById = createAsyncThunk<any,number>("/customerProduct/fetchProductById", 
    async (productId ,{rejectWithValue})=> {
   try {
       const response = await api.get(`/product/${productId}`);
       console.log("fetchProductById ...", response.data);
       return response.data;
   } catch (error:any) {
       console.log("fetchProductById error ...", error);
       rejectWithValue(error.message)
   }
})


export const fetchAllProducts = createAsyncThunk<any,any>("/customerProduct/fetchAllProducts", 
    async (params ,{rejectWithValue})=> {
   try {
       const response = await api.get(`/product/`,{
        params:{
            ...params, 
            pageNumber:params.pageNumber || 0
        }
       });
       console.log("fetchAllProducts ...", response.data);
       return response.data;
   } catch (error:any) {
       console.log("fetchAllProducts error ...", error);
       rejectWithValue(error.message)
   }
})


export const searchProduct = createAsyncThunk("/customerProduct/searchProduct", 
    async (query ,{rejectWithValue})=> {
   try {
       const response = await api.get(`/product/search`,{
        params:{
            query:query
        }
       });
       console.log("searchProduct ...", response.data);
       return response.data;
   } catch (error:any) {
       console.log("searchProduct error ...", error);
       rejectWithValue(error.message)
   }
})







interface sellerState{
    product: Product | null;
    pageable : any | null;
    totalPages : number;
    searchProducts : Product[];
    loading : boolean;
    error : string | null | undefined;
}


const initialState:sellerState = {
    product: null,
    pageable : null,
    totalPages : 1,
    searchProducts : [],
    loading : false,
    error :  null
}




const customerProductSlice = createSlice({
    name:"customerProduct",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProductById.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchProductById.fulfilled,(state,action)=>{
            state.loading = false;
            state.product = action.payload;          
         })
        .addCase(fetchProductById.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })


        builder.addCase(fetchAllProducts.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchAllProducts.fulfilled,(state,action)=>{
            state.loading = false;
            state.pageable = action.payload;        // here action.payload is response.data and response.data is an object of pageable  so  action.payload.content is actual object of products 
         })
        .addCase(fetchAllProducts.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })



        builder.addCase(searchProduct.pending,(state)=>{
            state.loading = true;
        })
        .addCase(searchProduct.fulfilled,(state,action)=>{
            state.loading = false;
            state.searchProducts = action.payload;          
         })
        .addCase(searchProduct.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })
        
    }
})


export default customerProductSlice.reducer;

