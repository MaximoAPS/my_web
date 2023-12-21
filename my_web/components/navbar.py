import reflex as rx
from my_web.styles.styles import Size as Size
from my_web.styles.colors import TextColor as TextColor
from my_web.styles.colors import Color as Color
import my_web.styles.styles as styles

def navbar() -> rx.Component:
    return rx.hstack(
        rx.hstack(
            rx.image(src="/python_icon.png",
                height="1em"
            ),
            rx.span("max.py",
                    color=TextColor.HEADER.value
            ),
            rx.spacer(),
            rx.link(rx.icon(tag="close",
                    height=styles.Size.VERYSMALL.value,
                    color=TextColor.HEADER.value
                    ),
                    href= "/",
                    text_decoration="none"
            ),
            style=styles.navbar_title_style,
        ),
        rx.flex(
            " ",
            width="100%",
            border_top_color=Color.SECONDARY.value,
            border_top_width="0.05em",
            border_bottom_color=Color.SECONDARY.value,
            border_bottom_width="0.05em",
            padding_y="1.2em"
        ),
        position="sticky",
        width="100%",
        z_index="100",
        top="0",
        background_color=Color.BACKGROUND.value,
        margin_top=Size.VERYSMALL.value,
        spacing="0px"
    )
