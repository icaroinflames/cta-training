const axios = require('axios');

const {GET_PUBLIC_USERS }= require('../queries');

const whoAreWeRoute = async (req, reply) => {
    const targetUrl = req.getConfig('apollo.client.config.uri');
    const res = await axios.post(targetUrl,
    {
        query: GET_PUBLIC_USERS
    });

    const names = res.data.data.users
        .map(user => user.name)
        .join(', ');

    reply.send(`we are cool ${names}`);
};

module.exports = whoAreWeRoute;