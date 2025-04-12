<!-- src/routes/productos/+page.svelte -->
<main>
  <h1>Nuestros Productos</h1>
  <p>Explora nuestra selección de bicicletas y accesorios:</p>
  <ul>
    <li>Bicicletas de montaña - $500</li>
    <li>Bicicletas urbanas - $300</li>
    <li>Cascos de seguridad - $50</li>
    <li>Repuestos y herramientas - $20-$100</li>
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