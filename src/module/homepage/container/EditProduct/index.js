import React from 'react'
import { styled } from 'styled-components'
import EditProductForm from './EditProductForm'

export default function Index() {
  return (
    <Wrapper>
        <h2>Edit Product</h2>
        <div className="content">
        <EditProductForm/>   
        </div>
        <div className='btn'>
          <button className='primary-btn'>Save</button>
          <button className='secondary-btn'>Cancel</button>

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
.btn{
  display: flex;
  flex-direction: row;
  padding: 20px 0;
  gap: 26px;
}

`
