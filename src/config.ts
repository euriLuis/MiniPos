export const supportEmail = import.meta.env.PUBLIC_CONTACT_EMAIL || 'appminipos@gmail.com';
// shortcut: Astro dev does not apply Vercel redirects; use vercel dev to test this link locally.
export const downloadUrl = '/descargar';
export const socialPlatforms = [
  { label: 'Facebook', url: 'https://www.facebook.com/share/1QPwVqWy8z/' },
  { label: 'Instagram', url: '' },
  { label: 'WhatsApp', url: 'https://whatsapp.com/channel/0029VbDlUhIFnSz0fDh35O0U' },
  { label: 'Telegram', url: 'https://t.me/miniposapk' },
] as const;
