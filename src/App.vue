<template>
    <div id="app">
        <NavBar></NavBar>
        <div class="spacer"></div>
        <div class="spacer tiny"></div>
        <router-view></router-view>
    </div>
</template>

<script>
    import GamesComponent from './components/features/games/collection/GamesComponent.vue';
    import GameFormComponent from "@/components/features/games/form/GameFormComponent";

    export default {
        name: 'app',
        components: {
            GamesComponent,
            GameFormComponent
        }
    }
</script>
