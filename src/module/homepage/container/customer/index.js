import React from 'react'
import { styled } from 'styled-components'
import dashboardImages from '../../../../assets/images/dashboard'
import Search from './Search'

export default function Index() {
  return (
    <Wrapper>
        <h2>Customer</h2>
        <Search/>    

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
    padding: 50px 0;
}

`
