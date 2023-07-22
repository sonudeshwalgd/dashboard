import React from 'react'
import { styled } from 'styled-components'
import ItemSoldRow from '../../../../core/common/ItemSoldRow'
import Autocomplete from '@mui/joy/Autocomplete';

const ItemSoldData=[
  {
    img:"",
    title:"Sashimi",
    item:"430"
  },
  {
    img:"",
    title:"Unagi - Grilled - Eel",
    item:"200"
  },
  {
    img:"",
    title:"Soba - BuckWheat Noodles",
    item:"180"
  },
  {
    img:"",
    title:"Onigiri Rice Balls",
    item:"120"
  },
  {
    img:"",
    title:"Yakitori - Grilled Chicken",
    item:"80"
  },
]

const CompanySize=()=>{
  return(
      <Autocomplete
      placeholder="Best Sellers"
      options={["Best Seller","Dealer"]}
      sx={{ width: "180px" ,border:"3px solid #5541d7", color:"#5541d7", outline:"none", opacity:"1",fontWeight:"600" ,fontSize:"16px" ,marginTop:"8px",background:"#fff"}}
      name="Best Sellers"
      />
      )
  }

export default function ItemSold() {
  return (
    <Wrapper>
          <div className="header">
            <h3 className='title'>Latest Order</h3>
            <CompanySize/>
          </div>
      <div className="main">
        {
          ItemSoldData.map(ele=><ItemSoldRow key={ele} {...ele}/>)
        }
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.div`
position: relative;
width: 100%;
background-color: white;
border-radius: 10px;
padding: 20px;
.header{
  padding-bottom: 16px;
  /* padding-top: 8px; */
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.main{
  border-top: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  padding:20px 0 ;
}

`
