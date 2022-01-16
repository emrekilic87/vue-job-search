<template>
  <div class="joblist">
    <SearchBar />

    <div class="joblist__card-area" v-if="jobList && jobList.length > 0">
      <JobCard v-for="item in jobList" :item="item" :key="item.id" />
    </div>

    <div class="joblist__warning" v-else>Bu kriterlerde ilan bulunmuyor..</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SearchBar from "@/components/SearchBar.vue";
import JobCard from "@/components/JobCard.vue";

export default {
  name: "Joblist",
  components: {
    SearchBar,
    JobCard,
  },

  mounted() {
    this.fetchJobs();
  },

  methods: {
    ...mapActions(["fetchJobs"]),
  },
  
  computed: {
    ...mapGetters(["jobList"]),
  },
};
</script>

<style lang="scss" scoped>
.joblist {
  &__card-area {
    display: flex;
    flex-wrap: wrap;
  }
  
  &__warning {
    color: #8a7a7c;
    font-size: 35px;
    text-align: center;
    margin-top: 1em;
  }
}
</style>
