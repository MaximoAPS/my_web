import reflex as rx
from my_web.components.info_text import info_text, info_text_icon
from my_web.styles.styles import Size as Size
from my_web.styles.colors import TextColor as TextColor
from my_web.styles.styles import heading_style as heading_style
import my_web.constants as constants

def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(name= "Maximo", size="xl", 
                    bg=TextColor.VARIABLE.value,
                    border_color=TextColor.PARENTESIS.value,
                    border_width="0.15em" 
                    ),
            rx.vstack(
                rx.heading("Máximo Peré",
                           style=heading_style,
                           size="lg"
                           ),
                info_text("email", "maximo.pere92@gmail.com","emailto:maximo.pere92@gmail.com"),
                info_text_icon("/location-dot-solid.svg","Buenos Aires, Argentina",constants.URL["Buenos Aires"]),
                align_items="start",
            ),
            width="100%",
            spacing=Size.DEFAULT.value,
            margin_bot=Size.BIG.value
        ),
        rx.vstack(
            rx.text("¡Bienvenido!"),
            rx.text("""Soy un estudiante de Ciencia de Datos. 
                    Me apasiona la programación, el aprendizaje continuo y la resolución de problemas."""),

            rx.text("""Me encanta explorar nuevas tecnologías y enfrentarme a desafíos que amplíen mis habilidades.
                Actualmente, estoy en busca de oportunidades laborales como programador."""),

            rx.text("""Mi lenguaje predilecto es Python, ya que creo que si algo es posible, ¡es posible en Python!.
                Toda esta pagina esta hecho por mi con python puro."""),

            rx.text("¡Explora mi perfil!"),
            color=TextColor.BODY.value,
            spacing=Size.VERYSMALL.value),
        width="100%",
        spacing= Size.SMALL.value,
        margin_x = Size.BIG.value
    )