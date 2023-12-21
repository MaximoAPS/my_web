import reflex as rx
from my_web.template.section_template import section_template

@rx.page(route="/section",title="section")
def section_test():
    return section_template("Educación")