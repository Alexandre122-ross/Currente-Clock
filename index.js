const getHours = document.querySelector('#hours-time');
const getMinutes = document.querySelector('#minutes-time');
const getSeconds = document.querySelector('#seconds-time');

function updateClock() {
  let date = new Date();

  getHours.innerHTML = `${date.getHours()}`.padStart(2, '0'); 
  getMinutes.innerHTML = `${date.getMinutes()}`.padStart(2, '0'); 
  getSeconds.innerHTML = `${date.getSeconds()}`.padStart(2, '0');
};

setInterval(updateClock, 1000);