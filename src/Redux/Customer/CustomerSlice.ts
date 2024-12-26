import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";
import { user } from "../../Types/UserType";


export const fetchCustomerProfile = createAsyncThunk("/customer/fetchCustomerProfile", 
    async (jwt:string ,{rejectWithValue})=> {
   try {
       const response = await api.get("/api/user/profile",{
        headers:{
            Authorization:`Bearer ${jwt}`
        }
       });
       console.log("fetchCustomerProfile ...", response);
       return response.data;
   } catch (error) {
       console.log("fetchCustomerProfile error ...", error);
   }
})


export const addAddress = createAsyncThunk<any,{jwt:string, request:any}>("/customer/addAddress", 
    async ({jwt,request} ,{rejectWithValue})=> {
   try {
       const response = await api.post("/api/user/add-address", request, {
        headers:{
            Authorization:`Bearer ${jwt}`
        }
       });
       console.log("addAddress ...", response);
       return response.data;
   } catch (error) {
       console.log("addAddress error ...", error);
       return rejectWithValue("Failed to addAddress...");
   }
})


export const userLogout=createAsyncThunk("/auth/userLogout", 
    async (_,{rejectWithValue})=> {
   try {
       localStorage.clear();

       console.log("logout");
   } catch (error) {
       console.log("logout error ...", error);
   }
})




 interface userState{
    userProfile:user | null | undefined,
    loading:boolean,
    error: any,
    profileUpdated:boolean
}

const initialState:userState = {

    userProfile : null,
    loading : false,
    error : null,
    profileUpdated:false

}



const customerSlice = createSlice({
    name:"customer",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchCustomerProfile.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchCustomerProfile.fulfilled,(state,action)=>{
            state.loading = false;
            state.userProfile = action.payload;  
         })
        .addCase(fetchCustomerProfile.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
            state.userProfile = null;   
        })


        builder.addCase( userLogout.pending,(state)=>{
            state.loading = true;
            state.userProfile = null;
        })
        .addCase( userLogout.fulfilled,(state,action)=>{
            state.loading = false;
            state.userProfile = null;     
         })
        .addCase( userLogout.rejected,(state,action)=>{
            state.loading = false;
            state.userProfile = null;
        })

       

           
        builder.addCase( addAddress.pending,(state)=>{
            state.loading = true;
        })
        .addCase( addAddress.fulfilled,(state,action)=>{
            state.loading = false;
            if(state.userProfile){
                state.userProfile?.address?.push(action.payload);
            }    
           
         })
        .addCase( addAddress.rejected,(state,action)=>{
            state.loading = false;
        })
        
        

    }
})


export default customerSlice.reducer;