import reflex as rx
from my_web.components.navbar import navbar
from my_web.components.footer import footer
from my_web.views.header.header import header
from my_web.views.links.links import links
import my_web.styles.styles as styles
from my_web.styles.colors import Color as Color
from my_web.styles.styles import Size as Size

@rx.page(route="/main",title="main")
def main():
    return rx.box(
        navbar(),
        rx.center(rx.vstack(
            header(),
            links(),
            max_width=styles.MAX_WIDTH,
            width="100%",
            margin=styles.Size.BIG.value,
            padding=styles.Size.SMALL.value
            )
        ),
        footer(),
        background_color=Color.CONTENT.value,
        border_left_color=Color.SECONDARY.value,
        border_left_width="0.05em",
        border_bottom_color=Color.SECONDARY.value,
        border_bottom_width="0.05em",
        margin_bottom=Size.VERYSMALL.value
    )