<template>
  <header class="header">
    <div class="container">
      <router-link class="header__title bold" :to="'/'">
        Job Search
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
.header {
  background-color: #161b22;
  height: 65px;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid #292b2e;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 100%;
  }

  &__title {
    color: #fff;
    font-size: 32px;
    transition: 0.5s all;
    &:hover {
      color: #939393;
    }
  }
}
</style>
