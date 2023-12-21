
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Button, Flex, Heading, HStack, Image as ChakraImage, Link, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { ArrowForwardIcon, CloseIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box sx={{"backgroundColor": "#2D2D2D", "borderLeftColor": "#3C3C41", "borderLeftWidth": "0.05em", "borderBottomColor": "#3C3C41", "borderBottomWidth": "0.05em", "marginBottom": "0.5em"}}>
  <Box>
  <HStack spacing={`0px`} sx={{"position": "sticky", "width": "100%", "zIndex": "999", "top": "0", "backgroundColor": "#1E1E1E", "marginTop": "0.5em"}}>
  <HStack sx={{"fontFamily": "Fira Code", "fontWeight": "200", "fontSize": "1em", "backgroundColor": "#1E1E1E", "paddingX": "1em", "paddingY": "0.5em", "borderLeftColor": "#3C3C41", "borderLeftWidth": "0.05em", "borderRightColor": "#3C3C41", "borderRightWidth": "0.05em", "borderTopColor": "#3C3C41", "borderTopWidth": "0.1em", "width": "15em", "borderBottomColor": "#3C3C41", "borderBottomWidth": "0.05em"}}>
  <ChakraImage src={`/python_icon.png`} sx={{"height": "1em"}}/>
  <Text as={`span`} sx={{"color": "#D7D7D7"}}>
  {`max.py`}
</Text>
  <Spacer/>
  <CloseIcon sx={{"height": "0.5em", "color": "#D7D7D7"}}/>
</HStack>
  <HStack sx={{"fontFamily": "Fira Code", "fontWeight": "200", "fontSize": "1em", "backgroundColor": "#2D2D2D", "paddingX": "1em", "paddingY": "0.5em", "borderLeftColor": "#3C3C41", "borderLeftWidth": "0.05em", "borderRightColor": "#3C3C41", "borderRightWidth": "0.05em", "borderTopColor": "blue", "borderTopWidth": "0.15em", "width": "15em"}}>
  <ChakraImage src={`/python_icon.png`} sx={{"height": "1em"}}/>
  <Text as={`span`} sx={{"color": "#D7D7D7"}}>
  {`Educación`}
</Text>
  <Spacer/>
  <Link as={NextLink} href={`/main`} sx={{"textDecoration": "none", "_hover": {}}}>
  <CloseIcon sx={{"height": "0.5em", "color": "#D7D7D7"}}/>
</Link>
</HStack>
  <Flex sx={{"width": "100%", "borderTopColor": "#3C3C41", "borderTopWidth": "0.05em", "borderBottomColor": "#3C3C41", "borderBottomWidth": "0.05em", "paddingY": "1.2em"}}>
  {` `}
</Flex>
</HStack>
  <VStack alignItems={`start`} spacing={`0.8em`} sx={{"width": "100%", "marginY": "2em", "paddingX": "30%"}}>
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
  <VStack spacing={`0.5em`} sx={{"color": "#AFAFAF", "paddingX": "30%"}}>
  <Text>
  {`Estudie la secundaria en una Escuela Técnica y luego comence varias carreras en la UBA.`}
</Text>
  <Text sx={{"width": "100%"}}>
  {`Mis estudios (completos o incompletos) son los siguientes:`}
</Text>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Técnico en la Indutria del Alimento`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Escuela Técnica RAGGIO | 2006 - 2011`}
</Text>
</VStack>
</HStack>
</Button>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Licenciatura en Ciencias Quimicas`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Facultad de Ciencias Exactas y Naturales | 2012 - Presente`}
</Text>
</VStack>
</HStack>
</Button>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Licenciatura en Matemática`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Facultad de Ciencias Exactas y Naturales | 2012 - Presente`}
</Text>
</VStack>
</HStack>
</Button>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Licenciatura en Ciencias de Datos`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Facultad de Ciencias Exactas y Naturales | 2020 - Presente`}
</Text>
</VStack>
</HStack>
</Button>
</VStack>
  <VStack sx={{"paddingY": "1em", "marginBottom": "1em"}}>
  <ChakraImage src={`/favicon.ico`}/>
  <Text sx={{"fontSize": "0.8em", "color": "#C8C8C8", "fontFamily": "Poppins"}}>
  {`@2023 - 2023 max.py by Máximo Peré`}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Education`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
