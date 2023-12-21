import reflex as rx
from my_web.styles.styles import Size as Size

def link_icon(url:str) -> rx.Component:
    return rx.link(
        rx.icon(
            tag="link"
        ),
        href=url,
        is_external=True
    )