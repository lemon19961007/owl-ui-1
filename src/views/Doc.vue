<script lang="ts">
import TopNav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {TopNav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible};
  }
};
</script>

<template>
  <div>
    <TopNav toggleMenuButtonVisible/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
aside {
  width: 150px;
  padding: 73px 0 16px 0;
  background-color: #553704;
  color: white;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 8;

  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
      }

      .router-link-active {
        background: #3ab4e8;
      }
    }
  }

  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding: 73px 16px 16px 16px;
    z-index: 8;
  }
}

main {
  width: calc(100vw - 150px);
  margin-left: 150px;
  height: 92vh;
  padding: 20px;
  background: #f5f5f5;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}

@media (max-width: 500px) {
  main {
    width: 100vw;
    margin-left: 0;
  }
}

</style>