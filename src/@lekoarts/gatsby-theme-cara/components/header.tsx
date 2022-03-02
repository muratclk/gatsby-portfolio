/** @jsx jsx */
import { jsx , useColorMode} from "theme-ui"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
// @ts-ignore
import Intro from "@lekoarts/gatsby-theme-cara/src/sections/intro"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

 return ( 
   <div style={{position:"absolute", display:"flex", top:0, right:"0px"}}>
    <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `flex`, mx: `auto`, mb: 3, position: 'fixed', zIndex:99999,top:"10px", right:"10px"}}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>

      </div>
)
}
export default Hero
