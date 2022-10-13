import styled from '@emotion/styled'
import { SvgIconTypeMap,  } from "@mui/material"
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { IconButton } from "@mui/material";
import Link from 'next/link';

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  text: string | number
  destination?: string
}

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  margin: 0 50px 0 0;
`

const StyledP = styled.p`
  width: 100%;
  font-size: 18px;
  @media (max-width: 1200px) {
    display: none ; 
  };
`

export const IconText = ({Icon, text, destination}: Props) => {
  return(
    <StyledDiv>
      <Link href={`/${destination}`}>
        <IconButton size="large" color="info" sx={{margin: "4px"}}>
        <Icon sx={{color:"black", fontSize:"30px"}} /> 
      </IconButton>
      </Link>
      <StyledP >{text}</StyledP>
    </StyledDiv> 

  )
}


