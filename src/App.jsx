import './App.css'

function App() {
  return (
    <>
      <header>
        <div className="wrap header-inner">
          <a href="#top" className="brand">RUTA <b>503</b></a>
          <nav className="main-nav">
            <a href="#destinos">Destinos</a>
            <a href="#ruta">Rutas</a>
            <a href="#regiones">Regiones</a>
            <a href="#experiencias">Experiencias</a>
          </nav>
          <div className="header-cta">
            <a href="#planifica" className="btn btn-oro">Planifica tu viaje</a>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <p className="kicker">Guía independiente de viaje — El Salvador</p>
              <h1>El Pulgarcito de América, <em>de volcán en volcán</em> hasta el mar.</h1>
              <p className="hero-desc">
                Veintiún mil kilómetros cuadrados caben en un solo itinerario: un lago de cráter antes del almuerzo, un pueblo cafetalero por la tarde y olas hasta que se meta el sol.
              </p>
              <div className="hero-actions">
                <a href="#destinos" className="btn btn-oro">Ver los 8 destinos</a>
                <a href="#ruta" className="btn btn-line">Un día en la Ruta de las Flores</a>
              </div>
            </div>
            <div className="hero-art">
              <img src="/images/hero.jpg" alt="Paisaje de El Salvador" />
              <span className="tag">Tres volcanes se ven desde la capital</span>
            </div>
          </div>

          <div className="stat-strip">
            <div className="stat">
              <h3>208,000</h3>
              <p>turistas internacionales llegaron en una sola Semana Santa de 2026</p>
            </div>
            <div className="stat">
              <h3>+35%</h3>
              <p>de crecimiento en llegadas durante los primeros cuatro meses de 2026</p>
            </div>
            <div className="stat">
              <h3>2°</h3>
              <p>país de mayor crecimiento turístico de América Latina, según la ONU</p>
            </div>
            <div className="stat">
              <h3>760,000</h3>
              <p>visitas al Centro Histórico de San Salvador en un solo feriado</p>
            </div>
          </div>
        </div>
      </section>

      <section id="destinos">
        <div className="wrap">
          <div className="section-head">
            <h2>Ocho lugares que explican el país</h2>
            <p>De la plaza colonial a la cresta de un volcán activo, en un radio donde casi nunca se maneja más de dos horas.</p>
          </div>

          <div className="destinos-grid">
            <div className="destino">
              <img src="/images/centro-historico.jpg" alt="Centro Histórico" />
              <p className="region">San Salvador</p>
              <h3>Centro Histórico</h3>
              <p>El Palacio Nacional, la Catedral Metropolitana y el Teatro Nacional rodean una plaza que la alcaldía ha ido reabriendo edificio por edificio desde 2021.</p>
              <p className="fact">El destino más visitado del país en temporada alta</p>
            </div>

            <div className="destino">
              <img src="/images/surf-city.jpg" alt="Surf City" />
              <p className="region">La Libertad</p>
              <h3>Surf City — El Tunco y El Sunzal</h3>
              <p>Veintiún kilómetros de costa rocosa con olas de talla mundial, a media hora de la capital.</p>
              <p className="fact">30–45 min desde San Salvador</p>
            </div>

            <div className="destino">
              <img src="/images/ruta-flores.jpg" alt="Ruta de las Flores" />
              <p className="region">Sonsonate / Ahuachapán</p>
              <h3>Ruta de las Flores</h3>
              <p>Seis pueblos cafetaleros —Juayúa, Apaneca y Ataco— conectados por una carretera de curvas y murales.</p>
              <p className="fact">Altura promedio: 1,200 msnm</p>
            </div>

            <div className="destino">
              <img src="/images/volcan-santa-ana.jpg" alt="Volcán de Santa Ana" />
              <p className="region">Santa Ana</p>
              <h3>Volcán de Santa Ana y Lago de Coatepeque</h3>
              <p>Una caminata de hora y media lleva hasta un cráter turquesa humeante.</p>
              <p className="fact">2,381 msnm, el punto más alto del país</p>
            </div>

            <div className="destino">
              <img src="/images/joya-ceren.jpg" alt="Joya de Cerén" />
              <p className="region">La Libertad</p>
              <h3>Joya de Cerén</h3>
              <p>Una aldea agrícola maya sepultada por ceniza volcánica hace 1,400 años. Patrimonio de la Humanidad.</p>
              <p className="fact">La única Pompeya de América</p>
            </div>

            <div className="destino">
              <img src="/images/suchitoto.jpg" alt="Suchitoto" />
              <p className="region">Cuscatlán</p>
              <h3>Suchitoto</h3>
              <p>Calles empedradas, talleres de añil y el lago Suchitlán con lanchas para observar aves.</p>
              <p className="fact">Cuna del añil salvadoreño</p>
            </div>

            <div className="destino">
              <img src="/images/el-imposible.jpg" alt="El Imposible" />
              <p className="region">Ahuachapán</p>
              <h3>Parque Nacional El Imposible</h3>
              <p>Veinticinco kilómetros de senderos en la selva más biodiversa del país.</p>
              <p className="fact">Más de 400 especies de aves</p>
            </div>

            <div className="destino">
              <img src="/images/perquin.jpg" alt="Perquín" />
              <p className="region">Morazán</p>
              <h3>Perquín y la Ruta de la Paz</h3>
              <p>Pueblo de montaña y antiguo bastión guerrillero, hoy sede del Museo de la Revolución.</p>
              <p className="fact">Clima más fresco de la zona oriental</p>
            </div>
          </div>
        </div>
      </section>

      <section id="ruta">
        <div className="wrap ruta-layout">
          <div className="ruta-intro">
            <h2>Un día en la Ruta de las Flores</h2>
            <p>El recorrido que más se repite entre quienes solo tienen una jornada libre.</p>
            <a href="#planifica" className="btn btn-oro">Armar mi propia ruta</a>
          </div>

          <div className="steps">
            <div className="step">
              <span className="num">1</span>
              <div>
                <img src="/images/juayua.jpg" alt="Juayúa" />
                <h3>Juayúa y su mercado gastronómico</h3>
                <p>El Festival Gastronómico ocupa la plaza central todos los fines de semana.</p>
                <span className="when">Sábado y domingo, desde las 9:00 a.m.</span>
              </div>
            </div>
            <div className="step">
              <span className="num">2</span>
              <div>
                <img src="/images/chorros.jpg" alt="Los Chorros" />
                <h3>Los Chorros de la Calera</h3>
                <p>Cascadas de agua termal a quince minutos caminando del centro de Juayúa.</p>
                <span className="when">Entrada con guía local, media mañana</span>
              </div>
            </div>
            <div className="step">
              <span className="num">3</span>
              <div>
                <img src="/images/apaneca.jpg" alt="Apaneca" />
                <h3>Apaneca y una finca de café</h3>
                <p>El pueblo más alto de la ruta. Fincas abren recorridos del grano a la taza.</p>
                <span className="when">Primera hora de la tarde</span>
              </div>
            </div>
            <div className="step">
              <span className="num">4</span>
              <div>
                <img src="/images/ataco.jpg" alt="Ataco" />
                <h3>Concepción de Ataco al atardecer</h3>
                <p>Fachadas pintadas y miradores hacia el valle cafetalero.</p>
                <span className="when">Fin de tarde</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="regiones">
        <div className="wrap">
          <div className="section-head">
            <h2>Cuatro formas de moverse por el país</h2>
            <p>El Salvador se recorre por franjas: costa, valle central, tierra de café y oriente montañoso.</p>
          </div>

          <div className="regiones-row">
            <div className="region-card">
              <img src="/images/costa.jpg" alt="La costa" />
              <h3>La costa</h3>
              <p>Surf, pesca artesanal y pueblos de playa desde Los Cóbanos hasta Jiquilisco.</p>
            </div>
            <div className="region-card">
              <img src="/images/valle-central.jpg" alt="Valle central" />
              <h3>Valle central</h3>
              <p>San Salvador y sus volcanes, Suchitoto y el lago de Ilopango.</p>
            </div>
            <div className="region-card">
              <img src="/images/occidente.jpg" alt="Occidente" />
              <h3>Occidente cafetalero</h3>
              <p>La Ruta de las Flores y el volcán de Santa Ana.</p>
            </div>
            <div className="region-card">
              <img src="/images/oriente.jpg" alt="Oriente" />
              <h3>Oriente y Ruta de Paz</h3>
              <p>Montañas de Morazán y memoria histórica del conflicto armado.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencias">
        <div className="wrap">
          <div className="section-head">
            <h2>Lo que define un viaje aquí</h2>
            <p>No es una lista de monumentos: es lo que distingue moverse por El Salvador.</p>
          </div>
          <div className="exp-list">
            <div className="exp-item">
              <h3>Surf de nivel mundial a media hora de la capital</h3>
              <p>Pocos países tienen olas de competencia internacional tan cerca de un aeropuerto principal.</p>
            </div>
            <div className="exp-item">
              <h3>Café de altura, de la planta a la taza</h3>
              <p>Las fincas de Apaneca y Ataco siembran por encima de los 1,200 metros.</p>
            </div>
            <div className="exp-item">
              <h3>Historia maya y colonial, una al lado de la otra</h3>
              <p>Joya de Cerén y el Centro Histórico están a menos de una hora de distancia.</p>
            </div>
            <div className="exp-item">
              <h3>Volcanes activos que se caminan en un día</h3>
              <p>El Santa Ana, el Izalco y el de San Salvador se ascienden en jornadas de medio día.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap cta-inner">
          <div>
            <h2>¿Cuántos días tienes?</h2>
            <p>Con esa sola respuesta se arma el resto: un fin de semana rinde para costa y Ruta de las Flores; una semana alcanza para todo el país.</p>
          </div>
          <a href="#planifica" className="btn btn-terracota">Contarle a Ruta 503 mi plan</a>
        </div>
      </section>

      <section id="planifica">
        <div className="wrap plan-grid">
          <div className="plan-info">
            <h2>Cuéntanos cómo viajas</h2>
            <p>Guía gratuita hecha por viajeros locales. Escribe tus fechas y lo que te interesa.</p>
            <div className="meta">
              <div><strong>Mejor época</strong> Noviembre a abril, temporada seca.</div>
              <div><strong>Cómo moverse</strong> Buses turísticos o auto rentado.</div>
              <div><strong>Punto de entrada</strong> Aeropuerto Internacional de El Salvador.</div>
            </div>
          </div>
          <form>
            <input type="text" placeholder="Nombre completo" required />
            <input type="email" placeholder="Correo electrónico" required />
            <select required defaultValue="">
              <option value="" disabled>¿Qué te interesa más?</option>
              <option value="costa">Costa y surf</option>
              <option value="flores">Ruta de las Flores</option>
              <option value="historia">Historia maya y colonial</option>
              <option value="volcanes">Volcanes y naturaleza</option>
              <option value="completo">Un poco de todo</option>
            </select>
            <textarea rows="4" placeholder="¿Cuántos días tienes y cuándo piensas viajar?"></textarea>
            <button type="submit" className="btn btn-oro">Enviar mi plan</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <a href="#top" className="brand">RUTA <b>503</b></a>
          <p>Guía independiente de viaje. No afiliada a ninguna entidad de gobierno.</p>
          <div className="footer-links">
            <a href="#destinos">Destinos</a>
            <a href="#ruta">Rutas</a>
            <a href="#planifica">Planifica</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App