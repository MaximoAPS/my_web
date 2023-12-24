import reflex as rx
import my_web.styles.styles as styles
import my_web.constants as constants

def items(title:str,body:str) -> rx.Component:
    return rx.flex(
            rx.hstack(
                rx.icon(
                    tag="arrow_forward",
                    width=styles.Size.BIG.value,
                    height=styles.Size.BIG.value,
                    margin=styles.Size.SMALL.value
                ),
                rx.vstack(
                    rx.text(title, style=styles.button_title_style),
                    rx.text(body, style=styles.button_body_style),
                    spacing=styles.Size.VERYSMALL.value,
                    align_items="start",
                    margin=styles.Size.ZERO.value
                ),
                width="100%"
            ),
            width="100%"
        )

def medals(title:str,body:str,award:str) -> rx.Component:
    return rx.flex(
            rx.hstack(
                rx.image(
                    src=constants.MEDALS[award],
                    width=styles.Size.BIG.value,
                    height=styles.Size.BIG.value,
                    margin=styles.Size.SMALL.value
                ),
                rx.vstack(
                    rx.text(title, style=styles.button_title_style),
                    rx.text(body, style=styles.button_body_style),
                    spacing=styles.Size.VERYSMALL.value,
                    align_items="start",
                    margin=styles.Size.ZERO.value
                ),
                width="100%"
            ),
            width="100%"
        )