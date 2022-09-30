import { SvgIconTypeMap,  } from "@mui/material"
import { OverridableComponent } from '@mui/material/OverridableComponent';

import styled from '@emotion/styled'
interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  title: string
}

const StyledDiv = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  margin: "20px 50px 0 0",
  
})

const StyledP = styled("p")({
  width:" 100%",
  margin: "20px",
  "@media (max-width: 1200px)": {
    display: "none",
  },
})
  


export const SidebarIcon = ({Icon, title}: Props) => {
  return(
    <StyledDiv>
      <Icon /> 
      <StyledP>{title}</StyledP>
    </StyledDiv> 

  )
}
