import React from 'react'
import { styled } from 'styled-components'
import dashboardImages from '../../../../assets/images/dashboard'
import CommonInput from '../../../../core/common/CommonInput'
import ProfilePic from './ProfilePic'

const inputData=[
  {
    id:"name",
    title:"ID",
    placeholder:"Enter your ID",
    type:"text",
  },
  {
    id:"product_name",
    title:"Product Name",
    placeholder:"Enter your Product Name",
    type:"text",
  },
  {
    id:"category",
    title:"Category",
    placeholder:"Enter product category",
    type:"dropdown",
    dropdownList:["Drinks","Foods","Beverages","Cocktails","Mocktails"]
  },
  {
    id:"price",
    title:"Price",
    placeholder:"Enter product price",
    type:"text",
  },
  {
    id:"description",
    title:"Description",
    placeholder:"Enter product description",
    type:"textarea",
  },
]

export default function EditProductForm() {
  return (
    <Wrapper>
      <CommonInput {...inputData[0]}/>
      <ProfilePic/>
      <CommonInput {...inputData[1]}/>
      <CommonInput {...inputData[2]}/>
      <CommonInput {...inputData[3]}/>
      <CommonInput {...inputData[4]}/>
    </Wrapper>
  )
}

const Wrapper=styled.div`
position: relative;
width: 100%;
 flex:1;
 position: relative;
 display: flex;
 flex-direction: column;
 padding: 20px;
 padding-top: 25px;
 gap: 20px;



`
