import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import $ from "jquery";
import { gsap, TweenMax, ScrollTrigger, EasePack } from "gsap/all";
import { Curtains, RenderTarget, Plane, ShaderPass } from "curtainsjs";
import Typed from "typed.js";

window.$ = window.jquery = $;
window.gsap = gsap;
window.TweenMax = TweenMax;
window.ScrollTrigger = ScrollTrigger;
gsap.registerPlugin(TweenMax);
gsap.registerPlugin(ScrollTrigger);
window.EasePack = EasePack;
window.Curtains = Curtains;
window.RenderTarget = RenderTarget;
window.Plane = Plane;
window.ShaderPass = ShaderPass;
window.Typed = Typed;

createApp(App).use(store).use(router).mount("#app");
