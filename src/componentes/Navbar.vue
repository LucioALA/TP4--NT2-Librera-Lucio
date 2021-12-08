<template>
  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <!-- opción ruta root -->
      <router-link to="/">
        <a class="navbar-brand" href="#">Inicio</a>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <!-- opción ruta formulario -->
          <li class="nav-item">
            <router-link to="/formulario">
              <a class="nav-link" href="#">Formulario</a>
            </router-link>
          </li>

          <!-- opción ruta api-restful -->
          <li class="nav-item">
            <router-link to="/VistaUsuarios">
              <a class="nav-link" href="#">Vista Datos</a>
            </router-link>
          </li>
       
        </ul>
      </div>
    </nav>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
    },
    computed: {

    }
}


</script>
