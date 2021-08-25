const formatTime = (time) => {
  return time < 10 ? (`0${time}`) : time;
};

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const nowYear = new Date().getFullYear();
    document.querySelector('h2 > span').innerText = nowYear;

    const nextYear = new Date(`Jan 1 ${nowYear + 1} 00:00:00`).getTime();
    const gap = nextYear - now;

    const second = 1000;
    const minutes = second * 60;
    const hour = minutes * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minutes);
    const s = Math.floor((gap % minutes) / second);

    document.querySelector('.days > span').innerText = d;
    document.querySelector('.hours > span').innerText = formatTime(h);
    document.querySelector('.minutes > span').innerText = formatTime(m);
    document.querySelector('.seconds > span').innerText = formatTime(s);
}, 1000);