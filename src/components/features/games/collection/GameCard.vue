<template>
    <div class="segment">
        <div class="row">
            <div class="eight wide column">
                <h4>{{ game.title }}</h4>
                <p>
                    {{ game.body }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GameCard',
        props: {
            game: Object
        }
    }
</script>