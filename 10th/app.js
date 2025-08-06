let darkBtn = document.getElementById('dark');
let bodyObject = document.getElementById('body');
let text = document.getElementById('loremImpsum');
let boxYellow = document.getElementById('box');

darkBtn.addEventListener('click',function(){

if(bodyObject.style.backgroundColor == 'gray')
{
    document.body.style.backgroundColor = 'white';
    darkBtn.innerText = '🌛';
    darkBtn.style.backgroundColor = 'gray';
    darkBtn.style.color = 'white';
    text.style.color = 'black';

}
else{
    document.body.style.backgroundColor = 'gray';
    darkBtn.innerText = '🌞';
    darkBtn.style.backgroundColor = 'white';
    darkBtn.style.color = 'black';
    text.style.color = 'white';
}
});

boxYellow.addEventListener('mouseover',function(){
    boxYellow.style.backgroundColor = 'darkBlue';
    boxYellow.style.color = 'white';
    boxYellow.innerText ='Mavi Kutu';

});
boxYellow.addEventListener('mouseout',function(){
   boxYellow.style.backgroundColor = 'yellow';
    boxYellow.style.color = 'black';
        boxYellow.innerText ='Sarı Kutu';

});
let product = {
    productName:'Pantolon',
    color : 'Mavi',
    size:'S - M - L',
    price: 2000,
    image:'panto.jpeg'

}
let buttonCategory = document.getElementById('category');
let cardCategory = document.getElementById('productCard');

buttonCategory.addEventListener('click',function(){
    cardCategory.innerHTML =`
      <div class="product-card">
        <img src="${product.image}" alt="Ürün Resmi">
        <div class="product-name">Ürün Adı: ${product.productName}</div>
        <div class="product-price">Fiyat: ${product.price} ₺</div>
        <div class="product-info">Renk: ${product.color}</div>
        <div class="product-info">Beden: ${product.size}</div>
      </div>
    `;
})
