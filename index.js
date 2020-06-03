const axios = require('axios');
const Discord = require('discord.js');
const client = new Discord.Client();

const getEuro = async () => {
    let response = await axios.get('https://economia.awesomeapi.com.br/json/all/EUR-BRL')
    return response.data
}

client.on('message', msg => {
  if (msg.content === '!euro') {
    try {
        getEuro().then(data => {
            const mensagens = ['O choro é livre', 'Deus nos acuda', '#forabolsonaro', 'Baixa logo, nunca te pedi nada, pfv']
            msg.channel.send(`**${mensagens[Math.floor(Math.random() * mensagens.length)]}**\n*Compra:* R$ ${data.EUR.bid}\n*Venda:* R$ ${data.EUR.ask}\n*Variação:* ${data.EUR.varBid}\n*% da Variação:* ${data.EUR.varBid}%\n*Máximo:* R$ ${data.EUR.high}\n*Mínimo:* R$ ${data.EUR.low}\n`)
        });
    } catch (err) {
        console.log(err)
        msg.channel.send(`Não consegui puxar a informação no momento :()`)
    }
  }
});

client.login('NzE3NzM4NDc5NzE4NzYwNDk4.Xte38g.lC56luhtW-ZEucDbwYAaSjV1Qg4');