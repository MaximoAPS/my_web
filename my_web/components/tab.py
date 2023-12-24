import reflex as rx
from my_web.styles.styles import Size as Size
from my_web.styles.colors import TextColor as TextColor
from my_web.styles.colors import Color as Color
import my_web.styles.styles as styles

def tab(title,close_url):
    return rx.hstack(
            rx.image(src="/python_icon.png",
                height="1em"
            ),
            rx.span(title,
                    color=TextColor.HEADER.value
            ),
            rx.spacer(),
            rx.link(rx.icon(tag="close",
                    height=styles.Size.VERYSMALL.value,
                    color=TextColor.HEADER.value
                    ),
                    href= close_url,
                    text_decoration="none"
            ),
            width="100%"
    )
            