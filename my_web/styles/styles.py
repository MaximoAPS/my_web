import reflex as rx
from enum import Enum
from .colors import Color as Color
from .colors import TextColor as TextColor
from .fonts import Fonts as Fonts, FontsWeight

# Constants
MAX_WIDTH = "600px"

# Sizes
class Size(Enum):
    ZERO="0em !important"
    VERYSMALL="0.5em"
    SMALL="0.8em"
    DEFAULT="1em"
    LARGE="1.5em"
    BIG="2em"

# Styles
STYLESHEETS = [
    "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap",
    "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap",
    "https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&display=swap"
]
BASE_STYLE = {
    "font_family": Fonts.DEFAULT.value,
    "font_weight": FontsWeight.MEDIUM.value,
    "background_color": Color.BACKGROUND.value,
    rx.Button:  {
        "width":"100%",
        "height":"100%",
        "padding": Size.VERYSMALL.value,
        "border_radius": Size.DEFAULT.value,
        "color": TextColor.HEADER.value,
        "background_color": Color.CONTENT.value,
        "white_space": "normal",
        "text_align": "start",
        "_hover": {
            "background_color": Color.SECONDARY.value
        }
    },
    rx.Link: {
        "text_decoration":"none",
        "_hover":{}
    }
}

title_style = {
    "font_family":Fonts.TITLE.value,
    "font_weight": FontsWeight.BOLD.value,
    "width":"100%",
    "padding_top":Size.DEFAULT.value,
    "color":TextColor.HEADER.value
}
button_title_style = {
    "font_family":Fonts.TITLE.value,
    "font_weight": FontsWeight.BOLD.value,
    "font_size":Size.DEFAULT.value,
    "color":TextColor.HEADER.value
}

button_body_style = {
    "font_family":Fonts.DEFAULT.value,
    "font_weight": FontsWeight.MEDIUM.value,
    "font_size":Size.SMALL.value,
    "color":TextColor.BODY.value
}

navbar_title_style = {
    "font_family":Fonts.CODE.value,
    "font_weight": FontsWeight.LIGHT.value,
    "font_size":Size.DEFAULT.value,
    "background_color":Color.CONTENT.value,
    "margin":"0px",
    "border_left_color":Color.SECONDARY.value,
    "border_left_width":"0.05em",
    "border_right_color":Color.SECONDARY.value,
    "border_right_width":"0.05em",
    "border_top_color":"blue",
    "border_top_width":"0.15em",
    "width":"15em"
}

navbar_secondary_style = {
    "font_family":Fonts.CODE.value,
    "font_weight": FontsWeight.LIGHT.value,
    "font_size":Size.DEFAULT.value,
    "background_color":Color.BACKGROUND.value,
    "border_left_color":Color.SECONDARY.value,
    "border_left_width":"0.05em",
    "border_right_color":Color.SECONDARY.value,
    "border_right_width":"0.05em",
    "border_top_color":Color.SECONDARY.value,
    "border_top_width":"0.1em",
    "width":"15em",
    "border_bottom_color":Color.SECONDARY.value,
    "border_bottom_width":"0.05em",
    "margin":"0px"
}

start_page_style = {
    "font_family":Fonts.CODE.value,
    "font_weight": FontsWeight.LIGHT.value,
    "font_size":Size.DEFAULT.value,
}

heading_style = {
    "font_family":Fonts.DEFAULT.value,
    "font_weight": FontsWeight.BOLD.value,
    "color":TextColor.HEADER.value
}