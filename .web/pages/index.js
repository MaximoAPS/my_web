
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Button, HStack, Link, Spacer, Text } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <HStack sx={{"width": "50%", "height": "25%", "marginY": "15%", "marginX": "25%", "paddingLeft": "1em", "borderColor": "#D7D7D7", "backgroundColor": "#3C3C41"}}>
  <HStack>
  <Text as={`span`} sx={{"fontFamily": "Fira Code", "fontWeight": "200", "fontSize": "1em", "color": "#AFAFAF"}}>
  {`1`}
</Text>
  <Spacer/>
  <Text as={`span`} sx={{"fontFamily": "Fira Code", "fontWeight": "200", "fontSize": "1em", "color": "#DCDCAA"}}>
  {`open`}
</Text>
  <Text as={`span`} sx={{"fontFamily": "Fira Code", "fontWeight": "200", "fontSize": "1em", "color": "#F0D70A"}}>
  {`(`}
</Text>
  <Text as={`span`} sx={{"fontFamily": "Fira Code", "fontWeight": "200", "fontSize": "1em", "color": "#96DCFA"}}>
  {`max.py`}
</Text>
  <Text as={`span`} sx={{"fontFamily": "Fira Code", "fontWeight": "200", "fontSize": "1em", "color": "#F0D70A"}}>
  {`)`}
</Text>
</HStack>
  <Spacer/>
  <Link as={NextLink} href={`/main`} sx={{"textDecoration": "none", "_hover": {}}}>
  <Button sx={{"backgroundColor": "#1E1E1E", "_hover": {"backgroundColor": "#2D2D2D"}, "borderRadius": "0px", "borderColor": "#AFAFAF", "borderWidth": "0.05em", "width": "100%", "height": "100%", "padding": "0.5em", "color": "#D7D7D7", "whiteSpace": "normal", "textAlign": "start"}}>
  <Text sx={{"fontFamily": "Fira Code", "fontWeight": "200", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Ejecutar archivo de Python`}
</Text>
</Button>
</Link>
</HStack>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
