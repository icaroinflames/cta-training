const { runHookApp } = require("@forrestjs/hooks");
const fastify = require("@forrestjs/service-fastify");
const fastifyHealthz = require("@forrestjs/service-fastify-healthz");

const homePageRoute = require("./features/home-page");
const infoFeature = require("./features/info");
const multiplyRoute = require("./features/multiply");

runHookApp({
  trace: "compact",
  settings: {
      fastify: {
          port: 4000
      }
  },
  services: [
      fastify, 
      fastifyHealthz,
    ],
  features: [
      homePageRoute,
      infoFeature,
      multiplyRoute
  ]
}).catch(console.error);