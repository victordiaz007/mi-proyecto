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
      name: "Bicicleta Bmx",
      description: "Perfecta si te gusta saltar rampas, hacer giros,la BMX es ideal.",
      price: "$110,000",
      date: "24/04/2025",
      image:
        "/bicicleta-bmx.jpg",
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

  // Función para mostrar notificaciones con reintentos
  function showNotification(message: string, retries = 5, interval = 500) {
    if (typeof alertify !== "undefined") {
      alertify.set("notifier", "position", "top-right");
      alertify.success(message);
    } else if (retries > 0) {
      // Reintentar después de un intervalo
      setTimeout(() => {
        showNotification(message, retries - 1, interval);
      }, interval);
    } else {
      // Fallback a alert nativo si no se carga alertify
      alert(message);
    }
  }

  function addToCart(producto: { name: string }) {
    showNotification(`${producto.name} ha sido añadido al carrito.`);
  }

  // Manejar la apertura del modal
  let selectedImage = "";
  function openImageModal(image: string) {
    selectedImage = image;
  }
</script>

<svelte:head>
  <title>BiciKingV | Productos</title>
</svelte:head>

<main class="container">
  <h1 class="text-center my-4">
    <i class="bi bi-bicycle"></i> Nuestra Tienda
  </h1>
  <div class="row justify-content-center">
    {#each productos as producto}
      <div class="col-md-4 col-sm-6 mb-4">
        <div class="card shadow-sm border-0">
          <img
            src={producto.image}
            alt={producto.name}
            class="card-img-top"
            style="cursor: pointer;"
            on:click={() => openImageModal(producto.image)}
            data-bs-toggle="modal"
            data-bs-target="#imageModal"
          />
          <div class="card-body text-center">
            <h5 class="card-title">{producto.name}</h5>
            <p class="card-text">{producto.description}</p>
            <p class="fw-bold text-success">{producto.price}</p>
            <button
              class="btn btn-primary"
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

  <!-- Modal para mostrar la imagen en tamaño completo -->
  <div
    class="modal fade"
    id="imageModal"
    tabindex="-1"
    aria-labelledby="imageModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="imageModalLabel">Vista previa de la imagen</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center">
          {#if selectedImage}
            <img
              src={selectedImage}
              alt="Imagen del producto"
              class="img-fluid"
              style="max-height: 500px; object-fit: contain;"
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

  :global(.text-center) {
    text-align: center;
  }

  :global(.my-4) {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  :global(.row) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }

  :global(.justify-content-center) {
    justify-content: center;
  }

  :global(.col-md-4) {
    flex: 0 0 33.333%;
    max-width: 33.333%;
    padding: 0 15px;
  }

  :global(.col-sm-6) {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 15px;
  }

  :global(.mb-4) {
    margin-bottom: 1.5rem !important;
  }

  :global(.card) {
    transition: transform 0.3s ease-in-out;
    border-radius: 8px;
  }

  :global(.card:hover) {
    transform: scale(1.05);
  }

  :global(.card-img-top) {
    width: 100%;
    height: 200px;
    object-fit: contain;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #f8f9fa;
  }

  :global(.card-body) {
    padding: 1.25rem;
  }

  :global(.card-title) {
    color: #1a3c5e;
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  :global(.card-text) {
    color: #333;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  :global(.fw-bold) {
    font-weight: 700 !important;
  }

  :global(.text-success) {
    color: #28b062 !important;
  }

  :global(.btn-primary) {
    background-color: #4a90e2;
    border-color: #4a90e2;
    color: #ffffff;
    font-weight: 500;
  }

  :global(.btn-primary:hover) {
    background-color: #1a3c5e;
    border-color: #1a3c5e;
  }

  :global(.card-footer) {
    background-color: #f8f9fa;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 0.75rem;
    font-size: 0.85rem;
  }

  :global(.text-muted) {
    color: #6c757d !important;
  }

  :global(.modal-title) {
    color: #1a3c5e;
  }

  :global(.btn-secondary) {
    background-color: #6c757d;
    border-color: #6c757d;
  }

  :global(.btn-secondary:hover) {
    background-color: #5a6268;
    border-color: #5a6268;
  }

  h1 {
    color: #1a3c5e;
    font-size: 2.5rem;
  }

  h1 i {
    color: #4a90e2;
    margin-right: 0.5rem;
  }
</style>