let position = 0;
let current_id = 0;

const obj = [
  {
    id: 0,
    position: 0,
    text_content: "WE ARE BREAKING OUR VOW OF SILENCE",
    slide_track_text: "",
    styles: {
      left: "0%",
      top: "0",
      "text-align": "left",
    },
  },

  {
    id: 1,
    position: "12%",
    text_content: "TALENT IS GIVEN TRUE SKILL IS EARNED",
    slide_track_text: "step 1 out of 10 on the path of digital enlightment.",
    styles: {
      top: "calc(50vh -  100px)",
      left: "5%",
      "text-align": "left",
      transition: "2s",
    },
  },
  {
    id: 2,
    position: "24%",
    text_content: "BE FLEXIBLE TO CHANGE AND FLEXIBLE TO CONVICTION",
    slide_track_text: "step 2 out of 10 on the path of digital enlightment.",
    styles: {
      top: "calc(50vh - 100px)",
      left: "5%",
      "text-align": "left",
      transition: "2s",
    },
  },
  {
    id: 3,
    position: "36%",
    text_content: "USE MANY SKILLS YET WORK AS A ONE",
    slide_track_text: "step 3 out of 10 on the path of digital enlightment.",
    styles: {
      top: "calc(50vh -  90px)",
      left: "calc(100vw - 33%)",
      "text-align": "right",
      transition: "2s",
    },
  },
  {
    id: 4,
    position: "48%",
    text_content: "TO MASTER ANYTHING FIND INTEREST IN EVERYTHING",
    slide_track_text: "step 4 out of 10 on the path of digital enlightment.",
    styles: {
      top: "calc(50vh -  90px)",
      left: "calc(100vw - 33%)",
      "text-align": "right",
      transition: "2s",
    },
  },
  {
    id: 5,
    position: "60%",
    text_content: "INDIVIDUAL FLORISH IF CULTURE AND WISDOM ARE SHARED",
    slide_track_text: "step 5 out of 10 on the path of digital enlightment.",
    styles: {
      top: "calc(50vh -  90px)",
      left: "calc(100vw - 33%)",
      "text-align": "right",
      transition: "2s",
    },
  },
  {
    id: 6,
    position: "72%",
    text_content: "TRAIN FOR PERFECTION BUT AIM FOR MORE",
    slide_track_text: "step 6 out of 10 on the path of digital enlightment.",
    styles: {
      top: "calc(50vh - 100px)",
      left: "5%",
      "text-align": "left",
      transition: "2s",
    },
  },
  {
    id: 7,
    position: "84%",
    text_content: "TAKE PRIDE IN YOUR WORK BUT DO NOT SEEK PRAISE",
    slide_track_text: "step 7 out of 10 on the path of digital enlightment.",
    styles: {
      top: "calc(50vh - 100px)",
      left: "5%",
      "text-align": "left",
      transition: "2s",
    },
  },
  {
    id: 8,
    position: "96%",
    text_content: "TEMPORARY SACRIFICE BRINGS LASTING RESULT",
    slide_track_text: "step 8 out of 10 on the path of digital enlightment.",
    styles: {
      top: "calc(50vh - 100px)",
      left: "5%",
      "text-align": "left",
      transition: "2s",
    },
  },
  { id: 9, position: "115%", text_content: "" ,slide_track_text: ""},
];

setTimeout(() => {
  let img = document.createElement("img");
  img.classList.add("icon");
  img.src = "images/monk.png";

  let block = document.getElementById("icon-wrapper");
  block.appendChild(img);

  setTimeout(() => {
    document.getElementById("title").innerText = "Patience!";
    setTimeout(() => {
      document.getElementById("title").innerText = "Patience, young padawan...";
      setTimeout(() => {
        document.getElementById("title").innerText = "";
        document.getElementById("icon-wrapper").innerHTML = "";
      }, 800);
    }, 500);
  }, 500);
}, 600);

setTimeout(() => {
  document.getElementById("container").style.display = "none";
  trackSlide();
}, 3000);

function slider_btn(id) {
  document.getElementById(current_id).classList.remove("active");
  current_id = id;
  trackSlide();
  scrollSider();
}

function nextArrow() {
  document.getElementById(current_id).classList.remove("active");
  current_id = current_id + 1;
  scrollSider();
}

function prevArrow() {
  document.getElementById(current_id).classList.remove("active");
  current_id = current_id - 1;
  scrollSider();
}

function scrollSider() {
  trackSlide();

  obj.forEach((ele) => {
    if (ele.id == current_id) {
      document.getElementById("bg-image").style.backgroundPosition =
        ele.position;
      document.getElementById("content").innerText = ele.text_content;
      document.getElementById("slider-track").innerText = ele.slide_track_text;
      let style_obj = document.getElementById("content");
      Object.assign(style_obj.style, ele.styles);
    }
  });
}

function trackSlide() {
  document.getElementById(current_id).classList.add("active");
  if (current_id == 9) {
    document.getElementById("black-bg").style.display = "block";
  } else {
    document.getElementById("black-bg").style.display = "none";
  }

  if (current_id == 0){
    document.getElementById("left").style.display = "none";
    document.getElementById("quote").style.display = "block";
  }else{
    document.getElementById("left").style.display = "block";
    document.getElementById("quote").style.display = "none";
  }
}
