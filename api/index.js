const axios = require('axios');

(async function () {
    const sms = await axios({
        url: 'https://api2.totalvoice.com.br/sms',
        method: 'post',
        headers: {
            'Access-Token': ec390e02e665f7db2bbdde5c23cf58cc
        },
        data:{
            'numero_destino': 35999957976,
            'mensagem': 'Primeira mensagem'
        }
    });
    console.log(sms.data);
    
})();
