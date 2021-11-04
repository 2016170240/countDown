let date = new Date("Nov 30 ,2021 23:59:59").getTime();

/* 
   this will print time in milli seconds 
   if we divide it on 1000 will print date in seconds
   date starts from 1970
*/
// get limit dat

let count = setInterval(() => {
    let currentDate = new Date().getTime();
    console.log(currentDate);
  
    let dateDiff = date - currentDate;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hourse = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60));

  let seconds = Math.floor((dateDiff % (1000 * 60 ) / 1000));
  let day = document.querySelector(".days");
  day.innerHTML = days;

  let hourse2 = document.querySelector(".hourse");
  hourse2.innerHTML = hourse;

  let minutes2 = document.querySelector(".minutes");
  minutes2.innerHTML = minutes;

  let seconds2 = document.querySelector(".seconds");
  seconds2.innerHTML = seconds;
}, 1000);


if(dateDiff<=0){
  clearInterval(count)
}