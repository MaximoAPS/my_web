import reflex as rx
from my_web.components.link_button import link_button, link_button_int
from my_web.components.title import title
import my_web.constants as constants

def links() -> rx.Component:
    return rx.vstack(
        rx.vstack(
            title("SECCIONES"),
            link_button_int(
                "Educación",
                "Mi camino académico", 
                "/education"
            ),
            link_button_int(
                "Certificaciones",
                "Cursos finalizados", 
                "/certifications"
            ),
            link_button_int(
                "Premios",
                "Premios ganados en competencias", 
                "/awards"
            ),
            link_button_int(
                "Experiencia",
                "Mi experiencia laboral", 
                "/experience"
            ),
            width="100%"
        ),
        rx.vstack(
            title("LINKS"),
            link_button(
                "GitHub",
                "Visita mi GitHub (en crecimiento)"
            ),
            link_button(
                "Linkedin",
                "Visita mi perfil de Linkedin"
            ),
            width="100%"
        ),
        width="100%"
    )
