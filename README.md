# Adventskalender 2024

This is a Vue 3 based advent calendar for 2024.

## Color Interpolation

```js
// colors.mjs
import chroma from "chroma-js";

console.log("Interpolating greens");
for (const element of chroma.scale(["#506a63", "#4d9e76"]).mode("oklab").colors(6)) {
  console.log(element);
}

console.log("Interpolating browns");
for (const element of chroma.scale(["#754845", "#a36248"]).mode("oklab").colors(6)) {
  console.log(element);
}
```
