FROM node:20

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY ./libs ./libs

RUN yarn install

COPY ./ ./

RUN yarn build
CMD ["yarn", "start"]

EXPOSE 4000

