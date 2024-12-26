import {
  Button,
  CircularProgress,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import AddressCard from "./AddressCard";
import {
  Add,
  AddLocation,
  ArrowBack,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import AddressForm from "./AddressForm";
import PriceCard from "../Cart/PriceCard";
import { useAppDispatch, useAppSelector } from "../../../Redux/Store";
import { createOrder } from "../../../Redux/Customer/OrderSlice";
import { string } from "yup";
import Navbar from "../../Component/Navbar";
import CustomTheme from "../../../Theme/CustomTheme";

const paymentMethods = [
  {
    img: "https://cdn.prod.website-files.com/6584d3c7e9c648618ca2ec43/65c519f3e5d4c8f86f3b712f_razorpay.webp",
    value: "RAZORPAY",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBW069Q2RibhhBtHn9i_8P1cidYsCq5Zlq9XM8P636D4gxlI1cpTq6H9crjbOOqYOvgaQ&usqp=CAU",
    value: "STRIPE",
  },
];

// const addresses = ["add1","add2","add3"];




function Checkout() {

  const [addressOpen, setAddressOpen] = React.useState(false);
  const handleOpen = () => setAddressOpen(true);
  const handleClose = () => setAddressOpen(false);


  const [selectedpaymentMethod, setSelectedpaymentMethod] = useState("RAZORPAY");
  const handlePayment = (event: any) => setSelectedpaymentMethod(event.target.value);

  const [showAllAddress, setShowAllAddress] = React.useState(false);
  const handleShowAllAddress = () => setShowAllAddress(!showAllAddress);




  const {customer, userOrder} = useAppSelector(store=>store);


  const [selectedAddressId, setSelectedAddressId] = useState(customer.userProfile?.address?.[0]?.id || 0);
  const handleSelectedAddress = (event: any) =>{
    setSelectedAddressId(event.target.value);
    console.log("event.target.value", event.target.value);
  } 


  const dispatch = useAppDispatch();
 
  const handleCreateOrder = ()=>{
    const data = {jwt:localStorage.getItem("jwt")|| "", addressId:selectedAddressId, paymentMethod:selectedpaymentMethod};
    console.log(data)
     dispatch(createOrder(data))
  }

  return (
    <div>
      <ThemeProvider theme={CustomTheme}>
        <Navbar/>
      </ThemeProvider>
      
      <div className="py-10 px-5 sm:px-12 md:px-24 lg:px-36">
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-3">
          <div className="col-span-2 space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Select Any Address</h1>
              <Button onClick={handleOpen} variant="outlined" startIcon={<Add />}>
                Add Address
              </Button>
            </div>

            <div className="text-sm font-medium space-y-5">
              <p className="text-slate-600">Saved address</p>

              {/* {addresses.length>0 && <div> */}
              {customer.userProfile?.address && <div>
                
                <RadioGroup
                  row
                  aria-labelledby="addressRadio"
                  name="addressRadio"
                  onChange={handleSelectedAddress}
                  value={selectedAddressId}
                  className="flex justify-center"
                >
                  <div className="space-y-3 w-full">
                                {/* slice(0, showAllAddress ? addresses.length : 1) */}
                    {customer.userProfile?.address?.slice(0, showAllAddress ? customer.userProfile?.address?.length : 1)
                      .map((item, i) => (
                        <FormControlLabel
                          sx={{marginLeft:"0px", paddingLeft:"10px"}}
                          className=" border-[1.5px] rounded-md w-full"
                          key={i}
                          value={item?.id}
                          control={<Radio />}
                          label={<AddressCard item={item} />}
                        />
                      ))}
                  </div>
                </RadioGroup>
              </div>}

            </div>

            <div className="py-2 px-5 border rounded-md">
              <Button
                onClick={handleShowAllAddress}
                startIcon={
                  !showAllAddress ? <KeyboardArrowDown /> : <KeyboardArrowUp />
                }
                color="success"
              ></Button>
            </div>

            <div className="py-4 px-5 border rounded-md">
              <Button
                onClick={handleOpen}
                startIcon={<AddLocation />}
                color="success"
              >
                Add new Address
              </Button>
            </div>
          </div>

          <div className="col-span-1 lg:h-screen lg:sticky top-0">
            <div className="border-2 rounded-md mb-3 p-2 flex-col">
              <h1 className="text-center text-customColor font-semibold py-3">
                Choose Payment Method
              </h1>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={handlePayment}
                value={selectedpaymentMethod}
                className="flex justify-center"
              >
                {paymentMethods.map((item) => (
                  <FormControlLabel
                    className="pl-2 pr-4 border-[1.5px] rounded-md"
                    key={item.value}
                    value={item.value}
                    control={<Radio />}
                    label={
                      <img className="w-[42px]" src={item.img} alt={item.value} />
                    }
                  />
                ))}
              </RadioGroup>
            </div>

            <div className="border-2 rounded-md">
              <PriceCard />
              <div className="p-5">
                <Button disabled={userOrder.loading} onClick={handleCreateOrder} variant="contained" fullWidth sx={{ py: ".6rem" }}>
                    {userOrder.loading ? (
                      <CircularProgress color="warning" size={24} />
                    ) : (
                      "Pay Now"
                    )}
                </Button>
              </div>
            </div>
          </div>
        </div>

            {/* Modal */}
        <AddressForm open={addressOpen} handleClose={handleClose} />
      </div>
    </div>
    
  );
}

export default Checkout;
