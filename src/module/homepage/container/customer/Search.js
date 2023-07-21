import React from 'react'
import { styled } from 'styled-components'
import dashboardImages from '../../../../assets/images/dashboard'

export default function Search() {
  return (
    <Wrapper>

        <div className="search">
          <img src={dashboardImages.search} alt="" />
          <input placeholder="Search Here..." type="text" />
        </div>
        <div className="filter">
          <img src={dashboardImages.filter}/>
          <img src={dashboardImages.threeDots}/>
        </div>

    </Wrapper>
  )
}

const Wrapper=styled.div`
position: relative;
width: 100%;
 flex:1;
 position: relative;
 display: flex;
 padding: 20px;
 padding-top: 25px;
 gap: 20px;
 .search{
    flex: 1;
    position: relative;
    flex-direction: row;
    display: flex;
    background-color: #f7f7fc;
    border-radius: 10px;
    padding-left: 20px;
    overflow: hidden;
    input{
      background-color: #f7f7fc;
      border: none;
      outline: none;
      width: 100%;
      padding: 12px;
      &::placeholder{
      color: #9a9ab0;
      font-weight: 500;
    }
    }
    
  }
  .filter{
    display: flex;
    align-items: center;
    gap: 20px;
  }

`
