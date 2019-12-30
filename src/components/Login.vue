<template>
  <main class="login">
    <h1>Please login to continue</h1>
    <form>
      <FormInput name="username" :value="username" placeholder="Username" v-model="username" />
    </form>
    <!-- <div class="ccc">{{update }}</div> -->
  </main>
</template>
<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  methods: {},
  mounted() {
    console.log(this.username);
  }
};
</script>
<style lang="less" scoped>
</style>