# Publicar gratis el menú de Rancho del Marisco

Este proyecto está listo para publicarse como un sitio estático. **GitHub Pages** es una muy buena opción sin costo: guarda el código en GitHub y publica los archivos HTML, CSS y JavaScript desde el repositorio.[^1]

## Opción recomendada: GitHub Pages

1. Cree una cuenta gratuita en [GitHub](https://github.com/signup), si aún no tiene una.
2. En GitHub, seleccione **New repository** y llámelo, por ejemplo, `menu-rancho-del-marisco`. Déjelo como **Public** y créelo.
3. En esta carpeta del proyecto ejecute los siguientes comandos, cambiando `TU_USUARIO` por su usuario de GitHub:

   ```bash
   git remote add origin https://github.com/TU_USUARIO/menu-rancho-del-marisco.git
   git branch -M main
   git push -u origin main
   ```

4. En el repositorio de GitHub entre a **Settings → Pages**.
5. En **Build and deployment**, seleccione **GitHub Actions**. Este proyecto ya incluye el flujo de publicación en `.github/workflows/deploy-pages.yml`.
6. Espere a que termine la acción. GitHub le mostrará el enlace público en la misma pantalla de **Pages**. Normalmente será similar a:

   ```text
   https://TU_USUARIO.github.io/menu-rancho-del-marisco/
   ```

> No suba solamente los archivos del PDF. Para que el menú digital funcione, debe subir **todo el proyecto**, incluido el archivo `.github/workflows/deploy-pages.yml`.

## Crear el código QR

Cuando tenga el enlace público definitivo, copie la URL y péguela en uno de estos servicios gratuitos:

- [QR Code Monkey](https://www.qrcode-monkey.com/)
- [Canva QR Code Generator](https://www.canva.com/qr-code-generator/)

Descargue el QR en formato **PNG** para redes o **SVG** para imprimirlo sin perder calidad. Antes de imprimirlo, pruébelo con la cámara de dos teléfonos distintos.

## Recomendaciones importantes

- No cambie el enlace después de imprimir los códigos QR: el QR apunta a una URL fija.
- Si cambia un precio o platillo, edite el sitio, haga `git add .`, `git commit -m "Actualizar menú"` y `git push`. GitHub Pages actualizará la página automáticamente.
- Conserve el número de WhatsApp configurado en el sitio: **6407-0843**.

[^1]: GitHub describe GitHub Pages como un servicio de alojamiento de sitios estáticos que publica archivos HTML, CSS y JavaScript directamente desde un repositorio. Véase [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) y la [guía rápida](https://docs.github.com/pages/quickstart).
