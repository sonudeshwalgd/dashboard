import React from "react";
import { styled } from "styled-components";
import dashboardImages from "../../assets/images/dashboard";
import { NavLink } from "react-router-dom";

const sidebarData=[
  {
    img:dashboardImages.customer,
    path:"dashborad",
  },
  {
    img:dashboardImages.orders,
    path:"orders/"
  },
  {
    img:dashboardImages.customer,
    path:"customer/"
  },
  {
    img:dashboardImages.packages,
    path:"edit-product/"
  },
  {
    img:dashboardImages.discountCoupn,
    path:"discount-coupon"
  },
  {
    img:dashboardImages.user,
    path:"user/"
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
