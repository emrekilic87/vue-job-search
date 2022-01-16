import axios from "axios";
import { endpoints } from "../../constants";

const state = {
  jobList: [],
  jobDetail: {},
};

const actions = {
  async fetchJobs({ commit }, data) {
    const response = await axios.get(endpoints.allData, { params: data });
    await commit("setJobList", response.data);
  },

  async fetchJobDetail({ commit }, id) {
    const response = await axios.get(`${endpoints.allData}/${id}`);
    await commit("setJobDetail", response.data);
  },
};

const getters = {
  jobList: (state) => state.jobList,
  jobDetail: (state) => state.jobDetail,
};

const mutations = {
  setJobList: (state, jobList) => {
    state.jobList = jobList;
  },
  setJobDetail(state, jobDetail) {
    state.jobDetail = jobDetail;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
