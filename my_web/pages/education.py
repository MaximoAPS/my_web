import reflex as rx
from my_web.template.section_template import section_template
from my_web.styles.styles import Size as Size
from my_web.styles.colors import TextColor as TextColor
from my_web.styles.colors import Color as Color
from my_web.components.footer import footer
from my_web.components.items import items



@rx.page(route="/education",title="Education")
def section_education():
    return rx.box(
        section_template("Educación"),
        rx.vstack(
            rx.text("""Estudie la secundaria en una Escuela Técnica y luego comence varias carreras en la UBA."""),
            
            rx.text("Mis estudios (completos o incompletos) son los siguientes:", width="100%"),

            items("Técnico en la Indutria del Alimento", "Escuela Técnica RAGGIO | 2006 - 2011"),
            
            items("Licenciatura en Ciencias Quimicas", "Facultad de Ciencias Exactas y Naturales | 2012 - Presente"),

            items("Licenciatura en Matemática", "Facultad de Ciencias Exactas y Naturales | 2012 - Presente"),

            items("Licenciatura en Ciencias de Datos", "Facultad de Ciencias Exactas y Naturales | 2020 - Presente"),

            color=TextColor.BODY.value,
            spacing=Size.VERYSMALL.value,
            padding_x="30%"),
            footer(),
            background_color=Color.CONTENT.value,
            border_left_color=Color.SECONDARY.value,
            border_left_width="0.05em",
            border_bottom_color=Color.SECONDARY.value,
            border_bottom_width="0.05em",
            margin_bottom=Size.VERYSMALL.value
    )
        