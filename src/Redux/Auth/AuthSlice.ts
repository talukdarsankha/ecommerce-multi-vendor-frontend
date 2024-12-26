import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { string } from "yup";
import { api } from "../../Config/Api";
import { useState } from "react";



  interface SendOtpData {
    email: string;
    role?: string; // Make 'role' optional
  }

export const sendLoginRegisterOtp = createAsyncThunk("/auth/sendLoginRegisterOtp", 
     async ({email,role}:SendOtpData ,{rejectWithValue})=> {
    try {
        const response = await api.post("/auth/sent/otp",{email,role})
        console.log("sent otp resnose ...", response);

        return response.data;
    } catch (error) {
        console.log("sent otp resnose ...", error);
    }
})


export const userSignup=createAsyncThunk<any,any>("/auth/userSignup", 
    async (signupUser,{rejectWithValue})=> {
   try {
       const response = await api.post("/auth/signup",signupUser);
       const jwt = response.data.jwt;
       if(jwt){
         localStorage.setItem("jwt", jwt);
       }
       console.log("jwt is", jwt);
     
       console.log("userSignup resnose ...", response);
       return response.data;
   } catch (error) {
       console.log("userSignup resnose ...", error);
   }
})


export const userLogin=createAsyncThunk<any,any>("/auth/userLogin", 
    async (loginRequest,{rejectWithValue})=> {
   try {
       const response = await api.post("/auth/signin",loginRequest);
       const jwt = response.data.jwt;
       if(jwt){
         localStorage.setItem("jwt", jwt);
       }
       console.log("jwt is", jwt);

       console.log("userLogin resnose ...", response,loginRequest);
       return response.data;
   } catch (error) {
       console.log("userLogin error ...", error,loginRequest);
   }
})



export const sellerSignup=createAsyncThunk<any,any>("/auth/sellerSignup", 
    async (signupseller,{rejectWithValue})=> {
   try {
       const response = await api.post("/auth/signup-seller",signupseller);
       const data = response.data;
     
       console.log("seller signup resnose ...", response);
       return response.data;
   } catch (error) {
       console.log("seller signup resnose ...", error);
   }
})


export const sellerLogin=createAsyncThunk<any,any>("/auth/sellerLogin", 
    async (loginRequest,{rejectWithValue})=> {
   try {
       const response = await api.post("/auth/signin-seller",loginRequest);
       const jwt = response.data.jwt;
       if(jwt){
         localStorage.setItem("jwt", jwt);
       }
       console.log("jwt is", jwt);
       console.log("seller Login resnose ...", response,loginRequest);

       return response.data;
   } catch (error) {
       console.log("seller Login error ...", error,loginRequest);
   }
})



// export const logout=createAsyncThunk("/auth/logout", 
//     async (_,{rejectWithValue})=> {
//    try {
//        localStorage.clear();

//        console.log("logout");
//    } catch (error) {
//        console.log("logout error ...", error);
//    }
// })








interface authState{
    jwt: string | null | undefined;
    otpResponse : any;
    loading : boolean;
    error : string | null | undefined;
}


const initialState:authState = {
    jwt: "",
    otpResponse : null,
    loading : false,
    error :  null
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(sendLoginRegisterOtp.pending,(state)=>{
            state.loading = true;
        })
        .addCase(sendLoginRegisterOtp.fulfilled,(state,action)=>{
            state.loading = false;
            state.otpResponse = action.payload;  
         })
        .addCase(sendLoginRegisterOtp.rejected,(state,action)=>{
            state.loading = false;
            state.otpResponse = null;  
            state.error = action.error.message
        })


        builder.addCase(userSignup.pending,(state)=>{
            state.loading = true;
            state.jwt = "";
        })
        .addCase(userSignup.fulfilled,(state,action)=>{
            state.loading = false;
            state.jwt = action.payload.jwt;        
         })
        .addCase(userSignup.rejected,(state,action)=>{
            state.loading = false;
            state.jwt = "";
            state.error = action.error.message
        })



        builder.addCase( userLogin.pending,(state)=>{
            state.loading = true;
            state.jwt = "";
        })
        .addCase( userLogin.fulfilled,(state,action)=>{
            state.loading = false;
            state.jwt = action.payload.jwt;  
            
            
         })
        .addCase( userLogin.rejected,(state,action)=>{
            state.loading = false;
            state.jwt = "";
            state.error = action.error.message
        })


        builder.addCase( sellerLogin.pending,(state)=>{
            state.loading = true;
            state.jwt = "";
        })
        .addCase( sellerLogin.fulfilled,(state,action)=>{
            state.loading = false;
            state.jwt = action.payload.jwt;                
         })
        .addCase( sellerLogin.rejected,(state,action)=>{
            state.loading = false;
            state.jwt = "";
            state.error = action.error.message
        })

    }
})


export default authSlice.reducer;



// export const getUserTweets=(userId)=>async (dispatch)=>{
//     dispatch({type:GET_USER_ALL_TWEETS_REQUEST});
//     try {
//         const {data} = await api.get(`/api/tweets/user/${userId}`)
//         dispatch({type:GET_USER_ALL_TWEETS_SUCCESS,payload:data})
//     } catch (error) {
//         console.log(error.message);
//         dispatch({type:GET_USER_ALL_TWEETS_FAILURE,payload:error.message})
//     }
// }


