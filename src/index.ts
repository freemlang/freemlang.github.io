import "@/styles/global.scss";
import "@/styles/reset.scss";

import { mount } from "svelte";
import App from "./App.svelte";

const root = document.createElement("div");
root.classList.add("root");
document.body.appendChild(root);
mount(App, {
  target: root,
});
