import reflex as rx
from my_web.styles.styles import Size as Size
from my_web.styles.colors import TextColor as TextColor
from my_web.styles.colors import Color as Color
from my_web.components.section_navbar import section_navbar
from my_web.views.sections.education_panel import section_education_panel



@rx.page(route="/education",title="Education")
def section_education():
 return rx.box(
        section_navbar("Educación", section_education_panel()),
    )
        