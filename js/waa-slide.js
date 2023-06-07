let slides = [
  "01-title.html",
  "02-audio.html",
  "03-autoplay.html",
  "03-disco.html",
  "04-me.html",
  "05-goal.html",
  "06-topics.html",
  "07-context.html",
  "08-oscillator.html",
  "09-oscillator-shape.html",
  "10-oscillator-freq.html",
  "11-oscillator-freq-time.html",
  "12-node-gain.html",
  "13-node-more.html",
  "14-distortion.html",
  "15-timing-ms.html",
  "16-ode-to-joy-theory.html",
  "17-ode-to-joy-practice.html",
  "18-envelope.html",
  "19-ode-to-joy-adsr.html",
  "20-library.html",
  "21-tonejs-title.html",
  "22-hello-tonejs.html",
  "23-scheduling.html",
  "23-time.html",
  "24-scheduling-parts-1.html",
  "24-scheduling-parts-2.html",
  "24-scheduling-parts-3.html",
  "25-tonejs-ode-to-joy.html",
  "26-instrument-kick.html",
  "27-instrument-snare.html",
  "28-instrument-bass.html",
  "29-instrument-chord.html",
  "30-instrument-melody.html",
  "31-beat.html",
  "32-goal.html",
  "33-conclusions.html",
  "34-linked-topics.html",
  "35-side.html",
  "36-side.html",
  "37-side.html",
  "38-side.html",
  "50-end.html",
];

const path = window.location.pathname;
const page = path.split("/").pop();
let index = slides.indexOf(page);

//let index = 0;

// fetch("/").then((response) => {
//   response.text().then((text) => {
//     const regex = /\d\d\-(\w|\-)*\.html/gm;
//     let res = [...text.matchAll(regex)].map((x) => x[0]);
//     slides = [...new Set(res)];
//     console.log(slides);
//     index = slides.indexOf(page);
//   });
// });

document.addEventListener("keyup", checkKey);

function checkKey(e) {
  e = e || window.event;
  switch (e.keyCode) {
    case 37:
      if (index > 0) {
        document.location.href = slides[index - 1];
      }
      break;

    case 39:
      if (index < slides.length - 1) {
        document.location.href = slides[index + 1];
      }
      break;
  }
}
