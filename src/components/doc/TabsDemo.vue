<script lang="ts">
import Tabs from '../../lib/Tabs.vue';
import Tab from '../../lib/Tab.vue';
import {ref} from 'vue';

export default {
  components: {Tabs, Tab},
  setup() {
    const refSelected = ref('导航1');
    return {refSelected};
  }
};
</script>

<template>
  <div>Tab示例</div>
  <h2>示例1</h2>
  <Tabs v-model:selected="refSelected">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<style lang="scss" scoped>
h2 {
  margin-top: 20px
}
</style>