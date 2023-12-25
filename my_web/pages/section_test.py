import reflex as rx
from my_web.components.section_navbar import section_navbar
from my_web.views.sections.education_panel import section_education_panel

@rx.page(route="/backend",title="backend")
def section_test():
    return section_navbar("Education", section_education_panel())