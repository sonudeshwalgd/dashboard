import { styled } from "styled-components";
import Index from "../container/Orders";
import ItemSold from "../container/Orders/ItemSold";
import LatestOrderList from "../container/Orders/LatestOrderList";

const  Orders=()=><>
        <Wrapper>
          <Index/>
        <div className="flex">
             <div className="latestOrders">
          <LatestOrderList/>
                </div>   
          <div className="itemSold">

          <ItemSold/>         
          </div>
        </div>
        </Wrapper>

</>

export default Orders

const Wrapper=styled.div`
background-color: #f7f7fc;
flex: 1;
padding: 40px;
.flex{
        display: flex;
        flex-direction: row;
        gap: 50px;
        padding-top: 20px;
        .latestOrders{
                flex:1;
                position: relative;
        }
        .itemSold{
                width: 350px;
                position: relative;
        }
}
`