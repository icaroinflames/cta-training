const { runHookApp } = require("@forrestjs/hooks");
const envalid = require('envalid');

const fastify = require("@forrestjs/service-fastify");
const fastifyHealthz = require("@forrestjs/service-fastify-healthz");
const apollo = require("@forrestjs/service-apollo")


const homePageRoute = require("./features/home-page");
const infoFeature = require("./features/info");
const multiplyRoute = require("./features/multiply");

const validatedEnv = envalid.cleanEnv(process.env, {
  NODE_ENV: envalid.str({
    choices: ['development', 'test', 'production']
  }),
  HASURA_ENDPOINT: envalid.str({
    desc: 'Hasura endpoint full URI'
  }),
  FASTIFY_PORT: envalid.num({
    desc: 'local port where fastify is running'
  })
});

runHookApp({
  trace: "compact",
  settings: {
      fastify: {
          port: validatedEnv.FASTIFY_PORT
      },
      apollo: {
        client: {
          config:{
            uri: validatedEnv.HASURA_ENDPOINT,
          }
        }
      }
  },
  services: [
      apollo,
      fastify, 
      fastifyHealthz,
    ],
  features: [
      homePageRoute,
      infoFeature,
      multiplyRoute
  ]
}).catch(console.error);