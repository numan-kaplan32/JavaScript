let timeClass = new Date();
let getClass = document.getElementById('time');
let year = document.getElementById('year');
let getPay = document.getElementById('pay');
let getText = document.getElementById('text')
const months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık"
];
const days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi"
];
 
 
let result =timeClass.getDate()+' '
           + months[timeClass.getMonth()] + " " 
           + timeClass.getFullYear()+' '
           +  days[timeClass.getDay()] + "  " 
           + timeClass.getHours() + " : " 
           + (timeClass.getMinutes() < 10 ? "0" : "") + timeClass.getMinutes();
// document.writeln(timeClass.getTime());

getClass.innerText = result;
year.innerText = timeClass.getFullYear();
getPay.addEventListener('click',function(){
getText.innerText = 'Siparişiniz ' + timeClass.getDate()+' '
           + months[timeClass.getMonth()] + " " 
           + timeClass.getFullYear()+' '
           +  days[timeClass.getDay()] + "  " 
           + timeClass.getHours() + " : " 
           + (timeClass.getMinutes() < 10 ? "0" : "") + timeClass.getMinutes()
           + ' Tarihinde alındı.';
});


