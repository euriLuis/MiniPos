export const supportEmail = import.meta.env.PUBLIC_CONTACT_EMAIL || '';
const storageUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://jwvffmfcwfdkqjemwpgu.supabase.co';
const apkPath = import.meta.env.PUBLIC_APK_PATH || '';
export const downloadUrl = /^https:\/\/[^/]+\.supabase\.co$/.test(storageUrl) && /^[\w./-]+\.apk$/.test(apkPath) && !apkPath.includes('..')
  ? `${storageUrl}/storage/v1/object/public/minipos-downloads/${apkPath}?download=minipos.apk`
  : '';
export const socialPlatforms = [
  { label: 'Facebook', url: import.meta.env.PUBLIC_FACEBOOK_URL },
  { label: 'Instagram', url: import.meta.env.PUBLIC_INSTAGRAM_URL },
  { label: 'WhatsApp', url: import.meta.env.PUBLIC_WHATSAPP_URL },
  { label: 'Telegram', url: import.meta.env.PUBLIC_TELEGRAM_URL },
] as const;
export const socialLinks = socialPlatforms.filter((link) => /^https:\/\//.test(link.url || ''));
