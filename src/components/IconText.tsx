/** @jsxImportSource @emotion/react */
import { SvgIconTypeMap,  } from "@mui/material"
import { OverridableComponent } from '@mui/material/OverridableComponent';

import styled from '@emotion/styled'

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  text: string | number
  display?: string
}
interface PProps {
  display?: string
}

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 20px 50px 0 0;
`

const StyledP = styled.p<PProps>`
  width: 100%;
  margin: 20px;
  font-weight: bold;
  @media (max-width: 1200px) {
    display: ${props => props.display}; 
  };
`
  


export const IconText = ({Icon, text, display}: Props) => {
  return(
    <StyledDiv>
      <Icon /> 
      <StyledP display={display}>{text}</StyledP>
    </StyledDiv> 

  )
}
