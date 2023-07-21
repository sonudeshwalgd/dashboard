import { styled } from "styled-components";
import ProgressCard from "../../../../core/common/ProgressCard";

const cardData=[
  {
    title:"Customer",
    positive:"0",
    value:"1000",
    currency:"$",
    percentage:"15",
  },
  {
    title:"Orders",
    positive:"1",
    value:"1050",
    currency:"$",
    percentage:"20",
  },
  {
    title:"Revenue",
    positive:"1",
    value:"50.000",
    currency:"$",
    percentage:"10",
  },
  {
    title:"Nett Profit",
    positive:"1",
    value:"12.000",
    currency:"$",
    percentage:"12",
  },
]


export default function Index() {
  return (
    <>
      <Wrapper>
        <div className="header">
          {
            cardData.map(ele=>(
              <div className="card-wrappper">
                <ProgressCard {...ele}/>
              </div>
            ))
          }

        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
 flex:1;
 position: relative;
 padding: 45px 20px 20px ;
 .header{
   display:flex;
  flex-direction: row;
  gap: 40px;
 }
.card-wrappper{
  width: 25%;
}
`;
