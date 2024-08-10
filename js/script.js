import { lerp } from "./modules/utils.js";
console.log(lerp);

const video = document.querySelector("video");
const videoSection = document.querySelector("#video");

const animateVideo = () => {
  let { bottom } = videoSection.getBoundingClientRect();
  let scale = 1 - (bottom - window.innerHeight) * 0.0005;
  scale = scale < 0.2 ? 0.2 : scale > 1 ? 1 : scale;
  video.style.transform = `scale(${scale})`;
};

window.addEventListener("scroll", () => {
  animateVideo();
});
