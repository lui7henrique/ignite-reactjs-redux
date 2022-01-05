import { createStore } from "redux";

const store = createStore(() => {
  return {
    name: "Luiz Henrique",
    age: 19,
  };
});

export default store;
