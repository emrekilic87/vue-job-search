import { shallowMount } from "@vue/test-utils";
import JobCard from "@/components/JobCard.vue";
import { JobCardMockData } from "../mockdatas";

describe("JobCard.vue", () => {
  const wrapper = shallowMount(JobCard, {
    propsData: { item: JobCardMockData },
  });

  it("render element", () => {
    expect(wrapper.find(".card").exists()).toBe(true);
  });

  it("props data texts", () => {
    expect(wrapper.find(".card__title").text()).toBe("operatör");
    expect(wrapper.find(".card__company").text()).toBe("tuzla tersanesi");
    expect(wrapper.find(".card__location").text()).toBe("bursa");
  });
});
