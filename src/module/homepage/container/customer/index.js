import React from 'react'
import { styled } from 'styled-components'
import dashboardImages from '../../../../assets/images/dashboard'
import Search from './Search'
import CustomerList from './CustomerList'

export default function Index() {
  return (
    <Wrapper>
        <h2>Customer</h2>
        <div className="content">
        <Search/>   
        <CustomerList/> 
        </div>

    </Wrapper>
  )
}

const Wrapper=styled.div`
position: relative;
width: 100%;
background-color: #f7f7fc;
 flex:1;
 border-radius: 10px;
 position: relative;
 padding: 0 30px;
h2{
    padding: 34px 0;
}
.content{
    border-radius: 10px;
    overflow: hidden;
 background-color: white;

}

`
