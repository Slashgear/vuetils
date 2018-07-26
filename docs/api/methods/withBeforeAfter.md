## withBeforeAfter

Returns `Object` with enhance methods with before and after handler.

- **Returns:** `{...enhancedMethods: Function }`

- **Example:**

```js
import { withBeforeAfter } from 'vuetils';

export default {
  name: "DumbComponent",
  methods: {
    ...withBeforeAfter(
      {
        hookedMethod(parameters) {
          return asyncFunction(parameters, "pending");
        }
      },
      {
        onBeforeEach: () => asyncFunction("before"),
        onAfterEach: () => asyncFunction("after")
      }
    ),
    notHookedMethod() {
      return asyncFunction("pending");
    }
  }
};
```