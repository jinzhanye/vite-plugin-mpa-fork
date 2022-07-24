<template>
  <h1>home</h1>
  <div :style="customStyle">
    count: {{ count }}
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';

export default {
  name: 'DemoHome',
  setup() {
    const hello = () => {
      console.log('hello.....');
    };

    hello();

    const count = ref(10);

    const customStyle = computed(() => ({
      width: `${count.value}px`
    }));

    return {
      count,
      customStyle
    };
  }
};
</script>
