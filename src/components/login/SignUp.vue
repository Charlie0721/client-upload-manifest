<template>


    <div class="card">

        <div class="card-body">
            <h1 class="h3">REGISTRAR USUARIO</h1>
            
           <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Nombre y  apellido</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
          </div>
   
          <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary" type="button">Registrar</button>
        </div>
        </form>
        </div>

    </div>
</template>


<script setup lang="ts" >
</script>

<style scoped>


</style>