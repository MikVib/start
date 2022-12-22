const form = document.querySelector('.modalContent')


const bot = {
    TOKEN:'5809890640:AAGUX0mfk9eACxQFZqfvqtCkdB9pjTx4x2s',
    chatID:'-895241811'
}


form.addEventListener('submit',(e)=>{
e.preventDefault()  
console.log('wor')
const message = document.querySelector('#inputMessage')
const number = document.querySelector('#inputNumber')


if(message.value.length>1 && number.value.length>5){
    const sendTelegram = `Имя: ${message.value} и Телефон: ${number.value}`
    console.log(sendTelegram)
    fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${sendTelegram}`,
       {method:'GET'
    })
    .then(response=>{
        alert('Message sent Success')
    },error => {
        alert('Message not sent')
    })
}else{
    alert('nedostatochno simvolov')
}

})