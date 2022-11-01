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
      {destination?
        <Link href={`${destination}`}>
        <IconButton size="large" color="inherit" style={{margin: "4px"}}>
          <Icon style={{color:"black", fontSize:"30px"}} /> 
        </IconButton>
      </Link> :
      <IconButton size="large" color="inherit" style={{margin: "4px"}}>
        <Icon style={{color:"black", fontSize:"30px"}} /> 
      </IconButton>
      }
      <StyledP >{text}</StyledP>
    </StyledDiv> 

  )
}


