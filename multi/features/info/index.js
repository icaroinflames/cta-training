const whatDoWeDoRoute = require("./what-we-do-route");
const whoAreWeRoute = require("./who-are-we.route");

const infoFeature = {
    hook: "$FASTIFY_ROUTE",
    handler: [{
        method: 'GET',
        url: '/what',
        handler: whatDoWeDoRoute
      },{
        method: 'GET',
        url: '/who',
        handler: whoAreWeRoute
      }]
}

module.exports = infoFeature;