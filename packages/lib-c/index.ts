import { user } from "lib-a";
import { red } from "lib-b";

export const sayHello = () => {
  console.log(`Hello ${red(user)}!`);
};
