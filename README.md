# MiniPOS web

Landing estática en Astro, React y Tailwind. Incluye las páginas `/`, `/terminos-y-condiciones/` y `/politica-de-privacidad/`.

## Desarrollo

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run check
npm.cmd run build
```

## Descarga desde GitHub Releases

El botón fijo de la portada pasa por `/descargar`, que redirige al archivo `MiniPos.apk` de la última Release pública de `euriLuis/MiniPos`. Para publicar una nueva versión, crea una Release no preliminar con el APK firmado bajo ese mismo nombre y comprueba la descarga en una ventana privada. El contenido lo entrega GitHub, no Vercel.

## Pendiente antes de publicar

- Comprobar en Android que el APK enlazado es la versión vigente y se instala correctamente.
- Confirmar que `appminipos@gmail.com` recibe consultas antes de publicar; `PUBLIC_CONTACT_EMAIL` permite sustituirlo. El enlace de Instagram sigue pendiente.
- Revisar los borradores de términos y privacidad con la identidad legal completa de la empresa y comprobar que coinciden con la versión definitiva del APK y el tratamiento real de datos.

## Vercel

El proyecto usa el adaptador estático de Vercel y `@vercel/analytics/astro` en el layout compartido. Web Analytics muestra visitantes, páginas vistas, origen, país, navegador y dispositivo en **Analytics**. `@vercel/speed-insights/astro` añade métricas reales de rendimiento en **Speed Insights**; hay que activar esta función en el panel de Vercel para que empiece a recopilar datos. No se cargan fuentes externas ni se envían eventos personalizados. Las fuentes oficiales Manrope e Inter se sirven desde este proyecto.

Para contar intentos de descarga, abre **Observability → CDN Requests** y consulta la ruta `/descargar`. Cada solicitud a esa ruta redirige al APK de GitHub. Este número puede incluir bots o repeticiones y no confirma que la descarga terminase ni que se instalase. El plan Hobby no ofrece eventos personalizados de Web Analytics ni mapas de calor; GitHub muestra el número de descargas del archivo en la Release, pero tampoco confirma instalaciones.

El sitio se genera como tres páginas estáticas. En Vercel Firewall está publicada la regla «Limite general 300 por minuto»: 300 solicitudes por minuto por IP para todas las rutas, con bloqueo al exceder el límite.

La tarjeta para compartir usa `public/minipos-compartir-v3.jpg`, derivada de la imagen horizontal de 1200 × 630 del kit oficial de marca con el icono un 20 % mayor. JPEG y una URL nueva facilitan que Telegram vuelva a obtenerla. Los metadatos Open Graph/Twitter usan URL absoluta. El dominio canónico es `https://minipos-kohl.vercel.app`. Los PNG anteriores se conservan para no romper URL ya compartidas.
