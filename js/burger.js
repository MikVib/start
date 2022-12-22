const burgerFunc = () =>{

    const burger = document.querySelector('.mobile-btn')
    const nav = document.querySelector('.nav')
    const navItems = document.querySelectorAll('.nav__item')
    // console.log(navItems);

    for(let key of navItems){
        key.addEventListener('click',()=>{
           nav.classList.remove('show-nav')
           burger.classList.remove('show-mobile-btn')
        })
    }

    burger.addEventListener('click',()=>{
        burger.classList.toggle('show-mobile-btn')
        nav.classList.toggle('show-nav')
    })


}

burgerFunc()


// for(let ... of ...)
// classList.remove
