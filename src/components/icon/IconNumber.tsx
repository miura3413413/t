import styled from '@emotion/styled'
import { SvgIconTypeMap,  } from "@mui/material"
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { IconButton } from "@mui/material";

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  number: number
  stateFunction?: any
}


const StyledDiv = styled.div`
  width: 100%;
  display: flex;

  margin: 20px 50px 0 0;

`

const StyledP = styled.p`
  width: 100%;
  font-weight: lighter; 
  margin-left: 10px;
`

export const IconNumber = ({Icon, number, stateFunction }: Props) => {
  return(
    <StyledDiv>
        <IconButton size="large" color="info" sx={{margin: "3px"}} onClick={() => stateFunction? stateFunction() : null }>
        <Icon sx={{color:"black"}} /> 
      </IconButton>
      <StyledP>{number}</StyledP>
    </StyledDiv> 

  )
}