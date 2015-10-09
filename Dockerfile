FROM node:0.12.7

WORKDIR /app

ADD . .

RUN npm install

EXPOSE 3000

CMD npm start
