
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Heading, HStack, Image as ChakraImage, Link, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import { CloseIcon, EmailIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <Tabs sx={{"position": "sticky", "width": "100%", "zIndex": "100", "top": "0", "backgroundColor": "#1E1E1E", "marginTop": "0.5em", "spacing": "0px"}}>
  <TabList sx={{"fontFamily": "Fira Code", "fontWeight": "200", "fontSize": "1em", "backgroundColor": "#1E1E1E", "borderLeftColor": "#3C3C41", "borderLeftWidth": "0.05em", "borderRightColor": "#3C3C41", "borderRightWidth": "0.05em", "borderTopColor": "#3C3C41", "borderTopWidth": "0.1em", "width": "100%", "borderBottomColor": "#3C3C41", "borderBottomWidth": "0.05em", "margin": "0px", "position": "sticky", "top": "0px", "zIndex": "200"}}>
  <Tab sx={{"fontFamily": "Fira Code", "fontWeight": "200", "fontSize": "1em", "backgroundColor": "#1E1E1E", "borderLeftColor": "#3C3C41", "borderLeftWidth": "0.05em", "borderRightColor": "#3C3C41", "borderRightWidth": "0.05em", "borderTopColor": "#3C3C41", "borderTopWidth": "0.1em", "width": "15em", "borderBottomColor": "#3C3C41", "borderBottomWidth": "0.05em", "margin": "0px", "_selected": {"fontFamily": "Fira Code", "fontWeight": "200", "fontSize": "1em", "backgroundColor": "#2D2D2D", "margin": "0px", "borderLeftColor": "#3C3C41", "borderLeftWidth": "0.05em", "borderRightColor": "#3C3C41", "borderRightWidth": "0.05em", "borderTopColor": "blue", "borderTopWidth": "0.15em", "width": "15em"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/python_icon.png`} sx={{"height": "1em"}}/>
  <Text as={`span`} sx={{"color": "#D7D7D7"}}>
  {`max.py`}
</Text>
  <Spacer/>
  <Link as={NextLink} href={`/`} sx={{"textDecoration": "none", "_hover": {}}}>
  <CloseIcon sx={{"height": "0.5em", "color": "#D7D7D7"}}/>
</Link>
</HStack>
</Tab>
</TabList>
  <TabPanels sx={{"padding": "0px"}}>
  <TabPanel sx={{"padding": "0px"}}>
  <Box sx={{"backgroundColor": "#2D2D2D", "borderLeftColor": "#3C3C41", "borderLeftWidth": "0.05em", "borderBottomColor": "#3C3C41", "borderBottomWidth": "0.05em", "marginBottom": "0.5em"}}>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "margin": "2em", "padding": "0.8em"}}>
  <VStack spacing={`0.8em`} sx={{"width": "100%", "marginX": "2em"}}>
  <HStack spacing={`1em`} sx={{"width": "100%", "marginBot": "2em"}}>
  <Avatar name={`Maximo`} size={`xl`} sx={{"bg": "#96DCFA", "borderColor": "#F0D70A", "borderWidth": "0.15em"}}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`} sx={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#D7D7D7"}}>
  {`Máximo Peré`}
</Heading>
  <HStack>
  <EmailIcon sx={{"width": "1em", "height": "1em", "marginLeft": "0px", "marginRight": "0.8em", "color": "#AFAFAF"}}/>
  <Link as={NextLink} href={`emailto:maximo.pere92@gmail.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Text sx={{"color": "#AFAFAF", "fontSize": "1em"}}>
  {`maximo.pere92@gmail.com`}
</Text>
</Link>
</HStack>
  <HStack>
  <ChakraImage src={`/location-dot-solid.svg`} sx={{"width": "1em", "height": "1em", "marginLeft": "0px", "marginRight": "0.8em"}}/>
  <Link as={NextLink} href={`https://www.google.com/maps/place/Buenos+Aires+Metropolitan+Area/@-34.502751,-59.1137946,9z/data=!3m1!4b1!4m6!3m5!1s0x95bcb3faddba8be7:0x93e8f54e16d05cc5!8m2!3d-34.5733392!4d-58.6458369!16zL20vMDMzODdr?entry=ttu`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Text sx={{"color": "#AFAFAF", "fontSize": "1em"}}>
  {`Buenos Aires, Argentina`}
</Text>
</Link>
</HStack>
</VStack>
</HStack>
  <VStack spacing={`0.5em`} sx={{"color": "#AFAFAF"}}>
  <Text>
  {`¡Bienvenido!`}
</Text>
  <Text>
  {`Soy un estudiante de Ciencia de Datos. 
                    Me apasiona la programación, el aprendizaje continuo y la resolución de problemas.`}
</Text>
  <Text>
  {`Me encanta explorar nuevas tecnologías y enfrentarme a desafíos que amplíen mis habilidades.
                Actualmente, estoy en busca de oportunidades laborales como programador.`}
</Text>
  <Text>
  {`Mi lenguaje predilecto es Python, ya que creo que si algo es posible, ¡es posible en Python!.
                Toda esta pagina esta hecho por mi con python puro.`}
</Text>
  <Text>
  {`¡Explora mi perfil!`}
</Text>
</VStack>
</VStack>
  <VStack sx={{"width": "100%"}}>
  <VStack sx={{"width": "100%"}}>
  <Heading size={`md`} sx={{"fontFamily": "Poppins", "fontWeight": "500", "width": "100%", "paddingTop": "1em", "color": "#D7D7D7"}}>
  {`SECCIONES`}
</Heading>
  <Link as={NextLink} href={`/education`} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/graduation-cap-solid.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0em !important`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Educación`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Mi camino académico`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`/certifications`} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/book-solid.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0em !important`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Certificaciones`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Cursos finalizados`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`/awards`} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/award-solid.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0em !important`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Premios`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Premios ganados en competencias`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`/experience`} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/wallet-solid.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0em !important`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Experiencia`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Mi experiencia laboral`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
  <VStack sx={{"width": "100%"}}>
  <Heading size={`md`} sx={{"fontFamily": "Poppins", "fontWeight": "500", "width": "100%", "paddingTop": "1em", "color": "#D7D7D7"}}>
  {`LINKS`}
</Heading>
  <Link as={NextLink} href={`https://github.com/MaximoAPS`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/github.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0em !important`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`GitHub`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Visita mi GitHub (en crecimiento)`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/m%C3%A1ximo-per%C3%A9-42b76512b/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#D7D7D7", "backgroundColor": "#2D2D2D", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3C3C41"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`/linkedin.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0em !important`} sx={{"margin": "0em !important"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#D7D7D7"}}>
  {`Linkedin`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "300", "fontSize": "0.8em", "color": "#AFAFAF"}}>
  {`Visita mi perfil de Linkedin`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</VStack>
</Center>
  <VStack sx={{"paddingY": "1em", "marginBottom": "1em"}}>
  <ChakraImage src={`/favicon.ico`}/>
  <Text sx={{"fontSize": "0.8em", "color": "#C8C8C8", "fontFamily": "Poppins"}}>
  {`@2023 - 2023 max.py by Máximo Peré`}
</Text>
</VStack>
</Box>
</TabPanel>
</TabPanels>
</Tabs>
</Box>
  <NextHead>
  <title>
  {`max.py | Python Developer`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
