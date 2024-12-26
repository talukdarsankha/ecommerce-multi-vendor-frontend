import React from "react";
import AdminDrawerList from "../../Components/AdminDrawerList";
import AdminRoutes from "../../../Routes/AdminRoutes";

function AdminDashboard() {
  const toggleDrawer = () => {
    console.log("toggleDrawer");
  };

  return (
    <div className="lg:flex lg:h-[90vh] pt-2">
      <div className="hidden lg:block h-full">
        <AdminDrawerList toggleDrawer={toggleDrawer} />
      </div>

      <div className="p-10 md:pt-20 w-full xlg:w-[80%] h-full overflow-y-auto">
        <AdminRoutes />
      </div>
    </div>
  );
}

export default AdminDashboard;
