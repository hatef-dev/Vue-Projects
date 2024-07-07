import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';
import TeamList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFoundPage from './components/notFound/NotFoundPage.vue'
const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/teams'},
    { name : 'teams',path: '/teams', component: TeamList },
    { name:'teams-member', path: '/teams/:teamId', component:TeamMembers, props:true },
    { name:'users', path: '/users', component: UserList },
    {path:'/:notFound(.*)', component: NotFoundPage}
  ],
});
app.use(router);
app.mount('#app');
