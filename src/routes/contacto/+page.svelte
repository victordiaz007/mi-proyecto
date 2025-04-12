<!-- src/routes/contacto/+page.svelte -->
<script lang="ts">
    let name = '';
    let email = '';
    let message = '';
    let formSubmitted = false;
  
    function handleSubmit(event: Event) {
      event.preventDefault();
      // Aquí podrías implementar la lógica para enviar el formulario a un backend
      // Por ahora, solo mostramos un mensaje de confirmación
      formSubmitted = true;
      // Limpiar el formulario
      name = '';
      email = '';
      message = '';
      // Ocultar el mensaje después de 3 segundos
      setTimeout(() => {
        formSubmitted = false;
      }, 3000);
    }
  </script>
  
  <svelte:head>
    <title>BiciKingV | Contacto</title>
  </svelte:head>
  
  <main class="container py-5">
    <div class="text-center mb-4">
      <h1><i class="bi bi-envelope"></i> Contáctanos</h1>
      <p>¿Tienes preguntas? ¡Estamos aquí para ayudarte!</p>
    </div>
  
    <div class="row">
      <div class="col-md-6 mb-4">
        <h3><i class="bi bi-geo-alt"></i> Nuestra Ubicación</h3>
        <p>Av. Principal 123,Pasto-Nariño, Colombia</p>
        <h3><i class="bi bi-telephone"></i> Teléfono</h3>
        <p>3234997509</p>
        <h3><i class="bi bi-envelope"></i> Correo Electrónico</h3>
        <p>bicikingv@gmail.com</p>
        <h3><i class="bi bi-clock"></i> Horarios</h3>
        <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
        <p>Sábado: 10:00 AM - 2:00 PM</p>
      </div>
  
      <div class="col-md-6">
        <h3><i class="bi bi-chat-dots"></i> Envíanos un mensaje</h3>
        {#if formSubmitted}
          <div class="alert alert-success" role="alert">
            ¡Mensaje enviado con éxito! Te contactaremos pronto.
          </div>
        {/if}
        <form on:submit={handleSubmit}>
          <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Tu nombre"
              required
              bind:value={name}
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo Electrónico</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Tu correo"
              required
              bind:value={email}
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Mensaje</label>
            <textarea
              class="form-control"
              id="message"
              rows="4"
              placeholder="Escribe tu mensaje"
              required
              bind:value={message}
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary w-100">
            Enviar <i class="bi bi-send"></i>
          </button>
        </form>
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
  
    :global(.py-5) {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
  
    :global(.text-center) {
      text-align: center;
    }
  
    :global(.mb-4) {
      margin-bottom: 1.5rem !important;
    }
  
    :global(.row) {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -15px;
    }
  
    :global(.col-md-6) {
      flex: 0 0 50%;
      max-width: 50%;
      padding: 0 15px;
      margin-bottom: 1rem;
    }
  
    :global(.mb-3) {
      margin-bottom: 1rem !important;
    }
  
    :global(.form-label) {
      font-weight: 500;
      color: #1a3c5e;
    }
  
    :global(.form-control) {
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      padding: 0.5rem 0.75rem;
      font-size: 1rem;
      color: #333;
    }
  
    :global(.form-control:focus) {
      border-color: #4a90e2;
      box-shadow: 0 0 0 0.2rem rgba(74, 144, 226, 0.25);
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
  
    :global(.alert-success) {
      background-color: #d4edda;
      color: #155724;
      border-color: #c3e6cb;
      padding: 0.75rem 1.25rem;
      margin-bottom: 1rem;
      border-radius: 0.25rem;
    }
  
    h1 {
      color: #1a3c5e;
      font-size: 2.5rem;
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
  
    h3 i {
      color: #4a90e2;
      margin-right: 0.5rem;
    }
  </style>