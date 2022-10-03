/** @jsxImportSource @emotion/react */
import { SvgIconTypeMap,  } from "@mui/material"
import { OverridableComponent } from '@mui/material/OverridableComponent';

import styled from '@emotion/styled'

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  text: string | number
  display?: string
  weight: string
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
  


const IconText = ({Icon, text, display, weight}: Props) => {
  return(
    <StyledDiv>
      <Icon sx={{ '&:hover': {
        borderRadius: "50%",
        backgroundColor: '#a0dce8ee',
        
      },}}/> 
      <StyledP  weight={weight} display={display}>{text}</StyledP>
    </StyledDiv> 

  )
}

export default IconText
