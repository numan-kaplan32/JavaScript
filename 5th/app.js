

// function collection()
// {
//     let num1 = prompt('sayı biri giriniz')
//     let num2 = prompt('sayı ikiyi giriniz')
  
//     if(num1 == false)
//     {
//         document.writeln('1. değer boş belirlenemedi.')
//     }
//     else if(num2 == false)
//     {
//         document.writeln('2. değer boş belirlenemedi.')
        
//     }
//     return parseInt(num1)+ parseInt(num2);
// }

// function callBack()
// {
// document.writeln(collection())
// }

//---------------------------------------------------------------

//Lenght

// let isim = 'Numan'
//console.log(isim.length)
// console.log(isim.charAt(2))

//---------------------------------------------------------------


// function Login()
// {
//     let pass = prompt('şifreniz')
// let passLength = pass.length;
// if(passLength != 0)
// {if(passLength >= 8 && passLength <17)
// {
//     alert('Şifrebiz güçlü.')
// }
// else
// {
//     alert('Şifrebiz güçsüz.')
// }}
// else{
//     alert('Değer giriniz!!!')
// }
// }

//---------------------------------------------------------------

// let isim = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequuntur illo aperiam voluptatibus. Pariatur, laboriosam vel! Perferendis, accusamus repudiandae. Blanditiis tenetur aspernatur quibusdam non itaque, temporibus at nemo voluptatum delectus numquam, nihil, ratione sequi beatae cumque enim fugiat molestiae. Numquam vel dicta enim, nulla alias tempore labore? Numquam nisi esse, earum dicta magni fugiat illo assumenda pariatur necessitatibus est adipisci cupiditate! Corrupti, minima voluptatibus. Nesciunt molestias reiciendis aut consectetur iste repellendus amet quaerat error veniam obcaecati accusantium porro eos cumque dolor doloremque, expedita dolores ipsum et esse beatae minima vel similique magni? Officia voluptatibus odit inventore! Nulla debitis laboriosam quisquam!'
 

// // İlk 2 harfi al
// // console.log(isim.substr(0, 2)) // "Nu"

// // // 2. indexten itibaren 3 harf al
// // console.log(isim.substr(2, 3)) // "man"

// // // Son 2 harfi al
// // console.log(isim.substr(isim.length - 2)) // "an"

// // // İlk 2 harfi al
// // console.log(isim.substr(0, 2)) // "Nu"

// // // 2. indexten itibaren 3 harf al
// // console.log(isim.substr(2, 3)) // "man"

// // // Son 2 harfi al
// // console.log(isim.substr(isim.length - 2)) // "an"


// document.writeln(isim.slice(0, 70)) // "Nu"

//---------------------------------------------------------------

function cardNo() {
    let cardInput = prompt('Kart no girin') 
    let card = parseInt(cardInput)

    if (cardInput.length === 16 && !isNaN(card)) {
        alert('**** **** **** ' + cardInput.slice(12,17) + ' kart doğru')
    } else {
        alert('kart yanlış')
    }

 
}
