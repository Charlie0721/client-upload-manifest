<template>
  <div class="card">
    <div class="card-body">
      <h1 class="h3">REGISTRAR USUARIO</h1>

      <form @submit.prevent="sendData">
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">Nombre y apellido</label>
          <input type="text" class="form-control" required v-model="data.name" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            required
            v-model="data.email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" required v-model="data.password" />
        </div>

        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary" type="submit">Registrar</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script setup lang="ts" >
import { ref, reactive } from 'vue'
import { singupStore } from '../../stores/signup.store'
import { RegisterUser } from '../../services/signup.service'
const signup = singupStore()

const data = reactive<RegisterUser>({
  name: '',
  email: '',
  password: ''
})

const sendData = async () => {
  await signup.signupUser(data)
}
</script>

<style scoped>
</style>