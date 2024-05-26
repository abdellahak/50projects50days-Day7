let product1 = document.querySelector('.product1');
let product2 = document.querySelector('.product2');



product1.addEventListener('mouseover', function(){
    product1.classList.remove('productminimalize');
    product1.classList.add('producthover');
    product2.classList.remove('producthover');
    product2.classList.add('productminimalize');
})
product1.addEventListener('mouseleave', function(){
    product1.className="product product1";
    product2.className="product product2";
})
product2.addEventListener('mouseover', function(){
    product2.classList.remove('producthover');
    product2.classList.add('producthover');
    product1.classList.remove('producthover');
    product1.classList.add('productminimalize');
})
product2.addEventListener('mouseleave', function(){
    product1.className="product product1";
    product2.className="product product2";
})