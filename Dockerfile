FROM node:16

WORKDIR /node-server

COPY ./package.json /node-server/

RUN npm i

COPY ./server /node-server/server


CMD [ "node", "./server/index.js" ]

