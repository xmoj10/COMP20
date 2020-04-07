// var button     = document.querySelector('.button')
// var inputValue = document.querySelector('.inputValue')
// var name = document.querySelector('.name')
// var desc = document.querySelector('.desc')
// var temp = document.querySelector('.temp')

// button.addEventListener("click", NULL);
// // function() {
// //     fetch('https://api.openweathermap.org/data/2.5/weather?q='
// //           + inputValue.value +'&appid=cccac004a1c9f7aa7f99c8a9976d1512')
// //           .then(response => response.json())
// //           .then(data => console.log(data))
// //           .catch(err => alert("Invalid city name!"))}
// // )
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})