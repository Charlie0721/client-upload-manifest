<template>
    <h1>New Component</h1>
    <input type="text" v-model="search">
    <button type="button" @click="showFiles">Buscar archivos</button>
</template>


<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import {getFilesQueryStore} from '../../stores/getFilesByProductsId.store'
const getFilesQuery=getFilesQueryStore();

let search = reactive([]);
const showFiles=async()=>{
    //@ts-ignore
    console.log(search);
    //@ts-ignore
    const filesFound=await getFilesQuery.getFilesByProductId(search)
   // console.log(filesFound)


}

// onMounted(async()=>{
//  //@ts-ignore
//  await showFiles(search.value)

// })

</script>