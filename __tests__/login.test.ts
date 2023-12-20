import LoginForm from "../src/components/LoginForm.vue";
import { mount, shallowMount } from "@vue/test-utils";

describe("HtmlComponent", () => {
  it("should render correct contents", () => {
    const wrapper = mount(LoginForm);
    let header = wrapper.find(".htmlClass h1");
    expect(header.exists()).toBe(true);
    expect(header.text()).toBe("Vue is awesome.");
  });
});

test("should show the form element on the user output", () => {
  const wrapper = shallowMount(LoginForm);
  expect(wrapper.find("form").exists()).toBe(true);
});

test("should contain input fields in template", () => {
  const wrapper = shallowMount(LoginForm);
  expect(wrapper.find("form > input").exists()).toBe(true);
});

test("should have button", () => {
  const wrapper = shallowMount(LoginForm);
  expect(wrapper.find("button").exists()).toBe(true);
});

test('trigger click event on button ', async () => {
    const wrapper = shallowMount(LoginForm)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('submit form')
  })