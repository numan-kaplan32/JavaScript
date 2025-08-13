// document.writeln(Math.round(1.63)); // Ondalıklı sayıları yuvarlamaya yarar.
//  document.writeln(Math.ceil(1.78)); // Sayı ne olursa olsun sayıyı yukarı yuvarlayıp Integer döndürür. Asla 0 dönmez.
// document.writeln(Math.floor(1.21)); //Sayı ne olursa olsun sayıyı aşağı yuvarlayıp Integer döndürür. 
//  document.writeln(Math.min(9,62,7,-3)); // En küçük sayıyı bulur.
//  document.writeln(Math.max(9,62,7,-3)); // En büyük sayıyı bulur.


// let dizi = [2,34,54,32,23,5,2]

// document.writeln(Math.max(...dizi)) // Üç nokta dizide ki an büyük sayıyı bulur.

// document.writeln(Math.max.apply(null,dizi)) // Üç nokta dizide ki an büyük sayıyı bulur.

// document.writeln(Math.floor(Math.random()*999999));

// let button = document.getElementById('loto');

// let box1 = document.getElementById('box1');
// let box2 = document.getElementById('box2');
// let box3 = document.getElementById('box3');
// let box4 = document.getElementById('box4');
// let box5 = document.getElementById('box5');
// let box6 = document.getElementById('box6');


// button.addEventListener('click',function(){
//     let num1 = Math.ceil(Math.random()*9);
//     let num2 = Math.ceil(Math.random()*9);
//     let num3 = Math.ceil(Math.random()*9);
//     let num4 = Math.ceil(Math.random()*9);
//     let num5 = Math.ceil(Math.random()*9);
//     let num6 = Math.ceil(Math.random()*9);

//     box1.innerText = num1;
//     box2.innerText = num2;
//     box3.innerText = num3;
//     box4.innerText = num4;
//     box5.innerText = num5;
//     box6.innerText = num6;
  
// });

// ------------------------------------------------------------------------------------------------------------------------------

let char = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'
];
function change()
{let k1 = Math.floor(Math.random()*char.length);
let k2 = Math.floor(Math.random()*char.length);
let k3 = Math.floor(Math.random()*char.length);
let k4 = Math.floor(Math.random()*char.length);
let k5 = Math.floor(Math.random()*char.length);

let robot = document.getElementById('robot');

robot.innerHTML = `${char[k1]}${char[k2]}${char[k3]}${char[k4]}${char[k5]}`}

