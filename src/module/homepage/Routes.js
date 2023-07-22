import React from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom'
import NOTFOUND404 from '../../core/common/NOTFOUND404'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import Customer from './pages/Customer'
import DashboardHeader from "./../../core/common/DashboardHeader.js"
import DashboardSidebar from "./../../core/common/DashboardSidebar.js"
import { styled } from 'styled-components'
import EditProduct from './pages/EditProduct'
import { useLocation } from 'react-router-dom'

export const HomepageRoutes=[
<Route  path="/dashborad/*" element={<Dashboard/>}/>,
<Route  path="/orders" element={<Orders/>}/>,
<Route  path="/customer" element={<Customer/>}/>,
<Route  path="/edit-product" element={<EditProduct/>}/>,


  <Route path="/*" element={<NOTFOUND404/>}/>
]

export  function HomePageOutlet() {

  const {pathname} =useLocation()
  return (
    <>
    <Wrapper>
      {pathname=="/" && <Navigate to="dashborad"/>}
        <DashboardHeader/>
        <div className='flex'>
          <div className="sidebar">
            <DashboardSidebar/>
          </div>
          <Outlet/>
        </div>
    </Wrapper>
    </>
  )
}
const Wrapper=styled.div`
.sidebar{
  border-right:1px solid #e1e1e1;
}
.flex{
  display: flex;
  
}



`

