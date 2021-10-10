FROM node:14-alpine

RUN mkdir /app
WORKDIR /app

COPY ./backend/package.json /app

RUN npm install

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh
