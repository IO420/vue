<script setup>
    import {ref,onBeforeMount, getCurrentInstance} from "vue"  
    import {useRoute} from "vue-router"
    import HelloWord from "../components/HelloWorld.vue"
    
    const router = useRoute()
    const {proxy} = getCurrentInstance()
    const number = ref(null)
    const disclaimer = ref(null)
    number.value = router.params.test
    console.log(router.params);
    

    onBeforeMount(()=>{
        let path = "/bpi/currentprice.json"
        proxy.$axios.get(path).then(response =>{
            console.log(response.data)
            disclaimer.value = response.data.disclaimer
        })
    })


</script>

<template>
    <h1>esta es la configuracion</h1>
    <p>{{ number }}</p>

    <div class="carta">
        <p>{{ disclaimer }}</p>
    </div>

</template>

<style>
    .carta{
        display: flex;
        background-color: rgb(110, 110, 110);
        color: black;
    }
</style>