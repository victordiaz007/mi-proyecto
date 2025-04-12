<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import { auth } from "$lib/firebase";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { onAuthStateChanged } from "firebase/auth";

  // Importar el JavaScript de Bootstrap
  onMount(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  });

  let user: any = null;
  let loading: boolean = true;
  let isAdmin: boolean = false;

  onMount(() => {
    onAuthStateChanged(auth, (currentUser) => {
      user = currentUser;
      loading = false;

      if (currentUser) {
        isAdmin = currentUser.email === "admin@example.com"; // Cambia esto por tu email de admin
      } else {
        isAdmin = false;
      }

      if (!currentUser && $page.url.pathname !== "/register") {
        goto("/register");
      } else if (currentUser && $page.url.pathname === "/register") {
        goto("/inicio");
      }
    });
  });

  async function handleLogout() {
    await auth.signOut();
    user = null;
    goto("/register");
  }
</script>

<svelte:head>
  <!-- Importar los estilos de Bootstrap -->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossorigin="anonymous"
  />
</svelte:head>

{#if loading}
  <div>Cargando...</div>
{:else}
  {#if user && $page.url.pathname !== "/register"}
    <nav class="navbar">
      <div class="navbar-brand">
        <a href="/inicio">BiciKingV</a>
      </div>
      <ul class="navbar-links">
        <li><a href="/inicio">Inicio</a></li>
        <li><a href="/quienes-somos">Quienes Somos</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
        {#if isAdmin}
          <li><a href="/inventario">Inventario</a></li>
        {/if}
      </ul>
      {#if user}
        <div class="navbar-user">
          <span>Bienvenido, {user.email}</span>
          <button on:click={handleLogout}>Cerrar Sesión</button>
        </div>
      {/if}
    </nav>
  {/if}
  <slot />
  {#if user && $page.url.pathname !== "/register"}
    <footer class="bg-dark text-info py-4 mt-5">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-4">
            <h5 class="fw-bold">BICICLETAS</h5>
            <p>
              Especialistas en la venta de bicicletas de alta calidad para todos
              los estilos y necesidades. Encuentra la tuya y comienza a rodar
              con seguridad y estilo.
            </p>
          </div>
          <div class="col-md-4">
            <h5 class="fw-bold">¿Por qué elegirnos?</h5>
            <p>🚴 Variedad en modelos y estilos</p>
            <p>💳 Pago seguro y flexible</p>
            <p>📦 Envío rápido y confiable</p>
          </div>
          <div class="col-md-4 d-flex flex-column align-items-center">
            <h5 class="fw-bold">Síguenos</h5>
            <div
              class="d-flex flex-wrap justify-content-center align-items-center gap-3 w-100"
            >
              <div
                class="d-flex justify-content-center align-items-center flex-wrap"
                style="width: 150px;"
              >
                <a
                  href="/"
                  class="text-info d-flex justify-content-center align-items-center"
                  style="width: 50px; height: 50px;"
                >
                  <!-- facebook -->
                  <i class="bi bi-facebook bi-xl"></i>
                </a>
                <a
                  href="/"
                  class="text-info d-flex justify-content-center align-items-center"
                  style="width: 50px; height: 50px;"
                >
                  <!-- instagram -->
                  <i class="bi bi-instagram bi-xl"></i>
                </a>
                <a
                  href="/"
                  class="text-info d-flex justify-content-center align-items-center"
                  style="width: 50px; height: 50px;"
                >
                  <!-- twitter -->
                  <i class="bi bi-twitter bi-xl"></i>
                </a>
                <a
                  href="/"
                  class="text-info d-flex justify-content-center align-items-center"
                  style="width: 50px; height: 50px;"
                >
                  <!-- youtube -->
                  <i class="bi bi-youtube bi-xl"></i>
                </a>
                <a
                  href="/"
                  class="text-info d-flex justify-content-center align-items-center"
                  style="width: 50px; height: 50px;"
                >
                  <!-- tiktok -->
                  <i class="bi bi-tiktok bi-xl"></i>
                </a>
                <a
                  href="/"
                  class="text-info d-flex justify-content-center align-items-center"
                  style="width: 50px; height: 50px;"
                >
                  <!-- linkedin -->
                  <i class="bi bi-linkedin bi-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr class="border-info my-3" />
        <p class="mb-0">© 2025 BICICLETAS. Todos los derechos reservados.</p>
      </div>
    </footer>
  {/if}
{/if}

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1a3c5e;
    padding: 1rem 2rem;
    color: white;
  }

  .navbar-brand a {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }

  .navbar-links {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    margin: 0;
  }

  .navbar-links li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }

  .navbar-links li a:hover {
    color: #4a90e2;
  }

  .navbar-user {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .navbar-user span {
    font-size: 0.9rem;
  }

  .navbar-user button {
    background: transparent;
    border: 1px solid white;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
  }

  .navbar-user button:hover {
    background: #4a90e2;
    border-color: #4a90e2;
  }

  :global(.bg-dark) {
    background-color: #1a3c5e !important;
  }

  :global(.text-info) {
    color: #ffffff !important;
  }

  :global(.border-info) {
    border-color: #ffffff !important;
  }

  :global(.fw-bold) {
    font-weight: 700 !important;
  }

  :global(.py-4) {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  :global(.mt-5) {
    margin-top: 3rem !important;
  }

  :global(.my-3) {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  :global(.mb-0) {
    margin-bottom: 0 !important;
  }

  :global(.container) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  :global(.text-center) {
    text-align: center;
  }

  :global(.row) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }

  :global(.col-md-4) {
    flex: 0 0 33.333%;
    max-width: 33.333%;
    padding: 0 15px;
    margin-bottom: 1rem;
  }

  :global(.d-flex) {
    display: flex;
  }

  :global(.flex-column) {
    flex-direction: column;
  }

  :global(.flex-wrap) {
    flex-wrap: wrap;
  }

  :global(.justify-content-center) {
    justify-content: center;
  }

  :global(.align-items-center) {
    align-items: center;
  }

  :global(.gap-3) {
    gap: 1rem;
  }

  :global(.w-100) {
    width: 100%;
  }

  :global(.text-info:hover) {
    color: #e2dede !important;
  }

  :global(.bi-xl) {
    font-size: 1.5rem;
  }
</style>
