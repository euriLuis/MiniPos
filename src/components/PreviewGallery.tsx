import { useState } from 'react';

const screens = [
  { label: 'Venta', title: 'Registra cada venta', note: 'Agrega productos y confirma el total.' },
  { label: 'Inventario', title: 'Encuentra tus productos', note: 'Busca por nombre o código de barras.' },
  { label: 'Resumen', title: 'Consulta tus números', note: 'Sigue la actividad de tu negocio.' },
];

export default function PreviewGallery() {
  const [active, setActive] = useState(0);
  return <div className="grid items-center gap-9 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
    <div>
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[.16em] text-violet">La app por dentro</p>
      <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">Todo a mano, desde tu teléfono.</h2>
      <p className="mt-5 max-w-lg text-base leading-7 text-muted">Un flujo claro para vender, consultar existencias y revisar resultados. Las vistas son ilustrativas hasta incorporar capturas del APK publicado.</p>
      <div className="mt-7 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap" role="group" aria-label="Elegir vista de MiniPOS">
        {screens.map((screen, index) => <button key={screen.label} type="button" aria-pressed={active === index} onClick={() => setActive(index)} className={`min-h-12 cursor-pointer rounded-xl border px-2 text-sm font-bold transition-colors sm:px-5 ${active === index ? 'border-violet bg-violet text-white' : 'border-[#ddd4f2] bg-white hover:border-violet'}`}>{screen.label}</button>)}
      </div>
      <p className="mt-5 text-sm text-muted">{screens[active].note}</p>
    </div>
    <div className="rounded-[2rem] bg-lilac p-4 sm:p-8">
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-[#ddd4f2] bg-white shadow-[0_18px_45px_rgba(35,26,56,.16)]">
        <div className="flex items-center gap-3 border-b border-[#ddd4f2] px-5 py-4"><img src="/app-icon.png" width="40" height="40" alt="" className="rounded-xl" /><div><p className="font-display font-extrabold">MiniPOS</p><p className="text-xs text-muted">{screens[active].label}</p></div></div>
        <div className="min-h-[340px] bg-lilac p-5 sm:min-h-[390px]">
          <h3 className="font-display text-2xl font-extrabold">{screens[active].title}</h3>
          {active === 0 && <><p className="mt-2 text-sm text-muted">Venta en curso</p><div className="mt-5 rounded-xl border border-[#ddd4f2] bg-white p-4 text-sm text-muted">Buscar producto o escanear código</div><div className="mt-3 flex justify-between rounded-xl bg-white p-4 font-semibold"><span>Café molido</span><span className="text-violet">2 ×</span></div><div className="mt-2 flex justify-between rounded-xl bg-white p-4 font-semibold"><span>Leche</span><span className="text-violet">1 ×</span></div><div className="mt-4 flex justify-between rounded-xl bg-[#e8e0ff] p-4 font-bold"><span>Total</span><span>$ 740</span></div></>}
          {active === 1 && <><p className="mt-2 text-sm text-muted">Productos y existencias</p><div className="mt-5 rounded-xl border border-[#ddd4f2] bg-white p-4 text-sm text-muted">Buscar por nombre o código</div><div className="mt-3 flex justify-between rounded-xl bg-white p-4"><span className="font-semibold">Café molido</span><span className="text-sm text-muted">18 uds.</span></div><div className="mt-2 flex justify-between rounded-xl bg-white p-4"><span className="font-semibold">Leche</span><span className="text-sm text-muted">24 uds.</span></div><div className="mt-2 flex justify-between rounded-xl bg-white p-4"><span className="font-semibold">Pan</span><span className="text-sm text-muted">32 uds.</span></div></>}
          {active === 2 && <><p className="mt-2 text-sm text-muted">Tu actividad de hoy</p><div className="mt-5 rounded-xl bg-[#e8e0ff] p-5"><p className="text-sm font-semibold text-muted">Ventas registradas</p><p className="mt-2 font-display text-4xl font-extrabold">12</p></div><div className="mt-3 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white p-4"><p className="text-xs text-muted">Productos</p><p className="mt-2 font-display text-2xl font-extrabold">48</p></div><div className="rounded-xl bg-white p-4"><p className="text-xs text-muted">Movimientos</p><p className="mt-2 font-display text-2xl font-extrabold">6</p></div></div></>}
        </div>
        <div className="flex justify-around border-t border-[#ddd4f2] bg-white px-2 py-3 text-[11px] font-bold"><span className={active === 0 ? 'text-violet' : 'text-muted'}>Venta</span><span className={active === 2 ? 'text-violet' : 'text-muted'}>Resumen</span><span className="text-muted">IPV</span><span className={active === 1 ? 'text-violet' : 'text-muted'}>Inventario</span><span className="text-muted">Historial</span></div>
      </div>
      <p className="mt-4 text-center text-sm font-semibold text-muted">{screens[active].label} · Vista ilustrativa</p>
    </div>
  </div>;
}
