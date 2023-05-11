<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">  <router-link to="/"
                      >Iniciar Sesión<a
                        class="navbar-brand"
                        aria-current="page"
                        tabindex="-1"
                      ></a></router-link
                  ></a>
        </li>
         <li class="nav-item">
            <a class="nav-link active" aria-current="page">  <router-link to="/signup"
                      >Registrarse<a
                        class="navbar-brand"
                        aria-current="page"
                        tabindex="-1"
                      ></a></router-link
                  ></a>
        </li>
         <li class="nav-item">
            <a class="nav-link active" aria-current="page">  <router-link to="/all-manifest"
                      >Todos los manifiestos<a
                        class="navbar-brand"
                        aria-current="page"
                        tabindex="-1"
                      ></a></router-link
                  ></a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</template>

  <script setup lang="ts">
</script>
  