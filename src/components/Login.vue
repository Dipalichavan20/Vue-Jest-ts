<template>
  <div class="htmlClass">
    <h1>{{ title }}</h1>
    <form>
      <input
        type="text"
        id="userName"
        v-model="userName"
        placeholder="Username"
      />
      <input
        type="text"
        id="password"
        v-model="password"
        placeholder="Password"
      />
      <button @click="submitForm()" class="submitForm">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  props: {
    title: String,
    userName: String,
    password: String,
  },
  methods: {
    submitForm() {
      this.$emit("submit form");
    },
  },
});
</script>
