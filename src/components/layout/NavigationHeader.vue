<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light p-4">
    <div class="container">
      <router-link class="navbar-brand fw-bolder fs-2" to="/">
        <img src="@/assets/logo.png" alt="logo" height="90" width="200" />
      </router-link>
      <button
        ref="toggleNavButton"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://blog.sofwancoder.com">Blog</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              style="color: steelblue"
              target="_blank"
              href="https://bit.ly/SofwanCoderOnResume"
            >
              Resume
            </a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'consultation' }">
              Consultation 💬
            </router-link>
          </li>
          <li v-show="false" class="nav-item">
            <a class="nav-link text-primary" href="#" @click="toggleCalendar">
              Coffee
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { inject, ref, watch } from "vue";
import { useRoute } from "vue-router";
const toggleCalendar = inject("toggleCalendar", () => null);
const route = useRoute();
const toggleNavButton = ref<HTMLButtonElement | undefined>();
watch(
  () => route.path,
  () => {
    if (!toggleNavButton.value) {
      return;
    }
    // check if the navbar is collapsed
    if (toggleNavButton.value.getAttribute("aria-expanded") === "true") {
      toggleNavButton.value.click(); // click the toggle button
    }
  },
);
</script>

<style lang="scss" scoped>
.navbar-brand {
  &:hover {
    color: #f00;
  }
}
</style>
