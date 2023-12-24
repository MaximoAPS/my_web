
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Heading, HStack, Image as ChakraImage, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box sx={{"marginTop": "0px"}}>
  <VStack alignItems={`start`} spacing={`0.8em`} sx={{"width": "100%", "paddingY": "2em", "paddingX": "30%"}}>
  <HStack spacing={`1em`}>
  <ChakraImage src={`/graduation-cap-solid.svg`} sx={{"width": "5em"}}/>
  <Heading size={`lg`} sx={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#D7D7D7", "paddingY": "2em"}}>
  {`Educación`}
</Heading>
</HStack>
  <VStack spacing={`0.5em`} sx={{"color": "#AFAFAF"}}>
  <Text>
  {`¡Bienvenido a la seccion Educación!`}
</Text>
</VStack>
</VStack>
  <Spacer/>
</Box>
  <NextHead>
  <title>
  {`section`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
