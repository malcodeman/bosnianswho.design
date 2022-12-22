import { clone, dec, inc } from "ramda";
import { SystemStyleObject } from "@chakra-ui/react";

import { Designer } from "../types";

function fisherYates(originalArray: Designer[]) {
  const array = clone(originalArray);
  for (let i = dec(array.length); i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * inc(i));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

function getScrollbarStyle(): SystemStyleObject {
  const sx = {
    scrollbarWidth: "thin",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#72757b",
    },
  };
  return sx;
}

const EXPORTS = {
  fisherYates,
  getScrollbarStyle,
};

export default EXPORTS;
