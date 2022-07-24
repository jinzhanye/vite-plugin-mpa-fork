<template>
  <div>
    <h1>about</h1>
    <div>requestUrl:{{ requestUrl }}</div>
    {{ countDown }}
  </div>
</template>

<script>
import { useCountDown } from '@za/vant-use';

export default {
  name: 'DemoAbout',
  setup() {
    console.log('import.meta.env:', import.meta.env);
    const countDown = useCountDown({
      // 倒计时 24 小时
      time: 24 * 60 * 60 * 1000
    });

    const requestUrl = import.meta.env.VITE_REQUEST_URL;

    // 开始倒计时
    countDown.start();

    return {
      requestUrl,
      countDown
    };
  }
};
</script>
