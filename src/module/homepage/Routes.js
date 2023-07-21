import React from 'react'
import { Outlet, Route } from 'react-router-dom'
import NOTFOUND404 from '../../core/common/NOTFOUND404'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import DashboardHeader from "./../../core/common/DashboardHeader.js"
import DashboardSidebar from "./../../core/common/DashboardSidebar.js"
import { styled } from 'styled-components'



export const HomepageRoutes=[
<Route  path="/dashborad/*" element={<Dashboard/>}/>,
<Route  path="/orders" element={<Orders/>}/>,
<Route  path="/customer" element={<Orders/>}/>,


  <Route path="/*" element={<NOTFOUND404/>}/>
]

export  function HomePageOutlet() {
  return (
    <>
    <Wrapper>
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

