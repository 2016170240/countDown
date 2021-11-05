let finalDate = new Date("Dec 31 ,2021 23:59:59").getTime();

let countDown = setInterval(() => {
  let currentDate = new Date().getTime();

  let diffDate = finalDate - currentDate;
  let dayes = Math.floor(diffDate / 1000 / 60 / 60 / 24);
  let hourse = Math.floor(diffDate / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(diffDate / 1000 / 60) % 60;
  let seconds = Math.floor(diffDate / 1000) % 60;

  let day = document.querySelector(".days");
  let houre = document.querySelector(".hourse");
  let minut = document.querySelector(".minutes");
  let second = document.querySelector(".seconds");

  day.innerHTML = dayes < 10 ? `0${dayes}` : dayes;
  houre.innerHTML = hourse < 10 ? `0${hourse}` : hourse;
  minut.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  second.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  if (diffDate <= 0) {
    clearInterval(countDown);
    console.log("congratulations");
  }
}, 1000);
