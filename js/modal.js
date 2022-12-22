
    const button = document.querySelector('.cover__button')
    const modalCloseButton = document.querySelector('.modalCloseButton')
    const modal = document.querySelector('.modal')
    const backdrop = document.querySelector('.backdrop')
    const content = document.querySelector('.modalContent')
    const modalBtn = document.querySelector('.modalBtn')
    const thankYou = document.querySelector('.thankYou')

    
    let handleTimeOut;
    const bot = {
        TOKEN:'5376286571:AAHPuSMXYrPTWsdwF9bDlrxs7LwdAT6tFSU',
        chatID:'-713454776'
    }

    button.addEventListener('click',()=>{
        modal.classList.add('modalActive')
        backdrop.classList.add('backdropActive')
        // document.body.style.overflow='hidden'
        thankYou.innerHTML=''
        content.classList.remove('hideModalContent')
    })


    const removeClasses = () =>{
        // document.body.style.overflow='unset'
        clearTimeout(handleTimeOut)
        modal.classList.remove('modalActive')
        backdrop.classList.remove('backdropActive')
    }

    const poppingMessage = (text) =>{
        content.classList.add('hideModalContent')
        thankYou.innerHTML = text
         handleTimeOut = setTimeout(removeClasses,2000)
    }

    content.addEventListener('submit',(e)=>{
        e.preventDefault()  
        console.log('wor')
        const message = document.querySelector('#inputMessage')
        const number = document.querySelector('#inputNumber')
        
        
        if(message.value.length>1 && number.value.length>5 && number.value.trim() && message.value.trim()){
            const sendTelegram = `Имя: ${message.value} и Телефон: ${number.value}`
            console.log(sendTelegram)
            fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${sendTelegram}`,
               {method:'GET'
            })
            .then(response=>{
                console.log(response);
                if(response.ok){
                    poppingMessage(`
                    <h2>THANK YOU</h2>
                    <p>Our operator will answer you</p>
                `)
                }
             
            },error => {
                poppingMessage(`
                <h2>CONNECTION ERROR</h2>
                <p>PLEASE TRY AGAIN</p>
            `)
            })
        }else{
            alert('nedostatochno simvolov')
        }
        
        })

    //     modalBtn.addEventListener('click',()=>{
    //        content.classList.add('hideModalContent')
    //        thankYou.innerHTML = `
    //        <h2>THANK YOU</h2>
    //        <p>Our operator will answer you</p>
    //    `
    //         handleTimeOut = setTimeout(removeClasses,2000)
    //     })
    

    modalCloseButton.addEventListener('click', removeClasses)
    backdrop.addEventListener('click',removeClasses)
    modal.addEventListener('click',(e)=>{
        e.stopPropagation()
    })


    
   












// const timer = () =>{
//     alert('timer has started');
// }
// setTimeout(timer,4000)