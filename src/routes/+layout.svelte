<script lang="ts">
  import { onMount } from "svelte";
  import { auth } from "$lib/firebase";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { onAuthStateChanged } from "firebase/auth";

  let user: any = null;
  let loading: boolean = true;
  let isAdmin: boolean = false;

  onMount(() => {
    onAuthStateChanged(auth, (currentUser) => {
      user = currentUser;
      loading = false;

      if (currentUser) {
        isAdmin = currentUser.email === "admin@example.com";
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

<svelte:head></svelte:head>

{#if loading}
  <div>Cargando...</div>
{:else}
  {#if user && $page.url.pathname !== "/register"}
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold" href="/inicio">BiciKingV</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <!-- xd -->
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/inicio">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/quienes-somos">Quienes Somos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/productos">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contacto">Contacto</a>
            </li>
            {#if isAdmin}
              <li class="nav-item">
                <a class="nav-link" href="/inventario">Inventario</a>
              </li>
            {/if}
          </ul>
          {#if user}
            <div class="d-flex align-items-center gap-2">
              <span class="text-white small">Bienvenido, {user.email}</span>
              <button
                on:click={handleLogout}
                class="btn btn-outline-light btn-sm"
              >
                Cerrar Sesión
              </button>
            </div>
          {/if}
        </div>
      </div>
    </nav>
  {/if}

  <slot />

  {#if user && $page.url.pathname !== "/register"}
    <div class="bg-dark text-info py-4 mt-5">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-4 mb-4">
            <h5 class="fw-bold">BiciKingV</h5>
            <p>
              Especialistas en la venta de bicicletas de alta calidad para todos
              los estilos y necesidades. Encuentra la tuya y comienza a rodar
              con seguridad y estilo.
            </p>
          </div>
          <div class="col-md-4 mb-4">
            <h5 class="fw-bold">¿Por qué elegirnos?</h5>
            <p>🚴 Variedad en modelos y estilos</p>
            <p>💳 Pago seguro y flexible</p>
            <p>📦 Envío rápido y confiable</p>
          </div>
          <div class="col-md-4 mb-4">
            <h5 class="fw-bold">Síguenos</h5>
            <div
              class="d-flex flex-wrap justify-content-center align-items-center gap-3 w-100"
            >
              <a
                href="/"
                class="text-info d-flex justify-content-center align-items-center"
              >
                <!-- facebook -->
                <i class="bi bi-facebook bi-xl"></i>
              </a>
              <a
                href="/"
                class="text-info d-flex justify-content-center align-items-center"
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
              >
                <!-- youtube -->
                <i class="bi bi-youtube bi-xl"></i>
              </a>
              <a
                href="/"
                class="text-info d-flex justify-content-center align-items-center"
              >
                <!-- tiktok -->
                <i class="bi bi-tiktok bi-xl"></i>
              </a>
              <a
                href="/"
                class="text-info d-flex justify-content-center align-items-center"
              >
                <!-- linkedin -->
                <i class="bi bi-linkedin bi-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <hr class="border-info my-3" />
        <p class="mb-0">© 2025 BICICLETAS. Todos los derechos reservados.</p>
      </div>
    </div>
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

  :global(.bg-dark) {
    background-color: #1a3c5e !important;
  }

  :global(.text-info) {
    color: #ffffff !important;
  }

  :global(.border-info) {
    border-color: #ffffff !important;
  }

  :global(.text-info:hover) {
    color: #e2dede !important;
  }

  :global(.bi-xl) {
    font-size: 1.5rem;
  }
</style>
