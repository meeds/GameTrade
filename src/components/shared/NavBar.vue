<template>
    <nav class="menu fixed stackable">
        <div class="container">
            <router-link class="menu-item keep" to="/new">new</router-link>
            <router-link class="menu-item keep" to="/games">games</router-link>
            <a class="menu-item keep right" href="https://www.linkedin.com/in/ahmed-idoumhaidi-60b58970/"
               target="_blank">profile</a>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navBar'
    }
</script>
