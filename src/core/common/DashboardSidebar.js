import React from "react";
import { styled } from "styled-components";
import dashboardImages from "../../assets/images/dashboard";
import { NavLink } from "react-router-dom";

const sidebarData=[
  {
    img:dashboardImages.customer,
    path:"dashborad/",
  },
  {
    img:dashboardImages.orders,
    path:"dashborad/order/"
  },
  {
    img:dashboardImages.customer,
    path:"dashborad/customer/"
  },
  {
    img:dashboardImages.packages,
    path:"dashborad/package/"
  },
  {
    img:dashboardImages.discountCoupn,
    path:"dashborad/discount-coupon"
  },
  {
    img:dashboardImages.user,
    path:"dashborad/user/"
  },
  
]

export default function DashboardSidebar() {
  return (
    <Wrapper>
      {sidebarData.map(ele=>(
        <NavLink
          kay={ele?.path}
          to={ele?.path}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <img src={ele?.img}/>
        </NavLink>

      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap:38px;
padding: 40px;
.active{
  background-color: #5541d7;
  color: white !important;
  border-radius: 10px;
}
img{
  padding: 12px;
}

`
