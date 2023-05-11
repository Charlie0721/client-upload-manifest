<template>
   <Nav/>
 <div class="container">
   
    <div class="card">
      <div class="card-body">
        <h1 class="h3">REGISTRAR USUARIO</h1>

        <form class="form" @submit.prevent="sendData" novalidate>
          <div class="mb-3">
            <label for="exampleInputName" class="form-label">Nombre y apellido</label>
            <input type="text" class="form-control" required v-model="data.name" />
            <div class="invalid-feedback">Por favor ingrese su nombre y apellido.</div>
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
            <div class="invalid-feedback">
              Por favor ingrese una dirección de correo electrónico válida.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" required v-model="data.password" />
            <div class="invalid-feedback">Por favor ingrese su contraseña.</div>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="submit">Registrar</button>
          </div>
        </form>
        <br />
        <div class="alert alert-danger" role="alert" v-if="errorMessage">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts" >
import { ref, reactive } from 'vue'
import { singupStore } from '../../stores/signup.store'
import { RegisterUser } from '../../services/signup.service'
import router from '../../router/index'
import Nav from '../nav/Nav.vue';
const signup = singupStore()

const data = reactive<RegisterUser>({
  name: '',
  email: '',
  password: ''
})

const errorMessage = ref<string>('')

const sendData = async () => {
  try {
    const result = await signup.signupUser(data)
    console.log(result)
    if (result.data.status === 201) {
      router.push('/')
    }
  } catch (error: any) {
    errorMessage.value = error.message
  }
}
</script>

<style scoped>
.card {
  width: 400px;
  margin: auto;
  margin-top: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 5px;
}

.form {
  margin-top: 20px;
}

.form-label {
  font-size: 16px;
  font-weight: bold;
}

.form-group {
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-block {
  width: 100%;
}

.alert-danger {
  margin-top: 20px;
}
</style>