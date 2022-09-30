import { SvgIconTypeMap,  } from "@mui/material"
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  title: string
}

export const SidebarIcon = ({Icon, title}: Props) => {
  return(
    <div>
      <Icon /> 
      <p>{title}</p>
    </div>
  )
}
