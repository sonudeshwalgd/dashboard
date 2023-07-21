import React from 'react'
import { styled } from 'styled-components'
import LatestOrdersRow from '../../../../core/common/LatestOrdersRaw'
import CustomerRow from '../../../../core/common/CustomerRow'

const latestOrdersData=[
  {
    id:"XXX1",
    name:"Arlene McCoy",
    join_date:"1 February 2021",
    total_visit:"2",
    purchased_item:"americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
    total_spend:"490.5.",
    currency:"$"
  },
  {
    id:"XXX1",
    name:"Arlene McCoy",
    join_date:"1 February 2021",
    total_visit:"2",
    purchased_item:"americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
    total_spend:"490.5.",
    currency:"$"
  },
  {
    id:"XXX1",
    name:"Arlene McCoy",
    join_date:"1 February 2021",
    total_visit:"2",
    purchased_item:"americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
    total_spend:"490.5.",
    currency:"$"
  },
  {
    id:"XXX1",
    name:"Arlene McCoy",
    join_date:"1 February 2021",
    total_visit:"2",
    purchased_item:"americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
    total_spend:"490.5.",
    currency:"$"
  },
  {
    id:"XXX1",
    name:"Arlene McCoy",
    join_date:"1 February 2021",
    total_visit:"2",
    purchased_item:"americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
    total_spend:"490.5.",
    currency:"$"
  },
  {
    id:"XXX1",
    name:"Arlene McCoy",
    join_date:"1 February 2021",
    total_visit:"2",
    purchased_item:"americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
    total_spend:"490.5.",
    currency:"$"
  },


]

export default function CustomerList() {
  return (
    <Wrapper>
      <div className="main">
        <table>
        <thead className='thead'>
          <td>
            <tr>ID</tr>
            <tr>Name</tr>
            <tr>Join Date</tr>
            <tr>Total Visit</tr>
            <tr>Purchased Items</tr>
            <tr>Total Spend</tr>
          </td>
        </thead>
        <tbody>
          {
           latestOrdersData.map(ele=><CustomerRow {...ele}/>)
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
     &:nth-child(3),&:nth-child(4),&:nth-child(6){
      width: 160px;
    }
    &:nth-child(5){
      flex: 1.2;
    }

  }
  tbody{
    td{
      display: flex;
      font-display: row;
      padding: 20px;
      border-bottom: 1px solid  #ccc;


    }
    tr{
      /* padding-left: 10px; */
    }
  }

}

`
