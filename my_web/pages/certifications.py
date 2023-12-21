import reflex as rx
from my_web.template.section_template import section_template
from my_web.styles.styles import Size as Size
from my_web.styles.colors import TextColor as TextColor
from my_web.styles.colors import Color as Color
from my_web.components.footer import footer
import my_web.constants as constants
from my_web.components.link_button import link_button


@rx.page(route="/certifications",title="Certifications")
def section_certifications():
    return rx.box(
        section_template("Certificaciones"),
        rx.vstack(
            rx.text("""A continuacion cursos mis y certificaciones completados.""", width="100%"),
            
            link_button("Prompt Engineering for ChatGPT", "Vanderbilt University"),
            link_button("IA para todos", "DeepLearning.AI"),
            link_button("Foundations: Data, Data, Everywhere", "Google"),
            link_button("Scientific Computing with Python", "FreeCodeCamp"),
            link_button("Prompt Engineering", "Centro de Graduados de Ingenieria de la UBA"),

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
        