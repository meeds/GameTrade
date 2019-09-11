<template>
    <GamesContainer v-if="isGamesCollectionEmpty">
        <GameCard :game="game" :key="game.id" v-for="game in getGames"/>
    </GamesContainer>
    <Alert class="warning" v-else>
        no game is available !!
    </Alert>
</template>
<script>
    import GamesContainer from "@/components/features/games/collection/GamesContainer";
    import GameCard from "@/components/features/games/collection/GameCard";
    import {FETCH_GAME} from "@/domain/store/store";

    export default {
        name: "GamesComponent",
        components: {GameCard, GamesContainer},
        created() {
            let {games} = this.$store.state;
            if (games && games.length <= 0) {
                this.$store.dispatch(FETCH_GAME);
            }
        },
        computed: {
            isGamesCollectionEmpty: function () {
                return this.$store.state.games.length > 0;
            },
            getGames: function () {
                return [...this.$store.state.games].reverse();
            }
        }
    }
</script>