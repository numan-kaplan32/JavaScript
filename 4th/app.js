
// while(true)
// {
//     let name ='Numan'
//     let password ='123'
//  name1 = prompt('adınız')
//  password1 = prompt('şifreniz')
// if(name1 == name && password1 == password)
// {
// alert('Bilgileriniz doğru.')
// break
// }
// else{
//     alert('Bilgileriniz yanlış.')
// }
// }





//---------------------------------------------------------------------


// function elementClick()
// {
//     alert('Hi!')
// }

function login()
{
    while(true)
    {
        let name = prompt('kullanıcı adınız.')
        let password = prompt('kullanıcı şifreniz.')
        if(name == 'Numan' && password == '1111')
        {
            alert(name + ' hoşgeldin.')
            break;
        }
        else
        {
            alert(' Error.')
        break;
        }
    }
}

//---------------------------------------------------------------------


let signin = function()
{
     let user = prompt('Kullanıcı adı :')
     let pass = prompt('Kullanıcı şifresi :')
     alert(user + ' hoş geldin')

}

//---------------------------------------------------------------------

let basket = () => {
    window.location.href('sepet.html')
}