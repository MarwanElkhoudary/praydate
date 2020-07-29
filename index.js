console.log('ffffff');

var d = new Date();
var year = d.getFullYear();
var month = d.getMonth() + 1;
var day = d.getDate() - 1;
let url = `https://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=2&month=${month}&year=${year}`;


// let reqHeader = new Headers();
// reqHeader.append('Content-Type', 'text/json');
// let initObject = {
//     method: 'GET', headers: reqHeader,
// };

// fetch(url, initObject)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data.data[day].timings);
//         document.getElementById('fagr-time').innerHTML = data.data[day].timings.Fajr.split(" ")[0];
//         document.getElementById('shuruk-time').innerHTML = data.data[day].timings.Sunrise.split(" ")[0];
//         document.getElementById('zuhur-time').innerHTML = data.data[day].timings.Dhuhr.split(" ")[0];
//         document.getElementById('asr-time').innerHTML = data.data[day].timings.Asr.split(" ")[0];
//         document.getElementById('maghreb-time').innerHTML = data.data[day].timings.Maghrib.split(" ")[0];
//         document.getElementById('ischa-time').innerHTML = data.data[day].timings.Isha.split(" ")[0];
//         document.getElementById('midnight-time').innerHTML = data.data[day].timings.Midnight.split(" ")[0];
//         document.getElementById('last-night-time').innerHTML = data.data[day].timings.Sunset.split(" ")[0];
   
//     })
//     .catch(function (err) {data.data[day].timings
//         console.log("Something went wrong!", err);
//     });
function ajaxCall(url) {
return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function() {
      reject(Error("Network Error"));
    };
    req.send();
  });
}

ajaxCall(url).then(data => {
    data = JSON.parse(data)
  console.log('from ajax',data)
  document.getElementById('fagr-time').innerHTML = data.data[day].timings.Fajr.split(" ")[0];
        document.getElementById('shuruk-time').innerHTML = data.data[day].timings.Sunrise.split(" ")[0];
        document.getElementById('zuhur-time').innerHTML = data.data[day].timings.Dhuhr.split(" ")[0];
        document.getElementById('asr-time').innerHTML = data.data[day].timings.Asr.split(" ")[0];
        document.getElementById('maghreb-time').innerHTML = data.data[day].timings.Maghrib.split(" ")[0];
        document.getElementById('ischa-time').innerHTML = data.data[day].timings.Isha.split(" ")[0];
        document.getElementById('midnight-time').innerHTML = data.data[day].timings.Midnight.split(" ")[0];
        document.getElementById('last-night-time').innerHTML = data.data[day].timings.Sunset.split(" ")[0];
}) // returns html of site

fetch(url).then(x => {
  console.log('from fetch', x)
})