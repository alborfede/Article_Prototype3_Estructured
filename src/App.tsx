import React, { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { AudioPlayerButton } from './components/AudioPlayerButton';
import { ArticleSummary } from './components/ArticleSummary';
import { ShareMenu } from './components/ShareMenu';
import { RightSidebar } from './components/Sidebar/RightSidebar';
import './App.css';

export function App() {
  useEffect(() => {
    // Barra de progreso de lectura
    const handleScroll = () => {
      const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById('reading-progress');
      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cargar y procesar los widgets de Instagram
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <div id="reading-progress"></div>

      <Header />

      <main className="main-layout">
        <article className="article-container">
          {/* ETIQUETA EDITORIAL ALOJADA DENTRO DEL CUERPO DEL ARTÍCULO */}
          <div className="editorial-reference-container">
            <div className="editorial-badge-nyt">
              <span className="editorial-badge-text">Editorial</span>
              <div className="editorial-badge-underline"></div>
            </div>
          </div>

          <div className="article-meta-header">
            <a href="#" className="category-tag">
              Políticas
            </a>
            <div className="date-reading-group">
              <span className="article-date">30/7/2026</span>
              <span className="reading-time-badge">
                <i className="ri-time-line"></i> 4 min lect.
              </span>
            </div>
          </div>

          <h1 className="article-title">La Argentina colonia</h1>
          <p className="article-bajada">
            La importancia de la marcha del 6 y la necesidad de la intervención
            obrera.
          </p>

          <div className="above-cover-bar">
            <div className="author-info-group">
              <img
                className="author-avatar-img"
                src="https://admin.prensaobrera.com/wp-content/uploads/pablo-giachello-e1622484713254.jpg"
                alt="Pablo Giachello"
              />
              <span className="author-name">Pablo Giachello</span>

              {/* GRUPO DE BOTONES DE COMPARTIR */}
              <div className="share-actions-wrapper">
                <ShareMenu />

                {/* BOTÓN WHATSAPP DIRECTO */}
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    'Mirá esta nota de Prensa Obrera: ' +
                      (typeof window !== 'undefined'
                        ? window.location.href
                        : '')
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn-inline"
                  title="Compartir en WhatsApp"
                >
                  <i className="ri-whatsapp-line"></i>
                </a>
              </div>
            </div>

            <AudioPlayerButton />
          </div>

          <div className="article-cover-wrapper">
            <div className="article-cover">
              <img
                src="https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2Fkristalina-georgieva-luis-caputo-571x321.webp&w=1200&q=75"
                alt="Kristalina Georgieva y Luis Caputo"
              />
            </div>
            <div className="article-caption">
              Retrato del sometimiento frente al imperialismo.
              <span>Foto: Juan Pérez / EFE</span>
            </div>
          </div>

          {/* COMPONENTE DE RESUMEN IA */}
          <div className="summary-section-wrapper">
            <ArticleSummary />
          </div>

          <div className="nyt-google-section">
            <p className="nyt-google-title">
              Mirá más de nuestra cobertura en tus resultados de búsqueda.
            </p>
            <a
              href="https://news.google.com"
              target="_blank"
              rel="noreferrer"
              className="btn-nyt-google"
            >
              Seguir a Prensa Obrera en Google &#8599;
            </a>
          </div>

          <div className="article-body">
            <h2>Retrato del sometimiento frente al imperialismo</h2>
            {/* PÁRRAFO 1 */}
            <p>
              La llegada de la titular del FMI a la Argentina ha puesto de
              manifiesto, quizá como nunca antes, los inauditos niveles de
              sometimiento a los que Milei ha llevado a nuestro país frente al
              imperialismo. La reunión del gabinete nacional presidida por la
              titular del Fondo, Kristalina Georgieva, fue gráfica en ese
              sentido. Pero también lo fue la conferencia de prensa, no solo
              porque el ministro Caputo estuvo pintado, sino por la pretensión
              de Georgieva de ganarse la adhesión de los periodistas a través de
              una arenga que convocaba al pueblo argentino a mantenerse firme en
              la tolerancia del ajuste y la austeridad.
            </p>
            {/* PÁRRAFO 2 */}
            <p>
              Sin sonrojarse, la titular del FMI invocó a su propio país,
              Bulgaria, como un ejemplo a seguir. Obviamente, Kristalina evitó
              mencionar que la tutela del FMI del proceso de la restauración
              capitalista en Bulgaria a principios de los '90 terminó -entre
              1996 y 1997- en una crisis bancaria, una fuerte devaluación de la
              moneda búlgara y una hiperinflación. Diez años después, a través
              de un derrotero de privatizaciones, liquidación y reestructuración
              de empresas estatales, austeridad fiscal y reformas laborales,
              Bulgaria entraba como un país periférico y sometido a la Unión
              Europea. En todo este proceso, Bulgaria sufrió un derrumbe
              demográfico extraordinario, con una pérdida equivalente al 29% de
              su población. Interesante espejo en el que Georgieva nos convoca a
              mirarnos.
            </p>

            <h2>La agenda de Kristalina</h2>
            {/* PÁRRAFO 3 */}
            <p>
              Es claro que Kristalina Georgieva vino a la Argentina con
              objetivos muy concretos. En primer término, para asegurarse la
              tajada del propio Fondo en la repartija del bocado argentino y, en
              segundo lugar, para apuntalar al gobierno, que es garante de esa
              entrega y que en las encuestas se encuentra cada vez más
              cuestionado por la consideración popular.
            </p>
            {/* PÁRRAFO 4 */}
            <p>
              Hay que recordar que Argentina es el principal deudor del FMI y
              que, entre 2026 y 2027, el Estado argentino deberá pagarle al
              organismo alrededor de 12 mil millones de dólares. Por eso la
              titular del FMI se paseó por Loma Campana, el yacimiento estrella
              de Vaca Muerta, y en la conferencia de prensa planteó que
              Argentina debía profundizar aún más su rumbo de primarización de
              la economía. Es que allí, en la producción hidrocarburífera, están
              los potenciales dólares que el Fondo se anota para cobrar -como
              “acreedor privileged”. La titular del Fondo se mostró confiada en
              la posibilidad del Estado argentino de pagar y reclamó que el
              Banco Central “siga comprando dólares”. El día después, sin
              embargo, por una ironía del destino, por primera vez desde
              principios de enero el Banco Central se veía imposibilitado de
              comprar dólares.
            </p>
            {/* PÁRRAFO 5 */}
            <p>
              En línea con el interés por cobrar, Georgieva y el FMI reclaman
              más ajuste y un cambio de la carta orgánica del Banco Central.
              Sucede que el superávit conquistado por el gobierno en el primer
              semestre del año está muy lejos aún de la meta establecida por el
              FMI. Es que el derrumbe de la actividad -que es en gran medida
              consecuencia de la motosierra- está redundando en una caída de la
              recaudación fiscal: el famoso perro que se muerde la cola. El
              proyecto de ley de reforma del Banco Central, que Milei anunciaría
              por cadena nacional el jueves 30 por la noche, apuntaría a
              suprimir de manera total el financiamiento monetario del BCRA al
              Tesoro, históricamente utilizado para cubrir el déficit fiscal.
              Sería una medida complementaria o integrada al “apagón” del gasto
              estatal (shutdown) en las áreas que sean deficitarias, con
              excepción de las fuerzas represivas. Como se ve, todo es
              sacrificado en el altar del pago de la deuda externa.
            </p>

            {/* WIDGET DE INSTAGRAM 1 */}
            <div className="instagram-embed-wrapper">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/DbWa6RAlGv5/?utm_source=ig_embed&ig_rid=ALQXtadzE3XejJIMtVlIcIJ"
                data-instgrm-version="14"
                style={{
                  background: '#fff',
                  border: 0,
                  borderRadius: '3px',
                  boxShadow:
                    '0 0 1px 0 rgba(0, 0, 0, 0.5), 0 1px 10px 0 rgba(0, 0, 0, 0.15)',
                  margin: '1px auto',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: 0,
                  width: '99.375%',
                }}
              ></blockquote>
            </div>

            <h2>Argentina y el mundo</h2>
            <p>
              De implementarse toda esta agenda, no sólo se agravaría la enorme
              crisis que golpea a los sectores obreros y populares, sino que se
              reduciría sustancialmente el margen del gobierno para desplegar
              algún tipo de política de contención social. Es evidente que el
              plan reeleccionista de Milei se basa en sostener el apoyo de la
              mayor parte de la burguesía, mostrando su eficacia en ir a fondo
              en la ofensiva antiobrera sin desatar un estallido social, y
              mantener una tasa inflacionaria relativamente baja, con leves
              correcciones del tipo de cambio sobre la base de lograr el
              financiamiento internacional. Pero ninguno de los dos objetivos de
              Milei está asegurado de antemano.
            </p>
            <p>
              Sucede que si las contradicciones inmanentes del esquema económico
              -basado en un ajuste recargado, un “dólar barato”, una apertura
              importadora y una dependencia creciente de la asistencia externa-
              conducen al país, más temprano o más tarde, a un colapso; un
              coletazo de la crisis mundial no solo podría precipitarlo, sino
              también agravarlo sensiblemente. Es que, como se sabe, Argentina
              es apenas una hoja al viento en el torbellino de la economía
              mundial.
            </p>
            <p>
              Los factores exógenos podrían ser diversos. Hay que anotar entre
              ellos, desde luego, la guerra en Medio Oriente. Las negociaciones
              para poner fin a la ofensiva yanqui-sionista contra Irán y reabrir
              plenamente el estrecho de Ormuz permanecen empantanadas, la guerra
              tiende a regionalizarse y crece la presión sobre el mercado
              petrolero. También hay que seguir con atención la evolución de la
              burbuja financiera creada alrededor de la inteligencia artificial.
              Un pinchazo de la burbuja pondría al desnudo la fragilidad del
              esquema financiero argentino. Un revés de Trump en las elecciones
              norteamericanas de este año también impactaría en la Argentina, ya
              que pondría en cuestión las capacidades del imperialismo para
              volver a salir al rescate del gobierno libertario. Cualquiera de
              estos escenarios podría redundar en un gran desequilibrio del
              esquema económico y financiero doméstico y en una reactivación de
              la actividad combativa de las masas.
            </p>
            <p>
              Para tratar de asegurarse eventuales nuevos rescates financieros y
              el apoyo cerrado del imperialismo a su gobierno, Milei está
              protagonizando una gira trumpista por América Latina. Luego de
              visitar Brasil para respaldar a Flavio Bolsonaro, quien pretende
              desbancar a Lula de la presidencia brasileña en octubre próximo,
              Milei llegó a Perú para entrevistarse con Keiko Fujimori. La
              presidenta peruana asumió colocando al Ejército en la represión
              interna, con el objetivo de “establecer plenamente la autoridad
              del Estado”. Milei se apresta también a visitar al presidente
              ecuatoriano, Daniel Noboa, y a participar de la asunción de
              Abelardo de la Espriella, otro ultraderechista que acaba de ganar
              las elecciones colombianas. Semanas atrás Milei se jugó fondo en
              el sostenimiento de Rodrigo Paz, el presidente derechista de
              Bolivia, cuando se encontraba jaqueado por una gran rebelión
              obrera y campesina.
            </p>

            <div className="nyt-free-reads-box">
              <div className="nyt-free-reads-header">Más para leer</div>
              <div className="nyt-grid-2x2">
                <a href="#" className="nyt-read-item">
                  <div className="nyt-read-content">
                    <span className="nyt-read-category">Política</span>
                    <h4 className="nyt-read-title">
                      Revelan indicios de las coimas por el $Libra-gate
                    </h4>
                    <span className="nyt-read-time">ACTUALIDAD</span>
                  </div>
                  <img
                    src="https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2Fmileii-libra-482x321.jpg&w=1920&q=75"
                    alt="Libra-gate"
                    className="nyt-read-img"
                  />
                </a>

                <a href="#" className="nyt-read-item">
                  <div className="nyt-read-content">
                    <span className="nyt-read-category">Sindicales</span>
                    <h4 className="nyt-read-title">
                      Paro nacional docente en Córdoba: alto acatamiento y
                      movilización de UEPC Capital
                    </h4>
                    <span className="nyt-read-time">CÓRDOBA</span>
                  </div>
                  <img
                    src="https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2FWhatsApp-Image-2026-08-03-at-11.28.12-e1785793340238-660x314.jpeg&w=1920&q=75"
                    alt="Paro docente Córdoba"
                    className="nyt-read-img"
                  />
                </a>

                <div className="nyt-divider-horizontal"></div>

                <a href="#" className="nyt-read-item">
                  <div className="nyt-read-content">
                    <span className="nyt-read-category">Educación</span>
                    <h4 className="nyt-read-title">
                      Formosa: campaña por el cumplimiento de la Educación
                      Sexual Integral
                    </h4>
                    <span className="nyt-read-time">FORMOSA</span>
                  </div>
                  <img
                    src="https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2Fesi-1.webp&w=1920&q=75"
                    alt="ESI Formosa"
                    className="nyt-read-img"
                  />
                </a>

                <a href="#" className="nyt-read-item">
                  <div className="nyt-read-content">
                    <span className="nyt-read-category">
                      Frente de Izquierda
                    </span>
                    <h4 className="nyt-read-title">
                      Importante reunión por un comité de apoyo al Frente de
                      Izquierda Unidad en Calamuchita
                    </h4>
                    <span className="nyt-read-time">CALAMUCHITA</span>
                  </div>
                  <img
                    src="https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2Fcalamuchita-549x321.jpg&w=1920&q=75"
                    alt="Calamuchita FIT-U"
                    className="nyt-read-img"
                  />
                </a>
              </div>
            </div>

            <p>
              En definitiva, Milei se coloca como un personero del Corolario
              Trump a la Doctrina Monroe, que apunta a contener y desplazar el
              progreso de China en América Latina y someterla íntegramente a los
              intereses del imperialismo yanqui.
            </p>

            <h2>La ley antinacional y los trabajadores</h2>
            <p>
              Como frutilla del postre de toda esta política de subordinación al
              imperialismo y transformación de la Argentina en una colonia, el
              gobierno pretende avanzar en la aprobación de la ley de
              “inviolabilidad de la propiedad privada” el próximo 6 de agosto.
              Como se recordará, el despliegue de los jugadores de la selección
              de una bandera con la leyenda “Las Malvinas son argentinas” en el
              partido contra Inglaterra forzó la postergación del tratamiento de
              la ley. Los senadores optaron por evitar el papelón de entregar el
              país el día después de que el pueblo argentino festejara
              cerradamente un acto de reivindicación nacional.
            </p>
            <p>
              La ley que pretenden aprobar -no solo el gobierno nacional sino
              también distintos gobernadores de las provincias mineras y
              cordilleranas- habilita una mayor extranjerización de las tierras,
              desmonta aspectos centrales de la Ley de Tierras y de la Ley de
              Manejo del Fuego, refuerza los privilegios de propietarios,
              terratenientes y grandes capitales, agiliza los desalojos contra
              las comunidades, los inquilinos y las familias trabajadoras y
              limita las expropiaciones. Esto último golpea especialmente a los
              trabajadores que ocupan sus fábricas en defensa de sus puestos de
              trabajo, como los trabajadores de Fate o de Morvillo. Se trata de
              un nuevo salto en la política antinacional y antiobrera del
              gobierno libertario.
            </p>

            {/* WIDGET DE INSTAGRAM 2 (AL FINAL DEL ARTÍCULO) */}
            <div className="instagram-embed-wrapper">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/DbL6fLrlGGP/?utm_source=ig_embed&ig_rid=AOWytg8Rr-nXqcV9fP64nCl"
                data-instgrm-version="14"
                style={{
                  background: '#fff',
                  border: 0,
                  borderRadius: '3px',
                  boxShadow:
                    '0 0 1px 0 rgba(0, 0, 0, 0.5), 0 1px 10px 0 rgba(0, 0, 0, 0.15)',
                  margin: '1px auto',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: 0,
                  width: '99.375%',
                }}
              ></blockquote>
            </div>

            <div className="author-bio-card">
              <img
                className="author-bio-avatar"
                src="https://admin.prensaobrera.com/wp-content/uploads/pablo-giachello-e1622484713254.jpg"
                alt="Pablo Giachello"
              />
              <div className="author-bio-content">
                <p className="author-bio-text">
                  <strong>Pablo Giachello</strong> es Legislador electo por la
                  Provincia de Buenos Aires y Dirigente Nacional del PO - FITU.
                </p>
                <a href="#" className="author-bio-link">
                  Ver sus notas
                </a>
              </div>
            </div>

            <div className="related-notes-section">
              <a href="#" className="related-card">
                <img
                  src="https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2Fruenion-660x318.jpg&w=1920&q=75"
                  alt="Georgieva, Milei y el FMI"
                  className="related-card-img"
                />
                <div className="related-card-info">
                  <h4>Georgieva, Milei y el FMI</h4>
                  <p>Editorial de 14 Toneladas T3E23.</p>
                  <span>prensaobrera.com</span>
                </div>
              </a>

              <a href="#" className="related-card">
                <img
                  src="https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2FGeorgieva-Caputo-412x321.webp&w=1920&q=75"
                  alt="Milei es otro degenerado fiscal"
                  className="related-card-img"
                />
                <div className="related-card-info">
                  <h4>Milei es otro "degenerado fiscal" del FMI</h4>
                  <p>
                    Georgieva vino a montar otra estafa al pueblo argentino, y
                    respaldar a un gobierno al que no le dan las cuentas.
                  </p>
                  <span>prensaobrera.com</span>
                </div>
              </a>
            </div>
          </div>
        </article>

        {/* SIDEBAR DERECHA REFACTORIZADA */}
        <RightSidebar />
      </main>

      <div className="nyt-floating-banner">
        <div className="nyt-banner-text">
          <span className="nyt-banner-title">
            <strong>Banca a Prensa Obrera.</strong> Nos sostenemos de forma
            independiente con el aporte de lxs trabajadores, para construir un
            periódico de análisis y construcción política socialista.
          </span>
        </div>
        <button className="nyt-banner-btn">Suscribirse</button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
