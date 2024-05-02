<script setup>
</script>

<template>
    <main>
        <nav>
            <ul class="navbar">
                <li><RouterLink to = "/home">home</RouterLink></li>
                <li><RouterLink to = "/peliculas">peliculas</RouterLink></li>
            </ul>
        </nav>
    </main>
</template>

<style >
    .navbar{
        background-color: rgb(64, 22, 104);
        display: flex;
        justify-content: space-evenly;
        list-style: none;
    }
</style>