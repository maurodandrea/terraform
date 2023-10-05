FROM strapi/base

# Let WatchTower know to ignore this container for checking
LABEL com.centurylinklabs.watchtower.enable="false"

WORKDIR /app

COPY ./package*.json ./

FROM alpine:3.17

RUN npm i

COPY . .

ENV NODE_ENV production

RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]