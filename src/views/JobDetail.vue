<template>
  <div class="container">
    <div class="job__detail">
      <h2 class="job__detail-title">
        <span class="job__detail-subtitle bold"> Pozisyon: </span>
        {{ jobDetail.positionName }}
      </h2>
      <p class="job__detail-parag job__detail-company">
        <span class="job__detail-subtitle bold"> Şirket: </span>
        {{ jobDetail.companyName }}
      </p>
      <p class="job__detail-parag job__detail-location">
        <span class="job__detail-subtitle bold"> Şehir: </span>
        {{ jobDetail.cityName }}
      </p>
      <p class="job__detail-parag job__detail-town">
        <span class="job__detail-subtitle bold"> Mahalle: </span>
        {{ jobDetail.townName }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "JobDetail",

  data() {
    return {
      id: this.$route.params.id,
    };
  },

  mounted() {
    this.fetchJobDetail(this.id);
  },

  methods: {
    ...mapActions(["fetchJobDetail"]),
  },

  computed: {
    ...mapGetters(["jobDetail"]),
  },
};
</script>

<style scoped lang="scss">
.job__detail {
  padding: 3em;
  margin: 3em;
  background-color: #161b22;

  @media only screen and (max-width: 992px) {
    margin: 3em 0;
  }

  &-title {
    font-size: 25px;
    margin-bottom: 1em;
    color: #ffb930;
  }

  &-subtitle {
    color: #ffffff;
  }

  &-parag {
    color: #ffb930;
    margin-bottom: 1em;
    font-size: 18px;
  }
}
</style>
