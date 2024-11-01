FROM node:20

RUN mkdir -p /var/app

WORKDIR /var/app

COPY package.json yarn.lock ./
COPY ./libs ./libs

RUN yarn install

COPY ./ ./

RUN yarn build
CMD ["yarn", "start:dev"]

EXPOSE 4000

