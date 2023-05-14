let slides = [];
const path = window.location.pathname;
const page = path.split("/").pop();
let index = 0;

fetch("/").then((response) => {
  // The API call was successful!
  response.text().then((text) => {
    const regex = /\d\d\-(\w|\-)*\.html/gm;
    let res = [...text.matchAll(regex)].map((x) => x[0]);
    slides = [...new Set(res)];
    index = slides.indexOf(page);
  });
});

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
