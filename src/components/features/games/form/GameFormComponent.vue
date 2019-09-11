<template>
    <div class="container">
        <form @submit.prevent="saveGame" class="segment">
            <div class="row" v-if="$v.game.$dirty">
                <div class="twelve column">
                    <ul>
                        <li v-if="!this.$v.game.title.required">Title is required</li>
                        <li v-if="!this.$v.game.title.minLength">Title must have at least
                            {{$v.game.title.$params.minLength.min}} letters.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="twelve column">
                    <label>Title *</label>
                    <input class="full-width" type="text" v-model.trim="$v.game.title.$model"/>
                </div>
                <div class="twelve column">
                    <label>Description *</label>
                    <textarea class="full-width" v-model.trim="$v.game.description.$model"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="twelve column">
                    <button :disabled="$v.$invalid" class="button button-primary">save</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import {minLength, maxLength, required} from "vuelidate/lib/validators";
    import {ADD_GAME} from "@/domain/store/store";

    export default {
        name: "GameFormComponent",
        data() {
            return {
                game: {
                    title: '',
                    description: ''
                },
            }
        },
        validations: {
            game: {
                title: {
                    required,
                    minLength: minLength(4)
                },
                description: {
                    required,
                    minLength: minLength(4),
                    maxLength: maxLength(3000)
                }
            }
        },
        methods: {
            saveGame() {
                if (!this.$v.$invalid) {
                    console.info(this.$v.game.$model);
                    this.$store.dispatch(ADD_GAME, this.$v.game.$model);
                    this.$router.push({name: 'games'});
                }
            }
        }
    }
</script>

<style scoped>
    .button:disabled {
        background-color: gray;
        color: #eee;
        border-color: gray;
    }
</style>