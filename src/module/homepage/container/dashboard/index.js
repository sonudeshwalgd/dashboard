import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import _Slug from "./_slug";
import dashboardImages from "../../../../assets/images/dashboard";


const mainProductsSubData=[
  {
    title:"All",
    path:"all",
    slug:["food","drinks","snack","packages"]
  },
  {
    title:"Food",
    path:"food",
    slug:["food"]
  },
  {
    title:"Drinks",
    path:"drinks",
    slug:["drinks"]
  },
  {
    title:"Snack",
    path:"snack",
    slug:["snack"]
  },
  {
    title:"Packages",
    path:"packages",
    slug:["packages"]
  },
]

export default function Index() {
  const mainProductsSubRoutes = [<Route path ="/*" element={<_Slug />} />];

  return (
    <>
      <Wrapper>
        
        <div className="search">
          <img src={dashboardImages.search} alt="" />
            <input placeholder="Search Here..." type="text" />
        </div>
        <div className="navbar">
          {mainProductsSubData.map(ele=>(
            <NavLink
              key={ele?.path}
              to={{
                pathname:ele?.path,
                state:{name:"ele.slug"}
              }}
              className={({ isActive, isPending }) =>
                isPending ? "pending link" : isActive ? "active link" : "link"
              }
            >
              {ele?.title}
            </NavLink>
          ))}
        </div>
        <Routes>{mainProductsSubRoutes}</Routes>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
 margin: 30px;
 flex:1;
 background-color: white;
 border-radius: 10px;
 position: relative;
 padding-top: 10px;

  .navbar{
    display: flex;
  }
  .link{
    flex: 1;
    text-decoration: none;
    justify-content: center;
    text-align: center;
    border-bottom: 4px solid #ccc;
    padding: 16px;
    font-weight: 600;
    color: #ccc;
    
  }
  .active{
    color: black;
    border-bottom: 4px solid #5541d7;
  }
  .search{
    margin: 20px;
    flex: 1;
    position: relative;
    flex-direction: row;
    display: flex;
    background-color: #f7f7fc;
    border-radius: 10px;
    padding-left: 20px;
    /* border: solid; */
    /* margin-top: 20px !important; */
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
`;
