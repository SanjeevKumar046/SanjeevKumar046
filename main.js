gsap.fromTo(
  ".preloader",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 2,
  }
);

// #region -- Custom Cursor
const cursorElement = document.createElement("div");
cursorElement.classList.add("cursor");

// SVG for arrow cursor
const arrowSvg = `<svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" id="cursor-up-left" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line">
<path id="secondary" d="M3.1,4.46l7.21,15.92A1.17,1.17,0,0,0,12.5,20l1.26-6.23L20,12.5a1.17,1.17,0,0,0,.39-2.19L4.46,3.1A1,1,0,0,0,3.1,4.46Z" fill="#ffffff"></path>
<path d="M3.1,4.46l7.21,15.92A1.17,1.17,0,0,0,12.5,20l1.26-6.23L20,12.5a1.17,1.17,0,0,0,.39-2.19L4.46,3.1A1,1,0,0,0,3.1,4.46Z" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
</svg>`;

// SVG for circle cursor
const circleSvg = `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="#ffffff"/>
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2"/>
</svg>`;

const lineSvg = `<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Interface / Line_L">
<path id="Vector" opacity="0.8" d="M12 19V5" fill="#050505" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>`;

// Default cursor is circle
cursorElement.innerHTML = circleSvg;

document.body.prepend(cursorElement);

document.addEventListener("mousemove", function (event) {
  cursorElement.style.left = event.pageX + "px";
  cursorElement.style.top = event.pageY - window.scrollY + "px";
});

document.addEventListener("mousedown", function (event) {
  cursorElement.style.scale = "0.8";
});

document.addEventListener("mouseup", function (event) {
  cursorElement.style.scale = "1";
});

document.querySelectorAll("p").forEach((p) => {
  p.addEventListener("mouseenter", () => {
    cursorElement.innerHTML = lineSvg; // Change cursor to arrow when entering anchor tag
    cursorElement.style.transform = "rotate(0deg)";
  });

  p.addEventListener("mouseleave", () => {
    cursorElement.innerHTML = circleSvg; // Change cursor back to circle when leaving anchor tag
    cursorElement.style.transform = "rotate(0deg)";
  });
});

document.querySelectorAll("a").forEach((a) => {
  a.addEventListener("mouseenter", () => {
    cursorElement.innerHTML = arrowSvg; // Change cursor to arrow when entering anchor tag;
    cursorElement.style.transform = "rotate(10deg)";
  });

  a.addEventListener("mouseleave", () => {
    cursorElement.innerHTML = circleSvg; // Change cursor back to circle when leaving anchor tag
    cursorElement.style.transform = "rotate(0deg)";
  });
});

// #endregion -- Custom Cursor --

// #region -- Scrolling Hero assist --
const scrollingContainer = document.querySelector(".scroll_container");
const items1 = document.querySelector(".horizontal-scrolling-items").innerHTML;
document.querySelector(".horizontal-scrolling-items").innerHTML += items1;
const items2 = document.querySelector(".horizontal-scrolling-items2").innerHTML;
document.querySelector(".horizontal-scrolling-items2").innerHTML += items2;
const totalWidth = scrollingContainer.scrollWidth;
scrollingContainer.style.width = totalWidth + "px";
// #endregion scrolling Hero

// #region --Skill Progress --
function scrollReveal() {
  var revealPoint = 150;
  var revealElement = document.querySelectorAll(".level");
  for (var i = 0; i < revealElement.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = revealElement[i].getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      revealElement[i].classList.add("active");
    } else {
      revealElement[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", scrollReveal);

// #endregion --Skill Progress Animation--
