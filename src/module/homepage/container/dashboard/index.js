import React from "react";
import { NavLink, Navigate, Route, Routes ,useLocation } from "react-router-dom";
import { styled } from "styled-components";
import _Slug from "./_slug";
import dashboardImages from "../../../../assets/images/dashboard";


const mainProductsSubData=[
  {
    title:"All",
    path:"all",
    slug:["Food","Drinks","Snack","Packages"]
  },
  {
    title:"Food",
    path:"food",
    slug:["Food"]
  },
  {
    title:"Drinks",
    path:"drinks",
    slug:["Drinks"]
  },
  {
    title:"Snack",
    path:"snack",
    slug:["Snack"]
  },
  {
    title:"Packages",
    path:"packages",
    slug:["Packages"]
  },
]

export default function Index() {
  const mainProductsSubRoutes = [
  <Route path="/*" element={<_Slug />} />,
  
];

const {pathname}= useLocation()
  return (
    <>
      <Wrapper>
        {pathname=="/dashborad" && <Navigate to="all"  /> }
        
        <div className="search">
          <img src={dashboardImages.search} alt="" />
            <input placeholder="Search Here..." type="text" />
        </div>
        <div className="navbar">
          {mainProductsSubData.map(ele=>(
            <NavLink
              key={ele?.path}
              to={ele?.path} state={{ slug:ele?.slug }}
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
