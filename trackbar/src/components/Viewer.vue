<template>
    <div class="col-span-12 flex flex-row flex-wrap justify-evenly md:flex md:shrink-0">
        <div v-for="i in 5" :key="i">
            <Trackbar :index="i" class="col-span-2 mt-4"/>
        </div>
    </div>
</template>
  
<script setup>
import Trackbar from './Trackbar.vue'
</script>