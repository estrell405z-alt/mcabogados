import { useState } from 'react'

const services = [
  ['01', 'Derecho penal', 'Defensa técnica y acompañamiento estratégico durante todas las etapas del proceso penal.'],
  ['02', 'Derecho civil', 'Asesoría en obligaciones, contratos, propiedad, familia y resolución de controversias.'],
  ['03', 'Derecho laboral', 'Orientación preventiva y defensa para trabajadores y empresas en asuntos laborales.'],
]

const address = 'Cuzco N.º 110, Chiclayo, Lambayeque, Perú'
const coords = '-6.764807,-79.8581887'

const Mark = () => <span className="mark" aria-hidden="true">M<span>&</span>C</span>
const Brand = () => <a className="brand" href="#inicio" aria-label="M&C Abogados, inicio"><Mark/><span className="brand-copy"><strong>ABOGADOS</strong><small>ESTUDIO JURÍDICO</small></span></a>

export default function App() {
  const [open, setOpen] = useState(false)
  return <main>
    <header><Brand/><nav className={open ? 'open' : ''}>
      <a href="#nosotros" onClick={()=>setOpen(false)}>El estudio</a><a href="#servicios" onClick={()=>setOpen(false)}>Áreas de práctica</a><a href="#metodo" onClick={()=>setOpen(false)}>Cómo trabajamos</a><a href="#ubicacion" onClick={()=>setOpen(false)}>Ubicación</a><a className="nav-cta" href="#contacto" onClick={()=>setOpen(false)}>Agendar consulta</a>
    </nav><button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Abrir menú"><i/><i/></button></header>

    <section className="hero" id="inicio"><div className="hero-bg"/><div className="hero-brand"><img src="/logo-mc.png" alt="Logo Estudio Jurídico M.C. & Abogados E.I.R.L."/><span>Estudio Juridico M.C. &amp; ABOGADOS E.I.R.L.</span></div><div className="hero-content"><p className="eyebrow">Estudio jurídico · Chiclayo</p><h1>Defensa firme.<br/><em>Orientación clara.</em></h1><p className="lead">Protegemos sus derechos con criterio, cercanía y una estrategia legal construida para su caso.</p><div className="actions"><a className="button" href="#contacto">Solicitar una consulta <b>→</b></a><a href="#servicios">Conozca nuestros servicios ↓</a></div></div><div className="hero-note"><small>ATENCIÓN</small><strong>Personalizada y confidencial</strong></div></section>

    <section className="intro section" id="nosotros"><div><p className="eyebrow dark">M&C Abogados E.I.R.L.</p><h2>La tranquilidad de tener una estrategia legal a su lado.</h2></div><div className="copy"><p>Somos un estudio jurídico de Chiclayo dedicado a la asesoría y defensa en materia penal, civil y laboral. Abordamos cada asunto con análisis riguroso, comunicación directa y absoluto respeto por la confidencialidad.</p><p>Nuestra gestión organizada y el seguimiento digital de la información nos permiten darle una atención oportuna, clara y enfocada en resultados.</p><a className="inline" href="#metodo">Conocer nuestro enfoque ↗</a></div></section>

    <section className="services section" id="servicios"><div className="heading"><div><p className="eyebrow">Áreas de práctica</p><h2>Experiencia para los asuntos que más importan.</h2></div><p>Asesoría legal integral para personas y organizaciones, desde la prevención hasta la defensa.</p></div><div className="service-grid">{services.map(([n,t,d])=><article key={t}><small>{n}</small><i>§</i><h3>{t}</h3><p>{d}</p><a href="#contacto">Consultar →</a></article>)}</div></section>

    <section className="method" id="metodo"><div className="method-img"><blockquote>“Cada caso exige escucha, precisión y una ruta clara.”<small>Principio de nuestro estudio</small></blockquote></div><div className="method-copy"><p className="eyebrow dark">Cómo trabajamos</p><h2>Claridad en cada etapa.</h2><div className="steps"><div><span>01</span><p><strong>Escuchamos su caso</strong>Entendemos los hechos, sus prioridades y el contexto.</p></div><div><span>02</span><p><strong>Definimos la estrategia</strong>Evaluamos alternativas y explicamos cada paso con claridad.</p></div><div><span>03</span><p><strong>Actuamos y acompañamos</strong>Gestionamos su asunto con seguimiento constante y ordenado.</p></div></div></div></section>

    <section className="location section" id="ubicacion"><div className="location-info"><p className="eyebrow dark">Ubicación</p><h2>Visítenos en Chiclayo.</h2><p>Atendemos en nuestro estudio, previa coordinación de su consulta.</p><address><strong>Dirección</strong>{address}</address><address><strong>Horario</strong>Lunes a viernes · 8:00 a. m.–1:30 p. m. y 2:00–5:00 p. m.</address><a className="button" href={`https://www.google.com/maps/dir/?api=1&destination=${coords}`} target="_blank" rel="noreferrer">Cómo llegar <b>→</b></a></div><div className="location-map"><iframe title="Ubicación del estudio en Google Maps" src={`https://www.google.com/maps?q=${coords}&z=17&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/></div></section>

    <section className="contact section" id="contacto"><p className="eyebrow">Hablemos de su caso</p><h2>Una buena defensa comienza con una conversación.</h2><p>Cuéntenos brevemente su situación. Nos comunicaremos con usted para coordinar una consulta confidencial.</p><a className="button" href="https://wa.me/51931165782?text=Hola%2C%20deseo%20coordinar%20una%20consulta%20legal." target="_blank" rel="noreferrer">Contactar por WhatsApp <b>→</b></a><div className="meta"><span>{address}</span><span>Lunes a viernes · 8:00 a. m.–1:30 p. m. y 2:00–5:00 p. m.</span><a href="https://wa.me/51931165782" target="_blank" rel="noreferrer">WhatsApp: +51 931 165 782</a></div></section>
    <footer><Brand/><p>Asesoría y defensa legal en materia penal, civil y laboral.</p><p>© {new Date().getFullYear()} M&C Abogados E.I.R.L.</p></footer>
  </main>
}
