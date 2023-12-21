import reflex as rx
from my_web.template.section_template import section_template
from my_web.styles.styles import Size as Size
from my_web.styles.colors import TextColor as TextColor
from my_web.styles.colors import Color as Color
from my_web.components.footer import footer
from my_web.components.items import items



@rx.page(route="/experience",title="Experience")
def section_experience():
    return rx.box(
        section_template("Experiencia"),
        rx.vstack(
            rx.text("Trabajo como docente para el Ministerio de Educación de CABA desde el 2012. Principalmente en la Escuela Técnica RAGGIO."),
            
            rx.text("Alli me desempeñé como:", width="100%"),

            items("Ayudante de Laboratorio", "2012-presente"),
            
            items("Profesor de Quimica", "2016-presente"),

            items("Maestro de Enseñanza Práctica", "2021-presente"),

            items("Coordinador de Ciencias Exactas y Naturales", "2020-2023"),

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
        