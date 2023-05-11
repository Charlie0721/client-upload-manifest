<template>
  <Nav/>
  <div class="card">
    <div class="card-body">
      <h1 class="h3">Iniciar Sesión</h1>

      <form @submit.prevent="loginApp">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="signinData.email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="signinData.password"
          />
        </div>

        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary" type="submit">Ingresar</button>
        </div>
      </form>
      <br />
      <div class="alert alert-danger" role="alert" v-if="errorMessage">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>


<script setup lang="ts" >
import { ref, reactive } from 'vue'
import { signinStore } from '../../stores/signin.store'
import { LoginUserData } from '../../services/signin.service'
import router from '../../router/index'
import Nav from '../nav/Nav.vue';
const signin = signinStore()

const signinData = reactive<LoginUserData>({
  email: '',
  password: ''
})
const errorMessage = ref<string>('')

const loginApp = async () => {
  try {
    const result = await signin.signinUser(signinData)
    console.log(result)
    if (result.data.message === 'Por favor ingrese un email o contraseña') {
      alert(result.data.message)
      return
    }

    if (result.data.message === 'Usuario logueado') {
      router.push('/all-manifest')
    }
  } catch (error: any) {
    errorMessage.value = error.message
  }
}
</script>

<style scoped>
.card {
  width: 400px;
  margin: 50px auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 20px;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

form {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input[type='email'],
input[type='password'] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
}

button[type='submit'] {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
}

button[type='submit']:hover {
  background-color: #0069d9;
  cursor: pointer;
}

.alert {
  margin-bottom: 20px;
}
</style>