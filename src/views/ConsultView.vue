<template>
  <div class="about">
    <h1 class="display-6 fw-bold text-black-50">
      Service Scope: Technology Advisory and Beyond
    </h1>

    <div class="fs-6">
      <p>
        With strong inclination towards engaging in profound conversations
        centered around the realm of technical Software Engineering. This
        encompasses a broad spectrum of topics, including but not limited to
        Frontend Engineering, Backend Engineering, Proxies, System Design,
        Networking, and Databases.
      </p>

      <p>
        I hold a deep fascination for delving into intricate and highly scalable
        systems and architectures. If you possess a subject, an idea, or a
        concept that you believe warrants comprehensive exploration, I invite
        you to share it with me. Additionally, if you seek an earnest and
        meticulous system-design/code review, I am more than willing to provide
        my insights.
      </p>
    </div>

    <div v-if="false" class="row d-flex g-4 text-center">
      <div class="col col-12 col-md-4 col-lg-3">
        <div class="card shadow border-0 h-100">
          <div
            class="card-body h-100 d-flex flex-column justify-content-between"
          >
            <h5 class="card-title font-monospace">
              Software architecture assessment & redesign
            </h5>
            <p class="card-text">
              <small>
                Identifying flaws in a software architecture affecting
                performance and security, limiting software scalability.
                Redesigning the architecture with a focus on resilience, quick
                changes and optimized maintenance costs..
              </small>
            </p>
          </div>
        </div>
      </div>
      <div class="col col-12 col-md-4 col-lg-3">
        <div class="card shadow border-0 h-100">
          <div
            class="card-body h-100 d-flex flex-column justify-content-between"
          >
            <h5 class="card-title font-monospace">Software development</h5>
            <p class="card-text">
              <small>
                Working out software solutions to cover your business needs.
                Assembling a full project team to release the solution described
                in a functional specification.
              </small>
            </p>
          </div>
        </div>
      </div>
      <div class="col col-12 col-md-4 col-lg-3">
        <div class="card shadow border-0 h-100">
          <div
            class="card-body h-100 d-flex flex-column justify-content-between"
          >
            <h5 class="card-title font-monospace">Setup of DevOps processes</h5>
            <p class="card-text">
              <small>
                Building an effective DevOps pipeline to speed up your software
                delivery process.
              </small>
            </p>
          </div>
        </div>
      </div>
      <div class="col col-12 col-md-4 col-lg-3">
        <div class="card shadow border-0 h-100">
          <div
            class="card-body h-100 d-flex flex-column justify-content-between"
          >
            <h5 class="card-title font-monospace">QA process setup</h5>
            <p class="card-text">
              <small>
                Implementing time-saving testing automation practices. Providing
                skilled testing engineers within a staff augmentation service
                model.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-5">
      <a
        href="https://topmate.io/sofwancoder"
        target="_blank"
        class="btn btn-dark btn-lg"
      >
        Book a session
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject, onMounted } from "vue";
import { useRoute } from "vue-router";

const toggleBooking = inject("toggleBooking", () => null);

const route = useRoute();

// Show calendar when query param `schedule` is set to true
onMounted(() => {
  if (route.query.schedule) {
    toggleBooking();
  }
});
</script>

<style lang="scss" scoped>
p {
  text-align: justify;
  text-justify: inter-word;
}
</style>
