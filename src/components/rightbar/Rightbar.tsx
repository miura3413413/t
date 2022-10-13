import { NextPage } from "next"
import styled from '@emotion/styled'

const StyledDiv = styled.div`
  width: 37%;
  height: 100%;
  position: sticky;
  top: 0;
  @media(max-width: 1000px) {
    visibility: hidden;
    width: 3%;
  };
`
 

const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 40px;
  background-color: #ecf2f3;
  font-weight: bold;
  border: none;
  outline-color: #4ebefa;
  padding-left: 50px;
  margin: 10px 20px auto 20px;
  :focus {
  background-color: white;
}
`
const StyledDivInput = styled.div`
  @media(max-width: 1000px) {
    display: none;
  }
`

const StyledDivArticle = styled.div`
  width: 300px;
  height: 100%;
  margin: 20px;
  padding: 10px;
  border-radius: 20px;
  background-color: #ecf2f3;
  @media(max-width: 1000px) {
    display: none;
  }
`

const StyledH3 = styled.h3`
  font-weight: 900;  
`

export const Rightbar: NextPage = () => {
  return (
    <StyledDiv >
      <StyledDivInput>
      <StyledInput type="search" placeholder="キーワード検索" />
      </StyledDivInput>
      <StyledDivArticle>
        <StyledH3>いまどうしてる？</StyledH3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, eligendi cupiditate hic eaque,
            animi aut quia suscipit porro laudantium soluta veritatis est.
            Suscipit doloremque eligendi numquam quod quia ut laboriosam.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, eligendi cupiditate hic eaque,
            animi aut quia suscipit porro laudantium soluta veritatis est.
            Suscipit doloremque eligendi numquam quod quia ut laboriosam.
        </p>
      </StyledDivArticle>
    </StyledDiv>
  )

}


