import reflex as rx
from my_web.styles.styles import Size as Size
from my_web.styles.colors import TextColor as TextColor
from my_web.styles.colors import Color as Color
from my_web.components.section_navbar import section_navbar
from my_web.views.sections.certifications_panel import section_certifications_panel

@rx.page(route="/certifications",title="Certifications")
def section_certifications():
    return rx.box(
        section_navbar("Certificaciones", section_certifications_panel()),
    )
        