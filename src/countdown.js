let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "Augest",
  "September",
  "October",
  "November",
  "December",
];
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let headline = document.querySelector(".headline");
let time = document.querySelectorAll(".time");
let deadline = document.querySelector(".botom-text-container");

let futuredate = new Date(2024, 7, 24, 11, 30, 24);
console.log(futuredate);

let year = futuredate.getFullYear();
let month = futuredate.getMonth();
let day = futuredate.getDay();
let hours = futuredate.getHours();
let minutes = futuredate.getMinutes();
let seconds = futuredate.getSeconds();

// get month :

months = months[month];

// get day :

weekdays = weekdays[day];

headline.innerText = `Giveaway is ending at ${year} ${months} ${weekdays}  ${hours}:00 ${minutes}:00`;

//todaydate-futuredate so we need time for btw the days :

function getRemainingdays() {
  let futuretime = futuredate.getTime();
  let today = new Date().getTime();
  let coundown = futuretime - today;

  // get milliseconds for one day, one hour, one minute ,one second :

  let oneday = 24 * 60 * 60 * 1000;
  let onehour = 60 * 60 * 1000;
  let oneminute = 60 * 1000;
  let onesecond = 1000;

  let remainingdays = Math.floor(coundown / oneday);

  let remaininghours = Math.floor((coundown % oneday) / onehour);

  let remainingminutes = Math.floor((coundown % onehour) / oneminute);

  let remainingseconds = Math.floor((coundown % oneminute) / onesecond);

  let values = [
    remainingdays,
    remaininghours,
    remainingminutes,
    remainingseconds,
  ];

  function format(setup) {
    if (setup < 10) {
      return `0${setup}`;
    }
    return setup;
  }

  time.forEach((item, index) => {
    item.innerText = format(values[index]);
  });

  // iterating seconds
  let secondscount = setInterval(getRemainingdays, 1000);

  // removing giveaway after countdown ends :

  if (coundown < 0) {
    clearInterval(secondscount);
    deadline.innerHTML = `<h4 class="text-white text-3xl">Giveaway is expired</h4>`;
  }
}
getRemainingdays();
