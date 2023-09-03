<template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email"
    /><br />
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"
    /><br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
/* eslint-disable comma-dangle */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable */
import AuthenticationService from "@/services/AuthenticationService.js";
export default {
  name: "Register",
  data() {
    return {
      email: "abs",
      password: "123"
    };
  },
  //   mounted() {
  //     setTimeout(() => {
  //       this.email = "hello world";
  //     }, 2000);
  //   },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  }
  //   watch: {
  //     email(value) {
  //       console.log("email has changed", value);
  //     }
  //   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
