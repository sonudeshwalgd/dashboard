import React from 'react'
import { styled } from 'styled-components'
import LatestOrdersRow from '../../../../core/common/LatestOrdersRaw'

const latestOrdersData=[
  {
    no:"01",
    item:"Sashimi",
    quantity:"30",
    currency:"$",
    revenue:"293.01",
    profit:"710.68"
  },
  {
    no:"02",
    item:"Unagi ",
    quantity:"30",
    currency:"$",
    revenue:"293.01",
    profit:"710.68"
  },
  {
    no:"03",
    item:"Sashimi",
    quantity:"30",
    currency:"$",
    revenue:"293.01",
    profit:"710.68"
  },
  {
    no:"04",
    item:"Sashimi",
    quantity:"30",
    currency:"$",
    revenue:"293.01",
    profit:"710.68"
  },
  {
    no:"05",
    item:"Sashimi",
    quantity:"30",
    currency:"$",
    revenue:"293.01",
    profit:"710.68"
  },
  {
    no:"06",
    item:"Unagi ",
    quantity:"30",
    currency:"$",
    revenue:"293.01",
    profit:"710.68"
  },
  {
    no:"07",
    item:"Sashimi",
    quantity:"30",
    currency:"$",
    revenue:"293.01",
    profit:"710.68"
  },
  {
    no:"08",
    item:"Sashimi",
    quantity:"30",
    currency:"$",
    revenue:"293.01",
    profit:"710.68"
  },

]

export default function LatestOrderList() {
  return (
    <Wrapper>
      <h3 className='title'>Latest Order</h3>
      <div className="main">
        <table>
        <thead className='thead'>
          <td>
            <tr>No.</tr>
            <tr>Item</tr>
            <tr>Quantity</tr>
            <tr>Revenue</tr>
            <tr>Net Profit</tr>
          </td>
        </thead>
        <tbody>
          {
           latestOrdersData.map(ele=><LatestOrdersRow {...ele}/>)
          }
        </tbody>
        </table>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.div`
position: relative;
width: 100%;
border-radius: 10px;
background-color: white;
padding: 24px 10px;
.title{
  padding-bottom: 4px;
  padding-top: 8px;
  font-size: 16px;
}
table{
  width: 100%;
  .thead{
    width: 100%;
    td{
      display: flex;
      padding: 20px;
      background-color: #f7f7fc;
      color: #3f4156;
      font-weight: 600;
      font-size: 16px;
      border-top: 1px solid  #ccc;
      border-bottom: 1px solid  #ccc;
    }
  }

  tr{
    &:nth-child(1){
      width: 80px;
    }
    &:nth-child(2){
      flex:1
    }   
     &:nth-child(3),&:nth-child(4),&:nth-child(5){
      width: 150px;
    }

  }
  tbody{
    td{
      display: flex;
      font-display: row;
      padding: 16px;
      border-bottom: 1px solid  #ccc;


    }
    tr{
      padding-left: 10px;
    }
  }

}

`
