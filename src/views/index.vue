<template>
  <div>
    <headebar :class="isCollapse?'mobileHeader':''" style="padding:0 20px"></headebar>
    <br>
    <br>
    <div class="main-center title">BPIT/VUE</div>
    <br>
    <br>
    <section class="main-logo main-center">
      <img width="200" src="@assets/img/logo.png" alt="">
    </section>
    <section class="main-content">
      <h4> What is bpit/vue?</h4>
      <p><i>bpit/vue</i> is not a component UI kit, we didn't have the consistent theme for these components, it's just a collection of effects components. <br></p>
      <p>bpit/vue is a good place for beginners to learn <b>How to create their UI Kits</b>. Now, it's just a showcase of the effects I can gather from the Internet (codepen, github...) and transfered to vue `things`</p>
      <br>
      <h4>What we focus?</h4>
      <p>We focus on the effects of these components other than functionailties. That's why it's not a ui kit.</p>
      <p>We take more time on css part and hope to make it more general and easy to use, so we encapsulate them into vue component/directives.</p>
      <br>
      <h4>Why we need it?</h4>
      <p>There are so many resources on the Internet, we can make use of them to save time and to be more efficient. <i>bpit/vue</i> collects them, encapsulates them, imporves them. </p>
      <u>Install easy</u> && <u>Import on demand</u> && <u>Everything in one place</u>
    </section>
    <br>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: window.innerWidth < 875
    };
  },
  components: {
    headebar: () => import("@/components/common/HeaderNav/index.vue")
  }
};
</script>
<style lang="scss" scoped>
.main-center {
  text-align: center;
}
.main-content {
  max-width: 80%;
  font-size: 16px;
  margin: 0 auto;
}
.title {
  width: 250px;
  font-size: 28px;
  font-weight: 700;
  font-style: italic;
  color: white;
  position: relative;
  letter-spacing: 0.15em;
  margin: 0 auto;
  padding: 1rem 2.5rem;
  background: transparent;
  outline: none;
  font-size: 28px;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.15s;
}
.title::before {
  top: 0.5rem;
  left: 0.35rem;
  transform: skewx(-10deg);
  height: 100%;
  width: 100%;
  border-radius: 0;
  content: "";
  position: absolute;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: -2;
  background-color: #c92918;
}
.title::after {
  left: 0rem;
  top: 0;
  transform: skewx(-10deg);
  height: 100%;
  width: 100%;
  border-radius: 0;
  animation: none;
  content: "";
  position: absolute;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: -2;
  background-color: #e74c3c;
}
u {
  font-size: 18px;
  font-weight: 500;
}
</style>
