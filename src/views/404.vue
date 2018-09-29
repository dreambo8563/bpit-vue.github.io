<template>
  <div class="notfound-page">
    <img :src="notfound" alt="">
  </div>
</template>
<script>
import notfound from "@assets/img/404.png";
export default {
  data() {
    return {
      notfound
    };
  }
};
</script>

<style lang="scss" scoped>
.notfound-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
