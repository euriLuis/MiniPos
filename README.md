# MiniPOS web

Landing estática en Astro, React y Tailwind. Incluye las páginas `/`, `/terminos-y-condiciones/` y `/politica-de-privacidad/`.

## Desarrollo

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run check
npm.cmd run build
```

## Descarga desde Supabase Storage

1. El bucket **público** `minipos-downloads` ya está creado en el proyecto `miniPos` (`jwvffmfcwfdkqjemwpgu`). Sube el APK firmado, por ejemplo `minipos-latest.apk`. La subida y sustitución deben quedar restringidas a administradores; el público solo necesita leerlo.
2. Configura en Vercel `PUBLIC_APK_PATH` con la ruta del archivo dentro del bucket. `PUBLIC_SUPABASE_URL` ya tiene como valor predeterminado la URL del proyecto y puede sobrescribirse si se migra. El botón enlaza a `https://<proyecto>.supabase.co/storage/v1/object/public/minipos-downloads/<ruta>?download=minipos.apk`, así el contenido lo entrega Supabase y no Vercel.
3. Tras subir el APK, abre ese enlace en una ventana privada y comprueba que descarga el archivo correcto. Al sustituirlo, verifica la versión y el hash del APK, y vuelve a probar la descarga.

El botón muestra «Descarga próximamente» si falta la configuración; no envía al visitante a un enlace ficticio. El bucket público permite a cualquier persona descargar el archivo si conoce la URL. Nunca pongas claves secretas de Supabase en variables `PUBLIC_`.

## Pendiente antes de publicar

- Subir un APK vigente al bucket y definir `PUBLIC_APK_PATH` en Vercel; el bucket está vacío por ahora.
- Rellenar `PUBLIC_CONTACT_EMAIL` y las redes oficiales opcionales `PUBLIC_FACEBOOK_URL`, `PUBLIC_INSTAGRAM_URL`, `PUBLIC_WHATSAPP_URL`, `PUBLIC_TELEGRAM_URL`.
- Sustituir las vistas ilustrativas de `src/components/PreviewGallery.tsx` por capturas reales de la versión Android publicada.
- Revisar los borradores de términos y privacidad con la identidad legal completa de la empresa y comprobar que coinciden con la versión definitiva del APK y el tratamiento real de datos.

## Vercel

El proyecto usa el adaptador estático de Vercel y `@vercel/analytics/astro` en el layout compartido. Web Analytics ya está habilitado en Vercel; no se cargan fuentes externas ni se envían eventos personalizados. Las fuentes oficiales Manrope e Inter se sirven desde este proyecto.

El sitio se genera como tres páginas estáticas. En Vercel Firewall está publicada la regla «Limite general 300 por minuto»: 300 solicitudes por minuto por IP para todas las rutas, con bloqueo al exceder el límite.

La tarjeta para compartir usa `public/minipos-compartir-v3.jpg`, derivada de la imagen horizontal de 1200 × 630 del kit oficial de marca con el icono un 20 % mayor. JPEG y una URL nueva facilitan que Telegram vuelva a obtenerla. Los metadatos Open Graph/Twitter usan URL absoluta. El dominio canónico es `https://minipos-kohl.vercel.app`. Los PNG anteriores se conservan para no romper URL ya compartidas.
