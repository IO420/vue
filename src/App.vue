<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import {RouterView} from "vue-router"
import Header from './components/Header.vue'
</script>

<template>
  <main>
    <Header/>
    <RouterView/>
  </main>
</template>

<style scoped>

</style>
