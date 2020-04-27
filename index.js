require('dotenv/config')
const axios = require('axios')

async function sms() {
  const sms = await axios({
    url: 'https://api2.totalvoice.com.br/sms',
    method: 'post',
    headers: {
      'Access-Token': process.env.TOKEN,
    },
    data: {
      numero_destino: process.env.NUMERO,
      mensagem: 'Teste de SMS',
    },
  })
  console.log(sms.data)
}

sms()
