import styled from '@emotion/styled'

import { SvgIconTypeMap,  } from "@mui/material"
import { OverridableComponent } from '@mui/material/OverridableComponent';
;


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
  font-weight: ${props => props.weight};
  @media (max-width: 1200px) {
    display: ${props => props.display}; 
  };
`
  


export const IconText = ({Icon, text, display, weight, stateFunction  }: Props) => {
  return(
    <StyledDiv>
      <Icon sx={{ '&:hover': {
        borderRadius: "50%",
        backgroundColor: '#a0dce8ee',
        
      },}} onClick={() => stateFunction()}/> 
      <StyledP  weight={weight} display={display}>{text}</StyledP>
    </StyledDiv> 

  )
}


