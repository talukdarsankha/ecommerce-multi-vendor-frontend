import { Divider, ListItemIcon } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Redux/Store";
import { sellerLogout } from "../Redux/Seller/SellerSlice";

interface drawerListProps {
  menu1: any[];
  menu2: any[];
  toggleDrawer: () => void;
}

function DrawerList({ menu1, menu2, toggleDrawer }: drawerListProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(sellerLogout());
  };

  return (
    <div className="h-full">
      <div className="flex flex-col justify-between h-full w-[300px] border-r py-5">
        <div className="space-y-2">
          {menu1.map((item, i) => (
            <div key={i} className=" cursor-pointer pr-9">
              <p
                className={`${
                  item.path == location.pathname
                    ? "bg-customColor text-white"
                    : "text-gray-600"
                } py-3 px-5 rounded-r-full flex items-center gap-3`}
                onClick={() => navigate(item.path)}
              >
                {item.path == location.pathname ? item.activeIcon : item.icon}

                {item.name}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <Divider />
          {menu2.map((item, i) => (
            <div key={i} className=" cursor-pointer pr-9">
              <p
                onClick={() => {
                  if (item.path === "/") {
                    handleLogout();
                  }
                  navigate(item.path);
                }}
                className={`${
                  item.path == location.pathname
                    ? "bg-customColor text-white"
                    : "text-gray-600"
                } py-3 px-5 rounded-r-full flex items-center gap-3`}
              >
                {item.path == location.pathname ? item.activeIcon : item.icon}

                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DrawerList;
