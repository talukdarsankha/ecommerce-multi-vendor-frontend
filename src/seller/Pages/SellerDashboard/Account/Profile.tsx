import React from "react";
import ProfileFieldCard from "../../../../Component/ProfileFieldCard";
import { Avatar, Box, Button, IconButton, Modal } from "@mui/material";
import { Edit } from "@mui/icons-material";
import PersonalDetailsForm from "./PersonalDetailsForm";
import BankDetailsForm from "./BankDetailsForm";
import BussinessDetailsForm from "./BussinessDetailsForm";
import PickupAddressForm from "./PickupAddressForm";
import { useAppSelector } from "../../../../Redux/Store";




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: 400, // width for small screens (xs)
    sm: 500, // width for screens larger than small (sm and up)
  },
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius:4,
  boxShadow: 24,
  outline:"none",
  p: 4
};




function Profile() {

  const [modalOpen, setModalOpen] = React.useState(false);

  const [selectedForm, setSelectedForm] = React.useState("personalDetails");

  const handleModalOpen = (formName:string) => {
    setSelectedForm(formName);
    setModalOpen(true);
  
  }
  const handleModalClose = () => setModalOpen(false);


  const renderSelectedForm=()=>{
    switch (selectedForm){
      case "personalDetails":
        return <PersonalDetailsForm/>
      case "bussinessDetails":
        return <BussinessDetailsForm/>
      case "pickupDetails":
        return <PickupAddressForm/>
      default :
        return <BankDetailsForm/>
    }
  }


  const {seller} = useAppSelector(store=>store);

  return (
    <div className="flex justify-center py-10">
      <div className="w-full lg:w-[70%]">
           <Avatar
              sx={{ width: "8rem", height: "8rem" }}
              src={seller.sellerprofile?.bussinessDetails?.logo || "https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539_1280.png"}
            />

        <div className="flex justify-between items-center py-10">
          <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>
          
          <Button
           onClick={()=>handleModalOpen("personalDetails")}
           variant="contained" className="w-5 h-9">
            <Edit />
          </Button>
        </div>
        <div className="space-y-5 mt-3">
          <ProfileFieldCard keys="Seller Name" value={seller.sellerprofile?.sellerName} />
          <ProfileFieldCard keys="Email Id" value={seller.sellerprofile?.email} />
          <ProfileFieldCard keys="Contact. No :" value={seller.sellerprofile?.mobile} />
        </div>

        <div className="w-full mt-14">
          <div className="flex justify-between py-10">
           <h1 className="text-2xl font-bold text-gray-600">
              Bussiness Details
            </h1>

            <IconButton onClick={()=>handleModalOpen("bussinessDetails")}>
              <Edit />
            </IconButton>
          </div>
          <div className="space-y-5 mt-3">
            <ProfileFieldCard keys="Bussiness Name/Brand Name" value={seller.sellerprofile?.businessDetails?.businessName} />
            <ProfileFieldCard keys="GSTIN" value={seller.sellerprofile?.gstin} />
            <ProfileFieldCard keys="Account Status :" value={seller.sellerprofile?.accountStatus} />
          </div>
        </div>


        <div className="w-full mt-14">
          <div className="flex justify-between py-10">
           <h1 className="text-2xl font-bold text-gray-600">
              Pickup Address
            </h1>

            <IconButton onClick={()=>handleModalOpen("pickupDetails")} >
              <Edit />
            </IconButton>
          </div>
          <div className="space-y-5 mt-3">
            <ProfileFieldCard keys="Address" value={seller.sellerprofile?.pickUpAddress?.address} />
            <ProfileFieldCard keys="City" value={seller.sellerprofile?.pickUpAddress?.city} />
            <ProfileFieldCard keys="State" value={seller.sellerprofile?.pickUpAddress?.state} />
            <ProfileFieldCard keys="ZIP-Code" value={seller.sellerprofile?.pickUpAddress?.pinCode} />
            <ProfileFieldCard keys="Mobile" value={seller.sellerprofile?.pickUpAddress?.mobile} />
          </div>
        </div>

        <div className="w-full mt-14">
          <div className="flex justify-between py-10">
           <h1 className="text-2xl font-bold text-gray-600">
              Bank Details
            </h1>

            <IconButton onClick={()=>handleModalOpen("bankDetails")} >
              <Edit />
            </IconButton>
          </div>
          <div className="space-y-5 mt-3">
            <ProfileFieldCard keys="Account No" value={seller.sellerprofile?.bankDetails?.accountNumber}  />
            <ProfileFieldCard keys="IFSC-Code" value={seller.sellerprofile?.bankDetails?.ifscCode} />
            <ProfileFieldCard keys="Account Holder Name" value={seller.sellerprofile?.bankDetails?.accountHolderName} />
          </div>
        </div>

      </div>





      <div>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           {renderSelectedForm()}
           {/* {selectedForm}  */}
        </Box>
      </Modal>
    </div>


    </div>
  );
}

export default Profile;
