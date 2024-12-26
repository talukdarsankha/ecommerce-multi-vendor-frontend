import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";


export const fetchSellerProfile = createAsyncThunk("/seller/fetchSellerProfile", 
    async (jwt:string ,{rejectWithValue})=> {
   try {
       const response = await api.get("/api/seller/profile",{
        headers:{
            Authorization:`Bearer ${jwt}`
        }
       });
       console.log("fetchSellerProfile ...", response);
       return response.data;
   } catch (error) {
       console.log("fetchSellerProfile error ...", error);
   }
})



export const sellerLogout=createAsyncThunk("/auth/sellerLogout", 
    async (_,{rejectWithValue})=> {
   try {
       localStorage.clear();

       console.log("logout");
   } catch (error) {
       console.log("logout error ...", error);
   }
})



interface sellerState{
    sellers: any[],
    selectedSeller : any,
    sellerprofile : any,
    report : any,
    loading : boolean,
    error : any
}

const initialState:sellerState = {
    sellers:[],
    selectedSeller : null,
    sellerprofile : null,
    report : null,
    loading : false,
    error : null

}



const sellerSlice = createSlice({
    name:"seller",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchSellerProfile.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchSellerProfile.fulfilled,(state,action)=>{
            state.loading = false;
            state.sellerprofile = action.payload;          
         })
        .addCase(fetchSellerProfile.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        builder.addCase( sellerLogout.pending,(state)=>{
            state.loading = true;
            state.sellerprofile = null;
        })
        .addCase( sellerLogout.fulfilled,(state,action)=>{
            state.loading = false;
            state.sellerprofile = null;
         })
        .addCase( sellerLogout.rejected,(state,action)=>{
            state.loading = false;
            state.sellerprofile = null;
        })
        
    }
})


export default sellerSlice.reducer;