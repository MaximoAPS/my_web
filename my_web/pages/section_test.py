import reflex as rx
from my_web.components.section_navbar import section_navbar
from my_web.views.backend_panel import backend_panel

@rx.page(route="/backend",title="backend")
def section_test():
    return section_navbar("Backend", backend_panel())