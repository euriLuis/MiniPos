import { useState } from 'react';

const screens = [
  { label: 'Ventas', title: 'Una venta más ágil', image: '/previews/ventas.svg', alt: 'Vista ilustrativa de una venta en MiniPOS' },
  { label: 'Inventario', title: 'Productos a la vista', image: '/previews/inventario.svg', alt: 'Vista ilustrativa del inventario de MiniPOS' },
  { label: 'Resumen', title: 'Lo importante, claro', image: '/previews/resumen.svg', alt: 'Vista ilustrativa de resultados en MiniPOS' },
];

export default function PreviewGallery() {
  const [active, setActive] = useState(0);
  return <div className="grid items-center gap-9 lg:grid-cols-[.7fr_1.3fr]">
    <div>
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[.18em] text-violet">La app por dentro</p>
      <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">Todo bajo control, desde tu teléfono.</h2>
      <p className="mt-5 max-w-lg text-base leading-8 text-muted">Explora las pantallas principales. Estas vistas son ilustrativas; las capturas definitivas se incorporarán desde la versión publicada de Android.</p>
      <div className="mt-7 flex flex-wrap gap-2" role="group" aria-label="Elegir vista de MiniPOS">
        {screens.map((screen, index) => <button key={screen.label} type="button" aria-pressed={active === index} onClick={() => setActive(index)} className={`min-h-11 cursor-pointer rounded-full border px-5 text-sm font-bold transition-colors ${active === index ? 'border-violet bg-violet text-white' : 'border-[#ddd4f2] bg-white hover:border-violet'}`}>{screen.label}</button>)}
      </div>
    </div>
    <div className="rounded-[2rem] bg-[#eee9fa] p-5 shadow-[0_24px_65px_-35px_#50348055] sm:p-8">
      <img src={screens[active].image} alt={screens[active].alt} width="960" height="620" className="w-full rounded-2xl shadow-xl" />
      <p className="mt-4 text-center text-sm font-bold text-muted">{screens[active].title} · Vista ilustrativa</p>
    </div>
  </div>;
}
