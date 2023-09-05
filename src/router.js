import { createRouter, createWebHistory } from "vue-router"; 

import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import ShowProject from './pages/ShowProject.vue';
import About from './pages/About.vue';
import TypesList from './pages/TypesList.vue';
import NotFound from './pages/NotFound.vue';
import Contact from './pages/Contact.vue';

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
            path: '/projects/:slug',
            name: 'show-project',
            component: ShowProject
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
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            //path: '/*',
            //name: 'not-found',
            //component: NotFound,
        },
        {
            path: '/pagina-non-trovata',
            name: 'not-found',
            component: NotFound
        },
        {
            path: '/:cathAll(.*)',
            redirect: '/pagina-non-trovata',
        },
    ]
})

export { router }