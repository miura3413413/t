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
  margin-top: 5px;
  margin-right: 3px;
`

const StyledP = styled.p`
  width: 100%;
  font-weight: lighter; 

`

export const IconNumber = ({Icon,number, stateFunction }: Props) => {
  return(
    <StyledDiv>
      <IconButton   edge="end"  size="small" color="info"  onClick={stateFunction || null}>
        <Icon sx={{color:"black", fontSize:"18px", margin: "0px 15px"}} /> 
      </IconButton>
      <StyledP>{number}</StyledP>
    </StyledDiv> 
  )
}