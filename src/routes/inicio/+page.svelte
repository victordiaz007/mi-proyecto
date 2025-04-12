<script lang="ts">
</script>

<svelte:head>
  <title>BiciKingV | Inicio</title>
</svelte:head>

<div class="container my-3 text-center">
  <h1>
    <i class="bi bi-bicycle"></i> Bienvenido a BiciKingV
  </h1>
  <p>
    Descubre las mejores bicicletas para todas tus aventuras, desde paseos
    urbanos hasta rutas de montaña.
  </p>

  <div class="row mt-4">
    <div class="col-md-4">
      <i class="bi bi-tree-fill bi-3x"></i>
      <h3>Bicicletas de Montaña</h3>
      <p>
        Explora terrenos difíciles con nuestras resistentes bicicletas de
        montaña.
      </p>
    </div>
    <div class="col-md-4">
      <i class="bi bi-signpost bi-3x"></i>
      <h3>Bicicletas de Ruta</h3>
      <p>Velocidad y rendimiento para los amantes del asfalto.</p>
    </div>
    <div class="col-md-4">
      <i class="bi bi-people-fill bi-3x"></i>
      <h3>Bicicletas Infantiles</h3>
      <p>Seguras y divertidas para los más pequeños.</p>
    </div>
  </div>

  <div class="mt-5">
    <h2><i class="bi bi-clipboard-check-fill"></i> Testimonios de Clientes</h2>
    <p>Lo que dicen nuestros clientes sobre nosotros.</p>
    <blockquote>
      "¡La mejor tienda de bicicletas! Gran variedad y excelente servicio." –
      Juan P.
    </blockquote>
    <blockquote>
      "Encontré la bicicleta perfecta para mi hijo. ¡Muy recomendada!" – María
      G.
    </blockquote>
  </div>

  <div class="mt-5">
    <h2><i class="bi bi-question-circle"></i> Preguntas Frecuentes</h2>
    <div class="accordion" id="faqAccordion">
      <div class="accordion-item">
        <h2 class="accordion-header" id="faq1">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse1"
            aria-expanded="true"
            aria-controls="collapse1"
          >
            ¿Ofrecen envíos a domicilio?
          </button>
        </h2>
        <div
          id="collapse1"
          class="accordion-collapse collapse show"
          aria-labelledby="faq1"
          data-bs-parent="#faqAccordion"
        >
          <div class="accordion-body">
            Sí, realizamos envíos a todo el país con tiempos de entrega rápidos
            y seguros.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="faq2">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse2"
            aria-expanded="false"
            aria-controls="collapse2"
          >
            ¿Tienen servicio de mantenimiento?
          </button>
        </h2>
        <div
          id="collapse2"
          class="accordion-collapse collapse"
          aria-labelledby="faq2"
          data-bs-parent="#faqAccordion"
        >
          <div class="accordion-body">
            Sí, ofrecemos mantenimiento preventivo y correctivo para todo tipo
            de bicicletas.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="faq3">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse3"
            aria-expanded="false"
            aria-controls="collapse3"
          >
            ¿Aceptan pagos con tarjeta de crédito?
          </button>
        </h2>
        <div
          id="collapse3"
          class="accordion-collapse collapse"
          aria-labelledby="faq3"
          data-bs-parent="#faqAccordion"
        >
          <div class="accordion-body">
            Sí, aceptamos todas las tarjetas de crédito y débito, así como pagos
            electrónicos.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="faq4">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse4"
            aria-expanded="false"
            aria-controls="collapse4"
          >
            ¿Puedo probar una bicicleta antes de comprarla?
          </button>
        </h2>
        <div
          id="collapse4"
          class="accordion-collapse collapse"
          aria-labelledby="faq4"
          data-bs-parent="#faqAccordion"
        >
          <div class="accordion-body">
            Sí, contamos con un área de pruebas para que puedas experimentar
            antes de decidirte.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="faq5">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse5"
            aria-expanded="false"
            aria-controls="collapse5"
          >
            ¿Tienen repuestos y accesorios?
          </button>
        </h2>
        <div
          id="collapse5"
          class="accordion-collapse collapse"
          aria-labelledby="faq5"
          data-bs-parent="#faqAccordion"
        >
          <div class="accordion-body">
            Sí, contamos con una amplia gama de repuestos y accesorios para
            bicicletas de todas las marcas.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  :global(.container) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    min-height: calc(100vh - 300px);
    padding-bottom: 3rem;
  }

  :global(.my-3) {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  :global(.text-center) {
    text-align: center;
  }

  :global(.row) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }

  :global(.mt-4) {
    margin-top: 1.5rem !important;
  }

  :global(.col-md-4) {
    flex: 0 0 33.333%;
    max-width: 33.333%;
    padding: 0 15px;
    margin-bottom: 1rem;
  }

  :global(.mt-5) {
    margin-top: 3rem !important;
  }

  h1 {
    color: #1a3c5e;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h1 i {
    color: #4a90e2;
    margin-right: 0.5rem;
  }

  p {
    color: #333;
    font-size: 1.1rem;
  }

  h3 {
    color: #1a3c5e;
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  i.bi-3x {
    font-size: 3rem;
    color: #4a90e2;
  }

  h2 {
    color: #1a3c5e;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h2 i {
    color: #4a90e2;
    margin-right: 0.5rem;
  }

  blockquote {
    font-style: italic;
    color: #555;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    border-left: 4px solid #4a90e2;
  }

  :global(.accordion-button) {
    background-color: #4a90e2 !important; /* Verde prominente */
    color: #ffffff !important; /* Texto blanco para legibilidad */
    font-weight: 500;
  }

  :global(.accordion-button:not(.collapsed)) {
    background-color: #2393a6 !important; /* Verde más oscuro cuando está expandido */
    color: #ffffff !important;
  }

  :global(.accordion-button:focus) {
    box-shadow: 0 0 0 0.25rem rgba(50, 210, 117, 0.25) !important; /* Sombra al enfocar */
  }

  :global(.accordion-body) {
    color: #333;
    background-color: #f8f9fa; /* Fondo claro para el contenido */
  }
</style>
