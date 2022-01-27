FROM node:16

WORKDIR /usr/src/app

#COPY ./ ./usr/src/app
COPY package-lock.json /usr/src/app
COPY package.json /usr/src/app
RUN npm install

WORKDIR /usr/src/app
ENTRYPOINT ["npm", "start"]