<script lang="ts">
import Switch from '../../lib/Switch.vue';
import Button from '../../lib/Button.vue';
import {ref} from 'vue';
import Switch1Demo from '../demos/switch/Switch1.demo.vue';
import Switch2Demo from '../demos/switch/Switch2.demo.vue';

export default {
  components: {Switch1Demo, Switch2Demo, Switch, Button},
  setup() {
    const bool = ref(true);
    return {bool};
  }
};
</script>

<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <div class="demo">
      <h2>常规用法</h2>
      <Switch1Demo/>
    </div>
    <div class="demo">
      <h2>支持 disabled </h2>
      <Switch2Demo/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>