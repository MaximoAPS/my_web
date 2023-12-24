import reflex as rx
from my_web.components.navbar import navbar



@rx.page(route="/main",title="max.py | Python Developer")
def main():
    return rx.box(
        navbar()
    )