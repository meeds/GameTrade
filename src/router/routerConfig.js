import GamesComponent from "@/components/features/games/collection/GamesComponent";
import VueRouter from "vue-router";
import GameFormComponent from "@/components/features/games/form/GameFormComponent";

const routes = [
    {path: '/games', name: 'games', component: GamesComponent},
    {path: '/new', name: 'new', component: GameFormComponent},
    {path: '*', redirect: {name: 'games'}}
];

export const router = new VueRouter({
    routes
});