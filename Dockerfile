FROM node:18
LABEL authors="kim-uijin"
RUN mkdir -p /var/app
WORKDIR /var/app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD [ "node", "dist/main.js" ]
ENTRYPOINT ["top", "-b"]