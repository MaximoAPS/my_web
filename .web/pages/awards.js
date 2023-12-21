
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Button, Flex, Heading, HStack, Image as ChakraImage, Link, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { CloseIcon } from "@chakra-ui/icons"
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
  {`Premios`}
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
  <ChakraImage src={`/award-solid.svg`} sx={{"width": "5em"}}/>
  <Heading size={`lg`} sx={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#D7D7D7", "paddingY": "2em"}}>
  {`Premios`}
</Heading>
</HStack>
  <VStack spacing={`0.5em`} sx={{"color": "#AFAFAF"}}>
  <Text>
  {`¡Bienvenido a la seccion Premios!`}
</Text>
</VStack>
</VStack>
  <Spacer/>
</Box>
  <VStack spacing={`0.5em`} sx={{"color": "#AFAFAF", "paddingX": "30%"}}>
  <Text>
  {`Durante mi trajecto por la secundaria participe en las Olimpiadas de Química (OAQ) 
                    y en las Olimpiadas de Matemática (OMA).`}
</Text>
  <Text sx={{"width": "100%"}}>
  {`Mis reconocimientos en dichas competencias fueron los siguientes:`}
</Text>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/silver-medal-solid.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Medalla de Plata - Certamen Nacional Nivel 1`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Olimpiada Argentina de Química - Cordoba | 2007`}
</Text>
</VStack>
</HStack>
</Button>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/bronce-medal-solid.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Medalla de Bronce - Certamen Nacional Nivel 2`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Olimpiada Argentina de Química - Cordoba | 2008`}
</Text>
</VStack>
</HStack>
</Button>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/gold-medal-solid.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Medalla de Oro - Certamen Nacional Nivel 2`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Olimpiada Argentina de Química - Cordoba | 2009`}
</Text>
</VStack>
</HStack>
</Button>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/gold-medal-solid.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Medalla de Oro - Certamen Iberoamericano`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Olimpiada Iberoamericana de Química - México | 2010`}
</Text>
</VStack>
</HStack>
</Button>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/gold-medal-solid.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Medalla de Oro - Certamen Nacional Nivel 3E`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Olimpiada Argentina de Química - Cordoba | 2010`}
</Text>
</VStack>
</HStack>
</Button>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/trophy-solid.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Segundo Subcampeón - Certamen Metropolitano Nivel 3`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Olimpiada Matemática Argentina - Buenos Aires | 2010`}
</Text>
</VStack>
</HStack>
</Button>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/silver-medal-solid.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Medalla de Plata - Certamen Internacional`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`International Chemistry Olympiad - Turquia | 2011`}
</Text>
</VStack>
</HStack>
</Button>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/silver-medal-solid.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Medalla de Plata - Certamen Nacional Nivel 3E`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Olimpiada Argentina de Química - Cordoba | 2011`}
</Text>
</VStack>
</HStack>
</Button>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/silver-medal-solid.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Medalla de Plata - Certamen Internacional`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`International Chemistry Olympiad - Estados Unidos | 2012`}
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
  {`Awards`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
