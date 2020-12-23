require('dotenv/config')
const axios = require('axios')



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
