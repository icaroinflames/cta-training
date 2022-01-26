const multiplyRoute = (req, reply) => {
    console.log(req.body);

    const result = req.body.input.num1 * req.body.input.num2;
    reply.send({result});
}

module.exports = multiplyRoute;