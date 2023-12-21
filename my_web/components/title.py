import reflex as rx
import my_web.styles.styles as styles


def title(title:str) -> rx.Component:
    return rx.heading(
        title,
        style=styles.title_style,
        size="md"
    )