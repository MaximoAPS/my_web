
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
  {`Certificaciones`}
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
  <ChakraImage src={`/book-solid.svg`} sx={{"width": "5em"}}/>
  <Heading size={`lg`} sx={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#D7D7D7", "paddingY": "2em"}}>
  {`Certificaciones`}
</Heading>
</HStack>
  <VStack spacing={`0.5em`} sx={{"color": "#AFAFAF"}}>
  <Text>
  {`¡Bienvenido a la seccion Certificaciones!`}
</Text>
</VStack>
</VStack>
  <Spacer/>
</Box>
  <VStack spacing={`0.5em`} sx={{"color": "#AFAFAF", "paddingX": "30%"}}>
  <Text sx={{"width": "100%"}}>
  {`A continuacion cursos mis y certificaciones completados.`}
</Text>
  <Link as={NextLink} href={`https://www.coursera.org/account/accomplishments/certificate/KFW3B5DG8MZJ`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/book-open-solid.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0em !important`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Prompt Engineering for ChatGPT`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Vanderbilt University`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.coursera.org/account/accomplishments/certificate/87EW584YGE8P`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/book-open-solid.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0em !important`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`IA para todos`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`DeepLearning.AI`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.coursera.org/account/accomplishments/certificate/47PB4MR7PQF9`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/book-open-solid.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0em !important`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Foundations: Data, Data, Everywhere`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Google`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.freecodecamp.org/certification/fccbde1987e-c479-4700-9e92-66b0bab19315/scientific-computing-with-python-v7`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/book-open-solid.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0em !important`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Scientific Computing with Python`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`FreeCodeCamp`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`/prompt_engineering_certificate`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/book-open-solid.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0em !important`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Prompt Engineering`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Centro de Graduados de Ingenieria de la UBA`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
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
  {`Certifications`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
