<!-- src/routes/inventario/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { auth } from '$lib/firebase';
  import { goto } from '$app/navigation';

  onMount(() => {
    const user = auth.currentUser;
    const isAdmin = user && user.email === 'admin@example.com'; // Cambia por tu email
    if (!isAdmin) {
      goto('/inicio');
    }
  });
</script>

<main>
  <h1>Inventario (Solo para Administradores)</h1>
  <p>Lista de productos en inventario:</p>
  <ul>
    <li>Bicicleta de montaña - 10 unidades</li>
    <li>Bicicleta urbana - 15 unidades</li>
    <li>Casco de seguridad - 50 unidades</li>
  </ul>
</main>

<style>
  main {
    min-height: calc(100vh - 300px);
    padding-bottom: 3rem;
  }

  h1 {
    color: #1a3c5e;
    text-align: center;
    margin-top: 2rem;
  }

  p {
    text-align: center;
    color: #333;
  }

  ul {
    max-width: 600px;
    margin: 1rem auto;
    color: #333;
    list-style: none;
    padding: 0;
  }

  li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #ddd;
  }
</style>