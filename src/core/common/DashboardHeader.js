import React from 'react'
import { styled } from 'styled-components'
import  dashboardImages from '../../assets/images/dashboard'




export default function DashboardHeader({brand="Dazzie",name="Sumanto",post="Cashier"}) {
  return (
    <Wrapper>
      <div className="left">
        <img src={dashboardImages.user} alt="brand "/>
        <h2>{brand}</h2>
      </div>
      <div className="right">
        <img src={dashboardImages.notificationBell} alt="bell" />
        <img src={dashboardImages.user} alt="profile" />
        <span className='detail'>
          <h4>{name}</h4>
          <p>{post}</p>
        </span>

      </div>

    </Wrapper>
  )
}

const Wrapper=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
width: 100%;
padding: 15px 4vw 15px 25px;
border-bottom: 1px solid #ccc;
.left{
  display: flex;
  align-items: center;
  gap: 10px;
}
.right{
  display: flex;
  align-items: center;
  gap: 25px;
  span{
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-left: -15px;
    h4{

    }
    p{
      font-size: 12px;
      color: #ccc;
    }
  }

}


`