type Screen = 'Venta' | 'Resumen' | 'IPV' | 'Inventario' | 'Historial';

// Añade aquí capturas del APK publicado; mientras tanto se muestra la vista ilustrativa.
export const screenshots: Partial<Record<Screen, string>> = {};

export default function PhoneMockup({ screen, className = '' }: { screen: Screen; className?: string }) {
  const screenshot = screenshots[screen];

  return <div className={`phone-mockup ${className}`} aria-label={`${screen} de MiniPOS, ${screenshot ? 'captura de la app' : 'vista ilustrativa'}`}>
    <div className="phone-screen">
      {!screenshot && <div className="phone-status"><span>9:41</span><span>●●● ▰</span></div>}
      <div className="phone-camera" aria-hidden="true" />
      {screenshot ? <img className="phone-screenshot" src={screenshot} alt={`Pantalla ${screen} de MiniPOS`} /> : <div className="phone-demo">
        <div className="phone-appbar"><img src="/app-icon.webp" width="27" height="27" alt="" /><span>MiniPOS</span><span className="phone-appbar-dot" /></div>
        <div className="phone-content">
          <p className="phone-eyebrow">{{ Venta: 'PUNTO DE VENTA', Resumen: 'TU NEGOCIO', IPV: 'CONTROL DE EXISTENCIAS', Inventario: 'PRODUCTOS', Historial: 'ACTIVIDAD' }[screen]}</p>
          <h3>{{ Venta: 'Una venta más simple', Resumen: 'Números más claros', IPV: 'Control IPV', Inventario: 'Inventario en orden', Historial: 'Historial de ventas' }[screen]}</h3>
          {screen === 'Venta' && <>
            <div className="phone-search">Buscar producto o escanear <span>⌕</span></div>
            <div className="phone-row"><span>Café molido</span><b>2 ×</b></div>
            <div className="phone-row"><span>Leche</span><b>1 ×</b></div>
            <div className="phone-total"><span>Total de la venta</span><strong>$ 740</strong></div>
            <div className="phone-action">Cobrar</div>
          </>}
          {screen === 'Inventario' && <>
            <div className="phone-search">Buscar por nombre o código <span>⌕</span></div>
            <div className="phone-row"><span>Café molido</span><b>18 uds.</b></div>
            <div className="phone-row"><span>Leche</span><b>24 uds.</b></div>
            <div className="phone-row"><span>Pan</span><b>32 uds.</b></div>
          </>}
          {screen === 'Resumen' && <>
            <div className="phone-summary"><span>Ventas registradas</span><strong>12</strong></div>
            <div className="phone-summary-grid"><div><span>Productos</span><strong>48</strong></div><div><span>Movimientos</span><strong>6</strong></div></div>
          </>}
          {screen === 'IPV' && <>
            <div className="phone-ipv-card"><div className="phone-ipv-heading"><strong>Café molido</strong><span>Final <b>16</b></span></div><div className="phone-ipv-metrics"><span>Inicio <b>18</b></span><span>Entrada <b>0</b></span><span>Venta <b>2</b></span><span>Merma <b>0</b></span></div></div>
            <div className="phone-ipv-card"><div className="phone-ipv-heading"><strong>Leche</strong><span>Final <b>23</b></span></div><div className="phone-ipv-metrics"><span>Inicio <b>24</b></span><span>Entrada <b>0</b></span><span>Venta <b>1</b></span><span>Merma <b>0</b></span></div></div>
          </>}
          {screen === 'Historial' && <>
            <div className="phone-history-filters"><b>Ventas</b><span>Todos</span><span>Entradas</span></div>
            <div className="phone-history-row"><div><strong>Venta 2</strong><span>10:24 · Café molido, Leche</span></div><b>$ 740</b></div>
            <div className="phone-history-row"><div><strong>Venta 1</strong><span>09:12 · Pan</span></div><b>$ 120</b></div>
          </>}
        </div>
        <div className="phone-tabs">{(['Venta', 'Resumen', 'IPV', 'Inventario', 'Historial'] as const).map((tab) => <span key={tab} className={screen === tab ? 'selected' : ''}>{tab}</span>)}</div>
      </div>}
    </div>
  </div>;
}
