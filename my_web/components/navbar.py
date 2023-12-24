import reflex as rx
from my_web.styles.styles import Size as Size
from my_web.styles.colors import TextColor as TextColor
from my_web.styles.colors import Color as Color
import my_web.styles.styles as styles
from my_web.views.main_panel.main_panel import main_panel
from my_web.components.tab import tab

def navbar():
    return rx.tabs(
        rx.tab_list(
            rx.tab(tab("max.py","/"),
                   style=styles.navbar_secondary_style,
                   _selected=styles.navbar_title_style),
            style=styles.navbar_secondary_style,
            width="100%",
            position="sticky",
            top="0px",
            z_index="200"
        ),
        rx.tab_panels(
            rx.tab_panel(
                main_panel(),
                padding="0px"
            ),
            padding="0px"
        ),
        
        position="sticky",
        width="100%",
        z_index="100",
        top="0",
        background_color=Color.BACKGROUND.value,
        margin_top=Size.VERYSMALL.value,
        spacing="0px"
    )