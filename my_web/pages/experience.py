import reflex as rx
from my_web.styles.styles import Size as Size
from my_web.styles.colors import TextColor as TextColor
from my_web.styles.colors import Color as Color
from my_web.components.section_navbar import section_navbar
from my_web.views.sections.experience_panel import section_experience_panel



@rx.page(route="/experience",title="Experience")
def section_experience():
        return rx.box(
            section_navbar("Experiencia", section_experience_panel()),
        )
        