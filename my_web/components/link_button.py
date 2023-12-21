import reflex as rx
import my_web.styles.styles as styles
import my_web.constants as constants


def link_button(title:str,body:str) -> rx.Component:
    return rx.link(
            rx.button(
                rx.hstack(
                    rx.image(
                        src=constants.ICONS[title],
                        width=styles.Size.BIG.value,
                        height=styles.Size.BIG.value,
                        margin=styles.Size.SMALL.value
                    ),
                    rx.vstack(
                        rx.text(title, style=styles.button_title_style),
                        rx.text(body, style=styles.button_body_style),
                        spacing=styles.Size.ZERO.value,
                        align_items="start",
                        margin=styles.Size.ZERO.value
                    ),
                    width="100%"
                ),
            ),
            href= constants.URL[title],
            is_external=True,
            width = "100%",
            text_decoration="none"
    )

def link_button_int(title:str,body:str,url:str) -> rx.Component:
    return rx.link(
            rx.button(
                rx.hstack(
                    rx.image(
                        src=constants.ICONS[title],
                        width=styles.Size.BIG.value,
                        height=styles.Size.BIG.value,
                        margin=styles.Size.SMALL.value
                    ),
                    rx.vstack(
                        rx.text(title, style=styles.button_title_style),
                        rx.text(body, style=styles.button_body_style),
                        spacing=styles.Size.ZERO.value,
                        align_items="start",
                        margin=styles.Size.ZERO.value
                    ),
                    width="100%"
                ),
            ),
            href= url,
            width = "100%",
            text_decoration="none"
    )
    