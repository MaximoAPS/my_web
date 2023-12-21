import reflex as rx
from my_web.styles.colors import TextColor as TextColor
from my_web.styles.colors import Color as Color
from my_web.styles.styles import start_page_style as start_page_style  
from my_web.styles.styles import Size as Size

def start_page()-> rx.Component:
    return rx.hstack(
            rx.hstack(
                rx.span("1",
                    color=TextColor.BODY.value,
                    style=start_page_style  
                ),
                rx.spacer(),
                rx.span("open",
                    color=TextColor.FUNCTION.value,
                    style=start_page_style  
                ),
                rx.span("(",
                    color=TextColor.PARENTESIS.value,
                    style=start_page_style  
                ),
                rx.span("max.py",
                    color=TextColor.VARIABLE.value,
                    style=start_page_style  
                ),
                rx.span(")",
                    color=TextColor.PARENTESIS.value,
                    style=start_page_style                    
                ),
            ),
            rx.spacer(),
            rx.link(
                rx.button(
                    rx.text('Ejecutar archivo de Python',
                            color=TextColor.HEADER.value,
                            style=start_page_style  ),
                    background_color=Color.BACKGROUND.value,
                    _hover= {
                        "background_color": Color.CONTENT.value
                    },
                    border_radius="0px",
                    border_color=TextColor.BODY.value,
                    border_width="0.05em"
                ),
                href= "/main",
                text_decoration="none",
                width = "20em"
            ),
            width = "50%",
            height="25%",
            margin_y="15%",
            margin_x="25%",
            padding_left=Size.DEFAULT.value,
            border_color=TextColor.HEADER.value,
            background_color=Color.SECONDARY.value
        )

