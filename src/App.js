import React from "react";
import { render } from "react-dom";

import SearchParams from "./ParamSearch";
const App = () => {
  /**
   * return createElement("div", {}, [
    createElement("h1", {}, "Adopt Me!"),
    createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel"
    }),
    createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mix"
    })
  ]);
   */
  return (
    <div>
      <h1 id="something important">Adopt Me</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
