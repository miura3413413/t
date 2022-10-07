import styled from '@emotion/styled'

import { SvgIconTypeMap,  } from "@mui/material"
import { OverridableComponent } from '@mui/material/OverridableComponent';
;

import { IconButton } from "@mui/material";

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  text: string | number
  display?: string
  weight: string
  stateFunction?: any
}
interface PProps {
  display?: string
  weight: string
  sx: {
    marginLeft: string;
}
}

const StyledDiv = styled.div`
  width: 100%;
  display: flex;

  margin: 20px 50px 0 0;

`

const StyledP = styled.p<PProps>`
  width: 100%;
  font-weight: ${props => props.weight};
  @media (max-width: 1200px) {
    display: ${props => props.display}; 
  };
`
  


export const IconText = ({Icon, text, display, weight, stateFunction  }: Props) => {
  return(
    <StyledDiv>
      <IconButton size="large" color="info" sx={{margin: "3px"}} onClick={() => stateFunction? stateFunction() : null }>
        <Icon sx={{color:"black"}} /> 
      </IconButton>
      <StyledP  weight={weight} display={display} sx={{marginLeft:"10px"}}>{text}</StyledP>
    </StyledDiv> 

  )
}


