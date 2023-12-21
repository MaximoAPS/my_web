import reflex as rx
from my_web.views.start_page.start_page import start_page


@rx.page(route="/")
def index()-> rx.Component:
    return start_page()
