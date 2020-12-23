require('dotenv/config')
const axios = require('axios')

const msg = [
  'Imagem número 1 acesse o link: https://ibb.co/cL7VFX0',
  'Imagem número 2 acesse o link: https://ibb.co/FH275hG',
]

async function sms(msg) {
  const sms = await axios({
    url: 'https://api2.totalvoice.com.br/sms',
    method: 'post',
    headers: {
      'Access-Token': process.env.TOKEN,
    },
    data: {
      numero_destino: process.env.NUMERO,
      mensagem: msg,
    },
  })
  console.log(sms.data)
}

for (let m of msg) {
  // console.log(m)
  sms(m)
}
