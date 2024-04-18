var models = [
  {
    name: "Picture 1",
    image: "img/picture 1.jpg",
    link: "https://www.pexels.com/search/nature/",
  },
  {
    name: "Picture 2",
    image: "img/picture 2.jpg",
    link: "https://www.pexels.com/search/nature/",
  },
  {
    name: "Picture 3",
    image: "img/picture 3.jpg",
    link: "https://www.pexels.com/search/nature/",
  },
  {
    name: "Picture 4",
    image: "img/picture 4.jpg",
    link: "https://www.pexels.com/search/nature/",
  },
  {
    name: "Picture 5",
    image: "img/picture 5.jpg",
    link: "https://www.pexels.com/search/nature/",
  },
];

var index = 0;
var slideCount = models.length;
var interval;
let setting = {
  duration: 2000,
  random: false,
};

init(setting);
function init(s) {
  let prev;
  interval = setInterval(function () {
    if (s.random == true) {
      do {
        index = Math.floor(Math.random() * slideCount);
      } while (index == prev);
      prev = index;
      console.log(index);
      showSlide(index);
    }
    else {
        index = index + 1
        showSlide(index)
    }
  },s.duration);
}


leftIcon = document.querySelector(".fa-arrow-left");
rightIcon = document.querySelector(".fa-arrow-right");

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter", function(){
        clearInterval(interval)
    })
})
document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave", function(){
        init(setting)
    })
})


rightIcon.addEventListener("click", function () {
  index++;
  showSlide(index);
});
leftIcon.addEventListener("click", function () {
  index--;
  showSlide(index);
});

function showSlide(i) {
  index = i;
  if (i >= slideCount) {
    index = 0;
  } else if (i < 0) {
    index = 4;
  }
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
  document.querySelector(".card-title").textContent = models[index].name;
}

// function breakSlide(l,r){
    
// }