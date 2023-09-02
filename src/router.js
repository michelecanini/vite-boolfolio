import { createRouter, createWebHistory } from "vue-router"; 

import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import About from './pages/About.vue';
import TypesList from './pages/TypesList.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ProjectList
            //component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/types',
            name: 'types',
            component: TypesList
        },
    ]
})

export { router }