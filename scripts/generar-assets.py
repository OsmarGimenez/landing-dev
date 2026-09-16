"""
Genera los assets rasterizados del sitio: favicons y la imagen de Open Graph.

Se dibujan por calculo con la misma geometria que el ñanduti de
`src/components/Nanduti.tsx`, para que la identidad sea la misma en la pestaña
del navegador, en la tarjeta que se ve al compartir el link y en la pagina.

Uso:  python scripts/generar-assets.py

Todo se escribe en `public/`. Volver a correrlo sobreescribe los archivos, asi
que si hay que cambiar un color o el texto, se cambia aca y se regenera en vez
de editar los binarios a mano.
"""

from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

RAIZ = Path(__file__).resolve().parent.parent
SALIDA = RAIZ / "public"

# La misma paleta que index.css
FONDO = (3, 7, 18)
TEXTO = (249, 250, 251)
PRIMARIO = (59, 130, 246)
SECUNDARIO = (16, 185, 129)

# Se dibuja a 4x y se reduce al final: PIL no suaviza lineas, y reducir una
# imagen grande es lo que les da el borde limpio.
ESCALA = 4


def polar(cx: float, cy: float, r: float, vuelta: float) -> tuple[float, float]:
    """Punto sobre una circunferencia, con el cero arriba en vez de a la derecha."""
    ang = vuelta * math.tau - math.pi / 2
    return cx + r * math.cos(ang), cy + r * math.sin(ang)


def sol(
    d: ImageDraw.ImageDraw,
    cx: float,
    cy: float,
    radio: float,
    radios: int,
    anillos: int,
    color: tuple[int, int, int],
    grosor: float,
    con_rombos: bool = True,
) -> None:
    """Un sol de ñanduti: radios, anillos concentricos, zigzag y rombos."""
    g = max(1, int(round(grosor)))

    for i in range(radios):
        d.line([(cx, cy), polar(cx, cy, radio, i / radios)], fill=color, width=g)

    radios_anillo = [radio * ((i + 1) / anillos) for i in range(anillos)]
    for i, r in enumerate(radios_anillo):
        borde = g if i < len(radios_anillo) - 1 else max(g, int(round(grosor * 1.6)))
        d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=color, width=borde)

    # Zigzag entre los dos anillos exteriores: la textura de telaraña.
    interior = radios_anillo[-2] if len(radios_anillo) >= 2 else radio * 0.6
    puntos = [
        polar(cx, cy, radio if i % 2 == 0 else interior, i / radios)
        for i in range(radios + 1)
    ]
    d.line(puntos, fill=color, width=g, joint="curve")

    if not con_rombos:
        return

    medio = radios_anillo[anillos // 2]
    salto = 0.5 / radios
    alto = radio * 0.07
    for i in range(radios):
        v = i / radios
        d.polygon(
            [
                polar(cx, cy, medio + alto, v),
                polar(cx, cy, medio, v + salto),
                polar(cx, cy, medio - alto, v),
                polar(cx, cy, medio, v - salto),
            ],
            outline=color,
            width=g,
        )


def fuente(nombre: str, tam: int) -> ImageFont.FreeTypeFont:
    for ruta in (f"C:/Windows/Fonts/{nombre}", f"/usr/share/fonts/truetype/{nombre}"):
        try:
            return ImageFont.truetype(ruta, tam)
        except OSError:
            continue
    return ImageFont.load_default(tam)


def generar_og() -> None:
    """Imagen 1200x630 para la tarjeta de WhatsApp, LinkedIn y Facebook."""
    W, H = 1200, 630
    img = Image.new("RGB", (W * ESCALA, H * ESCALA), FONDO)
    d = ImageDraw.Draw(img)

    # Ñanduti a la derecha, como en el hero: tres soles concentricos.
    cx, cy = 905 * ESCALA, 315 * ESCALA
    sol(d, cx, cy, 250 * ESCALA, 20, 3, PRIMARIO, 1.6 * ESCALA)
    sol(d, cx, cy, 175 * ESCALA, 16, 4, SECUNDARIO, 1.4 * ESCALA)
    sol(d, cx, cy, 100 * ESCALA, 12, 3, PRIMARIO, 1.4 * ESCALA)
    r = 9 * ESCALA
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=PRIMARIO)

    x = 80 * ESCALA
    negrita = fuente("arialbd.ttf", 66 * ESCALA)
    regular = fuente("arial.ttf", 30 * ESCALA)
    chica = fuente("arialbd.ttf", 22 * ESCALA)

    d.text((x, 190 * ESCALA), "Osmar Giménez", font=negrita, fill=TEXTO)
    d.text((x, 285 * ESCALA), "Desarrollo web, e-commerce", font=regular, fill=TEXTO)
    d.text((x, 330 * ESCALA), "y Odoo para PyMEs", font=regular, fill=TEXTO)
    d.text((x, 400 * ESCALA), "DESDE PARAGUAY", font=chica, fill=SECUNDARIO)

    # Barra de acento, para que el bloque de texto tenga un anclaje visual.
    d.rectangle(
        [x, 160 * ESCALA, (x + 74 * ESCALA), 166 * ESCALA],
        fill=PRIMARIO,
    )

    img.resize((W, H), Image.LANCZOS).save(SALIDA / "og-cover.jpg", quality=88, optimize=True)
    print("  og-cover.jpg      1200x630")


def generar_favicon() -> None:
    """Iconos de pestaña.

    A 32px un sol de 20 radios se convierte en una mancha, asi que la version
    chica usa menos radios y trazo mas grueso: se lee como ñanduti igual.
    """
    def dibujar(px: int, radios: int, anillos: int, grosor: float, margen: float):
        img = Image.new("RGB", (px * ESCALA, px * ESCALA), FONDO)
        d = ImageDraw.Draw(img)
        c = px * ESCALA / 2
        sol(d, c, c, c - margen * ESCALA, radios, anillos, PRIMARIO,
            grosor * ESCALA, con_rombos=px >= 128)
        r = max(1, int(px * ESCALA * 0.055))
        d.ellipse([c - r, c - r, c + r, c + r], fill=PRIMARIO)
        return img.resize((px, px), Image.LANCZOS)

    chico = dibujar(64, radios=8, anillos=2, grosor=1.1, margen=4)
    chico.save(SALIDA / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    print("  favicon.ico       16/32/48")

    dibujar(180, radios=12, anillos=3, grosor=1.0, margen=14).save(
        SALIDA / "apple-touch-icon.png"
    )
    print("  apple-touch-icon.png  180x180")


if __name__ == "__main__":
    SALIDA.mkdir(exist_ok=True)
    print("Generando assets en public/:")
    generar_og()
    generar_favicon()
