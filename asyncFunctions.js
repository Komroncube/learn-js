function showDateTime()
{
    console.log(new Date().toLocaleString());
}
setInterval(showDateTime, 10000)


const myPromise = new Promise(function(completed, rejected) {
    setTimeout(function(){ completed("I love You !!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    document.getElementById("demo").innerHTML = value;
  });