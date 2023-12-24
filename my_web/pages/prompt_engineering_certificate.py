import reflex as rx
from my_web.styles.styles import Size as Size
from my_web.styles.colors import TextColor as TextColor
from my_web.styles.colors import Color as Color
from my_web.components.footer import footer
from my_web.components.section_navbar import section_navbar


@rx.page(route="/prompt_engineering_certificate",title="Certificate")
def prompt_engineering_certificate():
    return rx.box(
        section_navbar("Certificate",section_panel())
    )

def section_panel():
    return rx.box(
        rx.vstack(
            rx.image(src="/prompt engineering certificate.png",
                     padding_y = Size.DEFAULT.value),
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