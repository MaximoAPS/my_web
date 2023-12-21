import reflex as rx
from my_web.template.section_template import section_template
from my_web.styles.styles import Size as Size
from my_web.styles.colors import TextColor as TextColor
from my_web.styles.colors import Color as Color
from my_web.components.footer import footer
from my_web.components.items import items, medals



@rx.page(route="/awards",title="Awards")
def section_awards():
    return rx.box(
        section_template("Premios"),
        rx.vstack(
            rx.text("""Durante mi trajecto por la secundaria participe en las Olimpiadas de Química (OAQ) 
                    y en las Olimpiadas de Matemática (OMA)."""),
            
            rx.text("Mis reconocimientos en dichas competencias fueron los siguientes:", width="100%"),

            medals("Medalla de Plata - Certamen Nacional Nivel 1", "Olimpiada Argentina de Química - Cordoba | 2007", "silver"),
            
            medals("Medalla de Bronce - Certamen Nacional Nivel 2", "Olimpiada Argentina de Química - Cordoba | 2008", "bronze"),

            medals("Medalla de Oro - Certamen Nacional Nivel 2", "Olimpiada Argentina de Química - Cordoba | 2009", "gold"),

            medals("Medalla de Oro - Certamen Iberoamericano", "Olimpiada Iberoamericana de Química - México | 2010", "gold"),

            medals("Medalla de Oro - Certamen Nacional Nivel 3E", "Olimpiada Argentina de Química - Cordoba | 2010", "gold"),

            medals("Segundo Subcampeón - Certamen Metropolitano Nivel 3", "Olimpiada Matemática Argentina - Buenos Aires | 2010", "trophy"),

            medals("Medalla de Plata - Certamen Internacional", "International Chemistry Olympiad - Turquia | 2011", "silver"),
            
            medals("Medalla de Plata - Certamen Nacional Nivel 3E", "Olimpiada Argentina de Química - Cordoba | 2011", "silver"),

            medals("Medalla de Plata - Certamen Internacional", "International Chemistry Olympiad - Estados Unidos | 2012", "silver"),

            color=TextColor.BODY.value,
            spacing=Size.VERYSMALL.value,
            padding_x="30%"),
            footer(),
            background_color=Color.CONTENT.value,
            border_left_color=Color.SECONDARY.value,
            border_left_width="0.05em",
            border_bottom_color=Color.SECONDARY.value,
            border_bottom_width="0.05em",
            margin_bottom=Size.VERYSMALL.value
    )
        