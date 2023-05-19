<template>
  <div class="container" style="padding-top: 50px">
    <div class="card">
      <div class="card-body">
        <h1 class="h2 text-center">MANIFIESTOS: {{ manifestPosId.join(', ') }}</h1>
      </div>
    </div>
    <br /><br />
    <div class="row">
      <div class="col-md-4 mb-4" v-for="(file, index) in files" :key="file._id + index">
        <div class="card text-white bg-dark">
          <div class="card-header">
            <h5 class="card-title text-center"> Manifiesto: {{ file.manifestPosId[0] }}</h5>
          </div>
          <div class="card-content">

            <p class="card-text">
              Url PDF: <a class="text-white" :href="file.imageURL" target="_blank">{{ file.imageURL }}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent, computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useFileStore } from '../../stores/getFilesByProductsId.store'

export default defineComponent({
  setup() {
    const fileStore = useFileStore()
    const route = useRoute()
    const manifestPosId = ref<string[]>([])

    manifestPosId.value = (route.params.manifestPosId as string).split(',')

    const files = computed(() => fileStore.files)

    onMounted(async () => {
      await fileStore.fetchFiles(manifestPosId.value.join(','))
    })

    return {
      manifestPosId,
      files
    }
  }
})
</script>
<style scoped>
.card-content {
  padding: 1rem;
}
</style>