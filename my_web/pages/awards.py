import reflex as rx
from my_web.components.section_navbar import section_navbar
from my_web.styles.styles import Size as Size
from my_web.styles.colors import TextColor as TextColor
from my_web.styles.colors import Color as Color
from my_web.views.sections.awards_panel import section_awards_panel



@rx.page(route="/awards",title="Awards")
def section_awards():
    return rx.box(
        section_navbar("Premios", section_awards_panel()),
    )
        