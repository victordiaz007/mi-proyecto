<script lang="ts">
</script>

<svelte:head>
  <title>BiciKingV | Quiénes Somos</title>
</svelte:head>

<main class="container my-5">
  <h1 class="text-center mb-4">Quiénes Somos</h1>
  <p class="text-center lead">
    En <strong>BiciKingV</strong>, vivimos el ciclismo con pasión. Nuestro
    compromiso es ofrecer productos de calidad y un servicio que te inspire a
    rodar más lejos cada día.
  </p>

  <section class="row mt-5">
    <div class="col-12 col-md-6 mb-4">
      <div class="CardSelected p-4 border border-black rounded">
        <h2><i class="bi bi-bicycle"></i> Nuestra Historia</h2>
        <p>
          Fundados por ciclistas y para ciclistas, nacimos con la visión de ser
          un punto de encuentro para los amantes de las dos ruedas. Desde
          entonces, hemos crecido junto a nuestra comunidad, ofreciendo siempre
          lo mejor en bicicletas, accesorios y experiencia.
        </p>
      </div>
    </div>
    <div class="col-12 col-md-6 mb-4">
      <div class="CardSelected p-4 border border-black rounded">
        <h2><i class="bi bi-bullseye"></i> Nuestra Misión</h2>
        <p>
          Promover un estilo de vida saludable, ecológico y activo a través del
          ciclismo, brindando atención personalizada y productos que se adaptan
          a cada necesidad.
        </p>
      </div>
    </div>
  </section>

  <section class="row mt-5">
    <div class="col-12 col-md-6 mb-4">
      <div class="CardSelected p-4 border border-black rounded">
        <h2><i class="bi bi-stars"></i> Nuestros Valores</h2>
        <ul>
          <li>Pasión por el ciclismo</li>
          <li>Atención cercana y personalizada</li>
          <li>Calidad en cada detalle</li>
          <li>Compromiso con la sostenibilidad</li>
        </ul>
      </div>
    </div>
    <div class="col-12 col-md-6 mb-4">
      <div class="CardSelected p-4 border border-black rounded">
        <h2><i class="bi bi-people-fill"></i> Nuestro Equipo</h2>
        <p>
          Somos un equipo diverso unido por una misma meta: ayudarte a disfrutar
          del camino. Cada miembro aporta conocimiento, experiencia y una
          sonrisa para que tu experiencia sea inolvidable.
        </p>
      </div>
    </div>
  </section>
</main>

<!-- No necesitas agregar reglas CSS personalizadas, ya que Bootstrap maneja la responsividad automáticamente. -->
<style>
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
    content: "✔";
    color: #4a90e2;
    margin-right: 0.5rem;
  }

  .CardSelected {
    transition: all 125ms ease-in;
  }

  .CardSelected:hover {
    cursor: pointer;
    translate: 0px -8px;
    box-shadow: 5px 5px 16px #555;
  }
</style>
