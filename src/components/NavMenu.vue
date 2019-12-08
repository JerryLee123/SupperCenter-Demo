<template>
  <nav class="menu">
    <router-link :to="{name:'home'}" exact>home</router-link>
    <router-link :to="{name:'faq'}">faq</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '../style/imports';

.router-link-active {
  border-bottom-color: $primary-color;
}
</style>