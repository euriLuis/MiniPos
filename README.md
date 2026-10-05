# MiniPOS web

Landing estática en Astro, React y Tailwind. Incluye las páginas `/`, `/terminos-y-condiciones/` y `/politica-de-privacidad/`.

## Desarrollo

```powershell
npm.cmd install
Copy-Item .env.example .env
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
- Rellenar `PUBLIC_CONTACT_EMAIL` y las redes oficiales opcionales `PUBLIC_INSTAGRAM_URL`, `PUBLIC_FACEBOOK_URL`, `PUBLIC_TELEGRAM_URL`.
- Sustituir `public/previews/*.svg` por capturas reales de la versión Android publicada y actualizar `src/components/PreviewGallery.tsx`. Las imágenes actuales se identifican como vistas ilustrativas.
- Revisar los borradores de términos y privacidad con la identidad legal completa de la empresa y comprobar que coinciden con la versión definitiva del APK y el tratamiento real de datos.

## Vercel

El proyecto usa el adaptador estático de Vercel y `@vercel/analytics/astro` en el layout compartido. Activa **Web Analytics** en el panel del proyecto para recibir visitas; no se cargan fuentes externas ni se envían eventos personalizados.

El sitio se genera como tres páginas estáticas. El límite de solicitudes debe configurarse en **Vercel Firewall → Custom Rules**, antes de servir los archivos desde la red de Vercel; no se implementa en código de servidor. El Firewall y su regla activa deben verificarse después del despliegue. El DDoS distribuido puede requerir además la mitigación automática de Vercel.
