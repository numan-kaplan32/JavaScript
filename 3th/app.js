function handleClick()
{let num = prompt('sayı girin:');
 
if(num >= 0)
{
if(num > 17 && num < 66)
{
alert('Ehliyet alabilirsiniz')
}
else if(num <= 17)
{
alert('Ehliyet alamazsınız')
}
else    
{
 alert('Çok yaşlısınız.')
}
}
else
{
    alert('Negatif sayı kullanmayınız veya sayı giriniz.')
}}

function Weather()
{
    //Burada random sayı ürettim. Index numarasına göre aldı.
    let s = ["kış", "yaz","sonbahar","ilkbahar" ]
    let random = Math.floor(Math.random() * s.length);
     
    alert('Mevsim ' + s[random])
}

function Login()
{
    //Benim çakma Data Base.
    const name = "Numan Kaplan";
    const pass = "1111";

    let nameUser = prompt('Kullanıcı adımızı giriniz: ')
    let password = prompt('Kullanıcı şifrenizi giriniz: ')
    if(name == nameUser && pass == password)
    {
        alert('Hoşgeldiniz ' + nameUser)
    }
    else
    {
        alert('Şifre veya isim hatalı tekrar deneyiniz.')
    }


}
function number()
{
for(var i = 1; i<=5; i++)
{
document.writeln(i + ' - Numan <br>')
}
}
