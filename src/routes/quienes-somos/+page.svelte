<!-- src/routes/quienes-somos/+page.svelte -->
<script lang="ts">
</script>

<svelte:head>
  <title>BiciKingV | Quienes Somos</title>
</svelte:head>

<main class="container my-5">
  <h1 class="text-center mb-4">Sobre Nosotros</h1>
  <p class="text-center lead">
    Bienvenido a BiciKingV, donde la pasión por el ciclismo nos impulsa a
    ofrecer los mejores productos y servicios.
  </p>

  <section class="row mt-5">
    <div class="col-md-6">
      <h2><i class="bi bi-bicycle"></i> Nuestra Historia</h2>
      <p>
        Desde nuestros inicios, nos hemos dedicado a proporcionar bicicletas de
        alta calidad para ciclistas de todos los niveles. Nos enorgullecemos de
        nuestra atención al detalle y nuestra pasión por el ciclismo.
      </p>
    </div>
    <div class="col-md-6">
      <h2><i class="bi bi-people"></i> Nuestra Misión</h2>
      <p>
        Queremos fomentar el amor por el ciclismo y ofrecer productos que
        mejoren la experiencia de nuestros clientes, promoviendo un estilo de
        vida activo y sostenible.
      </p>
    </div>
  </section>

  <section class="row mt-5">
    <div class="col-md-6">
      <h2><i class="bi bi-tools"></i> Servicios</h2>
      <ul>
        <li>Venta de bicicletas y accesorios</li>
        <li>Mantenimiento y reparación</li>
        <li>Asesoramiento personalizado</li>
      </ul>
    </div>
    <div class="col-md-6">
      <h2><i class="bi bi-handshake-simple"></i> ¿Por qué elegirnos?</h2>
      <p>
        Ofrecemos calidad, experiencia y un servicio al cliente excepcional.
        Nuestro equipo está aquí para ayudarte a encontrar la bicicleta perfecta
        para ti.
      </p>
    </div>
  </section>
</main>

<style>
  main {
    min-height: calc(100vh - 300px);
    padding-bottom: 3rem;
  }

  :global(.container) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  :global(.my-5) {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  :global(.text-center) {
    text-align: center;
  }

  :global(.mb-4) {
    margin-bottom: 1.5rem !important;
  }

  :global(.lead) {
    font-size: 1.25rem;
    font-weight: 300;
    color: #333;
  }

  :global(.row) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }

  :global(.mt-5) {
    margin-top: 3rem !important;
  }

  :global(.col-md-6) {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 15px;
    margin-bottom: 1rem;
  }

  h1 {
    color: #1a3c5e;
  }

  h2 {
    color: #1a3c5e;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  h2 i {
    margin-right: 0.5rem;
    color: #4a90e2;
  }

  p {
    color: #333;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    padding: 0.5rem 0;
    color: #333;
  }

  ul li:before {
    content: '✔';
    color: #4a90e2;
    margin-right: 0.5rem;
  }
</style>