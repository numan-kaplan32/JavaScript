/* replace() metodu, bir string içinde geçen belirli bir karakteri veya alt 
 stringi başka bir karakter veya string ile değiştirir.
 Söz dizimi: string.replace(eski, yeni)
 'eski' parametresi bir string ya da RegExp (düzenli ifade) olabilir.
 Sadece ilk eşleşmeyi değiştirir. Tüm eşleşmeleri değiştirmek için RegExp ile global (g) bayrağı kullanılır.*/
// function update()
// {let metin = "Merhaba dünya, dünya çok güzel";
//     let newWord = prompt('güncelleyin')
//     let isTrue = confirm('Onaylıyor musun?');
//     if(isTrue == true)
//         {
//             let yeniMetin = metin.replace(metin, newWord); // Sadece ilk 'dünya' kelimesini değiştirir
//             metin = yeniMetin;
//             console.log(metin)
    
//     }
// else
// {
//     console.log(metin)
// }
// }
// Tüm 'dünya' kelimelerini değiştirmek için:
// let yeniMetin2 = metin.replace(/dünya/g, "evren");

//---------------------------------------------------------------
// function Get()
// {
//     let cars = ['BMW','SEAT','AUDI','FERRARI'];
//     let getCar = parseInt(prompt('bir araba iste')) - 1;
//     if(getCar >= 0)
//     {
//         let getUpdate = prompt('yeni ARABA gir')
//         let isTrue = confirm('Onaylıyor musun?')
//         if(isTrue == true)
//         {
//         let update = getUpdate;
//         document.writeln(update)
//         }
//     }

//     document.writeln(cars);
// }

//---------------------------------------------------------------

// function getL()
// {
//     let L= ['JS','C#','PHP']
// for(let i = 0 ; i< L.length; i++)
// {

//      document.writeln(L[i])

// }
// }

//---------------------------------------------------------------
let L= ['JS','C#','PHP'];
for(i of L)
{
    document.writeln(`<br/><button class="btn-t" href= "">${i}</button><br/>`)
}
