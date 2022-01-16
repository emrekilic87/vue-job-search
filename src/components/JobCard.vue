<template>
  <div class="card">
    <div class="card__wrap">
      <router-link class="card__link" :to="`/jobdetail/${item.id}`">
        <h2 class="card__title">{{ item.positionName }}</h2>
        <p class="card__company">{{ item.companyName }}</p>
        <p class="card__location">{{ item.cityName }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  props: {
    item: Object,
  },
};
</script>

<style scoped lang="scss">
.card {
  width: 25%;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  transition: 0.5s all;

  &:hover {
    transform: scale(1.02);
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
  }

  &__wrap {
    border: 2px solid #477599;
    border-radius: 5px;
    position: relative;
    padding: 20px;
    margin: 0 10px;
    height: 100%;
    background-color: #161b22;
    transition: 0.5s all;
  }

  &__link {
    display: block;
  }

  &__title {
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 1em;
  }

  &__company {
    color: #33a9ff;
    font-size: 18px;
    margin-bottom: 1em;
  }

  &__location {
    color: #ffb930;
    font-size: 18px;
  }
}
</style>
