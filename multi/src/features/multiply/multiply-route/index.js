const multiplyRoute = (req, reply) => {
    console.log(req.body);

    if(req.body.input.num1 === 5 || req.body.input.num2 === 5){
        const message = "we dont like num 5";
        const extension = {
            path: "$.input.num1",
            code: 23
        }
        reply.status(418).send({
            message,
            extension
        });
    } 
    const result = req.body.input.num1 * req.body.input.num2;
    reply.send({result});
}

module.exports = multiplyRoute;