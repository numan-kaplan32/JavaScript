/* DOM

A) Get Element By Yönetimi

1. document.getElementById
2. document.getElementsClassName
3. document.getElementsTagName('HTML etiketinin adı')

B)querySelector yönetimi

1. document.querySelector('#idName')
2. document.querySelector('.className')
3. document.querySelector('tagName')


*/
let title = document.getElementById('title')
let change = ()=> {
    let num = 0;
 
for (let i = num; i < 100; i++) {
  if(i%2 == 0)
  {
   title.innerText = 'Bu başlık JS ile yazıldı.'
  }
  else if (i%2 != 0)
  {
title.textContent = 'Bu başlık textContent ile yazıldı.'
  }
 i++
}

}
let button = document.querySelector('.btn')
let button2 = document.querySelector('#btn')
let color = function(){
    button.style.backgroundColor = 'red'
    button2.style.backgroundColor='yellow'
    let address = document.URL
    
}
let whatsApp = document.querySelector('#wp')
whatsApp.innerHTML = `<a href = "https://www.apple.com/tr/?afid=p240%7Cgo~cmp-603307568~adg-28586581366~ad-733719190693_kwd-10778630~dev-c~ext-~prd-~mca-~nt-search&cid=aos-tr-kwgo-brand--'" target="_blank">Click</a>`

let pageName = document.title
let page = document.querySelector('#title')
page.innerHTML = `<a href = "https://www.apple.com/tr/?afid=p240%7Cgo~cmp-603307568~adg-28586581366~ad-733719190693_kwd-10778630~dev-c~ext-~prd-~mca-~nt-search&cid=aos-tr-kwgo-brand--'" target="_blank">Click</a>`
 