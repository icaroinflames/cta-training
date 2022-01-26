const multiplySchema = {
    body: {
        type: 'object',
        required: ['input'],
        properties: {
            input:{
                type: 'object',
                required: ['num1', 'num2'],
                properties: {
                    num1: {type: 'number'},
                    num2: {type: 'number'}
                }
            }
        }
    },
    response: {
        200:{
            type: 'object',
            required: ['result'],
            properties: {
                result: {type:'number'}
            }
        }
        

    }
}

module.exports = multiplySchema;