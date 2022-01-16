<template>
  <div class="layout">
    <Header />
    <div class="layout-content container">
      <slot />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Layout",
  components: {
    Header,
  },
};
</script>
