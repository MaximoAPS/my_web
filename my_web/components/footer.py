import reflex as rx
import datetime
from my_web.styles.styles import Size as Size
from my_web.styles.colors import TextColor as TextColor
from my_web.styles.styles import Fonts as Fonts

def footer() -> rx.Component:
    return rx.vstack(
        rx.image(src="/favicon.ico"),
        rx.text(f"@2023 - {datetime.date.today().year} max.py by Máximo Peré",
                font_size=Size.SMALL.value,
                color= TextColor.FOOTER.value,
                font_family= Fonts.DEFAULT.value
                ),
        padding_y= Size.DEFAULT.value,
        margin_bottom= Size.DEFAULT.value
    )