import React from "react";
import AddressCard from "../CheckOut/AddressCard";
import { useAppSelector } from "../../../Redux/Store";

function Address() {

  const {customer} = useAppSelector(store=>store);
  return (
    <div className="p-5 space-y-5">
      { customer.userProfile?.address?.map((item, i) => (
        <div key={i} className="border rounded-md w-full">
          <AddressCard item={item}  />
        </div>
      ))}
    </div>
  );
}

export default Address;
