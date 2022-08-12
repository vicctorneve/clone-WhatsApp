const chatUsuario = document.querySelector('.chat-usuario');
const chatBot = document.querySelector('.chat-bot');
const inputMsg = document.querySelector('#input-mensagem');
const btnSendMsg = document.querySelector('#send-msg');

const createP = () => {
   const p = document.createElement('p');
   return p
}

const sendMsg = (mensagem) =>{
   const p = createP()
   p.innerHTML = mensagem;
   chatUsuario.appendChild(p)
}
btnSendMsg.addEventListener('click', () =>{
   if (!inputMsg.value) return
   sendMsg(inputMsg.value)
   inputMsg.value = ''
})


