<script lang="ts">
  let productos = [
    {
      id: 1,
      name: "Bicicleta Montaña",
      description: "Ideal para terrenos difíciles y aventuras al aire libre.",
      price: "$120,000",
      date: "24/03/2025",
      image: "/bicicleta-montaña.jpg",
    },
    {
      id: 2,
      name: "Bicicleta BMX",
      description: "Perfecta si te gusta saltar rampas, hacer giros.",
      price: "$110,000",
      date: "24/04/2025",
      image: "/bicicleta-bmx.jpg",
    },
    {
      id: 3,
      name: "Bicicleta de Ruta",
      description: "Diseñada para velocidad y largas distancias en carretera.",
      price: "$130,000",
      date: "24/05/2025",
      image:
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  function showNotification(message: string, retries = 5, interval = 500) {
    if (typeof alertify !== "undefined") {
      alertify.set("notifier", "position", "top-right");
      alertify.success(message);
    } else if (retries > 0) {
      setTimeout(
        () => showNotification(message, retries - 1, interval),
        interval,
      );
    } else {
      alert(message);
    }
  }

  function addToCart(producto: { name: string }) {
    showNotification(`${producto.name} ha sido añadido al carrito.`);
  }

  let selectedImage = "";
  function openImageModal(image: string) {
    selectedImage = image;
  }
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>BiciKingV | Productos</title>
  <!-- Bootstrap CSS vía CDN -->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-…"
    crossorigin="anonymous"
  />
</svelte:head>

<main class="container my-5">
  <h1 class="text-center mb-4">
    <i class="bi bi-bicycle"></i> Nuestra Tienda
  </h1>

  <div class="row justify-content-center">
    {#each productos as producto}
      <div class="col-12 col-sm-6 col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img
            src={producto.image}
            alt={producto.name}
            class="card-img-top img-fluid"
            style="cursor: pointer;"
            on:click={() => openImageModal(producto.image)}
            data-bs-toggle="modal"
            data-bs-target="#imageModal"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{producto.name}</h5>
            <p class="card-text flex-grow-1">{producto.description}</p>
            <p class="fw-bold text-success">{producto.price}</p>
            <button
              class="btn btn-primary mt-2"
              on:click={() => addToCart(producto)}
            >
              <i class="bi bi-cart-plus"></i> Añadir al carrito
            </button>
          </div>
          <div class="card-footer text-muted text-center">
            Disponible desde: {producto.date}
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="imageModal"
    tabindex="-1"
    aria-labelledby="imageModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="imageModalLabel">Vista previa</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Cerrar"
          ></button>
        </div>
        <div class="modal-body text-center">
          {#if selectedImage}
            <img
              src={selectedImage}
              alt="Imagen del producto"
              class="img-fluid"
            />
          {/if}
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</main>

<!--
  NOTA: Ya no hay <style> que sobreescriba el grid de Bootstrap.
  Asegúrate de incluir también el bundle de JS de Bootstrap en tu layout principal:
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
-->
