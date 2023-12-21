import reflex as rx
from my_web.styles.styles import Size as Size
from my_web.styles.colors import TextColor as TextColor
from my_web.styles.styles import heading_style as heading_style
import my_web.constants as constants

def section_header(title:str) -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.image(src=constants.ICONS[title], width="5em"),
            rx.heading(title,
                style=heading_style,
                size="lg",
                padding_y=Size.BIG.value
            ),
            spacing=Size.DEFAULT.value
        ),
        rx.vstack(
            rx.text(f"¡Bienvenido a la seccion {title}!"),
            color=TextColor.BODY.value,
            spacing=Size.VERYSMALL.value),
        width="100%",
        spacing= Size.SMALL.value,
        margin_y = Size.BIG.value,
        align_items="start",
        padding_x="30%"
    )