import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import DocIndex from './components/doc/DocIndex.vue';
import ButtonDemo from './components/doc/ButtonDemo.vue';
import SwitchDemo from './components/doc/SwitchDemo.vue';
import DialogDemo from './components/doc/DialogDemo.vue';
import TabsDemo from './components/doc/TabsDemo.vue';
import Intro from './views/Intro.vue';
import GetStarted from './views/GetStarted.vue';
import Install from './views/Install.vue';

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', component: DocIndex},
        {path: 'intro', component: Intro},
        {path: 'get-started', component: GetStarted},
        {path: 'install', component: Install},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},]
    },
  ]
});