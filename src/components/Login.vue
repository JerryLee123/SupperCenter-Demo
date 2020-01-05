<template>
  <main class="login">
    <h1>Please login to continue</h1>
    <SmartForm class="form" :title="title" :operation="operation" :valid="valid">
      <FormInput name="username" v-model="username" placeholder="Username" />
      <FormInput name="password" type="password" v-model="password" placeholder="Password" />
      <template v-if="mode ==='signup'">
        <FormInput
          name="verify-password"
          type="password"
          v-model="password2"
          placeholder="Retype Password"
          :invalid="retypePasswordError"
        />
        <FormInput name="email" type="email" v-model="email" placeholder="Email" />
      </template>

      <template slot="actions">
        <template v-if="mode === 'login'">
          <button type="button" class="secondary" @click="mode = 'signup'">Sign up</button>
          <button type="submit" :disabled="!valid">Login</button>
        </template>
        <template v-else-if="mode === 'signup'">
          <button type="button" class="secondary" @click="mode = 'login'">Back to login</button>
          <button type="submit" :disabled="!valid">Create account</button>
        </template>
      </template>
    </SmartForm>
  </main>
</template>

<script>
export default {
  data() {
    return {
      mode: "login",
      username: "",
      password: "",
      password2: "",
      email: ""
    };
  },
  computed: {
    title() {
      switch (this.mode) {
        case "login":
          return "Login";
        case "signup":
          return "Create a new account";
      }
    },
    //检验是否密码一致
    retypePasswordError() {
      return this.password2 && this.password !== this.password2;
    },
    //检验是否存在空值
    signupValid() {
      return this.password2 && this.email && !this.retypePasswordError;
    },
    valid() {
      return (
        this.username &&
        this.password &&
        (this.mode !== "signup" || this.signupValid)
      );
    }
  },
  methods: {
    async operation() {
      await this[this.mode]();
    },
    //登陆账号
    async login() {
      //todo
      await this.$axios({
        url: "login",
        method: "post",
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        this.$state.user = res.data
        console.log(this.$state.user);
        
      });
      console.log("登陆账号");
    },
    //注册账号
    async signup() {
      //todo

      var body = {
        username: this.username,
        password: this.password,
        email: this.email
      };

      await this.$axios({
        url: "signup",
        method: "post",
        data: body
      });
      console.log("注册账号");
      this.mode = "login";
    }
  },
  mounted() {
    console.log(this.body);
  }
};
</script>
<style lang="less" scoped>
.form {
  /deep/ .content {
    max-width: 400px;
  }
}
</style>