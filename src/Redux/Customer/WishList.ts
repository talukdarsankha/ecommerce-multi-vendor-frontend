import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WishList } from "../../Types/WishList";
import { api } from "../../Config/Api";



export const addRemoveToWishList = createAsyncThunk< WishList, {jwt:string, productId:number}>("/wishlist/addRemoveToWishList", 
    async ({jwt, productId} ,{rejectWithValue})=> {
   try {
       const response = await api.put(`/api/wishlist/add-remove-product/${productId}`,{},{   // because in put mapping body in required so we need to pass emty body     
        headers:{
            Authorization:`Bearer ${jwt}`
        }
       });
       console.log("addRemoveToWishList ...", response.data);
       return response.data;
   } catch (error:any) {
       console.log("addRemoveToWishList error ...", error.response);
       return rejectWithValue(error.response.data.error || "addRemoveToWishList error ...")
   }
})





export const fetchUserWishList = createAsyncThunk<WishList,string>("/wishlist/fetchUserWishList", 
    async (jwt:string ,{rejectWithValue})=> {
   try {
       const response = await api.get("/api/wishlist/",{
        headers:{
            Authorization:`Bearer ${jwt}`
        }
       });
       console.log("fetchUserWishList ...", response);
       return response.data;
   } catch (error) {
       console.log("fetchUserWishList error ...", error);
       return rejectWithValue("Failed to fetchUserWishList ...");
   }
})





interface WishListState{
    userWishList:WishList | null,
    loading:boolean,
    error:string | null
}


const initialState:WishListState = {
    userWishList:null,
    loading:false,
    error:""
}




const wishListSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        
        builder.addCase(addRemoveToWishList.pending,(state)=>{
            state.loading = true;
            state.error = null
        })
        .addCase(addRemoveToWishList.fulfilled,(state,action)=>{
            state.loading = false;
            state.userWishList = action.payload
         })
        .addCase(addRemoveToWishList.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string
        })

        builder.addCase(fetchUserWishList.pending,(state)=>{
            state.loading = true;
            state.error = null
        })
        .addCase(fetchUserWishList.fulfilled,(state,action)=>{
            state.loading = false;
            state.userWishList = action.payload
         })
        .addCase(fetchUserWishList.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string
        })
        
    }
})


export default wishListSlice.reducer;

