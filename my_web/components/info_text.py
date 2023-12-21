import reflex as rx
from my_web.styles.styles import Size as Size
from my_web.styles.colors import TextColor as TextColor
from my_web.styles.colors import Color as Color


def info_text(icon:str,body:str,url:str) -> rx.Component:
    return rx.hstack(
                    rx.icon(
                        tag=icon,
                        width=Size.DEFAULT.value,
                        height=Size.DEFAULT.value,
                        margin_left="0px",
                        margin_right=Size.SMALL.value,
                        color=TextColor.BODY.value
                    ),
                    rx.link(
                        rx.text(body, 
                                color=TextColor.BODY.value,
                                font_size=Size.DEFAULT.value
                                ),
                        href= url,
                        is_external=True,
                        width = "100%",
                        text_decoration="none"
                    )                     
                )

def info_text_icon(icon:str,body:str,url:str) -> rx.Component:
    return rx.hstack(
                    rx.image(
                        src=icon,
                        width=Size.DEFAULT.value,
                        height=Size.DEFAULT.value,
                        margin_left="0px",
                        margin_right=Size.SMALL.value
                    ),
                    rx.link(
                        rx.text(body, 
                                color=TextColor.BODY.value,
                                font_size=Size.DEFAULT.value
                                ),
                        href= url,
                        is_external=True,
                        width = "100%",
                        text_decoration="none"
                    )                     
                )