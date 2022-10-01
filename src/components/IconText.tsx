/** @jsxImportSource @emotion/react */
import { SvgIconTypeMap,  } from "@mui/material"
import { OverridableComponent } from '@mui/material/OverridableComponent';

import styled from '@emotion/styled'
interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  text: string | number
}

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 20px 50px 0 0;
  
`

const StyledP = styled.p`
  width: 100%;
  margin: 20px;
  @media (max-width: 1200px) {
    display: none; 
  };
`
  


export const IconText = ({Icon, text}: Props) => {
  return(
    <StyledDiv>
      <Icon /> 
      <StyledP >{text}</StyledP>
    </StyledDiv> 

  )
}
