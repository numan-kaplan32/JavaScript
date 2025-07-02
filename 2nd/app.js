/* // Değişkenler =>

    //Tercihen kullanılmaz.
    var age = 22;

    //Oluşturulan değişken tekrar oluşturulamaz, güncellenebilir.
    let valueName = 'Numan';

    //Değeri değiştirilmez. Sabit değişkendir. Güncellenemez. TypeError verir.
    const valueSurname = 'Kaplan';
      */


//Alıştırma 

//var
// var name  = 'Numan';
// document.writeln(name)
// var name  = 'Kaplan';
// document.writeln(name) // Var'ın sorunu.

//let
// let nameValue  = 'Kaplan';
// nameValue = 'KAPLAN';
// document.writeln(nameValue)// Güncellenebilir.

//Arrays
// let notes = [23,43,52,636,86];

// console.log(typeof notes)
// let people = 
// {
//     name:'Numan',
//     surname:'Kaplan',
//     age:22
// }
// document.writeln(people.name," ",people.surname," ",people.age)

// let lesson = 'JS';
// let day = 'Pazartesi';
// document.writeln(lesson+' dersleri ' + day + ' günü başladı.')


//Backtik
// document.writeln(`${lesson} dersleri ${day} günü başladı.`)

// let firstName = prompt('Adınızı giriniz: ')
// let lastName = prompt('Soyadınızı giriniz: ')
// let job = prompt('Mesleğinizi giriniz: ')
// let age = prompt('Yaşınızı giriniz: ')

// alert(`İsim : ${firstName} Soyisim: ${lastName} Yaş:  ${age} Meslek:  ${job}`)


// Number
// String ile de dönüştürülebilir.

// let number1 = '10';
// let number2 = '15';
// let totalNumber = parseInt(number1)+parseInt(number2);
// document.writeln(totalNumber)

// let x 
// console.log(typeof x) //Undefined



// Temel aritmatik operatörler

let x = 45;
let y = 5;

document.writeln(x*y)
document.writeln(x+y)
document.writeln(x/y)
document.writeln(x-y)
document.writeln(x%y)

let c =10;
let d = '10';

console.log(c==d)//Sadece karakter kontrolü yapar.
console.log(c===d)//Veri türünü de kontrol eder.
