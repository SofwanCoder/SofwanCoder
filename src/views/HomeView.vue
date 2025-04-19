<script setup lang="ts">
import image from "@/assets/profile.jpg";
import Github from "@/components/icons/Github.vue";
import Twitter from "@/components/icons/Twitter.vue";
import Linkedin from "@/components/icons/Linkedin.vue";
import Resume from "@/components/icons/Resume.vue";
import Youtube from "@/components/icons/Youtube.vue";
import { useScriptTag } from "@vueuse/core";

useScriptTag(
  "https://contra.com/static/embed/sdk.js",
  (el: HTMLScriptElement) => {
    console.log(el);
    // do something
  },
);
</script>

<template>
  <main>
    <div class="text-center">
      <img
        :src="image"
        height="250"
        width="250"
        style="object-fit: cover"
        class="rounded-circle"
        alt="Profile Image"
      />
    </div>
    <div class="text-center pt-4">
      <h1>Sofwan A. Lawal</h1>
      <h5>Software Engineering Consultant</h5>

      <div class="pt-3">
        <a
          href="https://github.com/sofwancoder"
          class="p-2"
          target="_blank"
          title="SofwanCoder on Github"
        >
          <Github width="40" height="40" class="icon" />
        </a>
        <a
          href="https://x.com/sofwancoder"
          class="p-2"
          target="_blank"
          title="SofwanCoder on Twitter"
        >
          <Twitter width="40" height="40" class="icon" />
        </a>
        <a
          href="https://linkedin.com/in/sofwancoder"
          class="p-2"
          target="_blank"
          title="SofwanCoder on Linkedin"
        >
          <Linkedin width="40" height="40" class="icon" />
        </a>
        <a
          href="https://bit.ly/SofwanCoderOnYoutube"
          class="p-2"
          target="_blank"
          title="SofwanCoder on Youtube"
          v-show="false"
        >
          <Youtube width="40" height="40" class="icon" />
        </a>
        <a
          href="https://bit.ly/SofwanCoderOnResume"
          class="p-2"
          target="_blank"
          title="View SofwanCoder's resume"
        >
          <Resume width="40" height="40" class="icon" />
        </a>
      </div>

      <div class="pt-3">
        <div
          class="contra-hire-me-button"
          data-analyticsUserId="a1ce4e23-230b-48e3-8fa5-be38779538a5"
          data-theme="light"
          data-username="sofwancoder"
        ></div>
      </div>
    </div>
  </main>
</template>
