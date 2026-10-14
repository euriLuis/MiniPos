import { useRef, useState } from 'react';
import PhoneMockup from './PhoneMockup';

const screens = [
  { label: 'Venta', title: 'Registra cada venta', note: 'Agrega productos y confirma el total.' },
  { label: 'Resumen', title: 'Consulta tus números', note: 'Sigue la actividad de tu negocio.' },
  { label: 'IPV', title: 'Controla las existencias', note: 'Consulta inicio, entradas, ventas, mermas y final.' },
  { label: 'Inventario', title: 'Encuentra tus productos', note: 'Busca por nombre o código de barras.' },
  { label: 'Historial', title: 'Revisa cada movimiento', note: 'Consulta ventas y movimientos por fecha.' },
] as const;

export default function PreviewGallery() {
  const [active, setActive] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const sideSlots = [0, 1, 3, 4];
  const move = (direction: number) => setActive((current) => (current + direction + screens.length) % screens.length);

  return <div>
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-extrabold uppercase tracking-[.18em] text-violet">La app por dentro</p>
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">Todo a mano, desde tu teléfono.</h2>
      <p className="mt-5 text-base leading-7 text-muted">Un flujo claro para vender, consultar existencias y revisar resultados.</p>
    </div>
    <div className="gallery-stage" onTouchStart={(event) => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }} onTouchEnd={(event) => {
      if (!touchStart.current) return;
      const deltaX = event.changedTouches[0].clientX - touchStart.current.x;
      const deltaY = event.changedTouches[0].clientY - touchStart.current.y;
      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) move(deltaX < 0 ? 1 : -1);
      touchStart.current = null;
    }} onTouchCancel={() => { touchStart.current = null; }}>
      <div className="gallery-phones">
        {screens.map((screen, index) => <div key={screen.label} data-slot={index === active ? 2 : sideSlots[index < active ? index : index - 1]} aria-hidden={active !== index} className={`gallery-phone ${active === index ? 'is-active' : ''}`}>
          <PhoneMockup id={`mockup-galeria-${screen.label.toLowerCase()}`} screen={screen.label} />
        </div>)}
      </div>
      <button type="button" className="gallery-arrow gallery-arrow-prev" aria-label="Ver captura anterior" onClick={() => move(-1)}><span aria-hidden="true">‹</span></button>
      <button type="button" className="gallery-arrow gallery-arrow-next" aria-label="Ver captura siguiente" onClick={() => move(1)}><span aria-hidden="true">›</span></button>
    </div>
    <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Elegir vista de MiniPOS">
      {screens.map((screen, index) => <button key={screen.label} type="button" aria-pressed={active === index} onClick={() => setActive(index)} className={`min-h-12 cursor-pointer rounded-full border px-5 text-sm font-bold transition-colors ${active === index ? 'border-violet bg-violet text-white' : 'border-[#ddd4f2] bg-white hover:border-violet'}`}>{screen.label}</button>)}
    </div>
    <p className="mt-5 text-center text-sm text-muted" aria-live="polite"><strong className="text-ink">{screens[active].title}.</strong> {screens[active].note}</p>
  </div>;
}
