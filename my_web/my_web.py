"""Welcome to Reflex! This file outlines the steps to create a basic app."""
import reflex as rx
import my_web.styles.styles as styles
from my_web.pages import *
from my_web.views.backend_panel import State

app = rx.App(
    stylesheets=styles.STYLESHEETS,
    style=styles.BASE_STYLE,
    state=State
)
app.compile()
