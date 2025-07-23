//  let wearF = [' Etek ',' Topuklu ',' Bluz ']
//  let wearM = [' Pantolon ',' Gömlek ',' Kundura ']
//  let wearK = [' Zıbın ',' Bez ',' Panduf ']

 

//  //Concat metodu loops birleştirir.


 
//  let wearAll = wearF.concat(wearM,wearK)

//  document.writeln(wearAll)
 //---------------------------------------------------------------

 //indexOf metodu bir dizi  içinde istenen değerin olup olmadığını kontrol eder.Olumsuz cevap -1 dir,Olumlu index numarasıdır.
 //include aynıdır cevap true false  dur.
 
 
//  let guess = ['Ali','Veli','Ali']
//  document.writeln(guess.indexOf('Ali'))//Baştan aramaya başlar.
//  document.writeln(guess.lastIndexOf('Ali'))//Sondan aramaya başlar.

//---------------------------------------------------------------
    let lessons = ['PHP','Phyton','C#']

function findLesson()
{
    let find  = prompt('Ders ara')
    let indexNo = lessons.indexOf(find)
    if(indexNo == 0)
    {
        alert('Aradığınız ders açılıyor')
        window.location.href='https://www.w3schools.com/php/default.asp'
    }
else if(indexNo == 1)
    {
        alert('Aradığınız ders açılıyor')
        window.location.href='https://www.w3schools.com/python/default.asp'
    } else if(indexNo == 2)
    {
        alert('Aradığınız ders açılıyor')
        window.location.href='https://www.w3schools.com/cs/index.php'
    }
    else{
        window.location.href='error.html'
        alert('404 :(')
    }
}
/* 

push -Dizinin içine sondan ekleme yapar.-
unshift -Dizinin içine ilk eleman olacak şekilde deper ekler.-

pop -Dizinin içinde ki bir elemanı siler.Sondan siler.-
shift -Dizide ki ilk elemanı siler.-


*/
let res = () =>{
    let list = []
    while(true)
    {
        let add = prompt('Kayıt>1 Sil>2 Lisele<3')
        if(add == 1)
        {
            let name  = prompt('Eklenecek değeri gir')
            list.push(name)
        }
        else if (add ==2)
        {
            list.shift()
            alert('Silme işlemi başaılı')
        }
        else if (add == 3)
        {
            console.log(list)
        }
        else if(add == 'q'||add =='Q')
        {
            break;
        }
        else{
            alert('Düzgün bir rakam gir!!!')
        }
    }
}