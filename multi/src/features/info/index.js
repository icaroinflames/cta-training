const whatDoWeDoRoute = require("./what-we-do-route");
const whoAreWeRoute = require("./who-are-we.route");
const namesList = require('./names-list-route');

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
      },{
        method: 'POST',
        url: '/names',
        handler: namesList
      }
    ]
}

module.exports = infoFeature;