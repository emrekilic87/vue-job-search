<template>
  <div class="searchbar">
    <div class="filter__area title__area">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        class="filter__area-icon title-icon"
      >
        <path
          d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"
        ></path>
      </svg>
      <input
        type="text"
        name="title"
        placeholder="Position, Company"
        autocomplete="off"
        v-model="searchkey"
        class="filter__area-input"
      />
    </div>

    <div class="filter__area location__area">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        class="filter__area-icon location-icon"
      >
        <path
          d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
        ></path>
      </svg>
      <input
        type="text"
        name="location"
        placeholder="City"
        autocomplete="off"
        v-model="location"
        class="filter__area-input"
      />
    </div>

    <div class="filter__area button__area">
      <button @click="search" class="button" type="button">SEARCH</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchBar",

  data() {
    return {
      searchkey: "",
      location: null,
    };
  },

  computed: {
    searchParam() {
      return {
        q: this.searchkey.toLowerCase(),
        cityName: this.location ? this.location.toLowerCase() : null,
      };
    },
  },

  methods: {
    ...mapActions(["fetchJobs"]),

    search() {
      this.fetchJobs(this.searchParam);
    },
  },
};
</script>

<style scoped lang="scss">
.searchbar {
  background-color: #090d13;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 1em 0;

  @media only screen and (max-width: 992px) {
    display: block;
  }
  
  .filter__area {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      width: 1px;
      height: 65%;
      background-color: #303234;
      transform: translateY(-50%);

      @media only screen and (max-width: 992px) {
        display: none;
      }
    }

    &:last-child {
      &:after {
        display: none;
      }
    }

    &-icon {
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
      width: 25px;
      height: 25px;
      fill: #238636;

      @media only screen and (max-width: 992px) {
        width: 20px;
        height: 20px;
        left: 7px;
      }
    }

    &.title__area {
      flex: 5;
      @media only screen and (max-width: 992px) {
        border-bottom: 1px solid;
      }
    }

    &.location__area {
      flex: 5;
      @media only screen and (max-width: 992px) {
        border-bottom: 1px solid;
      }
    }

    &.button__area {
      flex: 2;
      text-align: center;

      @media only screen and (max-width: 992px) {
        padding: 15px 0;
      }

      .button {
        padding: 10px 30px;
        background-color: #238636;
        color: #ffffff;
        border-width: 0;
        font-weight: bold;
        cursor: pointer;
        border-radius: 6px;
        position: relative;
        overflow: hidden;
        &:focus {
          outline: 0;
        }
        &:after {
          background: #fff;
          content: "";
          height: 155px;
          left: -75px;
          opacity: 0.2;
          position: absolute;
          top: -50px;
          transform: rotate(35deg);
          transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
          width: 50px;
        }
        &:hover {
          &:after {
            left: 120%;
            transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
          }
        }
      }
    }

    &-input {
      background-color: transparent;
      color: #ffffff;
      font-size: 16px;
      width: 100%;
      padding: 20px 0;
      border-width: 0;
      text-indent: 60px;
      position: relative;

      &:focus {
        outline: 0;
      }

      @media only screen and (max-width: 992px) {
        font-size: 14px;
        text-indent: 40px;
        padding: 15px 0;
      }
    }
  }
}
</style>
