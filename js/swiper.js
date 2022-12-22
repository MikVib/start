const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    // centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const data = [
    {
        name:'burgers',
        img:'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg'
    },
    {
        name:'pizzas',
        img:'https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg'
    },
    {
        name:'drinks',
        img:'https://c4.wallpaperflare.com/wallpaper/97/512/27/a-glass-of-beer-wallpaper-preview.jpg'
    },
    {
        name:'COCKTAILS',
        img:'https://www.tastingtable.com/img/gallery/11-cocktails-to-try-if-you-like-drinking-gin/l-intro-1659025591.jpg'
    }
  ]


  const swiperFunc = (dataFood) =>{
        const sliderWrap = document.querySelector('.swiper-wrapper')
        dataFood.forEach(el=>{
            const slide = document.createElement('div')
            const text = document.createElement('p')
            slide.className='swiper-slide'

            text.textContent=el.name
            slide.style.backgroundImage=`url('${el.img}')`

            slide.append(text)
            sliderWrap.append(slide)


        })
  }
  swiperFunc(data)
