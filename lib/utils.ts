import { clone, dec, inc } from "ramda";

import { Designer } from "../types";

function fisherYates(originalArray: Designer[]) {
  const array = clone(originalArray);
  for (let i = dec(array.length); i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * inc(i));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

export default {
  fisherYates,
};
