import reflex as rx
from my_web.components.section_navbar import section_navbar
from my_web.components.section_header import section_header
from my_web.styles.colors import Color as Color
from my_web.styles.styles import Size as Size

def section_template(title:str):
    return rx.box(
        section_navbar(title),

        section_header(title),

        rx.spacer(),
    )