import { shallowMount, createLocalVue } from "@vue/test-utils";
import { bemModifiers } from "../components";
import Vuetils from "../index";

const localVue = createLocalVue();

localVue.use(Vuetils);

describe("bemModifiers", () => {
  it("should generate class with empty args", () => {
    expect(bemModifiers("block__element")).toEqual(["block__element", {}]);
  });

  it("should generate modifiers", () => {
    expect(
      bemModifiers("block__element", {
        visible: true,
        touchable: 1,
        isGhost: "yes",
        primary: null
      })
    ).toEqual([
      "block__element",
      {
        "block__element--visible": true,
        "block__element--touchable": true,
        "block__element--is-ghost": true,
        "block__element--primary": false
      }
    ]);
  });

  it("should be defined as prototype function", () => {
    const wrapper = shallowMount(
      {
        name: "DumbComponent",
        template: `
                <div :class="$bemModifiers('block', { visible })">
                    <h1 :class="$bemModifiers('block__element', { primary })"></h1>
                </div>
            `,
        data() {
          return {
            visible: true,
            primary: false
          };
        }
      },
      { localVue }
    );

    expect(wrapper.html()).toMatchSnapshot();
  });
});
