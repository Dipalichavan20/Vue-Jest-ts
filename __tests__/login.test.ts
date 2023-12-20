import Login from "../src/components/Login.vue";
import { mount, shallowMount } from "@vue/test-utils";

describe("HtmlComponent", () => {
  it("should render correct contents", () => {
    const wrapper = mount(Login);
    let header = wrapper.find(".htmlClass h1");
    expect(header.exists()).toBe(true);
    expect(header.text()).toBe("");
  });
});

test("should show the form element on the user output", () => {
  const wrapper = shallowMount(Login);
  expect(wrapper.find("form").exists()).toBe(true);
});

test("should contain input fields in template", () => {
  const wrapper = shallowMount(Login);
  expect(wrapper.find("form > input").exists()).toBe(true);
});

test("should have button", () => {
  const wrapper = shallowMount(Login);
  expect(wrapper.find("button").exists()).toBe(true);
});
