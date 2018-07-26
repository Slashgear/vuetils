## bemModifiers

Returns `Array` with class generator for vue with [BEM Semantic](http://getbem.com/introduction/)

- **Returns:** `[ bockOrElementDefiniton, { ...modifiers: Boolean }]`

- **Example:**

```js
Vue.use(Vuetils);

export default {
  name: "DumbComponent",
  data() {
    return {
        visible: true,
        primary: false,
    }
  }
};
```

```html
<template>
    <div :class="$bemModifiers('block', { visible })">
        <h1 :class="$bemModifiers('block__element', { primary })"></h1>
    </div>
</template>
```